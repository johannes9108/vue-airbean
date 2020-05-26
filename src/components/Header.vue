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
  background-image: url("../assets/graphics/graphics-header.svg");
}
</style>