<template>
  <div class="profile-view">
    <Header />
    <ProfileForm :customer="customer" v-if="!this.$store.state.showProfile" />
    <!-- @changeView="changeView" -->
    <ProfileInfo v-else />
  </div>
</template>
<script>
// localStorage.clear();
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import ProfileForm from "../components/ProfileForm";
export default {
  data() {
    return {
      customer: {
        name: "",
        email: ""
      }
    };
  },

  methods: {
    changeView() {
      this.$store.commit("showProfile");
    }
  },
  components: {
    Header,
    ProfileInfo,
    ProfileForm
  },

  created() {}
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