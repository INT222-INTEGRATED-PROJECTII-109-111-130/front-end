<template>
  <div class="home">
  <!-- Navbar -->
<<<<<<< HEAD
  <div class="bg-white shadow-md w-full text-center py-4 px-3" v-if="mobileView">
    <div class="flex justify-between items-center">
      <div v-if="mobileView" @click="showNavHam()">
        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1.5" x2="25" y2="1.5" stroke="#2D2D2D" stroke-width="3" />
          <line y1="16.5" x2="25" y2="16.5" stroke="#2D2D2D" stroke-width="3" />
          <line y1="9" x2="25" y2="9" stroke="#2D2D2D" stroke-width="3" />
        </svg>
      </div>
      <router-link to="/">
        <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.78 20.825C15.78 22.435 15.4067 23.7767 14.66 24.85C13.9367 25.9 12.945 26.6933 11.685 27.23C10.4483 27.7433 9.03667 28 7.45 28H0.8V3.5H7.1C9.29333 3.5 11.055 4.00167 12.385 5.005C13.715 6.00833 14.38 7.54833 14.38 9.625C14.38 10.885 14.0183 11.9467 13.295 12.81C12.5717 13.65 11.58 14.2567 10.32 14.63C11.93 14.9567 13.2367 15.6333 14.24 16.66C15.2667 17.6633 15.78 19.0517 15.78 20.825ZM7.1 6.125H3.775V13.405H7.1C8.33667 13.405 9.36333 13.09 10.18 12.46C10.9967 11.83 11.405 10.9433 11.405 9.8C11.405 8.63333 10.9967 7.735 10.18 7.105C9.36333 6.45167 8.33667 6.125 7.1 6.125ZM3.775 25.375H7.45C9.03667 25.375 10.32 24.9667 11.3 24.15C12.3033 23.31 12.805 22.1433 12.805 20.65C12.805 19.1333 12.3033 17.9783 11.3 17.185C10.32 16.3917 9.03667 15.995 7.45 15.995H3.775V25.375ZM23.6416 0.699999H26.4416V28H23.6416V0.699999ZM38.008 21.7C38.008 22.9833 38.2997 23.975 38.883 24.675C39.4663 25.375 40.318 25.725 41.438 25.725C42.6747 25.725 43.6663 25.3517 44.413 24.605C45.1597 23.8583 45.533 22.89 45.533 21.7V11.9H48.333V28H45.533V25.48C44.4597 27.3933 42.8613 28.35 40.738 28.35C39.058 28.35 37.7163 27.7783 36.713 26.635C35.7097 25.4917 35.208 23.9633 35.208 22.05V11.9H38.008V21.7ZM64.9717 14.525H56.0467V11.9H70.0467L60.0717 25.375H69.3467V28H54.9967L64.9717 14.525ZM82.4126 28.35C80.9193 28.35 79.5893 28 78.4226 27.3C77.2793 26.5767 76.381 25.585 75.7276 24.325C75.0976 23.065 74.7826 21.6067 74.7826 19.95C74.7826 18.27 75.1093 16.8 75.7626 15.54C76.4393 14.28 77.3726 13.3 78.5626 12.6C79.776 11.9 81.176 11.55 82.7626 11.55C85.1193 11.55 86.9743 12.285 88.3276 13.755C89.681 15.225 90.3576 17.2433 90.3576 19.81C90.3576 19.9733 90.346 20.1483 90.3226 20.335C90.3226 20.4983 90.3226 20.6033 90.3226 20.65H77.6526C77.7693 22.26 78.271 23.5083 79.1576 24.395C80.0443 25.2817 81.246 25.725 82.7626 25.725C84.956 25.725 86.636 24.7567 87.8026 22.82L90.0776 24.255C88.3976 26.985 85.8426 28.35 82.4126 28.35ZM82.7626 14C81.386 14 80.266 14.3733 79.4026 15.12C78.5393 15.8433 77.991 16.8933 77.7576 18.27H87.3126C87.2193 16.9867 86.7526 15.96 85.9126 15.19C85.096 14.3967 84.046 14 82.7626 14Z" fill="#2D2D2D"/>
        </svg>
      </router-link>
      <router-link to="/basket">
         <span class="fi-rr-shopping-bag text-lg"></span>
      </router-link>
    </div>
  </div>
  <base-nav-mobile v-if="showNav" />
  <base-nav v-if="!mobileView" />
=======
  <base-nav v-if="showNav" />
  <base-nav-mobile v-if="mobileView" /> 
>>>>>>> 549ed7e38fd0df6a9c5b342c8ca2dc111706074a
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
<!-- Product -->
  <div class="container sm:pb-16 pb-10 sm:px-9 px-3 mx-auto">
    <h1 class="sm:text-4xl sm:py-7 py-3 font-semibold text-xl">Products</h1>
    <div class="grid sm:grid-cols-4 sm:gap-6 gap-2 grid-cols-2">
      <div v-for="product in allproduct" :key="product.productId">
        <div class="bg-white sm:rounded-lg rounded-md shadow-xl hover:shadow-2xl transition duration-500">
          <router-link 
                 :to="{
                    name: 'Product',
                    params: { id: product.productId },
                  }"
          >
          <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
            <img class="object-cover object-center w-full h-full block" :src="product.productImage">
          </a>
          <div class="sm:my-3 sm:mx-4 my-2 mx-3">
            <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{product.productName}}</h2>
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
      urlprod:"http://localhost:80/showallproduct",
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
        res.json().then((body) => {
          throw new Error(body.error);
        }).catch((error) => {
          this.errorMessage = error.message
          console.log(this.errorMessage);
        })
      }
    }
  },
  async created() {
    this.handleView();
    this.allproduct = await this.getProduct();
    if(this.allproduct != undefined){
      for (let index = 0; index < this.allproduct.length; index++) {
        var element = "http://localhost:80/files/";
        this.allproduct[index].productImage = element + this.allproduct[index].productImage;
        //console.log(this.allproduct[index].productImage);
      }
    }
    window.addEventListener("resize", this.handleView);
  },
};
</script>
