<template>
  <div class="basket">
  <!-- Navbar -->
      <base-nav  v-if="showNav" />
      <base-nav-mobile  v-if="mobileView" /> 
        <!-- Error -->
          <div v-show="checktran">
            <div v-show="red" class="bg-error py-2 w-full text-white text-center">Error !! : {{errorMessage}}</div>
            <div v-show="green" class="bg-primary py-2 w-full text-white text-center">Success</div>
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
      <div class="w-full pb-4" v-for="carts in cart" :key="carts.cartId">
        <div class="h-full flex bg-green-600 bg-opacity-30 sm:p-4 p-2 rounded-lg">
          <div class="block relative sm:w-40 sm:h-32 h-16 w-16 rounded-md overflow-hidden ">
            <img class="object-cover object-center w-full h-full block" :src="carts.productImage">
          </div>
          <div class="flex-grow pl-4">
            <h1 class="sm:text-2xl font-semibold text-xs">{{carts.productName}}</h1>
            <p class="text-gray sm:text-base text-xs">Brand : {{carts.brandName}} </p>
            <p class="text-gray sm:text-base text-xs">Color :<span :style="{color: carts.colorValue}"> {{carts.colorName}}</span> </p>
            <p class="text-gray sm:text-base text-xs">Size : {{carts.sizeValue}}</p>
            <p class="sm:text-2xl font-semibold text-xs">THB {{carts.productPrice}}</p>
          </div>

          <div class="grid grid-row-2 items-end">
             <div class="flex justify-end sm:pb-10 pb-3"  @click="deleteOneCart(carts.cartId)" >
              <span class="fi-rr-trash sm:text-xl text-sm text-error cursor-pointer relative"></span>
            </div>
            <div>
              {{carts.quantity}}
              <!-- <div class="flex flex-row sm:h-9 sm:w-32 w-20 rounded-full relative bg-white mt-1">
                <button @click="decrement()" class="bg-gray-300 text-primary h-full sm:w-20 w-12 rounded-l cursor-pointer outline-none">
                  <span class="m-auto sm:text-2xl text-lg font-thin">−</span>
                </button>
                <input type="text" :value="quantity" readonly class="focus:outline-none text-center w-full bg-white sm:text-base text-xs flex items-center outline-none">
                <button @click="increment()" class="bg-gray-300 text-primary h-full sm:w-20 w-12 rounded-l cursor-pointer outline-none">
                  <span class="m-auto sm:text-2xl text-lg font-thin">+</span>
                </button>
              </div> -->
            </div>
          </div>

        </div>
      </div>
      <div class="grid sm:grid-cols-2 grid-cols-1">
          <p class="font-semibold sm:col-span-2 sm:text-base text-xs">Total {{totalCart}}</p>
          <h1 class="text-secondary sm:text-4xl text-xl">THB {{totalPrice}}</h1>
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
    emptry: true,
    errorMessage: null,
    red:false,
    green:false,
    accid: this.$route.params.accid,
    cart:[],
    checktran:false
    };
  },
  computed:{  
    totalCart() {
      var total =0 ;
      for (let index = 0; index < this.cart.length; index++) {
        total = total + this.cart[index].quantity
      }
      return total
    },
    totalPrice(){
      var pricez = 0;
      for (let index = 0; index < this.cart.length; index++) {
        pricez = pricez + (this.cart[index].productPrice*this.cart[index].quantity)
        
      }
      return pricez
    },
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
    async deleteOneCart(id){
        const res =  await fetch("http://localhost:80/delcart/"+id,{method: "DELETE"} );
         if(res.ok){
           await this.getOneProd()
        this.checktran = true;
        this.red = false
        this.green = true;
        setTimeout(()=>{this.checktran = false } , 4000);
      } else {
        this.checktran = true;
        this.red = true
        this.green = false;
        this.errorMessage = await res.json().message;
          setTimeout(()=>{this.checktran = false } , 9000);
      }
    }
    ,
    async getOneProd(){
      const res =  await fetch("http://localhost:80/showcart/"+this.accid);
      if(res.ok){
        const data = await res.json();
        
        this.cart = await data

        if(this.cart != undefined){
          var element = "http://localhost:80/files/";
          for (let index = 0; index < this.cart.length; index++) {
            this.cart[index].productImage = element + this.cart[index].productImage;
            //this.allproduct[index].productImage = element + this.allproduct[index].productImage;
          //console.log(this.allproduct[index].productImage);
          }
        } 
        this.checktran = true;
        this.red = false
        this.green = true;
        setTimeout(()=>{this.checktran = false } , 4000);
      } else {
        this.checktran = true;
        this.red = true
        this.green = false;
        this.errorMessage = await res.json().message;
        //  setTimeout(()=>{this.checktran = false } , 9000);
      }
    }
  //   increment () {
  //     this.quantity++
  //   },
  //   decrement () {
  //     if(this.quantity === 1) {
  //       alert('Negative quantity not allowed')
  //     } else {
  //       this.quantity--
  //     }
  //   }
  },
  async created() {
    console.log(this.accid)
    await this.getOneProd()
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>
