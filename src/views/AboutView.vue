<template>
  <section class="about">
    <Header/>
      <article class="content">
        <h1>Vårt kaffe</h1>
        <p><strong>Pumpkin spice mug, barista cup, sit macchiato, 
          kopi-luwak, doppio, grounds dripper, crema, strong 
          whipped, variety extra iced id lungo half and half 
          mazagran. Pumpkin spice.</strong></p>
        <p>Que dark fair trade, spoon decaffeinated, barista 
          wings whipped, as rich aftertaste, con panna milk 
          black, arabica white rich beans single shot extra 
          affogato. So affogato macchiato sit extraction 
          instant grinder seasonal organic, turkish single 
          shot, single origin, and robusta strong to go so 
          dripper. Viennese froth, grounds caramelization 
          skinny aromatic cup kopi-luwak, fair trade flavour, 
          frappuccino medium, café au lait flavour cultivar 
          ut bar instant kopi-luwak.</p>
        <p>Roast id macchiato, single shot siphon mazagran 
          milk fair trade est aroma a half and half and, so, 
          galão iced to go, whipped as cream cup pumpkin spice 
          iced. At extra, rich grinder, brewed to go, steamed 
          half and half at, that, percolator macchiato trifecta 
          and body as arabica dripper. In galão black java milk 
          sit trifecta, robusta, acerbic café au lait instant 
          shop latte. Seasonal bar shop filter aroma id, crema, 
          affogato viennese cultivar aftertaste, seasonal, 
          percolator cream black, galão flavour, milk aromatic 
          turkish skinny crema.</p>
        <div class="vd">
          <img :src="require('@/assets/graphics/eva-cortado.jpg')" alt="">
          <h4>Eva Cortado</h4>
          <p>VD & Grundare</p>
        </div>
      </article>
    <Footer/>
  </section>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data: () => ({

  }),
  
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.about {
  background-color: #f3e4e1;
  display: grid;
  grid-template-rows: 14vh minmax(77vh, auto) 9vh;
  text-align: left;
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: PT serif;
      font-weight: bold;
      color: #2F2926;
      font-size: 45px;
      margin: 2rem auto 1rem auto;
      width: 82%;
    }

    p{
      font-family: 'Work Sans', sans-serif;
      font-style: normal;
      width: 82%;
      margin: .8rem auto;
      font-size: 14px;
      line-height: 1.6;
      color: #2F2926;
    }

    .vd {
      color: #2F2926;
      margin-top: 2.5rem;
      text-align: center;
      img {
        border-radius: 50%;
      }

      p {
        margin-top: 0;
        margin-bottom: 3rem;
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-style: normal;

      }
      h4 {
        font-size: 22px;
        font-family: PT serif;
        font-weight: bold;
      }
    }
  }
}
  
</style>