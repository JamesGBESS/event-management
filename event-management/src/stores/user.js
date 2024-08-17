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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email)
    },
    validatePassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      return passwordRegex.test(password);
    },
    trimmedValue(inputValue) {
      return inputValue.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    },
    addUser(name, email, password) {
      email = email.toLowerCase()
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
      localStorage.setItem('users', JSON.stringify(this.users))
      this.user = userFounded
      this.redirect('/events/'+ userFounded.id)
    },
    logoutUser(id){
      const userFounded = this.users.find((user) => user.id === id)
      userFounded.isLogged = false;
      localStorage.setItem('users', JSON.stringify(this.users))
      this.redirect('/')

    }
  }
})
