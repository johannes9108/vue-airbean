<template>
  <div class="headerComponent" :class="{overLay: overLay}">
    <!-- <HamburgerMenu v-if="!overLay" /> -->
    <div class="hamburgerMenu" @click="toggleMenu()" v-if="!overLay">
      <svg
        data-v-61dd7a3d
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <!-- <path data-v-61dd7a3d d="M0 0h24v24H0z" fill="white" /> -->
        <path data-v-61dd7a3d d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>

    <!-- <button class="hamburgerMenu" v-on:click="toggleMenu()">MENU</button> -->

    <router-link :to="{name: 'Cart'}" v-if="(this.$route.path == '/menu')">
      <div class="lockMenu">
        <div
          class="counterIndicator"
          v-if="this.$store.getters.getTotalAmountOfOrder !=0 "
        >{{this.$store.getters.getTotalAmountOfOrder}}</div>
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0486 4.04876V6.77232H5.95111V4.04876C5.95111 2.91726 6.86837 2 7.99988 2C9.13138 2 10.0486 2.91726 10.0486 4.04876ZM3.95111 4.04876C3.95111 1.81269 5.76381 0 7.99988 0C10.2359 0 12.0486 1.81269 12.0486 4.04876V6.77232V7.42274H13.5428C14.6103 7.42274 15.4897 8.26123 15.5405 9.32761L15.9978 18.9314C16.0521 20.0721 15.142 21.0266 14.0001 21.0266H2.00005C0.858129 21.0266 -0.0520048 20.0721 0.00231083 18.9314L0.459637 9.32761C0.510416 8.26123 1.38979 7.42274 2.45737 7.42274H3.95111V6.77232V4.04876ZM2.45737 9.42274H13.5428L14.0001 19.0266H2.00005L2.45737 9.42274Z"
            fill="white"
          />
        </svg>
      </div>
    </router-link>
    <router-link :to="{name: 'Menu'}" v-if="overLay">
      <div class="lockMenu">
        <div
          class="counterIndicator"
          v-if="this.$store.getters.getTotalAmountOfOrder !=0 "
        >{{this.$store.getters.getTotalAmountOfOrder}}</div>
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0486 4.04876V6.77232H5.95111V4.04876C5.95111 2.91726 6.86837 2 7.99988 2C9.13138 2 10.0486 2.91726 10.0486 4.04876ZM3.95111 4.04876C3.95111 1.81269 5.76381 0 7.99988 0C10.2359 0 12.0486 1.81269 12.0486 4.04876V6.77232V7.42274H13.5428C14.6103 7.42274 15.4897 8.26123 15.5405 9.32761L15.9978 18.9314C16.0521 20.0721 15.142 21.0266 14.0001 21.0266H2.00005C0.858129 21.0266 -0.0520048 20.0721 0.00231083 18.9314L0.459637 9.32761C0.510416 8.26123 1.38979 7.42274 2.45737 7.42274H3.95111V6.77232V4.04876ZM2.45737 9.42274H13.5428L14.0001 19.0266H2.00005L2.45737 9.42274Z"
            fill="white"
          />
        </svg>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    overLay: Boolean
  },
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      console.log(this);
      this.$store.commit("toggleMenu");
    }
  },
  components: {
    // HamburgerMenu
  }
};
</script>
<style lang='scss' scoped>
.headerComponent {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;

  //   background-size: cover;
  //   background-image: content-box;
}
.overLay {
  justify-content: flex-end;
  background: unset;
}

.hamburgerMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border-radius: 100%;
  background-color: white;
}
.lockMenu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-radius: 100%;
  background-color: #2f2926;
}
.counterIndicator {
  position: absolute;
  background-color: #e5674e;
  right: 0;
  top: 0;
  width: 35%;
  height: 35%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<!-- <circle cx="50" cy="50" r="50" fill="#2f2926" />
          <circle cx="85" cy="15" r="15" fill="#E5674E" />
          <text x="80" y="20" fill="white">8</text>-->