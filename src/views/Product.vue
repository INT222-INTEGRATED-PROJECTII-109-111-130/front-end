<template>
  <div class="product">
  <!-- Navbar -->
  <base-nav v-if="showNav" />
  <base-nav-mobile v-if="mobileView" /> 

  <div class="container sm:px-7 px-3 py-8 mx-auto flex flex-wrap">
    <div class="sm:h-96 sm:w-2/4 h-64 w-full rounded-lg overflow-hidden">
      <img alt="feature" class="object-cover object-center h-full w-full" :src=image>
    </div>
    <div class="flex flex-wrap lg:w-1/2 lg:pl-8">

      <div class="flex flex-col lg:items-start items-center">

        <div class="flex-grow">
          <h1 class="sm:text-3xl font-semibold text-xl sm:mt-0 mt-2">Name</h1>
          <div class="flex justify-between mb-3">
            <p class="text-secondary sm:text-base text-xs">{{this.prod.brands.brandName}}</p>
            <p class="sm:text-base text-xs">{{this.prod.onsaleDate}}</p>           
          </div>

          <h2 class="sm:text-lg text-sm font-semibold">Description</h2>
          <p class="sm:text-base text-xs">
            {{this.prod.productDescription}}
          </p>
          
          <h1 class="text-secondary sm:text-3xl text-xl sm:my-4 my-3">THB {{this.prod.productPrice}}</h1>
    <!-- Dropdown -->
      <div class="grid sm:grid-cols-2 grid-cols-2 sm:gap-3 gap-2">
  
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
           
            <select id="size" name="size" v-model="size" class="w-full rounded-full sm:px-4 sm:py-2 py-1 bg-light appearance-none">

            <div class="flex justify-between">
              <div class="pr-1 text-gray">Select</div>
                <div>
                  <svg class="text-gray fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
                <option :value="null" disabled class="hidden">
                - Select Size -
                </option> 
              <option v-for="product in prod.productsizes" :key="product.productsizeId" :value="product.productsizeId">
                {{ product.sizes.sizeValue }}
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
    size:null,
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
      if(window.innerWidth <= 990){
          this.mobileView = true;
          this.showNav = false;
      } else if (window.innerWidth > 990){
          this.mobileView = false;
          this.showNav = true;
      }
      console.log(this.showNav)
      console.log(this.mobileView)
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
    this.handleView();
    this.prod = await this.getOneProd();
    if(this.prod != undefined){
        var element = "http://localhost:80/files/";
        this.prod.productImage = element + this.prod.productImage;
        console.log( this.prod.productImage)
        this.image = this.prod.productImage
    } 
    
    window.addEventListener("resize", this.handleView);
  },
};
</script>
