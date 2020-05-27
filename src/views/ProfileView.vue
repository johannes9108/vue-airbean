<template>
  <div class="profile-view">
    <Header />
    <ProfileForm :customer="customer" v-if="!profileView" @changeView="changeView"/>
    <ProfileInfo :customer="customer" v-else-if="profileView"/>
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
      profileView: false
    }
  },

  methods: {
    changeView() {
      this.profileView = !this.profileView;
    }
  },
  components: {
    Header,
    ProfileInfo,
    ProfileForm
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
</style>