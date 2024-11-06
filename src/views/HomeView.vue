<template>
  <div class="home">
    <a-card title="Employee Management System" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <Login />
  </a-card>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Auth/Login.vue';

export default {
  name: 'HomeView',
  components: {
    Login
  }
}
</script>
