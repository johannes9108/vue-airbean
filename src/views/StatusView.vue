<template>
  <div class="statusView">
    <h4>
      Ordernummer
      <strong>{{generateRandomOrderNumber()}}</strong>
    </h4>
    <img :src="require('@/assets/graphics/drone.svg')" alt="drone" />
    <h1>Din beställning är på väg!</h1>
    <h3>
      <strong>{{generateRandomETA()}}</strong> minuter
    </h3>
    <router-link to="/menu">
      <button>Ok, cool!</button>
    </router-link>
  </div>
</template>
<script>
export default {
  data: () => ({}),

  methods: {
    generateRandomOrderNumber() {
      let orderNumber = "#";
      let alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (let i = 0; i < 7; i++) {
        orderNumber +=
          alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
      }
      return orderNumber;
    },

    generateRandomETA() {
      return Math.floor(Math.random() * 20);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.statusView {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e5674e;
  height: 100%;

  color: white;

  @import url("https://fonts.googleapis.com/css2?family=PT+Serif&family=Work+Sans:wght@300;400&display=swap");

  h4 {
    margin-top: 3rem;
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
  }

  img {
    margin-top: 2rem;
  }

  h1 {
    margin-top: 4rem;
    margin-left: 3rem;
    margin-right: 3rem;

    font-family: "PT Serif", serif;
    font-weight: 300;
    font-size: 2.4rem;
  }

  h3 {
    font-weight: 300;
  }

  button {
    font-size: 3rem;
    margin-bottom: 4rem;
    margin-top: 4rem;
    font-family: "PT Serif", serif;
    background-color: white;
    border: none;
    border-radius: 35px;
    width: 13rem;
    font-size: 1.5rem;
    font-weight: bold;

    padding: 1rem;
  }
}
</style>