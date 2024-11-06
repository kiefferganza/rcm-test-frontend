<template>
    <Table />
    <h1>asdasd</h1>
</template>

<script setup>
import Table from '@/components/Employees/components/Table.vue';
import {useEmployeeStore} from '@/store/useEmployeeStore';
import { onMounted } from 'vue';

const employeeStore = useEmployeeStore();

onMounted(() => {
    employeeStore.fetchEmployees();
});



</script>