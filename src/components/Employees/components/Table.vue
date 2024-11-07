<template>
    <a-table :columns="columns" :data-source="tableData" :pagination="pagination " @change="handleTableChange">
      <template #bodyCell="{ column, index }">
      <template v-if="column.key === 'action'">
        <div style="display: flex; gap: 10px;">
          <a-button type="primary" @click="handleShowModal(index)">Update</a-button>
          
          <a-button danger @click="deleteRecord(record)">Delete</a-button>
        </div>
      </template>
      </template>
    </a-table>
    <a-modal v-model:open="showModal" title="Update Employee" okText="Save" :onOk="handleSubmit"> 
        <EmployeeForm :update-form="updateEmployeeForm" ref="employeeFormModal"/>
    </a-modal>
  </template>
  <script setup>
  import { useEmployeeStore } from '@/store/useEmployeeStore';
  import EmployeeForm from '@/components/Employees/components/EmployeeForm.vue';
  import {ref} from 'vue';


  const employeeStore = useEmployeeStore();

  const employees = employeeStore.employees;
  const tableData = employees.data;

  const updateEmployeeForm = ref();
  const employeeFormModal = ref();

  const pagination = {
    'current': employees.current_page,
    'pageSize': employees.per_page,
    'total': employees.total,
    'showTotal': (total) => `Total ${total} items`
  };

  const handleTableChange = (event) => {
    employeeStore.current_page = event.current;
    employeeStore.fetchEmployees();
  };

  const showModal = ref(false);

  const handleShowModal = (index) => {
    showModal.value = true;
    updateEmployeeForm.value = tableData[index];
  };

  const handleSubmit = () => {
   employeeStore.updateEmployee(employeeFormModal.value.form);
  };

  
  const columns = [
   {
      'title': 'First Name',
      'dataIndex': 'firstname',
      'key': 'firstname'
   },
    {
        'title': 'Last Name',
        'dataIndex': 'lastname',
        'key': 'lastname'
    },
    {
        'title': 'Email',
        'dataIndex': 'email',
        'key': 'email'
    },
    {
        'title': 'Phone',
        'dataIndex': 'phone',
        'key': 'phone'
    },
    {
        'title': 'Status',
        'dataIndex': 'status',
        'key': 'status'
    },
    {
        'title': 'Type',
        'dataIndex': 'type',
        'key': 'type'
    },
    {
      'title': 'Created At',
      'dataIndex': 'created_at',
      'key': 'created_at'
    },
    {
      'title': 'Action',
      'key': 'action',
    }
  ];
  </script>