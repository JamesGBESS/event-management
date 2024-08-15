<script setup>

</script>
<template>

    <div class="flex justify-center items-center pt-20">
        <div class="py-20 w-[600px] bg-gray-200 border rounded-xl flex justify-center items-center">
            <form @submit.prevent>
                <div class="flex flex-col gap-3">
                    <input type="text"
                        class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2" v-model="title"
                        placeholder="Title">
                    <input type="text"
                        class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2" v-model="content"
                        placeholder="Description">
                    <input type="date"
                        class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2" v-model="dateUp"
                        placeholder="Date">
                    <input type="date"
                        class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2" v-model="dateDown"
                        placeholder="">
                </div>
                <div class="flex gap-3 mt-3">
                    <button
                        class="bg-blue-600 hover:bg-blue-700 rounded py-1 px-4 text-white transition-all duration-500">Sauvegarder</button>
                    <button
                        class="rounded hover:bg-gray-300 py-1 px-4 font-bold transition-all duration-300">Annuler</button>
                </div>
            </form>
        </div>

    </div>


</template>