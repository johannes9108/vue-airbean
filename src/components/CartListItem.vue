<template>
    <div>
        <div class="cartItem">
            <div class="names">
                <h2>{{name}}</h2>
                <p>{{getItemAmountTimesPrice}} kr</p>
            </div>
            
            <div class="buttons">
                <button v-on:click= "incrementItemAmount">^</button>
                <p>x</p>
                <button v-on:click= "decrementItemAmount">V</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        name: String,
        price: Number,
        id: Number
    },

    data: () => ({

    }),
    
    methods: {

        incrementItemAmount(){
            this.$store.commit('incrementItemAmount', {id: this.id, price: this.price});
        },

        decrementItemAmount(){
            this.$store.commit('decrementItemAmount', {id: this.id, price: this.price});
        }
    },

    computed:{
        getItemAmountTimesPrice(){
            let obj = this.$store.state.shoppingCart.filter( (item) => item.id == this.id)[0];
            return this.price * obj.amount;
        }
    }
}
</script>

<style>
    .cartItem{
        color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

    .names{
        text-align: left;
    }

    .buttons{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-end;
    }
</style>