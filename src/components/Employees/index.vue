<template>
   <div v-cloak>
    <Table  v-if="!employeeStore.loading"/>
   </div>
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