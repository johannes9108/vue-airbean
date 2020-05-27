<template>
  <div class="menuView">
    
    <Header />
      <section>
        <h1>MENU</h1>
        <MenuListItem
          class= "menuListItem"
          v-for= "item in getCoffeeList"
          v-bind:key= 'item.id'
          v-bind:name= 'item.title'
          v-bind:description= "item.desc"
          v-bind:price= "item.price"
          v-bind:id= "item.id">
        </MenuListItem>
      </section>
    <Footer />
    <router-view />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuListItem from '../components/MenuListItem'
export default {

  data: () => ({}),
  components: {
    Header,
    Footer,
    MenuListItem
  },
  methods: {
  },

  computed:{
    getCoffeeList(){
      return this.$store.state.coffeeList;
    }
  }
};
</script>

<style lang="scss" scoped>
.menuView {
  position: relative;
  background-color: #f3e4e1;
  display: grid;
  grid-template-rows: 14vh minmax(77vh, auto) 9vh;
  
}

h1{
  margin-bottom: 2rem;
  
}

.menuListItem{
  margin-bottom: 2.2rem;
}

</style>