<template>
<div>
    <div class="menuItem">
        <button v-on:click= "addItemToCart">+</button>
        <div>
            <h2>{{name}}</h2>
            <p>{{description}}</p>
        </div>
        <h4>{{price}} kr</h4>
    </div>
</div>
</template>
<script>
export default {
    props:{
    name: String,
    description: String,
    price: Number,
    id: Number
    },

    data: () => ({

    }),
    
    methods: {
        addItemToCart(){
             this.$store.commit('saveItemToShoppingCart', this.id);
        }
    },

    computed:{

    }
}
</script>

<style>

    .menuItem{
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    
    
    }

    .menuItem button{
        width: 2rem;
        height: 2rem;
    }

    h1{
        color: black;
    }
</style>