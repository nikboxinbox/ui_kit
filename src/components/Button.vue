<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "Button",
  },
  color: {
    default: "primary",
  },
});
</script>

<template lang="pug">
button(:class="['btn', `btn_${color}`]") Вход 
</template>

<style lang="scss" scoped>
.btn {
  margin-right: 10px;
  margin-bottom: 10px;

  width: 100%;
  max-width: 316px;
  height: 64px;

  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  color: white;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  &_primary {
    background: $primary;
    border: 1px solid $primary;
    &:hover {
      background: $primary-hover;
    }
    &:active {
      background: $primary-active;
    }
  }
}
</style>
