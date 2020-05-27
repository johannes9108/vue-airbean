import Vue from "vue";
import Vuex from "vuex";
import CoffeeData from '../assets/data/menu.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentView: "",
    coffeeList: CoffeeData.menu,

    shoppingCart: {}
  },
  mutations: {
    changeView(state, view) {
      state.currentView = view;
    },

    saveItemToShoppingCart(state, id){
      //om id inte finns i shoppingCart, sätt till 1 - annars inkrementera
      state.shoppingCart[id] = (state.shoppingCart[id] || 0) + 1;
      console.log(state.shoppingCart)
    }
  },
  actions: {},
  modules: {},

  getters: {
  },
  
});
