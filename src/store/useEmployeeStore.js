import { defineStore } from 'pinia'
import axios from 'axios';

export const useEmployeeStore = defineStore('employees', {
    state: () => ({
        employees: [],
        loginSuccess: false,
    }),
    actions: {
        async fetchEmployees() {
            try {
                const response = await axios.get('employees');
                if (response.status === 200) {
                    console.log(response);
                    this.employees = response.data;
                } else {
                    console.error('Failed to fetch employees with status:', response.status);
                }
            } catch (error) {
                console.error('An error occurred while fetching employees:', error);
            }
        }
    }
})