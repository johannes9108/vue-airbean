<template>
  <div class="headerComponent" :class="{overLay: overLay}">
    <!-- <HamburgerMenu v-if="!overLay" /> -->
    <div class="hamburgerMenu" @click="toggleMenu()">
      <svg
        data-v-61dd7a3d
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <!-- <path data-v-61dd7a3d d="M0 0h24v24H0z" fill="white" /> -->
        <path data-v-61dd7a3d d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>

    <!-- <button class="hamburgerMenu" v-on:click="toggleMenu()">MENU</button> -->
    <router-link v-if="(this.$route.path == '/menu') " :to="{name: 'Cart'}">Shopping Cart</router-link>
    <router-link v-if="overLay" :to="{name: 'Menu'}">Shopping Cart</router-link>
  </div>
</template>
<script>
export default {
  props: {
    overLay: Boolean
  },
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      console.log(this);
      this.$store.commit("toggleMenu");
    }
  },
  components: {
    // HamburgerMenu
  }
};
</script>
<style lang='scss' scoped>
.headerComponent {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: flex-start;
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

.hamburgerMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 100%;
  background-color: white;
}
</style>