<template>
  <section @click="showMenu()" class="landingView"></section>
</template>
<script>
// import Header from "../components/Header";
export default {
  data: () => ({}),

  methods: {
    showMenu() {
      console.log("Öppna Meny via openMenu == true");
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
</style>