<template>
  <section class="container">
    <article class="customer-info">
      <div class="profile">
        <img src="../assets/graphics/Profile.svg" alt />
      </div>
      <h1>{{this.$store.state.currentCustomer.name}}</h1>
      <p>{{this.$store.state.currentCustomer.email}}</p>
    </article>
    <article class="order">
      <h2>Orderhistorik</h2>
      <ul>
        <li
          v-for="(order,index) in this.$store.state.currentCustomer.orders"
          v-bind:key="index"
        >{{order.orderNumber}} + {{order.amount}} + {{order.date}}</li>
      </ul>
    </article>
  </section>
</template>
<script>
export default {
  data: () => ({}),
  created() {},
  methods: {},
  computed: {
    getLatestData() {
      return this.$store.state.currentCustomer;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .customer-info {
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
    margin-bottom: 7rem;
    h1 {
      color: white;
      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      font-size: 35px;
      margin-top: 1rem;
    }

    p {
      font-family: "Work Sans", sans-serif;
      color: rgba(255, 255, 255, 0.8);
      font-size: 15px;
      font-weight: 500;
      margin-top: 0.3rem;
    }
  }

  .order {
    align-self: flex-start;
    margin-left: 2rem;
    h2 {
      color: white;
      font-family: PT Serif;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 120%;
    }
  }
}
</style>