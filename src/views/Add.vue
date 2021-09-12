<template>
<div class="add">
  <!-- Navbar -->
    <base-nav class="sticky top-0 z-50 w-full" v-if="showNav" />
    <base-nav-mobile v-if="mobileView" /> 
      <!-- Error -->
        <div class="sticky top-0 z-50 w-full">
          <div class="bg-error py-2 text-white text-center">Text here</div>
          <div class="bg-primary py-2 text-white text-center">Text here</div>
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
                            <!-- <div v-for="colors in allcolor" :key="colors.colorId"> -->
                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">color</label>
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
                            <!-- <div v-for="colors in allcolor" :key="colors.colorId"> -->
                            <div class="flex items-start">
                            <!-- size loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="size" name="size" type="checkbox" class="h-4 w-4 rounded" v-model="size"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="size" class="font-medium text-gray-700">size</label>
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
                        <p class="pl-1"> Please Enter Price</p>
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
      showNav: false,
      name: '',
      description: '',
      brand: null,
      price: '',
      image: '',
      imageshow: '',
      color: null,
      size: null,
      errorName: false,
      errorDescription: false,
      errorBrand: false,
      errorPrice: false,
      errorImage: false,
      errorColor: false,
      errorSize: false,
    };
  },
  methods: {
    addProduct() {
      this.errorName = this.name === '' ? true : false;
      this.errorDescription = this.description === '' ? true : false;
      this.errorBrand = this.brand === null ? true : false;
      this.errorPrice = this.price === '' ? true : false;
      this.errorImage = this.image === null ? true : false;
      this.errorColor = this.colorspicked.length == 0 ? true : false;
      this.errorSize = this.size.length == 0 ? true : false;

      if (
        this.errorName === false &&
        this.errorDescription === false &&
        this.errorBrand === false &&
        this.errorPrice === false &&
        this.errorImage === false &&
        this.errorColor === false &&
        this.errorSize === false
      ) {
        this.addNewProduct({
          id: this.prodid,
          name: this.name,
          description: this.description,
          brand: this.brand,
          date: this.date,
          price: this.price,
          image: this.image.name,
        });
        console.log("startupload");
        this.addUploadImage(this.image);
        console.log("endupload");
        this.sleep(4000);
        console.log("con");
        this.loopfethpc();
        this.colorspicked = [];
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
      console.log(this.image);
      console.log(this.image.name);
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
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>