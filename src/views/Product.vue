<template>
  <div class="product">
  <!-- Navbar -->
  <div class="bg-white shadow-md w-full text-center py-4 px-3" v-if="mobileView">
    <div class="flex justify-between items-center">
      <!-- Nav Mobile -->
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
<!-- v-for="product in prod" :key="product.productId" -->
  <div class="container sm:px-7 px-3 py-8 mx-auto flex flex-wrap">
    <div class="sm:h-96 sm:w-2/4 h-64 w-full rounded-lg overflow-hidden">
      <img alt="feature" class="object-cover object-center h-full w-full" :src=image>
    </div>
    <div class="flex flex-wrap lg:w-1/2 lg:pl-8">

      <div class="flex flex-col lg:items-start items-center">

        <div class="flex-grow">
          <h1 class="sm:text-3xl font-semibold text-xl sm:mt-0 mt-2">Name</h1>
          <div class="flex justify-between mb-3">
            <p class="text-secondary sm:text-base text-xs">Brand</p>
            <p class="sm:text-base text-xs">DD-MM-YYYY</p>
            
          </div>
          <div class="flex justify-between mb-3">
            <p class="sm:text-base text-xs">{{this.prod.brands.brandName}}</p>
            <p class="sm:text-base text-xs">{{this.prod.onsaleDate}}</p>
          </div>
          <h2 class="sm:text-lg text-sm font-semibold">Description</h2>
          <p class="sm:text-base text-xs">
            {{this.prod.productDescription}}
          </p>
          
          <h1 class="text-secondary sm:text-3xl text-xl sm:my-4 my-3">THB {{this.prod.productPrice}}</h1>
    <!-- Dropdown -->
      <div class="grid sm:grid-cols-2 grid-cols-2 sm:gap-3 gap-2">
        <!-- Color -->
          <!-- <div>
            <label class="text-sm flex text-primary">Color</label>
            <button @click="toggleDropdown()" class="w-full rounded-full px-4 py-2 bg-light">
            <div class="flex justify-between">
              <div class="pr-1 text-gray">Select</div>
                <div>
                  <svg class="text-gray fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </button>
            <ul class="absolute mt-1 w-64 rounded-md z-50 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" v-show="active">
              <li v-for="color in colors" :key="color" @click="setColor(color.colorValue, color.colorName)" class="block px-2 py-2 text-sm hover:bg-light">
                <span :style="{background: color.colorValue}" class="inline-flex rounded-full px-3 py-3 bg-white"></span> 
                  {{color.colorName}}
              </li>
            </ul>
          </div> -->
        <!-- Size -->
          <!-- <div>
            <label class="text-sm flex text-primary">Size</label>
            <button @click="toggleDropdown()" class="w-full rounded-full px-4 py-2 bg-light">
            <div class="flex justify-between">
              <div class="pr-1 text-gray">Select</div>
                <div>
                  <svg class="text-gray fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
           </button>

            <ul class="absolute mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" v-show="active">
              <li v-for="color in colors" :key="color" @click="setColor(color.hex, color.name)" class="text-gray-700 block px-2 py-2 text-sm">
                <span :style="{background: color.hex}" class="inline-flex rounded-full px-3 py-3 bg-white"></span> 
                  {{color.name}}
              </li>
            </ul>
          </div> -->
        
        <!-- Color 2 -->
          <div>
            <label class="sm:text-sm text-xs flex text-primary">Color</label>
           
            <select id="color" name="color" v-model="color" class="w-full rounded-full sm:px-4 sm:py-2 py-1 bg-light appearance-none">

            <div class="flex justify-between">
              <div class="pr-1 text-gray">Select</div>
                <div>
                  <svg class="text-gray fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
               <option :value="null" disabled class="hidden">
                - Select Brand -
              </option>
              <option v-for="product in prod.productcolors" :key="product.productcolorId" :value="product.productcolorId">
                {{ product.colors.colorName }}
              </option>
            </select>

            <!-- <p class="text-red-500 text-xs font-light" v-if="errorBrand">
              "Please Select Any Brand"
            </p> -->
          </div>
          
        <!-- Size -->
          <div>
            <label class="sm:text-sm text-xs flex text-primary">Size</label>
           
            <select id="brand" name="brand" v-model="brand" class="w-full rounded-full sm:px-4 sm:py-2 py-1 bg-light appearance-none">

            <div class="flex justify-between">
              <div class="pr-1 text-gray">Select</div>
                <div>
                  <svg class="text-gray fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>

              <option v-for="brands in allbrand" :key="brands.brandId" :value="brands.brandId">
                {{ brands.brandName }}
              </option>
            </select>

            <!-- <p class="text-red-500 text-xs font-light" v-if="errorBrand">
              "Please Select Any Brand"
            </p> -->
          </div>
        <!-- Quantity -->
          <div class="mb-5">
            <label class="sm:text-sm text-xs flex text-primary">Quantity</label>
              <div class="flex flex-row sm:h-9 sm:w-32 w-24 rounded-full relative bg-light mt-1">
                <button @click="decrement()" class="bg-gray-300 text-primary  h-full w-20 rounded-l cursor-pointer outline-none">
                  <span class="m-auto sm:text-2xl text-xl font-thin">−</span>
                </button>
                <input type="text" :value="quantity" readonly class="focus:outline-none text-center w-full bg-light sm:text-base text-sm flex items-center outline-none">
                <button @click="increment()" class="bg-gray-300 text-primary  h-full w-20 rounded-l cursor-pointer outline-none">
                  <span class="m-auto sm:text-2xl text-xl font-thin">+</span>
                </button>
              </div>
          </div>

          
        </div>
       <base-button buttonLabel="Add to Basket"/> 
        </div>
      </div>
    </div>



  </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
	el: '#color-picker',
  components: {

  },
  data() {
    return {
    mobileView: true,
    bannerMobile: true,
    showNav: false,
		// active: false,
		// selectedColor: '',
		// selectedColorName: '',
		// colors: [{colorValue:'#00759A', colorName: 'Blue'},
    //         {colorValue:'#F7941D', colorName: 'Orange'}
    // ],
    color:null,
    quantity: 1,
    id: this.$route.params.id,
    prod:null,
    urlprod:"http://localhost:80/show1prod/",
    errorMessage: null,
    image:null
    };
  },

computed: {
		selector: function() {
			if(!this.selectedColor) {
				return 'Color';
			}
			else {
				return '<span style="background: ' + this.selectedColor + '"></span> ' + this.selectedColorName;
			}
		}
	},

  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
      this.bannerMobile = window.innerWidth <= 990;
    },
		// setColor: function(color, colorName) {
		// 	this.selectedColor = color;
		// 	this.selectedColorName = colorName;
		// 	this.active = false;
		// },
		// toggleDropdown: function() {
		// 	this.active = !this.active;
		// },
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
    ,
    async getOneProd(){
      const res =  await fetch(this.urlprod+this.id);
      console.log(res)
      // console.log(res.json())
      if(res.ok){
        const data = await res.json();
        console.log(data)
        return data
      } else {
        this.errorMessage = await res.json();
         console.log(this.errorMessage)
        // res.json().then((body) => {
        //   console.log(body.error)
        //   throw new Error(body.error);
        // }).catch((error) => {
        //   this.errorMessage = error.message
        //   console.log(this.errorMessage);
        // })
      }
    }
  },
  async created() {
    this.prod = await this.getOneProd();
    if(this.prod != undefined){
        var element = "http://localhost:80/files/";
        this.prod.productImage = element + this.prod.productImage;
        console.log( this.prod.productImage)
        this.image = this.prod.productImage
    } 
    
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>
