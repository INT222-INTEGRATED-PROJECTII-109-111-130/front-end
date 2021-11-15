<template>
  <div class="product">
  <!-- Navbar -->
    <base-nav  v-if="showNav" />
    <base-nav-mobile  v-if="mobileView" /> 
      <!-- Error -->
        <div v-show="checktran">
          <div v-show="red" class="bg-error py-2 w-full text-white text-center">Error !! : {{errorMessage}}</div>
          <div v-show="green" class="bg-primary py-2 w-full text-white text-center">Success</div>
        </div>
        <!-- Product -->
          <div class="sm:px-28 px-6 mx-auto sm:pt-10 grid sm:grid-cols-2 grid-cols-1 sm:gap-8">
            <div class="sm:h-96 sm:w-2/4 h-64 w-full rounded-lg overflow-hidden">
              <img alt="feature" class="object-cover object-center h-full w-full" :src=image>
            </div>
              <div class="mx-auto">
                <div class="flex flex-col lg:items-start items-center">
                  <div class="flex-grow">
                    <h1 class="sm:text-3xl font-semibold text-xl sm:mt-0 mt-2">Product Name</h1>
                      <div class="flex justify-between mb-3">
                        <p class="text-secondary sm:text-base text-xs">{{prodbrand}}</p>
                        <p class="sm:text-base text-xs">{{proddate}}</p>
                      </div>
                        <h2 class="sm:text-lg text-sm font-semibold">Description</h2>
                        <p class="sm:text-base text-xs">{{proddes}}</p>
                        <h1 class="text-secondary sm:text-3xl text-xl sm:my-4 my-3">THB {{prodprice}}</h1>
                          <div class="grid sm:grid-cols-2 grid-cols-2 sm:gap-3 gap-2"> 
                          <!-- Color -->
                            <div>
                              <label class="sm:text-sm text-xs flex text-primary">Color</label>
                                <select id="color" name="color" v-model="color" class="w-full rounded-full sm:px-4 sm:py-2 py-1 bg-light focus:ring-2 focus:ring-primary">
                                  <div class="flex justify-between">
                                    <div>
                                      <svg class="text-gray fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                      </svg>
                                    </div>
                                  </div>
                                    <option :value="null" disabled class="hidden"> - Select color - </option> 
                                    <option v-for="product in prodcol" :key="product.productcolorId" :value="product">
                                      {{ product.colors.colorName }}
                                    </option>
                                </select>
                            </div> 
                          <!-- Size -->
                            <div>
                              <label class="sm:text-sm text-xs flex text-primary">Size</label>
                                <select id="size" name="size" v-model="size" class="w-full rounded-full sm:px-4 sm:py-2 py-1 bg-light focus:ring-2 focus:ring-primary">
                                  <div class="flex justify-between">
                                    <div>
                                      <svg class="text-gray fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                      </svg>
                                    </div>
                                  </div>
                                    <option :value="null" disabled class="hidden">- Select Size -</option> 
                                    <option v-for="product in prodsize" :key="product.productsizeId" :value="product.sizes.sizeValue">
                                      {{ product.sizes.sizeValue }}
                                    </option>
                                </select>
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
                        <!-- <router-link 
                              :to="{
                                  name: 'Basket',
                                  params: { accid: 300001 },
                                }"
                        > -->
                        <base-button @click="addBasket()" buttonLabel="Add to Basket"/> 
                      <!-- </router-link> -->
                  </div>
                </div>
              </div>
            <div v-show="acc">{{this.acc}}</div>
          </div>
        </div>
       
</template>

<script>
// @ is an alias to /src

