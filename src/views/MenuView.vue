<template>
  <div class="menuView">
    <Header />
    <section class="erikFixingThis">menu</section>
    <Footer />
    <router-view />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  data: () => ({}),
  components: {
    Header,
    Footer
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.menuView {
  position: relative;
  background-color: #f3e4e1;
  display: grid;
  grid-template-rows: 14vh minmax(77vh, auto) 9vh;
}
</style>