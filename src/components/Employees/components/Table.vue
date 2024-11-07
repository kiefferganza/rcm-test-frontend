<template>
    <a-table :columns="columns" :data-source="tableData" :pagination="pagination " @change="handleTableChange">
    </a-table>
  </template>
  <script setup>
  import { useEmployeeStore } from '@/store/useEmployeeStore';


  const employeeStore = useEmployeeStore();

  const employees = employeeStore.employees;
  const tableData = employees.data;

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
      'title': 'Create At',
      'dataIndex': 'created_at',
      'key': 'created_at'
    }
  ];
  </script>