export default {
	el: '#color-picker',
  components: {
  },
  //   async mounted() {
  //   var accid = this.$route.params.accid;
  //   const c = document.cookie
  //     .split(";")
  //     .find((c) => c.trim().startsWith("Token="));
  //   console.log(c ? c.substring("Token=".length) : null);
  //   console.log("data is", accid);
  //   if (accid !== undefined) {
  //     const res = await fetch("http://52.237.119.127:3000/1acc/" + accid, {
  //       headers: {
  //         Authorization: `Bearer ${c.substring("Token=".length)}`,
  //       },
  //     });
  //     if (res.ok) {
  //       var data = await res.json();
  //       this.acc = await data;
  //     } else {
  //       console.log("data is", accid);
  //     }
  //   }
  // },
  data() {
    return {
    mobileView: true,
    bannerMobile: true,
    showNav: false,
    color:null,
    prodcol:null,
    prodsize:null,
    prodbrand:null,
    proddate :null,
    proddes :null,    
    prodprice :null,
    size:null,
    quantity: 1,
    id: this.$route.params.id,
    user:this.$route.params.accid,
    acc:null,
    prod:null,
    urlprod:"http://52.237.119.127:3000/show1prod/",
    checktran:null,
    errorMessage: null,
    red:true,
    green:false,
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
		},
    mexxage(){
      return this.errorMessage == null ?"" :this.errorMessage ;
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
    },
    increment () {
      this.quantity++
    },
    decrement () {
      if(this.quantity === 1) {
        this.checktran = true;
            this.red = true;
            this.green = false;
            this.errorMessage = 'Negative quantity not allowed'
            console.log (this.errorMessage)
            setTimeout(()=>{this.checktran = false } , 9000);
       
      } else {
        this.quantity--
      }
    },
    async addBasket(){
      console.log(this.size)
      var url = "http://52.237.119.127:3000/addcart"
      const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      console.log(c.substring("Token=".length))
       const res = await fetch(url, {
          method: "POST",
           headers: {
             Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            cartId: 1,
            accountId: this.user,
            productId: this.prod.productId,
            productName: this.prod.productName,
            productDescription: this.prod.productDescription,
            productPrice: this.prod.productPrice,
            productImage: this.prod.productImage,
            sizeValue: this.size,
            brandName: this.prod.brands.brandName,
            colorName: this.color.colors.colorName,
            colorValue: this.color.colors.colorValue,
            quantity: this.quantity
          })
        });
        if( res.ok){
            this.checktran = true;
            this.red = false;
            this.green = true;
            setTimeout(()=>{this.checktran = false } , 9000);
            await this.$router.push({ name: 'Basket', params: { accid: this.acc.accountId } })
        }else {
            this.checktran = true;
            this.red = true;
            this.green = false;
            this.errorMessage = await res.json().message
            console.log (this.errorMessage)
            setTimeout(()=>{this.checktran = false } , 9000);
        }

      // if(this.errorMessage != null){
      //    this.checktran = true ;
      //    this.red = true;
      //    this.errorMessage = "asd"
      //  }else{
      //    this.checktran = true ;
      //    this.red = false;
      //    this.errorMessage = 'i heer tuuu'
      //  }

    }
    ,
    async getOneProd(){
      console.log(this.user)
      const res =  await fetch(this.urlprod+this.id);
      //console.log(res)
      if(res.ok){
        const data = await res.json();
        //console.log(data)
        return data
      } else {
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json().message;
        //  setTimeout(()=>{this.checktran = false } , 9000);
      }
    },
  //   async getacc() {
    
  //   const c = document.cookie
  //     .split(";")
  //     .find((c) => c.trim().startsWith("Token="));
  //   console.log(c ? c.substring("Token=".length) : null);
  //   console.log(this.user);
  //   if (this.user !== undefined) {
  //     const res = await fetch("http://52.237.119.127:3000/1acc/" + this.user, {
  //       headers: {
  //         Authorization: `Bearer ${c.substring("Token=".length)}`,
  //       },
  //     });
  //     if (res.ok) {
  //       var data = await res.json();
  //       return  data;
  //     } else {
  //       console.log("data is", this.user);
  //     }
  //   }
  // },
  },
  async created() {
    this.handleView();
    if(document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="))){
      console.log("เข้า")
      const c = document.cookie
        .split(";")
        .find((c) => c.trim().startsWith("Token="));
      const acc = document.cookie
        .split(";")
        .find((c) => c.trim().startsWith("accid="))
      acc.trim()
      console.log(acc.trim().substring("accid=".length))
      const res = await fetch("http://52.237.119.127:3000/1acc/" + acc.trim().substring("accid=".length), {
        headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },});
      if (res.ok) {
        console.log("เข้า cookie")
        this.acc  = await res.json();
      } else {
        console.log("error");
      }
    }
      // this.acc = await this.getacc();
      // console.log(this.acc)
    
    this.prod = await this.getOneProd();
    console.log(this.prod)
    if(this.prod != undefined){
        var element = "http://52.237.119.127:3000/files/";
        this.prod.productImage 
        console.log( this.prod.productImage)
        this.image = element +this.prod.productImage
    } 
    this.prodcol  = await this.prod.productcolors
    this.prodsize = await this.prod.productsizes
    this.prodbrand = await this.prod.brands.brandName
    this.proddate = await this.prod.onsaleDate
    this.proddes = await this.prod.productDescription    
    this.prodprice = await this.prod.productPrice

    window.addEventListener("resize", this.handleView);
  },
};
</script>
