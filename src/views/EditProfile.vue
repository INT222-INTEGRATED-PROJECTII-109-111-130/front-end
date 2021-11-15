<template>
  <div class="editProfile">
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
    <form @submit.prevent="editP">
    <div class="container sm:pb-16 pb-10 sm:px-72 px-3 mx-auto">
      <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 pt-6 pb-3 font-semibold text-xl text-center">My Account</h1>
        <div class="grid grid-cols-2 gap-x-6">
            <div class="h-full bg-primary px-4 py-8 rounded-xl overflow-hidden text-center relative col-span-2">
                <img class="object-cover object-center w-24 block mx-auto" src="../assets/profile.png">
                <h1 class="pt-5 text-2xl font-semibold">Name Surname</h1>
            </div>
            <div class="pt-8">
              <label class="text-sm flex text-primary pb-1">First Name</label>
              <input type="text" placeholder="First Name" v-model="firstName" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <div class="pt-8">
              <label class="text-sm flex text-primary pb-1">Last Name</label>
              <input type="text" placeholder="Last Name" v-model="lastName" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <!-- <div class="pt-8 col-span-2">
                <label class="text-sm flex text-primary pb-1">Email</label>
                <input type="email" placeholder="example@mail.com" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div> -->
            <div class="pt-8 col-span-2">
                <base-button type="submit" buttonLabel="Update"/>
            </div>
        </div>
    </div>
    </form>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
// @ is an alias to /src

export default {

  components: {
    BaseButton
  },
  //   async mounted() {
  //   var accid = this.$route.params.accid;
  //   const c = document.cookie
  //     .split(";")
  //     .find((c) => c.trim().startsWith("Token="));
  //   if (accid !== undefined) {
  //     const res = await fetch("http://localhost:3000/1acc/" + accid, {
  //       headers: {
  //         Authorization: `Bearer ${c.substring("Token=".length)}`,
  //       },
  //     });
  //     if (res.ok) {
  //       var data = await res.json();
  //       this.acc = await data; 
  //       console.log(this.acc);
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
      firstName:null,
      lastName:null
    };
  },
  methods: {
    async editP(){
      console.log(this.firstName)
      console.log(this.lastName)
      const c = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("Token="));
      try {
        const res = await fetch("http://localhost:3000/updateaccount", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${c.substring("Token=".length)}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            accountId: this.acc.accountId,
            firstName: this.firstname,
            lastName: this.lastname,
            email: "pass",
            password:"pass",
            accountRole:"pass",
          }),
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
      const res = await fetch("http://localhost:3000/1acc/" + acc.trim().substring("accid=".length), {
        headers: {
          Authorization: `Bearer ${c.substring("Token=".length)}`,
        },});
      if (res.ok) {
        console.log("เข้า cookie")
        this.id  = await res.json();
      } else {
        console.log("error");
      }
    }
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>