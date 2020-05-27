<template>
  <transition name="my2-transition" mode="out-in">
    <div id="menu" v-if="this.$store.state.showMenu == true" @click.capture="toggleMenu()">
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
  </transition>
</template>
<script>
export default {
  data: () => ({}),

  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
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
  transform-origin: center;
}

.my-transition-enter-active {
  transition: all 0.5s ease;
}
.my-transition-leave-to {
  /* .fade-leave-active below version 2.1.8 */
  transition: all 0.5s linear;
}
.my-transition-enter, .my-transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* transform: scale(0); */
  transform: translate(-100%);
}
.my2-transition-enter-active {
  animation: whirl 1s forwards;
  /* transition: all 1s ease; */
}
.my2-transition-enter-to {
  /* background-color: lightblue; */
}
.my2-transition-leave-active {
  /* .fade-leave-active below version 2.1.8 */
  animation: whirl 1s reverse;
}

@keyframes whirl {
  from {
    transform: rotate(1080deg) scale(0);
    /* transform: scale(0); */
  }

  to {
    transform: rotate(0) scale(1);
    /* transform: scale(1); */
  }
}

h1 {
  color: white !important;
}
</style>