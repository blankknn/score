<template>
  <div>
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import Layout from "@/components/Layout.vue";
import { useAuthenticate } from "./store/Authenticate";

const authStore = useAuthenticate();

// Move the initialization of the store inside the onBeforeMount hook
onBeforeMount(() => {
  authStore.initUserIdFromLocalStorage();
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
