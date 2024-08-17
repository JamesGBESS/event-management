import { defineStore } from 'pinia'
import { v4 } from 'uuid'
// import { useUserStore } from './user'

const STORE_NAME = 'event'
export const useEventStore = defineStore(STORE_NAME, {
  state: () => ({
    events: JSON.parse(localStorage.getItem("events")) || []
  }

),
actions: {
  eventsUser(user_id){
    const userEvents = this.events.filter(event => (event.user_id === user_id))
    return userEvents

  },
  newDate(date){
    return new Date(date);
  },
  trimmedValue(inputValue) {
    return inputValue.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  },

  createEvent(user_id, title, content, dateUp, dateDown, place = null) {
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
      user_id: user_id,
      title: title,
      content: content,
      dateUp: dateUp,
      dateDown: dateDown,
      place: place
    }
    this.events.push(event)
    localStorage.setItem('events', JSON.stringify(this.events))
  },

  updateTitle(user_id, id, newTitle) {
    this.errors = []
    if (!newTitle || this.trimmedValue(newTitle) == '') {
      this.errors.push('Required!')
      alert("Title is Required !")      
    } else {
      const eventIndex = this.eventsUser(user_id).findIndex((event) => event.id === id)
      console.log(eventIndex); 
      this.eventsUser(user_id)[eventIndex].title = newTitle
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updateContent(user_id, id, newContent) {
    this.errors = []
    if (!newContent || this.trimmedValue(newContent) == '') {
      this.errors.push('Required!')
      alert("Description is Required !")
    } else {
      const eventIndex = this.eventsUser(user_id).findIndex((event) => event.id === id)
      this.eventsUser(user_id)[eventIndex].content = newContent
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updateDateUp(user_id, id, newDateUp) {
    this.errors = []
    if (!newDateUp || this.trimmedValue(newDateUp) == '') {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      this.errors.push('Required!')
      alert("DateUp is Required !")
    } else {
      const eventIndex = this.eventsUser(user_id).findIndex((event) => event.id === id)
      this.eventsUser(user_id)[eventIndex].dateUp = newDateUp
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updateDateDown(user_id, id, newDateDown) {
    this.errors = []
    if (!newDateDown || this.trimmedValue(newDateDown) == '') {
      this.errors.push('Required!')
      alert("DateDown is Required !")

    } else {
      const eventIndex = this.eventsUser(user_id).findIndex((event) => event.id === id)
      this.eventsUser(user_id)[eventIndex].dateDown = newDateDown
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  updatePlace(user_id, id, place = null) {

      const eventIndex = this.eventsUser(user_id).findIndex((event) => event.id === id)
      this.eventsUser(user_id)[eventIndex].place = place
      localStorage.setItem('events', JSON.stringify(this.events))
  },
  deleteEvent(user_id, id) {
  const userEvents = this.events.filter(event => (event.user_id === user_id))
    this.events = this.events.filter((event) => event.id !== id)
    localStorage.setItem('events', JSON.stringify(this.events))
  }
}
})

