
<template> 
  <div>
    
    <div class="">
      <!-- Sticky search header -->
       

      <main>
       
        <div class="divide-y divide-white/5">
          <div class="grid max-w-7xl grid-cols-1 mx-auto gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 class="text-base font-semibold leading-7 text-white">Personal Information</h2>
              <p class="mt-1 text-sm leading-6 text-gray-400">Use a permanent address where you can receive mail.</p>
            </div>

            <form class="md:col-span-2 pl-20">
              <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div class="col-span-full flex items-center gap-x-8">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover" />
                  <div>
                    <button type="button" class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">Change avatar</button>
                    <p class="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-white">Name</label>
                  <div class="mt-2">
                    <input type="text" :value="barObj.name" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm px-3 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

              

                <div class="col-span-full">
                  <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                  <div class="mt-2">
                    <input id="email" :value="barObj.email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset px-4 ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

                 

                <div class="col-span-full">
                  <label for="timezone" class="block text-sm font-medium leading-6 text-white">Timezone</label>
                  <div class="mt-2">
                    <select id="timezone" name="timezone" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 [&_*]:text-black">
                      <option>Pacific Standard Time</option>
                      <option>Eastern Standard Time</option>
                      <option>Greenwich Mean Time</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-8 flex">
                <button type="submit" class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Save</button>
              </div>
            </form>
          </div>

          <div class="grid max-w-7xl mx-auto grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 class="text-base font-semibold leading-7 text-white">Change password</h2>
              <p class="mt-1 text-sm leading-6 text-gray-400">Update your password associated with your account.</p>
            </div>

            <form class="md:col-span-2 pl-20">
              <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div class="col-span-full">
                  <label for="current-password" class="block text-sm font-medium leading-6 text-white">Email</label>
                  <div class="mt-2">
                    <input v-model="updatedData.email" id="current-password" name="current_password" type="password" autocomplete="current-password" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="new-password" class="block text-sm font-medium leading-6 text-white">New password</label>
                  <div class="mt-2">
                    <input v-model="updatedData.password" id="new-password" name="new_password" type="password" autocomplete="new-password" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div> 
              </div>

              <div class="mt-8 flex">
                <button type="submit" class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Save</button>
              </div>
            </form>
          </div>

          <div class="grid max-w-7xl grid-cols-1 mx-auto gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 class="text-base font-semibold leading-7 text-white">Log out other sessions</h2>
              <p class="mt-1 text-sm leading-6 text-gray-400">Please enter your password to confirm you would like to log out of your other sessions across all of your devices.</p>
            </div>

            <form class="md:col-span-2 pl-20">
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
      <!-- ... (previous code) -->

      <div class="col-span-full">
        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
        <div class="mt-2">
          <!-- Bind the input field to updatedEmail -->
          <input v-model="updatedData.updatedEmail" id="email" name="email" type="email" autocomplete="email" class="block px-2 text-white w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset px-4 ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="col-span-full">
        <label for="new-password" class="block text-sm font-medium leading-6 text-white">New password</label>
        <div class="mt-2">
          <!-- Bind the input field to updatedPassword -->
          <input v-model="updatedData.updatedPassword" id="new-password" name="new_password" type="email" autocomplete="new-password" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
        </div>
      </div>
    </div>

    <div class="mt-8 flex">
      <!-- Call handleUpdatedFunc when the "Save" button is clicked -->
      <button @click="handleUpdatedFunc" type="button" class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Save</button>
    </div>
  </form>
          </div>

          <div class="grid max-w-7xl grid-cols-1 gap-x-8 mx-auto gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 class="text-base font-semibold leading-7 text-white">Delete account</h2>
              <p class="mt-1 text-sm leading-6 text-gray-400">No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.</p>
            </div>

            <div class="flex items-start md:col-span-2 pl-20 ">
              <button  @click="deleteHandle" type="submit" class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400">Yes, delete my account</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import client, {setAuthHeader} from '../axios.config';
import {useAuthenticate} from '../store/Authenticate'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import axios from 'axios';
const auth = useAuthenticate();

const updatedData = ref(
  {
    updatedEmail:'',
    updatedPassword:''
  }
)


console.log(auth.userId);

const navigation = [
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Deployments', href: '#', icon: ServerIcon, current: false },
  { name: 'Activity', href: '#', icon: SignalIcon, current: false },
  { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: true },
]
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
]
const secondaryNavigation = [
  { name: 'Account', href: '#', current: true },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Integrations', href: '#', current: false },
]

const sidebarOpen = ref(false)
const barObj = ref({});

onMounted(async () => {
  try {
    const response = await client.get("/users/"+auth.userId);
    // console.log(response.TotalClosedTickets, 'n');
    barObj.value = response; 
    console.log(barObj.value);
  } catch (error) {
    console.error(error);
  }
});

const deleteHandle = async (e) => {
  e.preventDefault();

  // Get the token from local storage
  const token = localStorage.getItem('token'); // Assuming your token is stored under the key 'authToken'

  const idToDelete = '10'; // Replace with the specific ID you want to delete
  const apiUrl = 'http://localhost:8080/users'; // Replace with your API base URL

  try {
    const response = await axios.delete(`${apiUrl}/${idToDelete}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    // Handle the response as needed
    console.log(response.data); // If the API returns any data in the response

    // Optionally, you can perform additional actions after the delete is successful, like redirecting the user or updating the UI.
  } catch (error) {
    console.error("Error deleting user:", error.response.data);
  }
};


 


</script>