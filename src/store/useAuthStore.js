import { defineStore } from 'pinia'
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        email: '',
        password: '',
        token: '',
        loginSuccess: false,
    }),
    actions: {
        async login() {
            try {
            // call an API
            const response = await axios.post('login', {
                email: this.email,
                password: this.password,
            })

            if (response.status === 200) {
                console.log(response);
                this.token = response.data.token;
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
                this.loginSuccess = true;
            } else {
                console.error('Login failed with status:', response.status);
                this.loginSuccess = false;
            }
            } catch (error) {
            console.error('An error occurred during login:', error);
            this.loginSuccess = false;
            }
        }
    }
})