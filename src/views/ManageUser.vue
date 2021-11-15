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
                    <div v-for="acc in allAcc" :key="acc.accountId" class="grid grid-cols-4 pt-6 px-4 gap-36">
                        <div class="flex items-center col-span-2">
                          <div class="sm:h-20 sm:w-20 h-16 mr-8 w-full rounded-full overflow-hidden">
                            <img src="../assets/profile.png" class="h-full w-full object-cover object-center">
                          </div>
                          <div class="grid grid-cols-2 gap-2">
                            <h2 class="title-font text-xl">{{acc.firstName}}</h2>
                            <h2 class="title-font text-xl">{{acc.lastName}}</h2> 
                            </div>                         
                        </div>
                        <div class="flex items-center">
                            <select id="size" name="size" :value="acc.accountRole"  @change="onChange(role,acc.accountId)" class="text-xl w-full rounded-full sm:py-2 py-1">
                            <option :value="null" disabled class="hidden">
                                Role
                            </option> 
                            <option value="Admin">Admin</option>
                            <option value="Customer">Customer</option>
                            <option value="Seller">Seller</option>
                            </select>
                        </div> 
                        <div @click="deleteA(acc.accountId)" class="flex items-center justify-end">
                            <span class="fi-rr-trash text-xl cursor-pointer hover:text-error transition duration-200"></span>
                        </div>
                    </div>

                <!-- </div> -->    
            </div>
            <div v-show="acc">{{this.acc}}</div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {

  },
  //  async mounted() {
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
  //       console.log(data);
  //       this.acc = await data;
  //       return data;
  //     } else {
  //       console.log("data is", accid);
  //     }
  //   }
  // },
  data() {
    return {
      mobileView: true,
      showNav: false,
      errorMessage: null,
      red:false,
      green:false,
      acc:null,
      role:null,
      allAcc:[]
    };
  },
  methods: {
    async onChange(event,a) {
      // console.log(event.target.value)
      console.log(event)
      console.log(a)
      const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      console.log(c.substring("Token=".length))
      try {
        const res = await fetch("http://52.237.119.127:3000/updateroleacc", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            accountId: a,
            firstName: "pass",
            lastName: "pass",
            email: "pass",
            password:"pass",
            accountRole: event,
          }),
        });
        await res.json();
      } catch (error) {
        console.log(`Could not add ${error}`);
      }
    },
    async deleteA(a){
      console.log(a)
       const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      console.log(c.substring("Token=".length))
      try {
        const res = await fetch("http://52.237.119.127:3000/delaccount/"+a, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
        });
        await res.json();
      } catch (error) {
        console.log(`Could not add ${error}`);
      }
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
    async getAllAcc(){
          const c = document.cookie
          .split(";")
          .find((c) => c.trim().startsWith("Token="));
      const res =  await fetch("http://52.237.119.127:3000/showallaccount",{
         headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },
      });

      if(res.ok){
        this.allAcc = await res.json();
        console.log(this.allAcc)
       
      } else {
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json().message;
        console.log(this.errorMessage)
        //  setTimeout(()=>{this.checktran = false } , 9000);
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
    await this.getAllAcc();
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>