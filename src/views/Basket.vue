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
    <div class="sm:pb-16 pb-10 sm:pt-10 pt-6 sm:px-28 px-3 mx-auto">
      <h1 class="sm:text-4xl sm:pb-7 pb-3 font-semibold text-xl">Basket</h1>
      <!-- Loop here -->
      <div class="w-full pb-4" v-for="carts in cart" :key="carts.cartId">
        <div class="h-full flex bg-light sm:p-4 p-2 rounded-lg">
          <div class="block relative sm:w-40 sm:h-32 h-16 w-16 rounded-md overflow-hidden ">
            <img class="object-cover object-center w-full h-full block" :src="carts.productImage">
          </div>
          <div class="flex-grow pl-4">
            <h1 class="sm:text-2xl font-semibold text-xs">{{carts.productName}}</h1>
            <p class="text-gray sm:text-base text-xs">{{carts.brandName}}, Color : {{carts.colorName}}, Size : {{carts.sizeValue}}</p>
            <p class="text-gray sm:text-base text-xs">Quantity : {{carts.quantity}}</p>
            <p class="sm:text-2xl text-xs text-secondary">THB {{carts.productPrice}}</p>
          </div>

          <div class="grid grid-row-2 ">
             <div class="flex"  @click="deleteOneCart(carts.cartId)" >
              <span class="fi-rr-trash sm:text-xl text-sm text-error cursor-pointer relative"></span>
            </div>
            
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
      <div class="grid sm:grid-cols-2 grid-cols-1">
          <p class="font-semibold sm:col-span-2 sm:text-base text-xs">{{totalCart}} items in shopping cart</p>
          <h1 class="text-secondary sm:text-3xl text-xl">Total For This Order THB {{totalPrice}}</h1>
          <div class="flex sm:justify-end sm:pt-0 pt-3">
            <button type="button" disabled class="px-2 py-2 sm:w-40 w-full text-white bg-primarydark rounded-full transition duration-400 hover:bg-primarydark focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Checkout</button>
          </div>
        </div>
  </div>

  </div>
   <div v-show="acc">{{this.acc}}</div>
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
    acc: null,
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
      const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
        const res =  await fetch("http://52.237.119.127:3000/delcart/"+id,{
          method: "DELETE",
          headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },
          } );
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
      const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      const res =  await fetch("http://52.237.119.127:3000/showcart/"+this.accid,{
           headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },
      });
      if(res.ok){
        const data = await res.json();
        
        this.cart = await data

        if(this.cart != undefined){
          var element = "http://52.237.119.127:3000/files/";
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
    },
    async getacc() {
    
    const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
    if (this.user !== undefined) {
      const res = await fetch("http://52.237.119.127:3000/1acc/" + this.accid, {
        headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },
      });
      if (res.ok) {
        this.acc = await res.json();
      } else {
        console.log("data is", this.user);
      }
    }
  },
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
