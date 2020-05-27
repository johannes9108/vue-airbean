<template>
  <div class="profile-view">
    <Header />
    <div class="login-form" v-if="!profileView">
      <div class="coffee-symbol">
        <img src="../assets/graphics/Vector.png" alt="">
      </div>
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>Genom att skapa ett konto nedan kan du spara
        och se din orderhistorik.
      </p>
      <div class="form">
        <label for="name">Namn</label>
        <input type="text" v-model="customer.name">
        <label for="epost">Epost</label>
        <input type="text" v-model="customer.email">
      </div>
      <label class="gdpr">
        <input type="radio" name="radio">
        <span class="checkmark"></span>
        GDPR Ok!
      </label>
      <button @click="changeView">
        <h1>Brew me a cup!</h1>
      </button>
    </div>
    <ProfileInfo :customer="customer" v-else-if="profileView"/>
  </div>
</template>
<script>
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
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
    ProfileInfo
  }
};
</script>

<style lang="scss">
.profile-view {
  background-color: #2f2926;
  display: grid;
  grid-template-rows: 14vh minmax(86vh, auto);
  position: relative;

  .login-form {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 5rem;
    left: 5vw;
    background: #F3E4E1;
    padding: 2rem 3px 2rem 3px;
    width: 90%;
    margin: auto;
    border-radius: 4px;

    .coffee-symbol {
      background: rgba(0, 0, 0, 0.1);
      padding: .5rem;
      border-radius: 50%;
      margin-bottom: .5rem;
      img{
        width: 1.8rem;
      }
    }
    h1 {
      color: #2F2926;
      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
    }

    p {
      font-family: 'Work Sans', sans-serif;
      font-style: normal;
      font-size: 18px;
      margin: 1.5rem auto 0 auto;
      color: #2F2926;
      width: 92%;

    }

    .form {
      display: grid;
      justify-content: center;
      text-align: left;
      margin-top: 2rem;
      
      input {
        border-radius: 7px;
        background: inherit;
        border: solid black 1px;
        padding: 1.2rem 1rem;
        margin-bottom: 1.2rem;
        width: 80vw;
        font-size: 18px;
        font-family: 'Work Sans', sans-serif;
      }
    }

    .gdpr {
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin-left: 7px;
      align-self: flex-start;
      margin-top: 1rem;
      input {
        opacity: 0;
        cursor: pointer;
      }

      input:checked ~ .checkmark {
        background: #0E927D;
        
      }


      .checkmark {
        background: white;
        border-radius: 50%;
        border: solid black 1px;
        padding: .3px 9px;
      }

    }

    button {
      background: #2F2926;
      text-decoration: none;
      border-radius: 30px;
      padding: .8rem 2.5rem;
      margin-top: 2rem;
      h1 {
        color: white;
        font-size: 1.8rem;
        font-family: PT Serif;
        font-style: normal;
        font-weight: bold;
      }
    }
  }
}
</style>