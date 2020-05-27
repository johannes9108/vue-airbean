<template>
  <transition appear name="fade">
    <section @click="showMenu()" class="landingView"></section>
  </transition>
</template>
<script>
// import Header from "../components/Header";
export default {
  data: () => ({}),

  methods: {
    showMenu() {
      console.log("Öppna Meny via openMenu == true");
      console.log(this.$store);
      this.$store.commit("toggleMenu");
    }
  },
  components: {
    // Header
  }
};
</script>

<style lang="scss" scoped>
.landingView {
  background-image: url("../assets/graphics/intro-graphic-left.svg"),
    url("../assets/graphics/airbean-landing.svg"),
    url("../assets/graphics/intro-graphic-right.svg");
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: left, center, right;
  background-size: contain, auto, contain;
  height: inherit;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>