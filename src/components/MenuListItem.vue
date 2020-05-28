<template>
<div>
    <div class="menuItem">
        <!-- <img :src= "require('@/assets/graphics/add.svg')" v-on:click= "addItemToCart" class="add" alt=""> -->
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" 
        class="add"
        v-on:click= "addItemToCart">
            <g filter="url(#filter0_d)">
            <circle cx="32" cy="32" r="16" fill="#2F2926"/>
            </g>
            <path d="M32.8478 31.0616L32.8478 25.4102C32.8478 24.8965 32.4252 24.4739 31.9115 24.4739C31.3977 24.4739 30.9751 24.8965 30.9751 25.4102L30.9751 31.0616L25.3238 31.0616C24.81 31.0616 24.3874 31.4842 24.3874 31.9979C24.3874 32.2548 24.491 32.491 24.6608 32.6608C24.8307 32.8307 25.0669 32.9343 25.3238 32.9343L30.9751 32.9343L30.9751 38.5856C30.9751 38.8425 31.0787 39.0787 31.2485 39.2485C31.4184 39.4184 31.6546 39.522 31.9114 39.522C32.4252 39.522 32.8478 39.0994 32.8478 38.5856L32.8478 32.9343L38.4991 32.9343C39.0129 32.9343 39.4355 32.5117 39.4355 31.9979C39.4355 31.4842 39.0129 31.0616 38.4991 31.0616L32.8478 31.0616Z" fill="white"/>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="8"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
        </svg>

        <div>
            <div id="dottedTest">
                <h2>{{name}}</h2>
                <div id="dots"></div>
            </div>
            <p>{{description}}</p>
        </div>
        <h2 class="price">{{price}} kr</h2>
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
            this.$store.commit('saveItemToShoppingCart', {id: this.id, price: this.price});
        },
    },

    computed:{
        dotPadding(){
            return '.'.repeat(30 - this.name.length);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Work+Sans&display=swap');

    .menuItem{
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    text-align: left;

        p{
            font-family: 'Work Sans', sans-serif;
        }

        h2{
            font-family: 'PT Serif', serif;
        }

        h4{
            font-family: 'PT Serif', serif;
        }

        .price{
            margin-right: 1rem;
        }
    }

    #dots{
        flex-grow:1;
        border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
        margin-bottom: 0.35rem;

    }

    #dottedTest{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .menuItem .add{
        position: relative;
        bottom: 0.2rem;
    }

    h1{
        color: black;
    }
</style>