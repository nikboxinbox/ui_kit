<script setup lang="ts">
import Input from "@/components/Input.vue";
import { ref } from "vue";

const inputValue = ref("");
</script>

<template lang="pug">
h1.heading-1 Input 

Input(v-model="inputValue") 
      
</template>
