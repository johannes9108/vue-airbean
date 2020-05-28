<template>
  <div class="statusView">
    <h3>
      Ordernummer
      <strong>{{generateRandomOrderNumber()}}</strong>
    </h3>
    <img :src="require('@/assets/graphics/drone.svg')" alt="drone" />
    <h1>Din beställning är på väg!</h1>
    <h3>{{generateRandomETA()}} minuter</h3>
    <button class="baseButton statusButton">Ok, cool!</button>
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

  h3 {
    margin-top: 3rem;
  }

  img {
    margin-top: 5rem;
  }

  h1 {
    margin-top: 10rem;
  }
}
.statusButton {
  background-color: white;
}
</style>