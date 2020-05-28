import Vue from "vue";
import Vuex from "vuex";
import CoffeeData from "../assets/data/menu.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentView: "",
    coffeeList: CoffeeData.menu,

    shoppingCart: [],
    shoppingCartSum: 0,

    showMenu: false,
    showProfile: false
  },
  mutations: {
    changeView(state, view) {
      state.currentView = view;
    },
    toggleMenu(state) {
      state.showMenu = state.showMenu ? false : true;
    },
    showProfile(state) {
      state.showProfile = !state.showProfile
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
  actions: {},
  modules: {},
});
