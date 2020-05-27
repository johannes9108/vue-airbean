<template>
  <div>
    <button class="hamburgerMenu" v-on:click= "toggleMenu">MENU</button>
    <div id="menu" v-if="showMenu == true">
      <router-link to="/menu">
        <h1 class="j">MENY</h1>
      </router-link>
      <router-link to="/about">
        <h1>VÅRT KAFFE</h1>
      </router-link>
      <router-link to="/profile">
        <h1>MIN PROFIL</h1>
      </router-link>
      <router-link to="/status">
        <h1>ORDERSTATUS</h1>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    showMenu: false
  }),

  methods: {
    toggleMenu() {
      this.showMenu = this.showMenu ? false : true;
    }
  }
};
</script>

<style scoped>
#menu {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hamburgerMenu {
  /* position: fixed;
        left: 2rem;
        top: 2rem; */
  z-index: 2;
  transition: all 0.2s;
}

h1 {
  color: white !important;
}


</style>