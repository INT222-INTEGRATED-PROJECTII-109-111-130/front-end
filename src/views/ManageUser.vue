<template>
    <div class="manageUser">
    <!-- Navbar -->
    <div class="fixed w-full z-50">
      <base-nav  v-if="showNav" />
      <base-nav-mobile  v-if="mobileView" /> 
        <!-- Error -->
            <div v-show="checktran">
                <div v-show="red" class="bg-error py-2 w-full text-white text-center">Error !! : {{errorm}}</div>
                <div v-show="green" class="bg-primary py-2 w-full text-white text-center">Success</div>
            </div>
          </div>
            <div class="container sm:pb-16 pb-10 sm:pt-20 pt-10 sm:px-9 px-3 mx-auto">
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
                            <select id="size" name="size" :value="acc.accountRole"  @change="onChange($event,acc.accountId)" class="text-xl w-full rounded-full sm:py-2 py-1">
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
               
            </div>
            <div class="container sm:pb-16 pb-10 sm:pt-20 pt-10 sm:px-9 px-3 mx-auto">
                <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 pt-6 pb-3 font-semibold text-xl">Manage Brand</h1> 
                <div v-show="conb">
                  <p>Are you for delete this brand </p>
                  <div @click="deleteCB()" class="flex items-center justify-end">
                            <div> Confirm Delete</div>
                  </div>
                </div>
                       <div v-for="brand in allBrand" :key="brand.brandId" class="grid grid-cols-4 pt-6 px-4 gap-36">
                        <div class="flex items-center col-span-2">
                          <div class="grid grid-cols-2 gap-2">
                            <h2 class="title-font text-xl">{{brand.brandName}}</h2>
                          </div>                         
                        </div>
                        <div @click="deleteB(brand.brandId)" class="flex items-center justify-end">
                            <span class="fi-rr-trash text-xl cursor-pointer hover:text-error transition duration-200"></span>
                        </div>
                  </div>
                <form @submit.prevent="addb">
                 
                  <div>
                  <label class="text-xs flex text-primary pb-1">Brand Name</label>
                  <input  v-on:keydown='key' type="text" placeholder="Brand Name" name="vbn" id="vbn" v-model="vbn" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
                  <base-button type="submit" buttonLabel="ADD"/>
                  </div>
                  
                </form> 
            </div>
             <div class="container sm:pb-16 pb-10 sm:pt-20 pt-10 sm:px-9 px-3 mx-auto">
                <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 pt-6 pb-3 font-semibold text-xl">Manage Color</h1>
                <div v-show="conc">
                  <p>Are you for delete this color </p>
                  <div @click="deleteCC()" class="flex items-center justify-end">
                            <div> Confirm Delete</div>
                  </div>
                </div>
                       <div v-for="color in allColor" :key="color.colorId" class="grid grid-cols-4 pt-6 px-4 gap-36">
                        <div class="flex items-center col-span-2">
                          <div class="grid grid-cols-2 gap-2">
                            <h2 class="title-font text-xl">{{color.colorName}}</h2>
                          </div>                         
                        </div>
                        <div @click="deleteC(color.colorId)" class="flex items-center justify-end">
                            <span class="fi-rr-trash text-xl cursor-pointer hover:text-error transition duration-200"></span>
                        </div>
                  </div> 
                <form @submit.prevent="addc">
                 
                  <div>
                  <label class="text-xs flex text-primary pb-1">Color Name</label>
                  <input  v-on:keydown='key' type="text" placeholder="Brand Name" name="vcn" id="vcn" v-model="vcn" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
                  <label class="text-xs flex text-primary pb-1">Color Code</label>
                  <input  v-on:keydown='key' type="text" placeholder="Brand Name" name="vcid" id="vcid" v-model="vcid" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
                  <base-button type="submit" buttonLabel="ADD"/>
                  </div>
                  
                </form> 
            </div>
            <div v-show="acc">{{this.acc}}</div>
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
      acc:null,
      role:null,
      allAcc:[],
      allBrand:[],
      allColor:[],
      conb:false,
      conc:false,
      idcon:null,
      vbn:null,
      vcn:null,
      vcid:null 
    };
  },
  methods: {
    async addb(){
        console.log(this.vbn)
         const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
       const res = await fetch("https://www-bluzeshirt.ddns.net/api/addbrand", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            brandId: 1,
            brandName: this.vbn,
          }),
        });
      if(res.ok){
        location.reload();
      } else {
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json();
        setTimeout(()=>{this.checktran = false } , 2000);
      }
    },
      async addc(){
        console.log(this.vbc)
        console.log(this.vcn)
        console.log(this.vcid)
         const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
       const res = await fetch("https://www-bluzeshirt.ddns.net/api/addcolor", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            colorId: 1,
            colorName: this.vcn,
            colorValue: this.vcid
          }),
        });
      if(res.ok){
        location.reload();
      } else {
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json();
        setTimeout(()=>{this.checktran = false } , 2000);
      }
    },
    async onChange(event,a) {
      console.log(event.target.value)
      // console.log(event)
      console.log(a)
      const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      console.log(c.substring("Token=".length))
      try {
        const res = await fetch("https://www-bluzeshirt.ddns.net/api/updateroleacc", {
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
            accountRole: event.target.value,
          }),
        });
        if (res.ok) {
          // location.reload();
          await this.getAllAcc();
         this.checktran = true;
            this.red = false;
            this.green = true;
            setTimeout(()=>{this.checktran = false } , 9000);
        }else{
              this.checktran = true;
            this.red = true;
            this.green = false;
            this.errorMessage = await res.json()
            console.log (this.errorMessage)
            setTimeout(()=>{this.checktran = false } , 9000);
        }
        
      } catch (error) {
        
        console.log(`Could not add ${error}`);
      }
    },
    async deleteC(a){
      console.log(a)
       const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      console.log(c.substring("Token=".length))

      try {
        const res = await fetch("https://www-bluzeshirt.ddns.net/api/delcolor/"+a, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
        });
      if(res.ok){
        location.reload();
        await this.getAllColor();
      } else {
        this.idcon = a
        this.conc = true
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json();
        setTimeout(()=>{this.checktran = false } , 2000);
      }
        // await res.json();
        // await this.getAllBrand();
      } catch (error) {
        console.log(`Could not add ${error}`);
      }
    }
    ,
    async deleteCC(){
      const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      if(this.conc){
        console.log(this.idcon)
         const res = await fetch("https://www-bluzeshirt.ddns.net/api/cdelcolor/"+this.idcon, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
        });
      if(res.ok){
        this.conc = false
        location.reload();
        await this.getAllColor();
        
      } else {
        this.conc = false
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json();
        setTimeout(()=>{this.checktran = false } , 2000);
        
      }
      }
    }
    ,
    async deleteCB(){
      const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      if(this.conb){
        console.log(this.idcon)
         const res = await fetch("https://www-bluzeshirt.ddns.net/api/cdelbrand/"+this.idcon, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
        });
      if(res.ok){
        this.conc = false
        location.reload();
        await this.getAllBrand();
        
      } else {
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json();
        setTimeout(()=>{this.checktran = false } , 2000);
        
      }
      }
    }
    ,
    async deleteB(a){
      console.log(a)
       const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      console.log(c.substring("Token=".length))

      try {
        const res = await fetch("https://www-bluzeshirt.ddns.net/api/delbrand/"+a, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
        });
      if(res.ok){
        location.reload();
        await this.getAllBrand();
      } else {
        this.idcon = a
        this.conc = false
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json();
        setTimeout(()=>{this.checktran = false } , 2000);
      }
        // await res.json();
        // await this.getAllBrand();
      } catch (error) {
        console.log(`Could not add ${error}`);
      }
    }
    ,
    async deleteA(a){
      console.log(a)
       const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      console.log(c.substring("Token=".length))
      try {
        const res = await fetch("https://www-bluzeshirt.ddns.net/api/delaccount/"+a, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
        });
        await res.json();
        await this.getAllAcc();
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
    async getAllBrand(){
      const c = document.cookie
          .split(";")
          .find((c) => c.trim().startsWith("Token="));
      const res =  await fetch("https://www-bluzeshirt.ddns.net/api/showallbrand",{
         headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },
      });
        if(res.ok){
        this.allBrand = await res.json();
      } else {
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json();
      }
    },
    async getAllColor(){
      const c = document.cookie
          .split(";")
          .find((c) => c.trim().startsWith("Token="));
      const res =  await fetch("https://www-bluzeshirt.ddns.net/api/showallcolor",{
         headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },
      });
        if(res.ok){
        this.allColor = await res.json();
      } else {
        this.checktran = true;
        this.red = true
        this.errorMessage = await res.json().message;
        setTimeout(()=>{this.checktran = false } , 9000);
      }
    },
    async getAllAcc(){
          const c = document.cookie
          .split(";")
          .find((c) => c.trim().startsWith("Token="));
      const res =  await fetch("https://www-bluzeshirt.ddns.net/api/showallaccount",{
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
        this.errorMessage = await res.json();
        console.log(this.errorMessage)
        setTimeout(()=>{this.checktran = false } , 9000);
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
          // if(this.acc.accountRole == 'Customer' || this.acc.accountRole == 'Seller'){
          //     this.$router.push({ name: 'Home' })
          //   }
      } else {
        console.log("error");
      }

    }else{
        this.$router.push({ name: 'Home' })
      }
    await this.getAllAcc();
    await this.getAllBrand();
    await this.getAllColor();
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>