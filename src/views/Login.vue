<template>
  <div class="login">
  <!-- Navbar -->
  <base-nav v-if="showNav" />
  <base-nav-mobile v-if="mobileView" /> 

  <div class="sm:px-96 sm:pt-24 my-auto mx-auto flex flex-wrap" v-if="!mobileView">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-5xl font-semibold px-4 py-3 block cursor-pointer" v-on:click="toggleTabs(1)" v-bind:class="{'': openTab !== 1, 'text-primary border-b-2': openTab === 1}">
            Login
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-5xl font-semibold px-4 py-3 block cursor-pointer" v-on:click="toggleTabs(2)" v-bind:class="{'': openTab !== 2, 'text-primary border-b-2': openTab === 2}">
            Register
          </a>
        </li>
      </ul>

        <div class="py-5 flex-auto">
          <div class="tab-content tab-space">
          <!-- Login -->
          <form @submit.prevent="login">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div>
                <label class="text-sm flex text-primary pb-1">Email</label>
                <input type="email" placeholder="example@mail.com" v-model="login" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
              </div>
              <div class="pt-6">
                <label class="text-sm flex text-primary pb-1">Password</label>
                <input type="password" placeholder="Password" v-model="password" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
              </div>
              <div class="mx-auto flex justify-center sm:pt-10 pt-10">
                <button type="submit" class="items-center sm:text-lg text-xs bg-primary sm:py-2 py-1 w-full hover:bg-primarydark rounded-full text-white transition duration-400 ease-in-out">
                Login
                </button>
              </div>         
            </div>
          </form>
          <!-- Register -->
          <form @submit.prevent="register">
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-sm flex text-primary pb-1">First Name</label>
                  <input type="text" placeholder="First Name" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
                </div>
                <div>
                  <label class="text-sm flex text-primary pb-1">Last Name</label>
                  <input type="text" placeholder="Last Name" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
                </div>               
              </div>
              <div class="pt-6">
                <label class="text-sm flex text-primary pb-1">Email</label>
                <input type="email" placeholder="example@mail.com" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
              </div>
              <div class="pt-6">
                <label class="text-sm flex text-primary pb-1">Password</label>
                <input type="password" placeholder="Password" class="pl-4 py-3 placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
              </div>
            
              <div class="mx-auto flex justify-center sm:pt-10 pt-10">
                <button class="items-center sm:text-lg text-xs bg-primary sm:py-2 py-1 w-full hover:bg-primarydark rounded-full text-white transition duration-400 ease-in-out">
                Register
                </button>
              </div> 

            </div>
          </form>
          </div>
        </div>
     
    </div>
  </div>
  
  <!-- Mobile -->
  <div v-if="mobileView">
    <div class="container sm:pb-16 pb-10 sm:px-9 px-3 mx-auto">
      <form @submit.prevent="login">
        <div v-bind:class="{'hidden': openTabMobile !== 3, 'block': openTabMobile === 3}">
          <h1 class="sm:text-4xl sm:py-7 pt-6 pb-3 font-semibold text-xl">Login</h1>
              <div>
                <label class="text-xs flex text-primary pb-1">Email</label>
                <input type="email" placeholder="example@mail.com" v-model="login" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
              </div>
              <div class="pb-7">
                <label class="text-xs flex text-primary pb-1 pt-4">Password</label>
                <input type="password" placeholder="Password" v-model="password" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
              </div>
              <base-button buttonLabel="Login"/>
              <div class="text-center text-xs text-gray pt-2">Don't have an account?
                <a class="text-secondary" v-on:click="toggleTabs(4)" v-bind:class="{'': openTabMobile !== 4, '': openTabMobile === 4}">
                  Register
                </a>
              </div>
        </div>
      </form>
        <!-- Register -->
      <form @submit.prevent="register">
        <div v-bind:class="{'hidden': openTabMobile !== 4, 'block': openTabMobile === 4}">
          <h1 class="sm:text-4xl sm:py-7 pt-6 pb-3 font-semibold text-xl">Register</h1>
            <div>
              <label class="text-xs flex text-primary pb-1">First Name</label>
              <input type="text" placeholder="First Name" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <div>
              <label class="text-xs flex text-primary pb-1 pt-4">Last Name</label>
              <input type="text" placeholder="Last Name" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <div>
              <label class="text-xs flex text-primary pb-1 pt-4">Email</label>
              <input type="email" placeholder="example@mail.com" v-model="login" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <div class="pb-7">
              <label class="text-xs flex text-primary pb-1 pt-4">Password</label>
              <input type="password" placeholder="Password" v-model="password" class="pl-4 py-2 text-sm placeholder-gray relative bg-light rounded-full outline-none focus:ring-2 focus:ring-primary w-full"/>
            </div>
            <base-button buttonLabel="Register"/>
            <div class="text-center text-xs text-gray pt-2">Already have an account?
              <a class="text-secondary" v-on:click="toggleTabs(3)" v-bind:class="{'': openTabMobile !== 3, '': openTabMobile === 3}">
                Login
              </a>
            </div>
        </div>
      </form>

    </div>
  </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      mobileView: true,
      showNav: false,
      // loginMobile: true,
      openTab: 1,
      openTabMobile: 3,
      login: '',
      password: ''

    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
      this.openTabMobile = tabNumber
    },
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      // this.mobileView = window.innerWidth <= 990;
      if(window.innerWidth <= 990){
          this.mobileView = true;
          this.showNav = false;
          // this.loginMobile = true;
      } else if (window.innerWidth > 990){
          this.mobileView = false;
          this.showNav = true;
          // this.loginMobile = false;
      }
      console.log(this.mobileView)
      console.log(this.openTabMobile)
      // this.loginMobile = window.innerWidth <= 990;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);

  },
}
</script>
