<template>
  <div class="header">
    <HamburgerMenu />
    <router-link :to="{name: 'Cart'}">Click Me</router-link>
  </div>
</template>
<script>
import HamburgerMenu from "../components/HamburgerMenu";
export default {
  data() {
    return {};
  },
  components: {
    HamburgerMenu
  }
};
</script>
<style lang='scss' scoped>
.header {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;

  //   background-size: cover;
  //   background-image: content-box;
}
</style>