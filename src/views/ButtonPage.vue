<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template lang="pug">
h1.heading-1 Buttons  

h1.heading-2 Colors    
.line
Button(label="Primary")
Button(label="Primary" disabled)


h1.heading-2 Outlined    
.line
Button(label="Outlined" outlined)

Button(label="Outlined" outlined disabled)

</template>
<style lang="scss"></style>
