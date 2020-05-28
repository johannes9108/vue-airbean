<template>
  <div class="headerComponent" :class="{overLay: overLay}">
    <!-- <HamburgerMenu v-if="!overLay" /> -->
    <div class="hamburgerMenu" @click="toggleMenu()" v-if="!overLay">
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

    <div class="lockMenu">
      <router-link v-if="(this.$route.path == '/menu') " :to="{name: 'Cart'}">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <path d="M0 0h48v48H0z" fill="none" />
          <path
            d="M36 16h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V20c0-2.21-1.79-4-4-4zM24 34c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.2-18H17.8v-4c0-3.42 2.78-6.2 6.2-6.2 3.42 0 6.2 2.78 6.2 6.2v4z"
          />
        </svg>
      </router-link>
    </div>
    <div class="lockMenu">
      <router-link v-if="overLay" :to="{name: 'Menu'}">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <path d="M0 0h48v48H0z" fill="none" />
          <path
            d="M36 16h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V20c0-2.21-1.79-4-4-4zM24 34c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.2-18H17.8v-4c0-3.42 2.78-6.2 6.2-6.2 3.42 0 6.2 2.78 6.2 6.2v4z"
          />
        </svg>
      </router-link>
    </div>
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
.lockMenu {
}
</style>