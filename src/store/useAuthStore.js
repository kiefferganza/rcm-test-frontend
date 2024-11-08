import { defineStore } from 'pinia'
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        email: '',
        password: '',
        token: localStorage.getItem('token') || '',
        loginSuccess: false,
        isLoggedIn: false,
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
                    this.token = response.data.token;
                    localStorage.setItem('token', this.token);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
                    this.loginSuccess = true;
                    this.isLoggedIn = true
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

// Set the token from localStorage if it exists
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}