
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
                  <label for="score" class="block text-sm font-medium leading-6 text-white">Score</label>
                  <div class="mt-2">
                    <input id="email" :value="barObj.score" name="score" type="score" autocomplete="score" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset px-4 ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
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

            <div class="md:col-span-2 pl-20">
              <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div class="col-span-full">
                  <label for="current-password" class="block text-sm font-medium leading-6 text-white">Email</label>
                  <div class="mt-2">
                    <input v-model="updatedData.email" id="current-password" name="current_password" type="email" autocomplete="current-password" class="block w-full rounded-md border-0 px-2 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="new-password" class="block text-sm font-medium leading-6 text-white">New password</label>
                  <div class="mt-2">
                    <input v-model="updatedData.password" id="new-password" name="new_password" type="password" autocomplete="new-password" class="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
                </div> 
              </div>

              <div class="mt-8 flex">
                <button @click="updateFunction" class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Save</button>
              </div>
            </div>
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
import client from '../axios.config';
import { useAuthenticate } from '../store/Authenticate';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ChartBarSquareIcon, Cog6ToothIcon, FolderIcon, GlobeAltIcon, ServerIcon, SignalIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import axios from 'axios';
import { useRouter } from 'vue-router'; 
const router = useRouter();
const auth = useAuthenticate();

const updatedData = ref({
  email: '', // Corrected property name to 'email'
  password: '', // Corrected property name to 'password'
});

const updateFunction = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("token");
  const headers = {
    "Authorization": `${token}`, // Corrected format for the Authorization header
    "Content-Type": "application/json"
  };

  const { email, password } = updatedData.value; // Assuming updatedData is a ref object

  try {
    const response = await axios.put(`http://localhost:8080/users/${auth.userId}`, {
      name: 'ali',
      email,
      password,
    }, {
      headers: headers,
    });

    // Handle the response as needed
    console.log(response.data); // If the API returns any data in the response
    try {
    const response = await client.get('/users/' + auth.userId);
    barObj.value = response;
    console.log(barObj.value);
  } catch (error) {
    console.error(error);
  }

    // Optionally, you can perform additional actions after the update is successful, like showing a success message or updating the UI.
  } catch (error) {
    console.error('Error updating user:', error.response.data);
  }
};

// Your existing code for navigation, teams, secondaryNavigation, etc.

const barObj = ref({});

onMounted(async () => {
  try {
    const response = await client.get('/users/' + auth.userId);
    barObj.value = response;
    console.log(barObj.value);
  } catch (error) {
    console.error(error);
  }
});

const deleteHandle = () => {
  const token = localStorage.getItem("token");
  const headers = {
    "Authorization": token,
    "Content-Type": "application/json"
  };

  
  axios
    .delete(`http://localhost:8080/users/${auth.userId}`, { headers })
    .then(response => {
      console.log("User deleted successfully:", response.data);
      localStorage.removeItem('token');
  localStorage.removeItem('userId');

  // Set isLoggedIn to false and userId to null in the store
  auth.setLogin(false);
  auth.setId(null);
  router.push({ name: 'login' }); 
      // You can update your UI or perform any other actions after successful deletion
    })
    .catch(error => {
      console.error("Error deleting user:", error);
      // Handle error cases here
    });
};
</script>
