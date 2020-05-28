<template>
  <transition name="my2-transition" mode="out-in">
    <div id="menu" v-if="this.$store.state.showMenu == true" >
      <div class="close" @click.capture="toggleMenu()">
        <img src="../assets/graphics/navicon.png" alt="">
      </div>
      <router-link to="/menu" @click.native="toggleMenu()">
        <h1 class="j">MENY</h1>
      </router-link>
      <hr>
      <router-link to="/about" @click.native="toggleMenu()">
        <h1>VÅRT KAFFE</h1>
      </router-link>
      <hr>
      <router-link to="/profile" @click.native="toggleMenu()">
        <h1>MIN PROFIL</h1>
      </router-link>
      <hr>
      <router-link to="/status" @click.native="toggleMenu()">
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
  background: #2F2926;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-origin: center;
}

.close {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

a {
  text-decoration: none;
}

hr {
  margin-top: 1.1rem;
  margin-bottom: 1.6rem;
  width: 3.2rem;
  border: solid rgba(255, 255, 255, 0.2) 0.1px;
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
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 120%;

}
</style>