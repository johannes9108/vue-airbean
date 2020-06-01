<template>
  <div class="shoppingCart" id="test">
    <section class="cart">
      <div class="triangle"></div>
      <div class="title">
        <h1>DIN BESTÄLLNING</h1>
      </div>
      <div class="itemContainter">
        <CartListItem
          v-for="item in getShoppingCart"
          v-bind:key="item.id"
          v-bind:id="item.id"
          v-bind:name="getItemFromList(item.id).title"
          v-bind:price="getItemFromList(item.id).price"
          v-bind:amount="getItemFromShoppingCart(item.id).amount"
        />
      </div>

      <section class="orderSection">
        <div class="names">
          <h2>TOTAL</h2>
          <p>inkl moms + drönarleverans</p>
        </div>

        <div class="buttons">
          <h2>{{getShoppingCartSum}} kr</h2>
        </div>
      </section>
      <div class>
        <button class="baseButton cartButton" v-on:click="placeOrder">TAKE MY MONEY!</button>
      </div>
    </section>
  </div>
</template>
<script>
import CartListItem from "../components/CartListItem.vue";

export default {
  data: () => ({
    sumOfPrices: 0
  }),

  components: {
    CartListItem
  },

  methods: {
    getItemFromList(id) {
      let obj = this.$store.state.coffeeList.filter(item => item.id === id)[0];
      return obj;
    },
    getItemFromShoppingCart(id) {
      let obj = this.$store.state.shoppingCart.filter(
        item => item.id === id
      )[0];
      return obj;
    },

    placeOrder() {
      //TODO implement business logic - generate and send ordernumber
      if (this.getShoppingCartSum == 0) {
        console.log("ERROR. No items in cart");
      } else {
        this.$store.dispatch("placeOrder", {
          order: {
            orderNumber: this.generateRandomOrderNumber(),
            amount: this.getShoppingCartSum,
            date: new Date()
          },
          customerId: this.$store.state.currentCustomer.id
        });
      }
    },
    generateRandomOrderNumber() {
      let orderNumber = "#";
      let alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (let i = 0; i < 7; i++) {
        orderNumber +=
          alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
      }
      return orderNumber;
    },

    generateRandomETA() {
      return Math.floor(Math.random() * 20);
    }
  },

  computed: {
    getCoffeeList() {
      return this.$store.state.coffeeList;
    },
    getShoppingCart() {
      return this.$store.state.shoppingCart;
    },

    getShoppingCartSum() {
      return this.$store.state.shoppingCartSum;
    }
  }
};
</script>
<style lang='scss' scoped>
.title {
  h1 {
    padding: 0;
    margin: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  // background: red;
}
.itemContainter {
  // background: blue;
}
.orderSection {
  // background: green;
}
button {
  margin-top: 2rem;
}
.shoppingCart {
  // background-color: red;
  //   background-color: rgba(0, 0, 0, 0.8);

  width: 100%;
  height: 100%;
  padding: 1rem;
}
.cart {
  position: relative;
  display: grid;
  grid-template-rows: 15% 60% 10% 15%;

  border-radius: 5px;
  border: 1px solid transparent;
  background-color: white;
  height: 100%;
}
.cartButton {
  color: white;
  background-color: #2f2926;
}
h1 {
  margin-bottom: 2rem;
}

.orderSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;

  p {
    font-size: 0.8rem;
  }
}

.names {
  text-align: left;
}
.triangle {
  width: 0;
  height: 0;
  // background-color: red;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid white;
  position: absolute;
  right: 12px;
  top: -16px;
}
</style>