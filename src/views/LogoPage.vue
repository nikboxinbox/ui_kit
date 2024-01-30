<script setup lang="ts">
import LogoTitle from "@/components/LogoTitle.vue";
</script>
<template lang="pug">
h1.headline-2 LogoTitle 
.line_block 
  LogoTitle
</template>

<style lang="scss">
.heading {
  &-1 {
    font-size: 34px;
    margin: 20px 0px;
    font-weight: 300;
  }
  &-2 {
    font-size: 22px;
    margin: 20px 0px;
    font-weight: 300;
  }
  &-3 {
    font-size: 17px;
    margin: 20px 0px;
    font-weight: 300;
  }
}

.headline {
  &-2 {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }
}
.text_description {
  font-family: Open Sans, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
