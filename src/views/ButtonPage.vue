<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template lang="pug">
h1.heading-1 Buttons  
h1.heading-2 Colors    
.line
Button(label="Primary")

h1.heading-2 Outlined    
.line
Button(
  label="Outlined"
  :outlined="true"
  )
</template>
<style lang="scss">
.line {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
