<template>
    <div class="manage">
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
            <div class="container sm:pb-16 pb-10 sm:pt-20 pt-10 sm:px-9 px-3 mx-auto">
                <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 pt-6 pb-3 font-semibold text-xl">Manage Products</h1> 
                <div class="bg-light px-10 py-5 rounded-lg">
                    <div class="flex w-full relative">
                        <span class="z-10 h-full text-md text-gray absolute justify-center pl-4 py-3">
                            <span class="fi-rr-search"></span>  
                        </span>
                        <input type="text" placeholder="Search" class="px-2 py-2 pr-4 placeholder-gray relative bg-white rounded-full text-lg outline-none focus:ring-2 focus:ring-primary w-full pl-9"/>
                        <div class="pl-3">
                          <router-link to="/add">
                            <button type="button" class="px-2 py-2 sm:w-40 w-full text-white bg-primary rounded-full transition duration-400 hover:bg-primarydark focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                Add Product
                            </button>
                          </router-link>
                        </div>
                    </div>
                </div>
                <div v-for="product in allproduct" :key="product.productId">
                    <div class="grid grid-cols-2 pt-6">
                        <div class="flex gap-6 items-center">
                          <div class="sm:h-24 sm:w-36 h-24 w-full rounded-lg overflow-hidden">
                            <img :src="product.productImage" class="h-full w-full object-cover object-center">
                          </div>
                            <h2 class="title-font sm:text-xl text-lg font-semibold">{{product.productName}}</h2>
                        </div>
                        <div class="flex justify-end gap-6 items-center">
                            <div @click="Edit(product.productId)">
                                <span class="fi-rr-pencil text-xl cursor-pointer hover:text-primary transition duration-200"></span>
                            </div>
                            <div  @click="deleteP(product.productId)">
                                <span class="fi-rr-trash text-xl cursor-pointer hover:text-error transition duration-200"></span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="acc">{{this.acc}}</div>              
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {

  },
  // async mounted() {
  //   var accid = this.$route.params.accid;
  //   const c = document.cookie
  //     .split(";")
  //     .find((c) => c.trim().startsWith("Token="));
  //   console.log(c ? c.substring("Token=".length) : null);
  //   console.log("data is", accid);
  //   if (accid !== undefined) {
  //     const res = await fetch("https://www-bluzeshirt.ddns.net/api/1acc/" + accid
  //     , {
  //       headers: {
  //         Authorization: `Bearer ${c.substring("Token=".length)}`, 
  //       },
  //     }
  //     );
  //     if (res.ok) {
  //       var data = await res.json();
  //       this.acc  = await data
  //       console.log(this.id);
  //     } else {
  //       console.log("data is", accid);
  //     }
  //   }
  // },
  data() {
    return {
      acc:null,
      mobileView: true,
      showNav: false,
      errorMessage: null,
      allproduct: [],
      checktran:null,
      red:false,
      green:false,
      urlprod:"https://www-bluzeshirt.ddns.net/api/showallproduct",
    };
  },
  methods: {
    Edit(a){
       this.$router.push({
          name: "Edit",
          params: {id:a, accid: this.acc.accountId },
        });
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
    async deleteP(id){
      console.log(id)
          const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      const res = await fetch("https://www-bluzeshirt.ddns.net/api/delprod/"+id, {  
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`, 
        }, 
        });
     if( res.ok){

            this.checktran = true;
            this.red = false;
            this.green = true;
            await this.getProduct();
            setTimeout(()=>{this.checktran = false } , 9000);
             
        }else {
            this.checktran = true;
            this.red = true;
            this.green = false;
            const data = await res.json()
            this.errorMessage = await data.message
            setTimeout(()=>{this.checktran = false } , 9000);
        }
    },
    async getProduct(){
     const res =  await fetch(this.urlprod);
     console.log(res)
      if(res.ok){
        var data = await res.json();
        this.allproduct = await data
      if(this.allproduct != undefined){
      for (let index = 0; index < this.allproduct.length; index++) {
        var element = "https://www-bluzeshirt.ddns.net/api/files/";
        this.allproduct[index].productImage = element + this.allproduct[index].productImage;
        
      }
    }
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
        if(this.acc.accountRole == 'Customer'){
          this.$router.push({ name: 'Home' })
        }
      } else {
        console.log("error");
      }
    }else{
        this.$router.push({ name: 'Home' })
      }
    this.handleView();
    await this.getProduct();
    // if(this.allproduct != undefined){
    //   for (let index = 0; index < this.allproduct.length; index++) {
    //     var element = "http://52.237.119.127:80/files/";
    //     this.allproduct[index].productImage = element + this.allproduct[index].productImage;
        
    //   }
    // }
    window.addEventListener("resize", this.handleView);
  },    
};
</script>