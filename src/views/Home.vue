<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HamburgerMenu/>
  </div>
</template>

<script>
// @ is an alias to /src
import HamburgerMenu from '../components/HamburgerMenu.vue'

export default {
  name: 'Home',
  components: {
    HamburgerMenu
  }
}
</script>
