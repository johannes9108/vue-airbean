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
      <ul class="orderList">
        <li
          v-for="(order,index) in this.$store.state.currentCustomer.orders"
          v-bind:key="index"
          v-bind:style= "index != ordersLength ? 'border-bottom: 1px solid  rgba(172, 172, 172, 0.5)' : 'border-bottom: 1px solid  rgba(172, 172, 172, 1)' "
          class="orderItem"
        >
        <div>
          <p class="orderNumber"><strong>{{order.orderNumber}}</strong></p>
          <p class="orderSumText">total ordersumma</p>
        </div>

        <div class="data">
          <p class="date">{{replaceFormatting(order.date)}}</p>
          <p class="orderSum">{{order.amount}} kr</p>
        </div>
        <!-- {{order.orderNumber}} + {{order.amount}} + {{order.date}} -->
        </li>
      </ul>
      <div class="sumOrders">
      <h3>Totalt spenderat</h3><h3> {{sumOfAllOrders}} kr</h3>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  data: () => ({}),
  created() {},
  methods: {
    replaceFormatting(input){
      return input.replace(/-/g, '/');
    }
  },
  computed: {
    getLatestData() {
      return this.$store.state.currentCustomer;
    },

    sumOfAllOrders(){
      let sum = 0;
      this.$store.state.currentCustomer.orders.forEach(element => {
        sum += element.amount;
      });
      return sum;
    },

    ordersLength(){
      return this.$store.state.currentCustomer.orders.length-1;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&family=Work+Sans:wght@300;400&display=swap");
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

  .orderItem{
     display: flex;
     justify-content: space-evenly;
     text-align: left;
     margin-top: 1rem;

     border-bottom: 1px solid  rgba(172, 172, 172, 0.5);;

      .data{
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: flex-end;
          margin-left: 8rem;
      }

      .orderNumber{
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 120%;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 0.2rem;
      }

      .orderSumText{
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 120%;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 0.3rem;
      }

      .date{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 120%;
        text-align: right;

        color: rgba(255, 255, 255, 0.7);
      }

      .orderSum{
        font-size: 12px;
        line-height: 120%;
        text-align: right;
        color: rgba(255, 255, 255, 0.5);
      }
  }

  .sumOrders{
    width: 100%;
    font-family: 'Work Sans', sans-serif;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
  .order {
    align-self: center;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    
    h2 {
      font-family: 'PT Serif', serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 120%;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }

    h3{
      font-style: normal;
       font-family: 'Work Sans', sans-serif;
      font-weight: bold;
      font-size: 14px;
      line-height: 120%;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 1rem;
    }

    p{
      color: white;
    }

    h4{
      color: white;
    }
  }
}
</style>