import { defineStore } from 'pinia'
import { v4 } from 'uuid'
import router from '@/router'

const STORE_NAME = 'user'
export const useUserStore = defineStore(STORE_NAME, {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [],
    user: '',
    errors: []
  }),
  actions: {
    redirect(route) {
      router.push(route)
    },
    validateEmail(email) {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (regex.test(email)) {
        return true
      } else {
        return false
      }
    },
    validatePassword(password) {
      const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      if (regex.test(password)) {
        return true
      } else {
        return false
      }
    },
    trimmedValue(inputValue) {
      return inputValue.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    },
    addUser(name, email, password) {
      const userFounded = this.users.find((user) => user.email === email)
      console.log(userFounded)
      this.errors = []
      if (!name || this.trimmedValue(name) == '') {
        this.errors.push('Required!')
        alert('Name is Required !')
      }
      if (
        !email ||
        this.trimmedValue(email) == '' ||
        this.validateEmail(email) == false ||
        userFounded != undefined
      ) {
        console.log(this.validateEmail(email))
        this.errors.push('Required!')
        alert('Enter your valid email !')
      }
      if (
        !password ||
        this.trimmedValue(password) == '' ||
        !this.validatePassword(password) ||
        password.length < 6 ||
        password.length > 16
      ) {
        this.errors.push('Invalid password !')
        alert('Invalid password !')
      }
      if (this.errors.length) {
        return false
      }
      const user = {
        id: v4(),
        name: name,
        email: email,
        password: password,
        isLogged: false
      }
      console.log(user)
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
        this.redirect('/login')
    
    },
    loginUser(email, password) {
      const userFounded = this.users.find((user) => user.email === email)
      if (
        !email ||
        this.trimmedValue(email) == '' ||
        userFounded == undefined
      ) {
        console.log(this.validateEmail(email))
        this.errors.push('Required!')
        alert('Enter your valid email !')
      }
      if (!password || this.trimmedValue(password) == '' || password !== userFounded.password) {
        this.errors.push('Invalid password !')
        alert('Invalid password !')
      }
      if (this.errors.length) {
        return false
      }
      userFounded.isLogged = true
      this.user = userFounded
      this.redirect('/events'+ userFounded.id)
    },
    logoutUser(){
      this.redirect('/')

    }
  }
})
