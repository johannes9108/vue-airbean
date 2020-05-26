<template>
  <div class="aboutView">
    <Header />
    <section class="edvardFixingThis"></section>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.aboutView {
  background-color: #f3e4e1;
  display: grid;
  grid-template-rows: 14vh minmax(77vh, auto) 9vh;
}
</style>