<template>
    <div>
        <a-flex gap="middle" align="center" vertical>
            <a-form
                :model="formState"
                name="basic"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
                <a-form-item
                    label="Email"
                    name="email"
                    :rules="[{ required: true, message: 'Please input your email!' }]"
                >
                    <a-input v-model:value="formState.email" />
                </a-form-item>
        
                <a-form-item
                    label="Password"
                    name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>
        
                <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>
        
                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
            </a-form>
        
        </a-flex>
    </div>
  </template>
  <script setup>
  import { reactive, ref } from 'vue';
  import { useAuthStore } from '@/store/useAuthStore';
  import {  useRouter } from 'vue-router'
  import { notification } from 'ant-design-vue';


  const router = useRouter()
  const store = useAuthStore();
  const loginMessage = ref('')
  const loginAlert = ref('')
  const formState = reactive({
    email: '',
    password: '',
    remember: true,
  });


  const openNotificationWithIcon = type => {
  notification[type]({
    message: loginMessage.value,
    description:
      '',
  });
};

  const onFinish = values => {
    store.email = values.email
    store.password = values.password
    console.log('Success:', values);
    store.login();
    store.loginSuccess ? loginMessage.value = 'Login Success' : loginMessage.value = 'Login Failed'
    store.loginSuccess ? loginAlert.value = 'success' : loginAlert.value = 'error'

    openNotificationWithIcon(loginAlert.value)
    store.loginSuccess ? router.push('/employees') : router.push('/')


    
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  </script>