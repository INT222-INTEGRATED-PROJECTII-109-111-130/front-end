<template>
  <div class="z-50 inset-0 overflow-x-hidden overflow-y-auto fixed">
    <div class="bg-white w-full text-center py-4 px-3">
      <div class="flex justify-between items-center">
        <div @click="showNavHam()">
          <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="25" y2="1.5" stroke="#2D2D2D" stroke-width="3" />
            <line y1="16.5" x2="25" y2="16.5" stroke="#2D2D2D" stroke-width="3"/>
            <line y1="9" x2="25" y2="9" stroke="#2D2D2D" stroke-width="3" />
          </svg>
        </div>

        <router-link to="/">
          <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.78 20.825C15.78 22.435 15.4067 23.7767 14.66 24.85C13.9367 25.9 12.945 26.6933 11.685 27.23C10.4483 27.7433 9.03667 28 7.45 28H0.8V3.5H7.1C9.29333 3.5 11.055 4.00167 12.385 5.005C13.715 6.00833 14.38 7.54833 14.38 9.625C14.38 10.885 14.0183 11.9467 13.295 12.81C12.5717 13.65 11.58 14.2567 10.32 14.63C11.93 14.9567 13.2367 15.6333 14.24 16.66C15.2667 17.6633 15.78 19.0517 15.78 20.825ZM7.1 6.125H3.775V13.405H7.1C8.33667 13.405 9.36333 13.09 10.18 12.46C10.9967 11.83 11.405 10.9433 11.405 9.8C11.405 8.63333 10.9967 7.735 10.18 7.105C9.36333 6.45167 8.33667 6.125 7.1 6.125ZM3.775 25.375H7.45C9.03667 25.375 10.32 24.9667 11.3 24.15C12.3033 23.31 12.805 22.1433 12.805 20.65C12.805 19.1333 12.3033 17.9783 11.3 17.185C10.32 16.3917 9.03667 15.995 7.45 15.995H3.775V25.375ZM23.6416 0.699999H26.4416V28H23.6416V0.699999ZM38.008 21.7C38.008 22.9833 38.2997 23.975 38.883 24.675C39.4663 25.375 40.318 25.725 41.438 25.725C42.6747 25.725 43.6663 25.3517 44.413 24.605C45.1597 23.8583 45.533 22.89 45.533 21.7V11.9H48.333V28H45.533V25.48C44.4597 27.3933 42.8613 28.35 40.738 28.35C39.058 28.35 37.7163 27.7783 36.713 26.635C35.7097 25.4917 35.208 23.9633 35.208 22.05V11.9H38.008V21.7ZM64.9717 14.525H56.0467V11.9H70.0467L60.0717 25.375H69.3467V28H54.9967L64.9717 14.525ZM82.4126 28.35C80.9193 28.35 79.5893 28 78.4226 27.3C77.2793 26.5767 76.381 25.585 75.7276 24.325C75.0976 23.065 74.7826 21.6067 74.7826 19.95C74.7826 18.27 75.1093 16.8 75.7626 15.54C76.4393 14.28 77.3726 13.3 78.5626 12.6C79.776 11.9 81.176 11.55 82.7626 11.55C85.1193 11.55 86.9743 12.285 88.3276 13.755C89.681 15.225 90.3576 17.2433 90.3576 19.81C90.3576 19.9733 90.346 20.1483 90.3226 20.335C90.3226 20.4983 90.3226 20.6033 90.3226 20.65H77.6526C77.7693 22.26 78.271 23.5083 79.1576 24.395C80.0443 25.2817 81.246 25.725 82.7626 25.725C84.956 25.725 86.636 24.7567 87.8026 22.82L90.0776 24.255C88.3976 26.985 85.8426 28.35 82.4126 28.35ZM82.7626 14C81.386 14 80.266 14.3733 79.4026 15.12C78.5393 15.8433 77.991 16.8933 77.7576 18.27H87.3126C87.2193 16.9867 86.7526 15.96 85.9126 15.19C85.096 14.3967 84.046 14 82.7626 14Z" fill="#2D2D2D"/>
          </svg>
        </router-link>
        <router-link to="/basket">
          <span class="material-icons-outlined text-xl hover:text-primary transition duration-200">local_mall</span>
        </router-link>
      </div>

      <div v-if="showNav">
       <div class="mt-4">
      <router-link to="/">
          <div class="flex justify-center items-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.25 18.3333C19.25 18.5764 19.1534 18.8096 18.9815 18.9815C18.8096 19.1534 18.5764 19.25 18.3333 19.25H3.66667C3.42355 19.25 3.19039 19.1534 3.01849 18.9815C2.84658 18.8096 2.75 18.5764 2.75 18.3333V8.69916C2.7499 8.55947 2.78173 8.42161 2.84306 8.2961C2.90438 8.17059 2.99358 8.06076 3.10383 7.97499L10.4372 2.27149C10.5981 2.14631 10.7961 2.07835 11 2.07835C11.2039 2.07835 11.4019 2.14631 11.5628 2.27149L18.8962 7.97499C19.0064 8.06076 19.0956 8.17059 19.1569 8.2961C19.2183 8.42161 19.2501 8.55947 19.25 8.69916V18.3333ZM17.4167 17.4167V9.14649L11 4.15616L4.58333 9.14649V17.4167H17.4167Z" fill="#2D2D2D"/>
            </svg>
            <p class="font-medium ml-1 text-base">Home</p>
          </div>
      </router-link>

      <router-link to="/team">
          <div class="flex justify-center items-center">
            <span class="material-icons-outlined text-2xl">groups</span>
            <p class="font-medium ml-2 text-base">Team</p>
          </div>
      </router-link>

      <router-link to="/login">
          <div class="flex justify-center items-center">
            <span class="material-icons-outlined text-xl text-primary hover:text-dark transition duration-200">person</span>
            <p class="font-medium ml-1 text-base text-primary hover:text-dark transition duration-200">Login</p>
          </div>
      </router-link>


      </div>
      </div>

    </div>
  </div>
  <div v-if="showNav" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
export default {
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
  },
};
</script>
