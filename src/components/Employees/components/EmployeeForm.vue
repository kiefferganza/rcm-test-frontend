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
            <a-form-item>
            <a-select
            ref="select"
            v-model:value="form.type"
            @focus="focus"
            @change="handleChange"
            >
            <a-select-option value="internal">Internal</a-select-option>
            <a-select-option value="External">External</a-select-option>
            
            </a-select>
        </a-form-item>
        </a-form-item>
        <a-form-item>
            <a-input v-model:value="form.phone" placeholder="Enter phone number" />
        </a-form-item>
        <a-form-item>
            <a-select
            ref="select"
            v-model:value="form.status"
            @focus="focus"
            @change="handleChange"
            >
            <a-select-option value="active">Active</a-select-option>
            <a-select-option value="inactive">Inactive</a-select-option>
            
            </a-select>
        </a-form-item>
    </a-form>
</template>

<script setup>
import { ref, defineProps,watchEffect } from 'vue';


const form = ref({
    firstname: '',
    lastname: '',
    email: '',
    type: 'internal',
    phone: '',
    status: 'active'
});

const props = defineProps({
    updateForm: {
        type: Object,
        default: () => ({})
    }
});

if (props.updateForm) {
    Object.assign(form.value, props.updateForm);
}

watchEffect(() => {
    Object.assign(form.value, props.updateForm);
})




// eslint-disable-next-line no-undef
defineExpose({
    form
});
</script>
