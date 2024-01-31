<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "кликабельный текст",
  },
  color: {
    type: String,
    default: "primary",
  },
});
</script>

<template lang="pug">
span(:class="['text',`text_${color}`]") {{ text }}
</template>

<style lang="scss" scoped>
.text {
  cursor: pointer;
  // color: $primary;
  &_primary {
    color: $primary;

    &:hover {
      color: $primary-hover;
    }
    &:active {
      color: $primary-active;
    }
  }
}
</style>
