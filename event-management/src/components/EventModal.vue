<script setup>
import { useShowStore } from '@/stores/show';
import { useEventStore } from '@/stores/event';
import { ref, defineProps } from 'vue';
import DeleteEvent from './DeleteEvent.vue';
const showStore = useShowStore()
const eventStore = useEventStore()
showStore.showDescription = ref(true)
showStore.showTitle = ref(true)
showStore.showDateUp = ref(true)
showStore.showDateDown = ref(true)
showStore.showStatus = ref(true)
const props = defineProps({
    event: {
        type: Object,
        required: true
    }
})
const newEvent = ref({
    title: props.event.title,
    content: '',
    dateUp: '',
    dateDown: '',
    place: ''
})

</script>
<template>
    <div v-if="showStore.showModal == true">

        <div class="font-sans bg-gray-100 flex items-center justify-center h-screen">
            <div x-data="{ showPrivacyPolicy: true }">
                <div x-show="showPrivacyPolicy" class="fixed z-10 inset-0 flex items-center justify-center">
                    <div id="gray" class="absolute inset-0 bg-slate-900 opacity-50"></div>
                    <div class="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4"
                        x-transition:enter="transition ease-out duration-300 transform opacity-0 scale-95"
                        x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
                        x-transition:leave="transition ease-in duration-200 transform opacity-100 scale-100"
                        x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
                        x-cloak>
                        <div class="prose max-w-screen-md p-6 overflow-y-auto bg-gray-200"
                            style="max-height: 70vh; ; border: 1px solid #e2e8f0; border-radius: 0.375rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);">
                            <div class="mb-10 flex relative">
                                <div class="flex flex-col">

                                    <div class="flex items-center gap-3">
                                        <svg fill="#1C2033" width="36" height="36" version="1.1" id="lni_lni-postcard"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;"
                                            xml:space="preserve">
                                            <g>
                                                <path d="M56,11.9H8c-3.4,0-6.2,2.8-6.2,6.2v27.7c0,3.4,2.8,6.2,6.2,6.2h48c3.4,0,6.2-2.8,6.2-6.2V18.2C62.2,14.7,59.4,11.9,56,11.9
		z M57.8,45.8c0,1-0.8,1.8-1.8,1.8H8c-1,0-1.8-0.8-1.8-1.8V18.2c0-1,0.8-1.8,1.8-1.8h48c1,0,1.8,0.8,1.8,1.8V45.8z" />
                                                <path
                                                    d="M32,20.9c-1.2,0-2.2,1-2.2,2.2v15.3c0,1.2,1,2.2,2.2,2.2c1.2,0,2.2-1,2.2-2.2V23.1C34.2,21.9,33.2,20.9,32,20.9z" />
                                                <path
                                                    d="M11.6,33h8.9c1.2,0,2.2-1,2.2-2.2s-1-2.2-2.2-2.2h-8.9c-1.2,0-2.2,1-2.2,2.2S10.4,33,11.6,33z" />
                                                <path d="M52,20.9h-9.4c-1.5,0-2.6,1.2-2.6,2.6v9.4c0,1.4,1.2,2.6,2.6,2.6H52c1.4,0,2.6-1.2,2.6-2.6v-9.4C54.6,22,53.4,20.9,52,20.9
		z M50.1,31h-5.7v-5.7h5.7V31z" />
                                                <path
                                                    d="M23,36.1H11.6c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2H23c1.2,0,2.2-1,2.2-2.2S24.3,36.1,23,36.1z" />
                                            </g>
                                        </svg>
                                        <h2 class="font-semibold text-xl" v-if="showStore.showTitle == true">{{
                                            event.title }}</h2>
                                        <button @click="showStore.showTitle = false; showStore.showInputTitle = true"
                                            class="text-end mr-4  hover:bg-gray-300 rounded transition-all duration-500 "><svg
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.58579 4.58579C5 5.17157 5 6.11438 5 8V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8C19 6.11438 19 5.17157 18.4142 4.58579C17.8284 4 16.8856 4 15 4H9C7.11438 4 6.17157 4 5.58579 4.58579ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H9Z"
                                                    fill="#222222" />
                                            </svg>
                                        </button>
                                    </div>
                                    <form @submit.prevent class="gap-2 pl-10" v-if="showStore.showInputTitle == true">
                                        <input type="text" v-model="newEvent.title"
                                            class="outline-none border pl-4 bg-white border-gray-400 h-10 w-[600px] shadow rounded">
                                        <div class="flex gap-2 mt-2">
                                            <button type="submit"
                                                @click="eventStore.updateTitle(event.id, newEvent.title); showStore.showTitle = true; showStore.showInputTitle = false"
                                                class="bg-blue-600 hover:bg-blue-700 rounded py-1 px-4 text-white transition-all duration-500">Sauvegarder</button>
                                            <button
                                                @click="showStore.showTitle = true; showStore.showInputTitle = false"
                                                class="rounded hover:bg-gray-300 py-1 px-4 font-bold transition-all duration-300">Annuler</button>
                                        </div>
                                    </form>
                                </div>
                                <button class="right-0 absolute hover:bg-gray-300 rounded-full p-2"
                                    @click="$emit('close')">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="square"
                                            stroke-linejoin="round" />
                                        <path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="square"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div class="flex flex-col mb-10">
                                <div class="flex items-center gap-2">
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7H19" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                                        <path d="M5 12H15" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                                        <path d="M5 17H11" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <label for="" class="text-lg font-semibold">Description</label>
                                </div>
                                <div class="pl-10">
                                    <!-- La description existe -->
                                    <div>
                                        <div class="text-end">
                                            <button
                                                @click="showStore.showTextarea = true; showStore.showDescription = false"
                                                class="mr-4 bg-gray-300 hover:bg-gray-400 rounded py-1 px-4 transition-all duration-500 ">Modifier</button>
                                        </div>
                                    </div>
                                    <!-- La description n'existe pas encore -->
                                    <div id="paragraph" class="mt-4" v-if="showStore.showDescription == true">
                                        <p
                                            class="border  bg-gray-300 py-3 rounded h-16 w-full transition-all duration-500 pl-4">
                                            {{ event.extendedProps.content }}</p>
                                    </div>
                                    <!-- Input pour mettre la description -->
                                    <form class="flex flex-col mt-4" v-if="showStore.showTextarea == true">
                                        <textarea name="" v-model="newEvent.content"
                                            class="border-2 border-blue-600 rounded-lg h-24 bg-white py-3  w-full outline-none pl-4"></textarea>
                                        <div class="flex gap-2 mt-2">
                                            <button
                                                @click="eventStore.updateContent(event.id, newEvent.content); showStore.showDescription = true; showStore.showTextarea = false"
                                                class="bg-blue-600 hover:bg-blue-700 rounded py-1 px-4 text-white transition-all duration-500">Sauvegarder</button>
                                            <button
                                                @click="showStore.showDescription = true; showStore.showTextarea = false"
                                                class="rounded hover:bg-gray-300 py-1 px-4 font-bold transition-all duration-300">Annuler</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="mb-5 flex gap-2 items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z"
                                        fill="#222222" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V13C22 12.5286 22 12.2929 21.8536 12.1464C21.7071 12 21.4714 12 21 12H3C2.5286 12 2.29289 12 2.14645 12.1464C2 12.2929 2 12.5286 2 13V18ZM7 15C7 14.5286 7 14.2929 7.14645 14.1464C7.29289 14 7.5286 14 8 14H10C10.4714 14 10.7071 14 10.8536 14.1464C11 14.2929 11 14.5286 11 15C11 15.4714 11 15.7071 10.8536 15.8536C10.7071 16 10.4714 16 10 16H8C7.5286 16 7.29289 16 7.14645 15.8536C7 15.7071 7 15.4714 7 15ZM7.14645 18.1464C7 18.2929 7 18.5286 7 19C7 19.4714 7 19.7071 7.14645 19.8536C7.29289 20 7.5286 20 8 20H10C10.4714 20 10.7071 20 10.8536 19.8536C11 19.7071 11 19.4714 11 19C11 18.5286 11 18.2929 10.8536 18.1464C10.7071 18 10.4714 18 10 18H8C7.5286 18 7.29289 18 7.14645 18.1464ZM13 15C13 14.5286 13 14.2929 13.1464 14.1464C13.2929 14 13.5286 14 14 14H16C16.4714 14 16.7071 14 16.8536 14.1464C17 14.2929 17 14.5286 17 15C17 15.4714 17 15.7071 16.8536 15.8536C16.7071 16 16.4714 16 16 16H14C13.5286 16 13.2929 16 13.1464 15.8536C13 15.7071 13 15.4714 13 15ZM13.1464 18.1464C13 18.2929 13 18.5286 13 19C13 19.4714 13 19.7071 13.1464 19.8536C13.2929 20 13.5286 20 14 20H16C16.4714 20 16.7071 20 16.8536 19.8536C17 19.7071 17 19.4714 17 19C17 18.5286 17 18.2929 16.8536 18.1464C16.7071 18 16.4714 18 16 18H14C13.5286 18 13.2929 18 13.1464 18.1464Z"
                                        fill="#222222" />
                                    <path d="M7 3L7 6" stroke="#222222" stroke-width="2" stroke-linecap="round" />
                                    <path d="M17 3L17 6" stroke="#222222" stroke-width="2" stroke-linecap="round" />
                                </svg>


                                <h1 class="font-semibold text-lg">Dates</h1>
                            </div>

                            <div class=" items-center pl-2">
                                <div class="pl-10 flex flex-col gap-4">
                                    <div v-if="showStore.showDateUp == true">
                                        <p @click="showStore.showInputDateUp = true; showStore.showDateUp = false"
                                            class="outline-none border pl-4 bg-white hover:bg-gray-100 transition-all duration-500 p-2 w-[680px] shadow rounded text-gray-500">
                                            {{ event.start }}</p>
                                    </div>
                                    <div v-if="showStore.showInputDateUp == true">
                                        <form @submit.prevent="">
                                            <input v-model="newEvent.dateUp"
                                                @keyup.enter="eventStore.updateDateUp(event.id, newEvent.dateUp); showStore.showDateUp = true; showStore.showInputDateUp = false"
                                                type="date"
                                                class="outline-none border pl-4 bg-white hover:bg-gray-100 transition-all duration-500 p-2 w-[680px] shadow rounded text-black">
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div class=" items-center pl-2 mt-6">
                                <div class="pl-10 flex flex-col gap-4">
                                    <div v-if="showStore.showDateDown == true">
                                        <p @click="showStore.showInputDateDown = true; showStore.showDateDown = false"
                                            class="outline-none border pl-4 bg-white hover:bg-gray-100 transition-all duration-500 p-2 w-[680px] shadow rounded text-gray-500">
                                            {{ event.end }}</p>
                                    </div>
                                    <div v-if="showStore.showInputDateDown == true">
                                        <form @submit.prevent="">
                                            <input v-model="newEvent.dateDown"
                                                @keyup.enter="eventStore.updateDateDown(event.id, newEvent.dateDown); showStore.showDateDown = true; showStore.showInputDateDown = false"
                                                type="date"
                                                class="outline-none border pl-4 bg-white hover:bg-gray-100 transition-all duration-500 p-2 w-[680px] shadow rounded text-black">
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <div class="mb-5 flex gap-2 items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3L16 6M8 3L8 6" stroke="#222222" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M14 4H10L10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6L6 4.07612C5.02492 4.17203 4.36857 4.38879 3.87868 4.87868C3 5.75736 3 7.17157 3 10V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V10C21 7.17157 21 5.75736 20.1213 4.87868C19.6314 4.38879 18.9751 4.17203 18 4.07612L18 6C18 7.10457 17.1046 8 16 8C14.8954 8 14 7.10457 14 6L14 4ZM7 12C7 11.4477 7.44772 11 8 11L16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L8 13C7.44772 13 7 12.5523 7 12ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17L16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15L8 15Z"
                                        fill="#222222" />
                                </svg>

                                <h1 class="font-semibold text-lg">Status</h1>
                            </div>
                            <div class="flex gap-3 items-center pl-2">
                                <div class="pl-10 flex flex-col gap-4">
                                    <div v-if="showStore.showStatus == true">
                                        <p @click="showStore.showInputStatus = true; showStore.showStatus = false"
                                            class="outline-none border pl-4 bg-white hover:bg-gray-100 transition-all duration-500 p-2 w-[680px] shadow rounded text-gray-500">
                                            {{ event.extendedProps.place }}</p>
                                    </div>
                                    <div v-if="showStore.showInputStatus == true">
                                        <input v-model="newEvent.place"
                                            @keyup.enter="eventStore.updatePlace(event.id, newEvent.place); showStore.showStatus = true; showStore.showInputStatus = false"
                                            type="text"
                                            class="outline-none border pl-4 bg-white hover:bg-gray-100 transition-all duration-500 p-2 w-[680px] shadow rounded text-black"
                                            placeholder=" Voluntary ">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-16 text-end">
                                <button
                                    class=" justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                                    @click="showStore.showDeleteModal = true">DELETE</button>
                            </div>
                            <DeleteEvent @close="showStore.showDeleteModal = false" @confirm="eventStore.deleteEvent(event.id)"></DeleteEvent>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>