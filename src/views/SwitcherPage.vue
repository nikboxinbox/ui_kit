<script setup lang="ts">
import SwitcherLang from "@/components/SwitcherLang.vue";
import { ref } from "vue";

const language = ref("ru");
</script>
<template lang="pug">
h1.headline-2 SwitcherLang
.line
  SwitcherLang(v-model:language="language")
</template>

<style lang="scss"></style>
