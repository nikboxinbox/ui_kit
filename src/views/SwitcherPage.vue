<template lang="pug">
h1.headline-2 SwitcherLang
.line
  SwitcherLang(:lang="lang" @set_language="")
</template>
<script setup lang="ts">
import SwitcherLang from "@/components/SwitcherLang.vue";
import { ref } from "vue";
</script>
<style lang="scss"></style>
