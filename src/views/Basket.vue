<template>
  <div class="basket">
  <!-- Navbar -->
    <base-nav class="sticky top-0 z-50 w-full" v-if="showNav" />
    <base-nav-mobile v-if="mobileView" /> 
      <!-- Error -->
        <div class="sticky top-0 z-50 w-full">
          <div class="bg-error py-2 text-white text-center">Text here</div>
          <div class="bg-primary py-2 text-white text-center">Text here</div>
        </div>
    
  <!-- Emptry Basket -->
  <div v-if="!emptry">
  <img src="../assets/Shopping_cart.png" class="object-center mx-auto sm:px-96 sm:pt-28 sm:w-4/6 px-20 pt-32 w-auto">
  <h1 class="sm:text-2xl text-xl font-semibold text-center sm:pt-6 pt-4">Your Basket is Empty</h1>
    <p class="text-center text-gray pt-2 pb-4 sm:text-base text-xs">Looks like you haven’t made your choice yet</p>
    <div class="sm:w-96 mx-auto w-52 sm:text-base text-sm">
      <router-link to="/">
        <base-button buttonLabel="Start Shopping"/>
      </router-link>
    </div>
  </div>

  <!-- Have Product -->
  <div v-if="emptry">
    <div class="container sm:pb-16 pb-10 pt-10 sm:px-9 px-3 mx-auto">
      <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 pt-6 pb-3 font-semibold text-xl">Basket</h1>
      <!-- Loop here -->
      <div class="w-full pb-4">
        <div class="h-full flex bg-light sm:p-4 p-2 rounded-lg">
          <div class="block relative sm:w-40 sm:h-32 h-16 w-16 rounded-md overflow-hidden ">
            <img class="object-cover object-center w-full h-full block" src="../assets/popcat.jpg">
          </div>
          <div class="flex-grow pl-4">
            <h1 class="sm:text-2xl font-semibold text-xs">Product Name</h1>
            <p class="text-gray sm:text-base text-xs">Color: </p>
            <p class="text-gray sm:text-base text-xs">Size: </p>
            <p class="sm:text-2xl font-semibold text-xs">THB 300.00</p>
          </div>

          <div class="grid grid-row-2 items-end">
            <div class="flex justify-end sm:pb-10 pb-3">
              <span class="fi-rr-trash sm:text-xl text-sm text-error cursor-pointer relative"></span>
            </div>
            <div>
              <div class="flex flex-row sm:h-9 sm:w-32 w-20 rounded-full relative bg-white mt-1">
                <button @click="decrement()" class="bg-gray-300 text-primary h-full sm:w-20 w-12 rounded-l cursor-pointer outline-none">
                  <span class="m-auto sm:text-2xl text-lg font-thin">−</span>
                </button>
                <input type="text" :value="quantity" readonly class="focus:outline-none text-center w-full bg-white sm:text-base text-xs flex items-center outline-none">
                <button @click="increment()" class="bg-gray-300 text-primary h-full sm:w-20 w-12 rounded-l cursor-pointer outline-none">
                  <span class="m-auto sm:text-2xl text-lg font-thin">+</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="grid sm:grid-cols-2 grid-cols-1">
          <p class="font-semibold sm:col-span-2 sm:text-base text-xs">Total</p>
          <h1 class="text-secondary sm:text-4xl text-xl">THB</h1>
          <div class="flex sm:justify-end sm:pt-0 pt-3">
            <button type="button" disabled class="px-2 py-2 sm:w-40 w-full text-white bg-primarydark rounded-full transition duration-400 hover:bg-primarydark focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Checkout</button>
          </div>
      </div>
    </div>



  </div>

  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
// @ is an alias to /src

export default {
  components: {
    BaseButton
  },
  data() {
    return {
    mobileView: true,
    showNav: false,
    emptry: false,
    quantity: 1
    };
  },

  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      if(window.innerWidth <= 990){
          this.mobileView = true;
          this.showNav = false;
      } else if (window.innerWidth > 990){
          this.mobileView = false;
          this.showNav = true;
      }
    },
    increment () {
      this.quantity++
    },
    decrement () {
      if(this.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        this.quantity--
      }
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>
