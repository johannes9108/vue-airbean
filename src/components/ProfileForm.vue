<template>
  <article class="login-form">
    <!-- Formuläret lägger sig ovan på menyn -->
    <div class="coffee-symbol">
      <img src="../assets/graphics/coffee.svg" alt />
    </div>
    <h1>Välkommen till AirBean-familjen!</h1>
    <p>
      Genom att skapa ett konto nedan kan du spara
      och se din orderhistorik.
    </p>
    <div class="form">
      <label for="name">Namn</label>
      <input type="text" v-model="customer.name" />
      <label for="epost">Epost</label>
      <input type="text" v-model="customer.email" />
    </div>
    <label class="gdpr">
      <input type="radio" name="radio" />
      <span class="checkmark"></span>
      GDPR Ok!
    </label>
    <button @click="changeView">
      <h1>Brew me a cup!</h1>
    </button>
  </article>
</template>
<script>
export default {
  props: {
    customer: Object
  },
  data: () => ({}),

  methods: {
    changeView() {
        localStorage.setItem("loggedIn", JSON.stringify(this.customer))
        this.$emit("changeView");
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  display: grid;
  position: absolute;
  align-items: center;
  top: 5rem;
  left: 5vw;
  background: #f3e4e1;
  padding: 2rem 3px 3rem 2px;
  height: 80%;
  width: 90%;
  margin: auto;
  border-radius: 4px;

  .coffee-symbol {
    
    img {
      width: 1.8rem;
    }
  }
  h1 {
    color: #2f2926;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 2.2rem;
  }

  p {
    font-family: "Work Sans", sans-serif;
    font-style: normal;
    font-size: 15px;
    margin: .6rem auto 0 auto;
    color: #2f2926;
    width: 92%;
    line-height: 1.6;
  }

  .form {
    display: grid;
    justify-content: center;
    text-align: left;
    margin-top: 2rem;

    label {
        font-size: 13px;
        margin-bottom: 4px;
    }

    input {
      border-radius: 7px;
      background: inherit;
      border: solid black 1px;
      padding: .8rem 1rem;
      margin-bottom: 1rem;
      width: 80vw;
      font-size: 18px;
      font-family: "Work Sans", sans-serif;
    }
  }

  .gdpr {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-left: 7px;
    justify-self: start;
    margin-top: 1rem;
    
    input {
      opacity: 0;
      cursor: pointer;
    }

    input:checked ~ .checkmark {
      background: #0e927d;
    }

    .checkmark {
      background: white;
      border-radius: 50%;
      border: solid black 1px;
      padding: 0.3px 9px;
    }
  }

  button {
    background: #2f2926;
    text-decoration: none;
    border-style: none;
    border-radius: 30px;
    width: 80%;
    margin: auto;
    padding: 0.6rem 1rem;
    margin-top: 2rem;
    
    h1 {
      color: white;
      font-size: 1.6rem;
      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      margin-bottom: 6px;
    }
  }

@media screen and(max-width: 360px) {
    .login-form {
        top: 0;
    }   
} 
}
</style>