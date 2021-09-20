<template>
    <div class="manageUser">
    <!-- Navbar -->
    <div class="fixed w-full">
      <base-nav  v-if="showNav" />
      <base-nav-mobile  v-if="mobileView" /> 
        <!-- Error -->
            <div v-show="checktran">
                <div v-show="red" class="bg-error py-2 w-full text-white text-center">Error !! : {{errorMessage}}</div>
                <div v-show="green" class="bg-primary py-2 w-full text-white text-center">Success</div>
            </div>
    </div>
            <div class="container sm:pb-16 pb-10 sm:pt-0 pt-10 sm:px-9 px-3 mx-auto">
                <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 pt-6 pb-3 font-semibold text-xl">Manage User</h1> 
                <div class="bg-light grid grid-cols-4 py-4 px-4 rounded-lg gap-36">
                    <div class="flex col-span-2 gap-16">
                        <h1 class="title-font sm:text-xl text-lg font-semibold">User</h1>
                        <h1 class="title-font sm:text-xl text-lg font-semibold">Name</h1>
                    </div>
                    <div>
                        <h1 class="title-font sm:text-xl text-lg font-semibold">Role</h1>
                    </div>
                    <div>
                    </div>
                </div>
                <!-- <div v-for="product in allproduct" :key="product.productId"> -->
                    <div class="grid grid-cols-4 pt-6 px-4 gap-36">
                        <div class="flex items-center col-span-2">
                          <div class="sm:h-20 sm:w-20 h-16 mr-8 w-full rounded-full overflow-hidden">
                            <img src="../assets/profile.png" class="h-full w-full object-cover object-center">
                          </div>
                          <div class="grid grid-cols-2 gap-2">
                            <h2 class="title-font text-xl">First Name</h2>
                            <h2 class="title-font text-xl">Last Name</h2> 
                            </div>                         
                        </div>
                        <div class="flex items-center">
                            <select id="size" name="size" v-model="size" class="text-xl w-full rounded-full sm:py-2 py-1">
                            <option :value="Role" disabled class="">
                                Role
                            </option> 
                            <option v-for="product in prodsize" :key="product.productsizeId" :value="product.productsizeId">
                                {{ product.sizes.sizeValue }}
                            </option>
                            </select>
                        </div> 
                        <div @click="deleteP(product.productId)" class="flex items-center justify-end">
                            <span class="fi-rr-trash text-xl cursor-pointer hover:text-error transition duration-200"></span>
                        </div>
                    </div>

                <!-- </div> -->    
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
      showNav: false,
      errorMessage: null,
      red:false,
      green:false,
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
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>