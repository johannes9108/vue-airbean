<template>
  <div class="cartItem">
    <div class="names">
      <h2>{{name}}</h2>
      <p>{{getItemAmountTimesPrice}} kr</p>
    </div>

    <div class="buttons">
      <button v-on:click="incrementItemAmount">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.197433 4.5008C-0.0658111 4.23776 -0.0658111 3.80637 0.197433 3.54333L3.55643 0.19743C3.81266 -0.0585978 4.22683 -0.0656125 4.49007 0.176386L7.79993 3.47318C7.93331 3.60646 8 3.77831 8 3.95367C8 4.12553 7.93331 4.30089 7.80344 4.43065C7.5402 4.6937 7.11199 4.6972 6.84523 4.43065L4.00219 1.63189L1.15564 4.50431C0.892398 4.76735 0.464188 4.76735 0.197433 4.5008Z"
            fill="#2F2926"
          />
        </svg>
      </button>
      <p>{{amount}}</p>
      <button v-on:click="decrementItemAmount">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.80257 0.499201C8.06581 0.762243 8.06581 1.19363 7.80257 1.45667L4.44357 4.80257C4.18734 5.0586 3.77317 5.06561 3.50993 4.82361L0.200065 1.52682C0.0666879 1.39354 3.30565e-07 1.22169 3.45907e-07 1.04633C3.60942e-07 0.874473 0.0666889 0.699112 0.196556 0.569345C0.459801 0.306303 0.888011 0.302795 1.15477 0.569345L3.99781 3.36811L6.84436 0.495693C7.1076 0.232651 7.53581 0.232651 7.80257 0.499201Z"
            fill="#2F2926"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    price: Number,
    id: Number,
    amount: Number
  },

  data: () => ({}),

  methods: {
    incrementItemAmount() {
      this.$store.commit("incrementItemAmount", {
        id: this.id,
        price: this.price
      });
    },

    decrementItemAmount() {
      this.$store.commit("decrementItemAmount", {
        id: this.id,
        price: this.price
      });
    }
  },

  computed: {
    getItemAmountTimesPrice() {
      let obj = this.$store.state.shoppingCart.filter(
        item => item.id == this.id
      )[0];
      return this.price * obj.amount;
    }
  }
};
</script>

<style lang="scss" scoped>
.cartItem {
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.names {
  text-align: left;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;
}
button {
  background-color: transparent;
  border: none;
}
</style>