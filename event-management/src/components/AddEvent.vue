<script setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
const route = useRoute()
const id = route.params.id
const userFounded = userStore.users.find((user) => user.id === id)

</script>


<template>
   

<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div>
    <button type="button" @click="userStore.logoutUser(id)" class="text-white bg-blue-300 hover:bg-blue-500 transition-colors duration-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogOut</button>
  </div>
  <div>
    <p class="text-black border-4 border-gray-300 bg-yellow-100 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ userFounded.name }}</p>
  </div>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a :href = "`/create/${id}`">
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add event</button>

</a>
  </div>
  </div>
</nav>
</template>