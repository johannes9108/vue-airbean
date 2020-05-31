<template>
  <div id="app">
    <router-view />
    <HamburgerMenu />

    <!--Lägga NAV här eventuellt-->
  </div>
</template>
<script>
import HamburgerMenu from "./components/HamburgerMenu";
export default {
  components: {
    HamburgerMenu
  },
  created() {
    this.$store.dispatch("getAllCoffees");
  }
};
</script>

<style lang="scss">
$font-headers: "PT Serif";
$font-normal: "Work Sans";
* {
  font-family: $font-normal;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $font-headers;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #38846d;
  height: 100vh;
}
.baseButton {
  border: transparent;
  padding: 1rem;
  border-radius: 25px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
