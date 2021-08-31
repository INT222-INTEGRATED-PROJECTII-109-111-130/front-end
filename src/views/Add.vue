<template>
<div class="add">
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

    <div class="container sm:pb-16 pb-10 sm:px-9 px-3 mx-auto">
        <h1 class="sm:text-4xl sm:py-7 py-3 font-medium text-xl">Add Product</h1>
        <div class="grid grid-cols-2 gap-x-32 gap-y-4">
            <!-- Product Name -->
            <div>
                <label class="text-sm flex text-primary pb-1">Product Name</label>
                <input type="email" placeholder="example@mail.com" v-model="login" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <!-- Product Description -->
            <div class="col-start-1 row-span-2">
                <label class="text-sm flex text-primary pb-1">Product Description</label>
                <textarea rows="4" cols="50" type="text" placeholder="example@mail.com" v-model="login" class="pl-4 py-3 placeholder-gray relative bg-light rounded-xl outline-none focus:ring-2 focus:ring-primary w-full"/>
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

                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">color</label>
                                </div>
                            </div>
                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">color</label>
                                </div>
                            </div>
                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">color</label>
                                </div>
                            </div>
                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">color</label>
                                </div>
                            </div>
                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">color</label>
                                </div>
                            </div>
                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">color</label>
                                </div>
                            </div>
                            <!-- </div> -->
                                <!-- <p class="text-red-500 text-xs font-light" v-if="errorColor">"Plese Select Any Color"</p> -->
                            </div>
                         </div>
                    </fieldset>
            </div>
            <!-- Size -->
            <div class="col-start-1">
                <label class="text-sm flex text-primary">Size</label>
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

                            <div class="flex items-start">
                            <!-- color loop -->
                                <div class="rounded flex items-center h-5">
                                    <input id="color" name="color" type="checkbox" :value="colors" class="h-4 w-4 rounded" v-model="colorspicked"/>
                                </div>
                                <div class="ml-2 mr-4 text-sm">
                                    <label for="color" class="font-medium text-gray-700">color</label>
                                </div>
                            </div>
                            <!-- </div> -->
                                <!-- <p class="text-red-500 text-xs font-light" v-if="errorColor">"Plese Select Any Color"</p> -->
                            </div>
                         </div>
                    </fieldset>
            </div>
            <!-- Price -->
            <div class="col-start-2 row-start-1">
                <label class="text-sm flex text-primary pb-1">Price</label>
                <input type="email" placeholder="example@mail.com" v-model="login" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
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
            <!-- <p class="text-red-500 text-xs font-light" v-if="errorBrand">
              "Please Select Any Brand"
            </p> -->
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
                <!-- <p class="text-red-500 text-xs font-light" v-if="errorImage">"No File Chosen"</p> -->
                
            </div>
       <base-button class="col-start-2" buttonLabel="Add"/> 
        </div>

    </div>
    </div>
</template>

<script>
// @ is an alias to /src

import BaseNavMobile from "../components/BaseNavMobile.vue";
import BaseButton from "../components/BaseButton.vue";  

export default {
  components: {
    BaseNavMobile,
    BaseButton
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>