<template>
    <a-form :model="form">
        <a-form-item>
            <a-input v-model:value="form.firstname" placeholder="Enter first name" />
        </a-form-item>
        <a-form-item>
            <a-input v-model:value="form.lastname" placeholder="Enter last name" />
        </a-form-item>
        <a-form-item >
            <a-input v-model:value="form.email" placeholder="Enter email" />
        </a-form-item>
        <a-form-item>
            <a-input v-model:value="form.type" placeholder="Enter type" />
        </a-form-item>
        <a-form-item>
            <a-input v-model:value="form.phone" placeholder="Enter phone number" />
        </a-form-item>
        <a-form-item>
            <a-input v-model:value="form.status" placeholder="Enter status" />
        </a-form-item>
    </a-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    firstname: '',
    lastname: '',
    email: '',
    type: '',
    phone: '',
    status: ''
});


// eslint-disable-next-line no-undef
defineExpose({
    form
});
</script>
