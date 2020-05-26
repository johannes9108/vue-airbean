<template>
  <div class="profileView">
    <Header />profile
  </div>
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
.profileView {
  background-color: #2f2926;
  display: grid;
  grid-template-rows: 14vh minmax(86vh, auto);
}
</style>