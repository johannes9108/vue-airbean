<template>
  <div class="profile-view">
    <Header />
    <ProfileForm :customer="customer" v-if="!this.$store.state.showProfile" @changeView="changeView"/>
    <ProfileInfo :customer="customer" v-else/>
  </div>
</template>
<script>
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import ProfileForm from "../components/ProfileForm"
export default {
  data() {
    return {
      customer: {
        name: "",
        email: ""
      },
      
    }
  },

  methods: {
    changeView() {
      this.$store.commit("showProfile")
    }
  },
  components: {
    Header,
    ProfileInfo,
    ProfileForm
  },

  created() {
    if(localStorage.getItem("loggedIn")) {
      let customer = JSON.parse(localStorage.getItem("loggedIn"));
      console.log(customer)
      this.customer.name = customer.name;
      this.customer.email = customer.email;
    } else {
      console.log("not found")
    }
  }
};
</script>

<style lang="scss">
.profile-view {
  background-color: #2f2926;
  display: grid;
  grid-template-rows: 14vh minmax(86vh, auto);
  position: relative;
}

@media screen and(max-width: 360px) {
  .profile-view {
  grid-template-rows: 14vh minmax(86vh, auto) 25vh;
  
}
}
</style>