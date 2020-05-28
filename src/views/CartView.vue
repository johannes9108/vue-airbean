<template>
  <div class="cartView">
    <Header :overLay="true" />
    <ShoppingCart />
  </div>
</template>
<script>
import ShoppingCart from "../components/ShoppingCart";
import Header from "../components/Header";
export default {
  data: () => ({}),

  methods: {},
  components: {
    ShoppingCart,
    Header
  },

  computed: {}
};
</script>
<style lang="scss" scoped>
.cartView {
  position: absolute;
  width: 100%;
  height: 100%;
  //   background-color: red;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-rows: 14vh minmax(86vh, auto);
}

.cart {
  background-color: white;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
}
</style>