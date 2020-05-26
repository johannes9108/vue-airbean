<template>
  <div class="headerComponent" :class="{overLay: overLay}">
    <HamburgerMenu v-if="!overLay" />
    <router-link v-if="(this.$route.path == '/menu') " :to="{name: 'Cart'}">Shopping Cart</router-link>
    <router-link v-if="overLay" :to="{name: 'Menu'}">Shopping Cart</router-link>
  </div>
</template>
<script>
import HamburgerMenu from "../components/HamburgerMenu";
export default {
  props: {
    overLay: Boolean
  },
  data() {
    return {};
  },
  components: {
    HamburgerMenu
  }
};
</script>
<style lang='scss' scoped>
.headerComponent {
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
.overLay {
  justify-content: flex-end;
  background: unset;
}
</style>