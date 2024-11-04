import { defineStore } from 'pinia'
import axios from 'axios';
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAuthStore = defineStore('auth', {
    state: () => ({
        email: '',
        password: '',
        token: '',
    }),
    actions: {
        async login() {
            // call an API
            const response = await axios.post('login', {
                email: this.email,
                password: this.password,
              })

              console.log(response);

            //    this.token = response.token
            //    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        }
    }
})