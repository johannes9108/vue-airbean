import Vue from "vue";
import Vuex from "vuex";
import CoffeeData from '../assets/data/menu.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentView: "",
    coffeeList: CoffeeData.menu,

    shoppingCart: [],
    shoppingCartSum: 0
  },
  mutations: {
    changeView(state, view) {
      state.currentView = view;
    },

    saveItemToShoppingCart(state, payload){
      //kan snyggas till
      let found = false;
      state.shoppingCart.forEach(element => {
        if(element.id == payload.id){
          element.amount++;
          found = true;
        }
      });

      if(!found){
        state.shoppingCart.push({
          id:payload.id,
          amount: 1,
          price: payload.price
        });
      }
      state.shoppingCartSum += payload.price;
    },

    getItemFromShoppingCartById(state, id){
        return state.coffeeList.filter( (item) => item.id == id); 
    }
  },
  actions: {},
  modules: {},
  
});
