import { defineStore } from 'pinia'
import { useShowStore } from './show'
import { v4 } from 'uuid'
const STORE_NAME = 'event'
export const useEventStore = defineStore(STORE_NAME, {
  state: () => ({
    events: JSON.parse(localStorage.getItem("events")) || [
      // {
      //   id: v4(),
      //   title: 'Meeting',
      //   content: 'Nothing',
      //   dateUp: '2024-08-24',
      //   dateDown: '2024-08-24',
      //   place: 'EPITECH'
      // },
      // {
      //   id: v4(),
      //   title: 'BasketBall',
      //   content: 'Finale cup',
      //   dateUp: '2024-08-16',
      //   dateDown: '2024-08-18',
      //   place: 'Soweto'
      // },
      // {
      //   id: v4(),
      //   title: 'Holydays',
      //   content: 'Two months',
      //   dateUp: '2024-08-16',
      //   dateDown: '2024-08-18',
      //   place: 'Cameroun'
      // },
      // {
      //   id: v4(),
      //   title: 'Lesson',
      //   content: 'IRI',
      //   dateUp: '2024-08-20',
      //   dateDown: '2024-08-20',
      //   place: 'School'
      // }
    ]
  }

),
actions: {
  isoDate(date){
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  },
  

  // handleEventClick(arg){
  //   console.log('Event clicked: ', arg.event.title);
  //   alert('Event clicked: ' + arg.event.title);
  //   alert('Event clicked: ' + arg.event.extendedProps.content);
  //   alert('Event clicked: ' + arg.event.start);
  //   alert('Event clicked: ' + arg.event.end);
  //   alert('Event clicked: ' + arg.event.extendedProps.place);
  
  // },

  trimmedValue(inputValue) {
    return inputValue.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  },

  createEvent(title, content, dateUp, dateDown, place = null) {
    this.errors = []
    if (!title || this.trimmedValue(title) == '') {
      this.errors.push('Required!')
    }
    if (!content || this.trimmedValue(content) == '') {
      this.errors.push('Required!')
    }
    if (!dateUp || this.trimmedValue(dateUp) == '') {
      this.errors.push('Required!')
    }
    if (!dateDown || this.trimmedValue(dateDown) == '' || new Date()) {
      this.errors.push('Required!')
    }

    if (this.errors.length) {
      return false
    }
    const event = {
      id: v4(),
      title: title,
      content: content,
      dateUp: dateUp,
      dateDown: dateDown,
      place: place
    }
    this.events.push(event)
    localStorage.setItem('events', JSON.stringify(this.events))
    console.log(this.events)
  },
  updateTitle(id, newTitle) {
    this.errors = []
    if (!newTitle || this.trimmedValue(newTitle) == '') {
      this.errors.push('Required!')
    } else {
      const eventIndex = this.events.findIndex((event) => event.id === id)
      this.events[eventIndex].title = newTitle
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updateContent(id, newContent) {
    this.errors = []
    if (!newContent || this.trimmedValue(newContent) == '') {
      this.errors.push('Required!')
    } else {
      const eventIndex = this.events.findIndex((event) => event.id === id)
      this.events[eventIndex].content = newContent
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updateDateUp(id, newDateUp) {
    this.errors = []
    if (!newDateUp || this.trimmedValue(newDateUp) == '') {
      this.errors.push('Required!')
    } else {
      const eventIndex = this.events.findIndex((event) => event.id === id)
      this.events[eventIndex].dateUp = newDateUp
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updateDateDown(id, newDateDown) {
    this.errors = []
    if (!newDateDown || this.trimmedValue(newDateDown) == '') {
      this.errors.push('Required!')
    } else {
      const eventIndex = this.events.findIndex((event) => event.id === id)

      this.events[eventIndex].dateDown = newDateDown
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updatePlace(id, place) {
    this.errors = []
    if (!place || this.trimmedValue(place) == '') {
      this.errors.push('Required!')
    } else {
      const eventIndex = this.events.findIndex((event) => event.id === id)
      this.events[eventIndex].place = place
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  deleteEvent(id) {
    this.events = this.events.filter((event) => event.id !== id)
    localStorage.setItem('events', JSON.stringify(this.events))
  }
}
})

