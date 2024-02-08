
<template lang="pug">
h1.heading-1 Buttons  

h1.heading-2 Colors    
.line
Button(label="Primary" ).item
Button(label="Primary" disabled).item


h1.heading-2 Outlined    
.line
Button(label="Outlined" outlined).item

Button(label="Outlined" outlined disabled).item

h1.heading-2 Clickable text     
.line Согласен с условиями &nbsp
  ClickableText(text="правил использования сервиса и обработки персональных данных.").item
</template>
<script setup lang="ts">
import Button from "@/components/Button.vue";
import ClickableText from "@/components/ClickableText.vue";

// const toggleTheme = () => {
//   let root = document.querySelector(":root");
//   root?.classList.toggle('dark');

// }
</script>
<style lang="scss">
.item {
  margin-right: 10px;
}
</style>
