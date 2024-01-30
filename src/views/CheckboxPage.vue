<script setup lang="ts">
import Checkbox from "@/components/Checkbox.vue";
import { ref } from "vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(false);
</script>

<template lang="pug">
h1.heading-1 Checkbox  

Checkbox(
    label="Запомнить меня"
    v-model:checked="checkboxActive"
    :checkboxDisabled="true"
)      
</template>
