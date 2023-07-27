<template>
  <div>
    
    <div class=" ">
      <Navbar  />

      <main class="md:py-10 py-12">
        <div class="px-2 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Navbar from './Navbar.vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import Logo from "@/components/svgs/Logo.vue";
import Dashboard from "@/components/svgs/Dashboard.vue";
import Ads from "@/components/svgs/Ads.vue";
import users from "@/components/svgs/users.vue";
import Settings from "@/components/svgs/Settings.vue";
import Play from "@/components/svgs/Play.vue";
import MenuIcon from "@/components/svgs/Menu.vue";
import Usa from "@/components/svgs/Usa.vue";

import { useRouter } from "vue-router";

import BellIconO from "@/components/svgs/BellIcon.vue";
const router = useRouter();

const currentRoute = ref(router.currentRoute.value);
const navigation = ref([
  {
    name: "Dashboard",
    href: "/",
    icon: Dashboard,
    current: currentRoute.value.fullPath === "/",
  },
  {
    name: "Companies",
    href: "/companies-page",
    icon: Ads,
    current: currentRoute.value.fullPath === "/companies-page",
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: users,
    current: currentRoute.value.fullPath === "/contacts",
  },
  {
    name: "Tickets",
    href: "/tickets-billing",
    icon: Settings,
    current: currentRoute.value.fullPath === "/tickets-billing",
  },
]);

watch(
  () => router.currentRoute.value,
  (to, from) => {
    currentRoute.value = to;
    navigation.value = [
      {
        name: "Dashboard",
        href: "/",
        icon: Dashboard,
        current: currentRoute.value.fullPath === "/",
      },
      {
        name: "Companies",
        href: "/companies-page",
        icon: Ads,
        current: currentRoute.value.fullPath === "/companies-page",
      },
      {
        name: "Contacts",
        href: "/contacts",
        icon: users,
        current: currentRoute.value.fullPath === "/contacts",
      },
      {
        name: "Tickets",
        href: "/tickets-billing",
        icon: Settings,
        current: currentRoute.value.fullPath === "/tickets-billing",
      },
    ];
    console.log(currentRoute.value.fullPath, "route");
  }
);

console.log(currentRoute.value.fullPath, "outside");

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const people = [
  { id: 1, name: "Wade Cooper", online: true, icon: Usa },
  { id: 2, name: "Arlene Mccoy", online: false, icon: Usa },
];

const selected = ref(people[0]);
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
</script>
