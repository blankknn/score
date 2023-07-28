<template>
  <div class="space-y-6 md:space-y-8 max-w-7xl mx-auto">
    <div class="flex flex-col items-center">
      <div class="w-full md:w-[75%] space-y-2 my-20">
        <div
          class="text-center p-2 rounded-md text-white text-3xl tracking-wide font-title"
        >
          Welcome to the new Overbuff!
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="flex flex-col space-y-2 items-center">
            <div class="inline-flex rounded-full bg-primary text-white p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </div>
            <div class="text-xs md:text-sm text-white font-bold uppercase">
              OW 2 Support
            </div>
          </div>
          <div class="flex flex-col space-y-2 items-center">
            <div class="inline-flex rounded-full bg-primary text-white p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </div>
            <div class="text-xs md:text-sm font-bold text-white uppercase">New Heroes</div>
          </div>
          <div class="flex flex-col space-y-2 items-center">
            <div class="inline-flex rounded-full bg-primary text-white p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </div>
            <div class="text-xs text-white md:text-sm font-bold uppercase">
              Added Stats
            </div>
          </div>
          <div class="flex flex-col space-y-2 items-center">
            <div class="inline-flex rounded-full bg-primary text-white p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </div>
            <div class="text-xs text-white md:text-sm font-bold uppercase">
              Improved Rankings
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center ">
      <form method="get" action="/search" class="">
        <input
          name="q"
          type="text"
          placeholder="Find players by BattleTag#1234..."
          class="bg-black border-primary border-2 border-solid text-white text-xl p-4 rounded-md shadow-lg focus:outline-none w-full md:w-[75%]"
          value=""
        />
      </form>
    </div>
    <div v-if="authStore.isLoggedIn === false" class="h-12 flex justify-center items-center">
      <router-link rel="nofollow" to="/login"
        ><button
          type="button"
          class="flex flex-nowrap justify-center items-center py-2 px-2.5 rounded shadow-lg gap-x-1 font-medium text-sm sm:text-base bg-primary text-lighter"
          tabindex="0"
          style="opacity: 1; transform: none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="inline w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            ></path></svg
          ><span class="whitespace-nowrap leading-none st-current"
            >Sign in with Battle.net to see your stats!</span
          >
        </button></router-link
      >
    </div>
    <div class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="h-96  overflow-hidden ">
          <img :src="image1" class="object-cover w-full cursor-pointer hover:scale-110 duration-200 transition-all h-full" alt="">
        </div>
        <div class="overflow-hidden">
          <img :src="image2" class="bject-cover w-full cursor-pointer hover:scale-110 duration-200 transition-all h-full" alt="">
        </div>
        <div class="overflow-hidden">
          <img :src="image3" class="bject-cover w-full cursor-pointer hover:scale-110 duration-200 transition-all h-full" alt="">
        </div>
      </div>
      <div class="text-center  text-xs text-white uppercase">
        Stats from games played this month on PC
      </div>
    </div>
  </div>
</template>

<script setup> 
import { ref, onMounted } from "vue";
import client from "../axios.config";
import image1 from '@/assets/images/image1.jpeg';
import image2 from '@/assets/images/image20.png';
import image3 from '@/assets/images/image30.png';
import { useAuthenticate } from "../store/Authenticate";

const barObj = ref({});

const authStore = useAuthenticate();
console.log( authStore.userId, 'nice' )

onMounted(async () => {
  try {
    const response = await client.get("/users");
    // console.log(response.TotalClosedTickets, 'n');
    barObj.value = response;

    console.log(barObj.value);
  } catch (error) {
    console.error(error);
  }
});
</script>

<style lang="scss" scoped></style>
