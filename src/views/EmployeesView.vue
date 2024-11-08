<template>
    <a-layout has-sider>
      <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
      >
        <div class="logo" >
            <H1 style="color: white;">Employee Management System</H1>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <user-outlined />
            <span class="nav-text">Employees</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-header :style="{ background: '#fff', padding: 0 }" >

            <div style="display: flex; align-items: center; padding: 10px;">
            <a-input-search
              placeholder="Search employees"
              style="width: 200px; margin-right: 16px;"
              @search="handleSearch"
            />
            <a-button type="primary" @click="handleShowModal" style="margin-right: 16px;">
              Add New Employee
            </a-button>
            <a-modal v-model:open="showModal" title="Add Employee" okText="Save" :onOk="handleSubmit">
              <EmployeeForm  ref="employeeForm"/>
            </a-modal>
            <a-button type="default">
              Export
            </a-button>
            </div>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
            <index />
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          Kieffer Ganza ©2024
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
  <script setup>
  import index from '@/components/Employees/index.vue';
  import EmployeeForm from '@/components/Employees/components/EmployeeForm.vue';
  import { useEmployeeStore } from '@/store/useEmployeeStore';
  import { ref } from 'vue';
  import { notification } from 'ant-design-vue';


  const employeeStore = useEmployeeStore();
   const alertMessage = 'Employee added successfully'
  const alertType = 'success'

  const openNotificationWithIcon = type => {
  notification[type]({
    message: alertMessage,
    description:
      '',
  });
};

const handleSearch = (value) => {
    employeeStore.search = value;
    employeeStore.fetchEmployees();
  };

  const handleSubmit = () => {
    employeeStore.createEmployee(employeeForm.value.form);
    openNotificationWithIcon(alertType)
}





  const selectedKeys = ref(['1']);
  const showModal = ref(false);

  const employeeForm = ref(null);

  const handleShowModal = () => {
    showModal.value = true;
  };
  </script>
  <style scoped>
  #components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
  
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  </style>