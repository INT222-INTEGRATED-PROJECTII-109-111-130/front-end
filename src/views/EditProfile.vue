<template>
  <div class="editProfile">
  <!-- Navbar -->
  <base-nav v-if="showNav" />
  <base-nav-mobile v-if="mobileView" /> 
  <!-- Error -->
    <div class="bg-error py-2 text-white text-center">Text here</div>
    <div class="bg-primary py-2 text-white text-center">Text here</div>
    
    <div class="container sm:pb-16 pb-10 sm:px-72 px-3 mx-auto">
        <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 pt-6 pb-3 font-semibold text-xl text-center">My Account</h1>
        <div class="grid grid-cols-2 gap-x-6">
            <div class="h-full bg-primary px-4 py-8 rounded-xl overflow-hidden text-center relative col-span-2">
                <img class="object-cover object-center w-24 block mx-auto" src="../assets/profile.png">
                <h1 class="pt-5 text-2xl font-semibold">Name Surname</h1>
            </div>
            <div class="pt-8">
              <label class="text-sm flex text-primary pb-1">First Name</label>
              <input type="text" placeholder="First Name" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <div class="pt-8">
              <label class="text-sm flex text-primary pb-1">Last Name</label>
              <input type="text" placeholder="Last Name" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <div class="pt-8 col-span-2">
                <label class="text-sm flex text-primary pb-1">Email</label>
                <input type="email" placeholder="example@mail.com" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <div class="pt-8 col-span-2">
                <base-button buttonLabel="Update"/>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
// @ is an alias to /src

export default {

  components: {
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