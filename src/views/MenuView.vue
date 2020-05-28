<template>
  <div class="menuView">
    <Header />
    <section>
      <h1>MENY</h1>
      <MenuListItem
        class="menuListItem"
        v-for="item in getCoffeeList"
        v-bind:key="item.id"
        v-bind:name="item.title"
        v-bind:description="item.desc"
        v-bind:price="item.price"
        v-bind:id="item.id"
      ></MenuListItem>
    </section>
    <Footer />
    <transition name="cart-transition">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuListItem from "../components/MenuListItem";
export default {
  data: () => ({}),
  components: {
    Header,
    Footer,
    MenuListItem
  },
  methods: {},

  computed: {
    getCoffeeList() {
      return this.$store.state.coffeeList;
    }
  }
};
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Work+Sans:wght@300;400&display=swap');
.menuView {
  position: relative;
  background-color: #f3e4e1;
  display: grid;
  grid-template-rows: 14vh minmax(77vh, auto) 9vh;
}

h1 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-family: 'PT Serif', serif;
}

.menuListItem {
  margin-bottom: 1rem;
}
.cart-transition-enter-active,
.cart-transition-leave-active {
  transition: all 0.5s;
}
.cart-transition-enter,
.cart-transition-leave-to {
  transform: translateY(-100%);
}
</style>