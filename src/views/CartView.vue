<template>
  <div class="cartView">
    <Header :overLay="true" />
    <!-- <section class="somebodyFixingThis">Cart</section> -->
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
  }
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
</style>