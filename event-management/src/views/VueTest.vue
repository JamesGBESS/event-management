<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: [
          { title: 'Meeting', start: "2024-08-15", end: "2024-08-29" },
          { title: 'Champions', start: "2024-08-15", end: "2024-08-25" },
          { title: 'Meeting', start: "2024-08-15", end: "2024-08-29" },
          { title: 'Champions', start: "2024-08-15", end: "2024-08-25" },
          { title: 'Meeting', start: "2024-08-15", end: "2024-08-29" },
          { title: 'Champions', start: "2024-08-15", end: "2024-08-25" }

        ]
      }
    }
  }
}
</script>

<template>
  <h1>Demo App</h1>
  <FullCalendar :options='calendarOptions' />
</template>