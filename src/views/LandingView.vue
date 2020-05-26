<template>
  <section class="landing">
    <Header />
    <img :src="require('@/assets/graphics/airbean-landing.svg')" />
    <img :src="require('@/assets/graphics/graphics-footer.svg')" />
  </section>
</template>
<script>
import Header from "../components/Header";
export default {
  data: () => ({}),

  methods: {},
  components: {
    Header
  }
};
</script>

<style>
</style>