<template>
  <div class="home">
    <!-- Navbar -->
    <div class="fixed w-full z-50">
      <base-nav v-if="showNav" />
      <base-nav-mobile v-if="mobileView" />
      <!-- Error -->
      <div v-show="checktran">
        <div v-show="red" class="bg-error sm:mt-0 mt-14 sm:py-2 py-1 sm:text-base text-xs w-full z-50 text-white text-center">
          Error !! : {{ errorm }}
        </div>
        <div v-show="green" class=" bg-primary sm:py-2 py-1 sm:text-base text-xs w-full z-50 text-white text-center">
          Success
        </div>
      </div>
    </div>
    <!-- Banner desktop -->
    <img src="../assets/Banner-desk.png" class="object-center mx-auto sm:px-56 lg:px-28 pt-28 w-full" v-if="!bannerMobile"/>
    <!-- Banner mobile -->
    <img src="../assets/Banner-mobile.png" class="mx-auto pt-20 px-6 w-full" v-if="bannerMobile"/>
    
    <!-- <div v-show="id">{{ this.id }}
      <div  @click="Add()">Add</div> 
      <div  @click="Manage()">Manage</div>
      <div  @click="EditProfile()">EditProfile</div>
      <div  @click="ManageUser()">ManageUser</div>
      <div  @click="delcook()">delcook</div>
    </div> -->
    
    
    <!-- Product List-->
    <div class="sm:pb-16 pb-10 sm:px-28 px-6 mx-auto">
      <h1 class="sm:text-4xl sm:py-7 py-3 font-semibold text-xl">Products</h1>
      <div class="grid sm:grid-cols-4 sm:gap-6 gap-2 grid-cols-2">
        <div v-for="product in allproduct" :key="product.productId">
          <div @click="passid(product.productId)" class="bg-white sm:rounded-lg rounded-md shadow-xl hover:shadow-2xl transition duration-500">
            <a class=" block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
              <img class="object-cover object-center w-full h-full block" :src="product.productImage"/>
            </a>
            <div class="sm:my-3 sm:mx-4 my-2 mx-3">
              <h2 class="title-font sm:text-lg text-sm font-semibold">
                {{ product.productName }}
              </h2>
              <p class="mt-1 text-primary sm:text-base text-xs">
                THB {{ product.productPrice }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      mobileView: true,
      bannerMobile: true,
      showNav: false,
      errorMessage: null,
      allproduct: [],
      urlprod: "https://www-bluzeshirt.ddns.net/api/showallproduct",
      checktran: false,
      red: false,
      green: false,
      search: "",
      id: null,
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
    Add(){
      this.$router.push({
          name: "Add",
          params: { accid: this.id.accountId },
        });
    },
    Manage(){
       this.$router.push({
          name: "Manage",
          params: { accid: this.id.accountId },
        });
    },
    ManageUser(){
       this.$router.push({
          name: "ManageUser",
          params: { accid: this.id.accountId },
        });
    },
    EditProfile(){
       this.$router.push({
          name: "EditProfile",
          params: { accid: this.id.accountId },
        });
    },
    passid(a) {
      // console.log(this.id.accountId);
      // console.log(a);
      if (this.id != null) {
        this.$router.push({
          name: "Product",
          params: { id: a, accid: this.id.accountId },
        });
      }
      if (this.id == null) {
        this.$router.push({
          name: "Product",
          params: { id: a},
        });
      }
    },
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      if (window.innerWidth <= 990) {
        this.mobileView = true;
        this.showNav = false;
      } else if (window.innerWidth > 990) {
        this.mobileView = false;
        this.showNav = true;
      }
      this.bannerMobile = window.innerWidth <= 990;
    },
    delcook(){
        document.cookie = 'Token=ok;expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        document.cookie = 'accid=ok;expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        this.$router.go()
    }
    ,
    async getProduct() {
      const c = document.cookie
        .split(";")
        .find((c) => c.trim().startsWith("Token="));
      console.log(c ? c.substring("Token=".length) : null);
      const res = await fetch(
        this.urlprod
        // , {
        //   mode: "cors",
        //   method: "GET",
        //   headers: {
        //     Authorization: `Bearer ${c.substring("Token=".length)}`,
        //     Accept: "application/json",
        //   },
        // }
      );
      console.log(res);
      if (res.ok) {
        var data = await res.json();
        return data;
      } else {
        this.errorMessage = await res.json();
        alert(this.errorMessage.message);
      }
    },
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
        this.id  = await res.json();

      } else {
         this.checktran = true;
            this.red = true;
            this.green = false;
            this.errorMessage = await res.json()
            // this.errorm(this.errorMessage)
            console.log (this.errorMessage)
            setTimeout(()=>{this.checktran = false } , 9000);
        console.log("error");
      }
    }
    this.handleView();
    this.allproduct = await this.getProduct();
    if (this.allproduct != undefined) {
      for (let index = 0; index < this.allproduct.length; index++) {
        var element = "https://www-bluzeshirt.ddns.net/api/files/";
        this.allproduct[index].productImage =
          element + this.allproduct[index].productImage;
        //console.log(this.allproduct[index].productImage);
      }
    }
    window.addEventListener("resize", this.handleView);
  },
};
</script>