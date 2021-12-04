<template>
<div class="add">
  <!-- Navbar -->
      <base-nav  v-if="showNav" />
      <base-nav-mobile  v-if="mobileView" /> 
        <!-- Error -->
          <div v-show="checktran">
            <div v-show="red" class="bg-error py-2 w-full text-white text-center">Error !! : {{errorm}}</div>
            <div v-show="green" class="bg-primary py-2 w-full text-white text-center">Success</div>
          </div>
    <!-- Form -->
    <form @submit.prevent="addProduct">
    <div class="container sm:pb-16 pb-10 sm:px-9 px-3 mx-auto">
        <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 py-3 font-semibold text-xl">Add Product</h1>
        <div class="grid grid-cols-2 gap-x-32 gap-y-4">
            <!-- Product Name -->
            <div>
                <label class="text-sm flex text-primary pb-1">Product Name</label>
                <input type="text" placeholder="Product Name" name="name" id="name" v-model="name" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
                <div v-if="errorName"> 
                    <span class="fi-rr-exclamation text-error flex items-center text-xs pt-1 pl-1">
                        <p class="pl-1"> Please Enter Name</p>
                    </span>
                </div>
            </div>
            <!-- Product Description -->
            <div class="col-start-1 row-span-2">
                <label class="text-sm flex text-primary pb-1">Product Description</label>
                <textarea rows="4" cols="50" type="text" name="description" id="description" placeholder="Description" v-model="description" class="pl-4 py-3 placeholder-gray relative bg-light rounded-xl outline-none focus:ring-2 focus:ring-primary w-full"/>
                <div v-if="errorDescription"> 
                    <span class="fi-rr-exclamation text-error flex items-center text-xs pl-1">
                        <p class="pl-1"> Please Enter Description</p>
                    </span>
                </div>            
            </div>
            <!-- Color -->
            <div class="col-start-1">
                <label class="text-sm flex text-primary">Color</label>
                    <fieldset>
                        <div class="space-y-3">
                        <!-- Checkbox color -->
                            <div class="grid grid-cols-5 gap-y-1.5 items-start">
                            <div v-for="colors in allcolor" :key="colors.colorId"> 
                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors.colorId" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">{{colors.colorName}}</label>
                                </div>
                            </div>
                            </div>
                            <div v-if="errorColor"> 
                                <span class="fi-rr-exclamation text-error flex items-center text-xs pl-1">
                                    <p class="pl-1"> Please Enter Description</p>
                                </span>
                            </div>   
                            </div>
                         </div>
                    </fieldset>
            </div>
            <!-- Size -->
            <div class="col-start-1">
                <label class="text-sm flex text-primary">Size</label>
                    <fieldset>
                        <div class="space-y-3">
                        <!-- Checkbox size -->
                            <div class="grid grid-cols-5 gap-y-1.5 items-start">
                             <div v-for="size in allsize" :key="size.sizeId">
                            <div class="flex items-start">
                            <!-- size loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="size" name="size" type="checkbox" class="h-4 w-4 rounded" :value="size.sizeId" v-model="sizepicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="size" class="font-medium text-gray-700">{{size.sizeValue}}</label>
                                </div>
                            </div>
                             </div>
                            <div v-if="errorSize"> 
                                <span class="fi-rr-exclamation text-error flex items-center text-xs pt-1 pl-1">
                                    <p class="pl-1"> Please Enter Name</p>
                                </span>
                            </div>
 
                            </div>
                         </div>
                    </fieldset>
            </div>
            <!-- Price -->
            <div class="col-start-2 row-start-1">
                <label class="text-sm flex text-primary pb-1">Price</label>
                <input type="text" placeholder="Ex. 300.00" v-model="price" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
                <div v-if="errorPrice"> 
                    <span class="fi-rr-exclamation text-error flex items-center text-xs pl-1 pt-1">
                        <p class="pl-1"> Please Enter Price or Number</p>
                    </span>
                </div>             
            </div>
            <!-- Brand -->
            <div class="col-start-2 row-start-2">
                <label class="text-sm flex text-primary">Brand</label>
                <select id="brand" name="brand" v-model="brand" class="w-full rounded-full sm:px-4 sm:py-2 py-1 bg-light appearance-none">
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
                <option v-for="brands in allbrand" :key="brands.brandId" :value="brands.brandId">
                    {{ brands.brandName }}
                </option>
                </select>
                <div v-if="errorBrand"> 
                    <span class="fi-rr-exclamation text-error flex items-center text-xs pl-1 pt-1">
                        <p class="pl-1"> Please Enter Brand</p>
                    </span>
                </div>  
            </div>
            <!-- Image -->
            <div class="col-start-2 row-start-3 row-span-4">
                <label class="text-sm flex text-primary">Image</label>
            <div class="mt-2 flex justify-center px-6 py-10 border-2 border-gray border-dashed rounded-xl">
              <div class="space-y-1 text-center">
                <div v-if="!image">
                  <svg class="mx-auto h-12 w-12 text-gray" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div v-else>
                  <img :src="imageshow" class="object-cover object-top w-auto max-h-96"/>
                </div>
                <div class="flex text-sm justify-center">
                    <p class="text-gray pr-1">Upload image</p>
                  <label for="file-input" class="cursor-pointer rounded-md font-medium text-indigo-400 hover:text-indigo-300 transition duration-300 ease-in-out">
                     <span class="text-secondary"> here</span>
                    <input id="file-input" type="file" class="hidden" @change="uploadPhoto($event)"/>
                  </label>
                </div>
                
              </div>
            </div>
            <div v-if="errorImage"> 
                <span class="fi-rr-exclamation text-error flex items-center text-xs pl-1 pt-1">
                    <p class="pl-1"> No File Chosen</p>
                </span>
            </div>  
                
            </div>
            <base-button type="submit" class="col-start-2" buttonLabel="Add"/>
            <router-link to="/" class="text-gray col-start-2 text-center hover:text-opacity-80">Cancel</router-link> 
        </div>

    </div>
    </form>
    <!-- <div v-show="acc">{{this.acc}}</div> -->
  </div>
