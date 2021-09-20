<template>
  <div class="home">
  <!-- Navbar -->
    <base-nav  v-if="showNav"/>
    <base-nav-mobile  v-if="mobileView"/> 
      <!-- Error -->
        <div v-show="checktran">
          <div v-show="red" class="bg-error py-2 w-full text-white text-center">Error !! : {{errorMessage}}</div>
          <div v-show="green" class="bg-primary py-2 w-full text-white text-center">Success</div>
        </div>     
      <!-- Banner desktop -->
        <img src="../assets/Banner-desk.png" class="object-center mx-auto sm:px-64 lg:px-44 pt-8 w-full" v-if="!bannerMobile">
          <!-- Seach in mobile -->
            <div class="relative flex w-full flex-wrap pt-5 px-3" v-if="bannerMobile">
              <span class="z-10 h-full text-sm text-gray absolute justify-center pl-3 py-3">
                <span class="fi-rr-search"></span> 
              </span>
              <input type="text" placeholder="Search" class="px-2 py-2 placeholder-gray relative bg-light rounded-full text-md outline-none focus:ring-2 focus:ring-primary w-full pl-8"/>
            </div>
      <!-- Banner mobile -->
        <img src="../assets/Banner-mobile.png" class="mx-auto pt-4 px-3 w-full" v-if="bannerMobile">
      <!-- Product List-->
        <div class="container sm:pb-16 pb-10 sm:px-9 px-3 mx-auto">
          <h1 class="sm:text-4xl sm:py-7 py-3 font-semibold text-xl">Products</h1>
            <div class="grid sm:grid-cols-4 sm:gap-6 gap-2 grid-cols-2">
              <div v-for="product in allproduct" :key="product.productId">
                <div class="bg-white sm:rounded-lg rounded-md shadow-xl hover:shadow-2xl transition duration-500">
                  <router-link :to="{name: 'Product', params: { id: product.productId,user:123456 },}">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                      <img class="object-cover object-center w-full h-full block" :src="product.productImage">
                    </a>
                      <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="title-font sm:text-lg text-sm font-semibold">{{product.productName}}</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">THB {{product.productPrice}}</p>
                      </div>
                  </router-link>
                </div>
              </div>
            </div>
        </div>

<!-- See more button -->
  <!-- <div v-if="commentsToShow < reviews.length || reviews.length > commentsToShow">
    <button @click="commentsToShow += 3">show more reviews</button>
  </div> -->
  <div class="mx-auto sm:px-24 px-7 flex justify-center sm:pb-16 pb-10">
    <button class="items-center sm:text-base text-xs bg-white sm:py-2 py-1 sm:px-9 px-6 border-2 border-primary hover:bg-primary rounded-full text-primary hover:text-white transition duration-300 ease-in-out">
      See More
    </button>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {

  components: {

  },
  data() {
    return {
      mobileView: true,
      bannerMobile: true,
      showNav: false,
      errorMessage: null,
      allproduct: [],
      urlprod:"http://20.205.211.187:3000/showallproduct",
      checktran:true,
      red:true,
      green:true
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
      this.bannerMobile = window.innerWidth <= 990;
    },

    async getProduct(){
     const res =  await fetch(this.urlprod);
     console.log(res)
      if(res.ok){
        var data = await res.json();
        return data
      } else {
        this.errorMessage = await res.json();
        alert(this.errorMessage.message)
      }
    }
  },
  async created() {
    this.handleView();
    this.allproduct = await this.getProduct();
    if(this.allproduct != undefined){
      for (let index = 0; index < this.allproduct.length; index++) {
        var element = "http://20.205.211.187:3000/files/";
        this.allproduct[index].productImage = element + this.allproduct[index].productImage;
        //console.log(this.allproduct[index].productImage);
      }
    }
    window.addEventListener("resize", this.handleView);
  },
};
</script>
