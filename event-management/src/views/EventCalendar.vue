<template>
  <div>
    <div class="flex flex-col gap-20">
      <div class="z-50">
      <AddEvent style="position: fixed; "></AddEvent>
    </div>
    <FullCalendar :options="calendarOptions" />
    </div>
    <EventModal :event="eventClick" @close="showStore.showModal = false"></EventModal>
    
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import EventModal from '@/components/EventModal.vue'
import AddEvent from '@/components/AddEvent.vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useEventStore } from '@/stores/event'
import { useShowStore } from '@/stores/show'
const eventStore = useEventStore();
const showStore = useShowStore()
const events = computed(() => {
  return eventStore.events.map(event => ({
    id: event.id,
    title: event.title,
    start: event.dateUp,
    end: event.dateDown,
    extendedProps: {
      content: event.content,
      place: event.place
    }
  }))
})
function handleEventClick(arg) {
  eventClick.value = arg.event
  showStore.showModal = true

}

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  events: events.value,
  eventClick: handleEventClick,
})
const eventClick = ref({})
</script>
