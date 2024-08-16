import { defineStore } from 'pinia'
import { v4 } from 'uuid'
import { useUserStore } from './user'

const STORE_NAME = 'event'
export const useEventStore = defineStore(STORE_NAME, {
  state: () => ({
    events: JSON.parse(localStorage.getItem("events")) || []
  }

),
actions: {
  newDate(date){
    return new Date(date);
  },

  trimmedValue(inputValue) {
    return inputValue.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  },

  createEvent(title, content, dateUp, dateDown, place = null) {
    this.errors = []
    if (!title || this.trimmedValue(title) == '') {
      this.errors.push('Required!')
      alert("Title is Required !")

    }
    if (!content || this.trimmedValue(content) == '') {
      this.errors.push('Required!')
      alert("Description is Required !")

    }
    if (!dateUp || this.trimmedValue(dateUp) == '') {
      this.errors.push('Required!')
      alert("DateUp is Required !")
    }
    if (!dateDown || this.trimmedValue(dateDown) == '') {
      this.errors.push('Required!')
      alert("DateDown is Required !")
    }
    if (this.newDate(dateDown).getTime() < this.newDate(dateUp).getTime()) {
      console.log(this.newDate(dateDown).getTime());
      
      this.errors.push("End date shouldn't be less than Start date")
      alert("End date shouldn't be less than Start date")
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
  },

  updateTitle(id, newTitle) {
    this.errors = []
    if (!newTitle || this.trimmedValue(newTitle) == '') {
      this.errors.push('Required!')
      alert("Title is Required !")      
    } else {
      const eventIndex = this.events.findIndex((event) => event.id === id)
      console.log(eventIndex);
      
      this.events[eventIndex].title = newTitle
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updateContent(id, newContent) {
    this.errors = []
    if (!newContent || this.trimmedValue(newContent) == '') {
      this.errors.push('Required!')
      alert("Description is Required !")
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
      alert("DateUp is Required !")
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
      alert("DateDown is Required !")

    } else {
      const eventIndex = this.events.findIndex((event) => event.id === id)

      this.events[eventIndex].dateDown = newDateDown
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updatePlace(id, place = null) {

      const eventIndex = this.events.findIndex((event) => event.id === id)
      this.events[eventIndex].place = place
      localStorage.setItem('events', JSON.stringify(this.events))
  },
  deleteEvent(id) {
    this.events = this.events.filter((event) => event.id !== id)
    localStorage.setItem('events', JSON.stringify(this.events))
  },
  RedirectionJavascript(link) {
    document.location.href = link;
  }
}
})

