<script setup>
import { useEventStore } from '@/stores/event';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const route = useRoute()
const eventStore = useEventStore()
const event = ref({
    title: '',
    content: '',
    dateUp: '',
    dateDown: '',
    place: ''
})
const id = route.params.id
const addEvent = () => {
    eventStore.createEvent(id, event.value.title, event.value.content, event.value.dateUp, event.value.dateDown, event.value.place)
    console.log(id);
    


}
</script>
<template>

    <div class="flex justify-center items-center pt-20">
        <div class="py-20 w-[600px] bg-gray-200 border rounded-xl flex justify-center items-center">
            <form >
                <div class="flex flex-col gap-3">
                    <div>
                        <label for="" class="text-black font-bold">Title</label>
                        <input type="text" v-model="event.title"
                            class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            placeholder="Event title">
                    </div>

                    <div>
                        <label for="" class="text-black font-bold">Description</label>
                        <input type="text" v-model="event.content"
                            class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            placeholder="Add a description for your event">
                    </div>
                    <div>
                        <label for="" class="text-black font-bold">Start</label>
                        <input type="date" v-model="event.dateUp"
                            class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            placeholder="Title">
                    </div>
                    <div>
                        <label for="" class="text-black font-bold">End</label>
                        <input type="date" v-model="event.dateDown"
                            class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            placeholder="Title">
                    </div>
                    <div>
                        <label for="" class="text-black font-bold">Place</label>
                        <input type="text" v-model="event.place"
                            class="border-2 rounded-lg text-black border-blue-600 hover:bg-gray-100 bg-white 3 h-12 w-[500px] transition-all duration-500 text-start mb-2 flex items-center outline-none p-2"
                            placeholder="Place of event">
                    </div>
                </div>
                <div class="flex gap-3 mt-3">
                    <button @click="addEvent"
                        class="bg-blue-600 hover:bg-blue-700 rounded py-1 px-4 text-white transition-all duration-500">Sauvegarder</button>
                    <RouterLink :to="`/events/${id}`">
                        <button
                            class="rounded hover:bg-gray-300 py-1 px-4 font-bold transition-all duration-300">Annuler</button>
                    </RouterLink>
                </div>
            </form>
        </div>

    </div>


</template>