<template>
  <div class="mt-16 space-y-20 lg:mt-8 lg:space-y-20 rounded-2xl ring-1 ring-gray-100 md:shadow-lg">
    <article class="relative isolate flex flex-col gap-4 lg:flex-row">
      <div class="flex items-center justify-between pt-4 lg:hidden px-4 gap-4 flex-row">
        <div class="flex items-center gap-2">
          <Live />
          <p class="text-primary">live ad!</p>
        </div>
        <div class="flex items-center gap-2">
          <Speaker />
          <p class="text-iconColor md:font-bold font-medium text-sm">One Free Tan Promotion</p>
        </div>
      </div>
      <div class="relative aspect-[16/12] lg:w-80 lg:shrink-0">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt
          class="absolute inset-0 h-full w-full lg:rounded-tl-2xl lg:rounded-bl-2xl bg-gray-50 object-cover"
        />
        <div
          class="absolute inset-0 lg:rounded-tl-2xl lg:rounded-bl-2xl ring-1 ring-inset ring-gray-900/10"
        />
        <div
          class="absolute bottom-4 right-4 w-16 h-8 bg-gray-700 rounded-2xl flex gap-2 items-center justify-center"
        >
          <p class="text-md font-normal text-white font-nedium">4</p>
          <Icon icon="solar:gallery-broken" class="text-white" />
        </div>
      </div>
      <div class="py-8 w-full md:pr-8 overflow-x-auto">
        <div class="lg:flex md:items-center hidden gap-4 flex-col md:flex-row px-4 md:px-0">
          <div class="flex items-center gap-2">
            <Live />
            <p class="text-primary">live ad!</p>
          </div>
          <div class="flex items-center gap-2">
            <Speaker />
            <p class="text-iconColor font-bold">One Free Tan Promotion</p>
          </div>
        </div>

        <div class="overflow-x-auto px-2">
          <div class="group min-w-full rounded-2xl gap-4 xl:grid-cols-2 grid grid-cols-1">
            <div class="flex min-w-full rounded-md flex-col gap-4 bg-gray-50 py-6 px-4 mt-4">
              <div class="flex items-center gap-x-6 justify-between">
                <div class="flex items-center whitespace-nowrap gap-4">
                  <Icon class="text-blue-500 text-2xl md:text-3xl" icon="ic:baseline-facebook" />
                  <h1
                    class="text-sm md:text-lg text-iconColor font-light whitespace-nowrap"
                  >Acct# 65461234234</h1>
                </div>
                <div class="flex items-center whitespace-nowrap gap-4">
                  <Switch
                    v-model="enabled"
                    :class="[enabled ? 'bg-primary' : 'bg-gray-200', 'relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2']"
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-full w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"
                    />
                  </Switch>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center whitespace-nowrap gap-4 gap-y-2 flex-col sm:flex-row">
                  <div class="flex items-center whitespace-nowrap gap-4">
                    <Circle />
                    <h1
                      class="text-sm md:text-lg text-iconColor font-light whitespace-nowrap"
                    >Daily Budget</h1>
                  </div>
                  <select
                    name
                    id
                    class="ring-1 block md:ml-6 ml-2 ring-gray-300 px-1 text-xs md:text-sm md:px-2 py-0.5 text-iconColor"
                  >
                    <option value="10">$10</option>
                  </select>
                </div>
                <div class="flex items-center whitespace-nowrap gap-8">
                  <h1
                    class="text-sm md:text-md text-iconColor font-light whitespace-nowrap"
                  >12/11/2022</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 text-iconColor h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <!--  -->
            <!--  -->
            <div class="flex min-w-full flex-col rounded-md gap-4 bg-gray-50 py-6 px-4 mt-4">
              <div class="flex items-center gap-x-6 justify-between">
                <div class="flex items-center whitespace-nowrap gap-4">
                  <Icon class="text-primary text-xl md:text-2xl" icon="logos:google-icon" />
                  <h1
                    class="text-sm md:text-lg text-iconColor font-light whitespace-nowrap"
                  >Acct# 65461234234</h1>
                </div>
                <div class="flex items-center whitespace-nowrap gap-4">
                  <Switch
                    v-model="enabled"
                    :class="[enabled ? 'bg-primary' : 'bg-gray-200', 'relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2']"
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-full w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']"
                    />
                  </Switch>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center whitespace-nowrap gap-4 gap-y-2 flex-col sm:flex-row">
                  <div class="flex items-center whitespace-nowrap gap-4">
                    <Circle />
                    <h1
                      class="text-sm md:text-lg text-iconColor font-light whitespace-nowrap"
                    >Daily Budget</h1>
                  </div>
                  <select
                    name
                    id
                    class="ring-1 block md:ml-6 ml-2 ring-gray-300 px-1 text-xs md:text-sm md:px-2 py-0.5 text-iconColor"
                  >
                    <option value="10">$10</option>
                  </select>
                </div>
                <div class="flex items-center whitespace-nowrap gap-8">
                  <h1
                    class="text-sm md:text-md text-iconColor font-light whitespace-nowrap"
                  >12/11/2022</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 text-iconColor h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import Live from "@/components/svgs/Live.vue";
import Speaker from "@/components/svgs/Speaker.vue";
import Circle from "@/components/svgs/Circle.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";

const enabled = ref(false);
</script>

<style lang="scss" scoped>
</style>