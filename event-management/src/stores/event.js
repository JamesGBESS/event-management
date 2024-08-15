import { defineStore } from 'pinia'
import { v4 } from 'uuid'
const STORE_NAME = 'event'
export const useEventStore = defineStore(STORE_NAME, {
  state: () => ({
    //JSON.parse(localStorage.getItem("events"))||
    events:[
      {
        title: "first",
        content: "Commenteyeu",
        dateUp: "2024-08-24",
        dateDown: "2024-08-29",
        place: "Place",
        id: v4()
      }
    ]
    ,
    event: '',
    id: '',
    errors: []
  }),
  actions: {
    trimmedValue(inputValue) {
      return inputValue.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    },
    findEventIndex(events, id) {
      const eventIndex = events.findIndex((event) => event.id === id)
      return eventIndex
    },
    showEvent(id) {
        const event = this.events.find((event) => event.id === id);
        return event
    },
    createEvent(title, content, dateUp, dateDown, place = null) {
      this.errors = []
      if (!title ||this.trimmedValue(title) == '') {
        this.errors.push(
          'Required!'
        )
      }
      if (!content ||this.trimmedValue(content) == '') {
        this.errors.push(
          'Required!'
        )
      }
      if (!dateUp ||this.trimmedValue(dateUp) == '') {
        this.errors.push(
          'Required!'
        )
      }
      if (!dateDown ||this.trimmedValue(dateDown) == '') {
        this.errors.push(
          'Required!'
        )
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
      localStorage.setItem("events", JSON.stringify(this.events))
      console.log(this.events)
    },
    getEvent(id){
        const event = this.events.find((event) => event.id === id);
        this.event = event 
    },
    updateTitle(id, newTitle) {
      this.errors = []
      if (!newTitle ||this.trimmedValue(newTitle) == '') {
        this.errors.push(
          'Required!'
        )
      }
      else {
        const eventIndex = this.events.findIndex((event) => event.id === id)     
      this.events[eventIndex].title = newTitle;
      localStorage.setItem("events", JSON.stringify(this.events))
      }
            
    },
    updateContent(id, newContent) {
      this.errors = []
      if (!newContent ||this.trimmedValue(newContent) == '') {
        this.errors.push(
          'Required!'
        )
      }
      else {
        const eventIndex = this.events.findIndex((event) => event.id === id)     
      this.events[eventIndex].content = newContent;
      localStorage.setItem("events", JSON.stringify(this.events))
      }
            
    },
    updateDateUp(id, newDateUp) {
      this.errors = []
      if (!newDateUp ||this.trimmedValue(newDateUp) == '') {
        this.errors.push(
          'Required!'
        )
      }
      else {
        const eventIndex = this.events.findIndex((event) => event.id === id)     
        this.events[eventIndex].dateUp = newDateUp;
        localStorage.setItem("events", JSON.stringify(this.events))
      }        
    },
    updateDateDown(id, newDateDown) {
      this.errors = []
      if (!newDateDown ||this.trimmedValue(newDateDown) == '') {
        this.errors.push(
          'Required!'
        )
      }
      else {
        const eventIndex = this.events.findIndex((event) => event.id === id)     

      this.events[eventIndex].dateDown = newDateDown;
      localStorage.setItem("events", JSON.stringify(this.events))
      }
            
    },
    updatePlace(id, place) {
      this.errors = []
      if (!place ||this.trimmedValue(place) == '') {
        this.errors.push(
          'Required!'
        )
      }
      else {
        const eventIndex = this.events.findIndex((event) => event.id === id)     
      this.events[eventIndex].place = place
      localStorage.setItem("events", JSON.stringify(this.events)) 
      }
            
    },
    deleteEvent(id) {
        this.events = this.events.filter((event) => event.id !== id);
        localStorage.setItem("events", JSON.stringify(this.events))
    },
    
  }
  
})
