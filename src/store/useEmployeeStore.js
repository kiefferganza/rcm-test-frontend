import { defineStore } from 'pinia'
import axios from 'axios';

export const useEmployeeStore = defineStore('employees', {
    state: () => ({
        employees: [],
        loginSuccess: false,
        loading: false,
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total:0
    }),
    actions: {
        async fetchEmployees() {
            this.loading = true;
            try {
                const response = await axios.get('employees?page=' + this.current_page);
                if (response.status === 200) {
                    this.employees = response.data.data;
                    this.current_page = response.data.data.current_page;
                    this.last_page = response.data.data.last_page;
                    this.loading = false;
                } else {
                    console.error('Failed to fetch employees with status:', response.status);
                }
            } catch (error) {
                console.error('An error occurred while fetching employees:', error);
            }
        },

        async createEmployee(employee) {
            this.loading = true;
            try {
                const response = await axios.post('employees', employee);
                if (response.status === 200) {
                   await this.fetchEmployees();
                } else {
                    console.error('Failed to create employee with status:', response.status);
                }
            } catch (error) {
                console.error('An error occurred while creating employee:', error);
            }
        },
        async updateEmployee(employee) 
        {
            this.loading = true;
            try {
                const response = await axios.put('employees/' + employee.id, employee);
                if (response.status === 200) {
                    await this.fetchEmployees();
                } else {
                    console.error('Failed to update employee with status:', response.status);
                }
            } catch (error) {
                console.error('An error occurred while updating employee:', error);
            }
        }
    }
})