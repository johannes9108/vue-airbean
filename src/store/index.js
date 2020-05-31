import Vue from "vue";
import Vuex from "vuex";
import CoffeeData from "../assets/data/menu.json";
import CoffeDBAPI from "../javascript/api";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentView: "",
    coffeeList: CoffeeData.menu,
    coffeeListAPI: [],
    coffeeListAPIHandle: new CoffeDBAPI("http://localhost:8081/"),
    shoppingCart: [],
    shoppingCartSum: 0,
    loading: false,
    showMenu: false,
    showProfile: false,
    currentCustomer: {},
  },
  mutations: {
    resetShoppingCart(state) {
      state.shoppingCart = [];
      state.shoppingCartSum = 0;
    },
    setCurrentCustomer(state, customer) {
      state.currentCustomer = customer;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    changeView(state, view) {
      state.currentView = view;
    },
    toggleMenu(state) {
      state.showMenu = state.showMenu ? false : true;
    },
    showProfile(state) {
      state.showProfile = !state.showProfile;
    },

    saveItemToShoppingCart(state, payload) {
      //kan snyggas till
      let found = false;
      state.shoppingCart.forEach((element) => {
        if (element.id == payload.id) {
          element.amount++;
          found = true;
        }
      });

      if (!found) {
        state.shoppingCart.push({
          id: payload.id,
          amount: 1,
          price: payload.price,
        });
      }
      state.shoppingCartSum += payload.price;
    },

    getItemFromShoppingCartById(state, id) {
      return state.coffeeList.filter((item) => item.id == id);
    },

    incrementItemAmount(state, payload) {
      let obj = state.shoppingCart.filter((item) => item.id == payload.id)[0];
      obj.amount++;
      state.shoppingCartSum += payload.price;
    },

    decrementItemAmount(state, payload) {
      let obj = state.shoppingCart.filter((item) => item.id == payload.id)[0];
      obj.amount--;
      state.shoppingCartSum -= payload.price;

      if (obj.amount <= 0) {
        state.shoppingCart = state.shoppingCart.filter((e) => e.id != obj.id);
      }
    },
  },
  getters: {
    getTotalAmountOfOrder(state) {
      let sum = 0;
      state.shoppingCart.forEach((item) => {
        sum += item.amount;
      });
      return sum;
    },
  },
  actions: {
    async getAllCoffees(context) {
      context.commit("setLoading", true);
      let response = this.state.coffeeListAPIHandle.getAllCoffees();
      console.log(response);
      Promise.resolve(response)
        .then((value) => {
          this.state.coffeeListAPI = value;
          context.commit("setLoading", false);
        })
        .catch("Couldnt fetch allCoffees");
    },
    async logIn(context, customer) {
      context.commit("setLoading", true);
      let response = this.state.coffeeListAPIHandle.logIn(customer);
      console.log(response);
      Promise.resolve(response)
        .then((value) => {
          context.commit("setCurrentCustomer", value);

          console.log(value);
          localStorage.setItem(
            "loggedIn",
            JSON.stringify(this.state.currentCustomer)
          );
          console.log(localStorage.getItem("loggedIn"));
          context.commit("showProfile");
          context.commit("setLoading", false);
        })
        .catch("Problems logging in");
    },
    async placeOrder(context, order) {
      context.commit("setLoading", true);
      let response = this.state.coffeeListAPIHandle.placeOrder(order);
      console.log(response);
      Promise.resolve(response)
        .then((value) => {
          console.log(value);
          context.commit("setCurrentCustomer", value);
          localStorage.setItem(
            "loggedIn",
            JSON.stringify(this.state.currentCustomer)
          );
          context.commit("resetShoppingCart");
          router.push("status");

          // console.log(value);
          // localStorage.setItem(
          //   "loggedIn",
          //   JSON.stringify(this.state.currentCustomer)
          // );
          // console.log(localStorage.getItem("loggedIn"));
          // context.commit("showProfile");
          // context.commit("setLoading", false);
        })
        .catch("Problems logging in");
    },
  },
  modules: {},
});
