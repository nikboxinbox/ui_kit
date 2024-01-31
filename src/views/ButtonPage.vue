<script setup lang="ts">
import Button from "@/components/Button.vue";
import ClickableText from "@/components/ClickableText.vue";
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

h1.heading-2 Clickable text     
.line Согласен с условиями &nbsp
    ClickableText(text="правил использования сервиса и обработки персональных данных.")
</template>
<style lang="scss"></style>