</template>

<script>
// @ is an alias to /src 

export default {
  data() {
    return {
      acc:null,
      mobileView: true,
      showNav: false,
      name: '',
      description: '',
      brand: null,
      price: '',
      image: '',
      imageshow: '',
      colorspicked: [],
      sizepicked: [],
      errorName: false,
      errorDescription: false,
      errorBrand: false,
      errorPrice: false,
      errorDate: false,
      errorImage: false,
      errorColor: false,
      errorSize: false,
      checktran:null,
      errorMessage: null,
      red:false,
      green:false,
      allcolor:[],
      allbrand:[],
      allsize:[],
    };
  },computed:{
    errorm(){
      if(this.errorMessage != null){
          return this.errorMessage.message
      }
      return this.errorMessage
    }
  },
  methods: {
    addProduct() {
      this.errorName = this.name === '' ? true : false;
      this.errorDescription = this.description === '' ? true : false;
      this.errorBrand = this.brand === null ? true : false;
      this.errorPrice = this.price === '' ? true : false;
      this.errorPrice = isNaN(parseFloat(this.price)) ? true : false;
    
      this.errorImage = this.image === null ? true : false;
      this.errorColor = this.colorspicked.length == 0 ? true : false;
      this.errorSize = this.sizepicked.length == 0 ? true : false;

      if (
        this.errorName === false &&
        this.errorDescription === false &&
        this.errorBrand === false &&
        this.errorPrice === false &&
        this.errorImage === false &&
        this.errorColor === false &&
        this.errorSize === false
      ) {
          this.add({
          name: this.name,
          description: this.description,
          brand: this.brand,
          price: this.price,
          image: this.image.name,
        },this.colorspicked
        ,this.image
        ,this.sizepicked
        );
      this.image = null;
      this.imageshow = null;
      }
    },
    uploadPhoto(e) {
      this.image = e.target.files[0];
      this.imageshow = e.target.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.imageshow = e.target.result;
      };
      reader.readAsDataURL(this.imageshow);
    },
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
    async add(prod,color,image,size){
            try {
          var dateString = new Date();
        //  console.log(dateString);
        //  console.log(prod);
        //  console.log(color);
        //  console.log(size);
         var formData = new FormData();
        formData.append("prod", JSON.stringify({
            productId: 1,
            productName: prod.name,
            productDescription: prod.description,
            onsaleDate: dateString,
            productPrice: parseFloat(prod.price),
            productImage: prod.image,
            brandId: prod.brand,
          }));
        formData.append("prodcolor", color);
        formData.append("file", image, image.name);
        formData.append("size", size);
        const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
        var url = "https://www-bluzeshirt.ddns.net/api/"
        const res = await fetch(url+"addprod", {
          method: "POST",
           headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`, 
          },
          body: formData,
        });
        if( res.ok){
            this.checktran = true;
            this.red = false;
            this.green = true;
            setTimeout(()=>{this.checktran = false } , 9000);
        }else {
            this.checktran = true;
            this.red = true;
            this.green = false;
            this.errorMessage = await res.json()
            console.log (this.errorMessage)
            setTimeout(()=>{this.checktran = false } , 9000);
        }
      } catch (error) {
        alert(`Could not add ${error}`);
      }
      
      this.name = "";
      this.description = "";
      this.brand = null;
      this.colorspicked = [];
      this.sizepicked = [];
      this.price = "";
      this.image = null;
      this.imageshow = null;
    }
    ,
    async getall(){
      var url = "https://www-bluzeshirt.ddns.net/api/"
      const resbrand =  await fetch(url+"showallbrand");
      const rescolor =  await fetch(url+"showallcolor");
      const ressize =  await fetch(url+"showallsize");
      if(resbrand.ok && rescolor.ok){
        this.allbrand = await resbrand.json();
        this.allcolor = await rescolor.json();
        this.allsize = await ressize.json();
      }
    }
  },
  async created() {
    
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
      const res = await fetch("https://www-bluzeshirt.ddns.net/api/1acc/" + acc.trim().substring("accid=".length), {
        headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },});
      if (res.ok) {
        console.log("เข้า cookie")
        this.acc  = await res.json();
        console.log(this.acc.accountRole)
        if(this.acc.accountRole == 'Customer'){
          this.$router.push({ name: 'Home' })
        }
      } else {
            this.checktran = true;
            this.red = true;
            this.green = false;
            this.errorMessage = await res.json()
            console.log (this.errorMessage)
            setTimeout(()=>{this.checktran = false } , 9000);
      }
    }else{   
      this.$router.push({ name: 'Home' })
    }
    await this.getall();
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>