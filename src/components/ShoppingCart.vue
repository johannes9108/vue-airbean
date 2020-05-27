<template>
  <div class="shoppingCart" id="test">
      <section class="cart">
        <h1>DIN BESTÄLLNING</h1>
        <CartListItem
        v-for= "item in getShoppingCart"
        v-bind:key= "item.id"
        v-bind:id= "item.id"
        v-bind:name= "getItemFromList(item.id).title"
        v-bind:price= "getItemFromList(item.id).price"
        >
        </CartListItem>

        <section class="orderSection">
           <div class="names">
                <h2>TOTAL</h2>
                <p>inkl moms + drönarleverans</p>
            </div>
            
            <div class="buttons">
                <h2>{{getShoppingCartSum}} kr</h2>
            </div>
        </section>
        <button v-on:click= "placeOrder">TAKE MY MONEY</button>
      </section>
  </div>
</template>
<script>
import CartListItem from '../components/CartListItem.vue'

export default {
  data: () => ({
    sumOfPrices: 0
  }),

  components:{
    CartListItem
  },

  methods:{
    getItemFromList(id){
      let obj = this.$store.state.coffeeList.filter( (item) => item.id === id)[0];
      return obj;
    },

    placeOrder(){
      //TODO implement business logic - generate and send ordernumber
      if(this.getShoppingCartSum == 0){
        console.log("ERROR. No items in cart")
      }else{
        this.$router.push('status');
      }
    }
  },

  computed:{
     getCoffeeList(){
      return this.$store.state.coffeeList;
    },
     getShoppingCart(){
      return this.$store.state.shoppingCart;
    },

    getShoppingCartSum(){
      return this.$store.state.shoppingCartSum;
    }
  }
};

  
</script>
<style lang='scss' scoped>
.shoppingCart {
  //   background-color: rgba(0, 0, 0, 0.8);
  top: 10%;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
.cart{
  background-color: white;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  height: 95%;
}

h1{
  margin-bottom: 2rem;
}

.orderSection{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    margin-left: 1rem;
}

 .names{
        text-align: left;
  }

  button{
    margin-top: 2rem;
  }


</style>