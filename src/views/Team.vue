<template>
  <div class="team">
  <!-- Navbar -->
    <div class="fixed w-full z-50">
      <base-nav v-if="showNav" />
      <base-nav-mobile v-if="mobileView" />
    </div>

  <div class="sm:pb-16 pb-10 sm:pt-20 pt-16 sm:px-28 px-6 mx-auto">
    <h1 class="sm:text-4xl sm:pt-10 sm:pb-7 pt-6 pb-3 font-semibold text-xl">Team</h1>
    <div class="grid sm:grid-cols-3 sm:gap-6 gap-2 grid-cols-1">

      <div class="bg-light sm:rounded-lg rounded-md transition duration-500 sm:py-10 py-4 grid sm:grid-cols-1 grid-cols-2">
        <img class="sm:h-44 h-24 rounded-full mx-auto" src="../assets/balance.jpg" alt="profile"/>
          <div class="sm:pt-4 pt-2 sm:text-center text-left">         
            <h2 class="sm:text-lg text-xs uppercase font-semibold">JIRAYUT JEDSADAKAROON</h2>
            <h3 class="text-gray my-1 sm:text-base text-xs">62130500109</h3>
            <p class="sm:text-center text-left sm:text-base text-xs">Database</p>
            <p class="sm:text-center text-left sm:text-base text-xs">DevOps</p>
          </div>
      </div>
        
      <div class="bg-light sm:rounded-lg rounded-md transition duration-500 sm:py-10 py-4 grid sm:grid-cols-1 grid-cols-2">
        <img class="sm:h-44 h-24 rounded-full mx-auto" src="../assets/anu.jpg" alt="profile"/>
          <div class="pt-2 sm:text-center text-left">         
            <h2 class="sm:text-lg text-xs uppercase font-semibold">chananan likitsarawit</h2>
            <h3 class="text-gray my-1 sm:text-base text-xs">62130500111</h3>
            <p class="sm:text-center text-left sm:text-base text-xs">Frontend</p>
          </div>
      </div>

      <div class="bg-light sm:rounded-lg rounded-md transition duration-500 sm:py-10 py-4 grid sm:grid-cols-1 grid-cols-2">
        <img class="sm:h-44 h-24 rounded-full mx-auto" src="../assets/boss.jpg" alt="profile"/>
          <div class="sm:pt-4 pt-2 sm:text-center text-left">         
            <h2 class="sm:text-lg text-xs uppercase font-semibold">POONPIPAT SUVANARAWAT</h2>
            <h3 class="text-gray my-1 sm:text-base text-xs">62130500130</h3>
            <p class="sm:text-center text-left sm:text-base text-xs">Frontend</p>
            <p class="sm:text-center text-left sm:text-base text-xs">Backend</p>
            <p class="sm:text-center text-left sm:text-base text-xs">DevOps</p>
          </div>
      </div>
          
    </div>
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