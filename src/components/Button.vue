<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  color: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">

button(
  :class="['btn', `btn_${color}`,{[`btn_${color}_outlined`]: outlined}]"
  :style="variables"
  ) {{label}} 

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
  font-family: Inter, sans-serif;
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

    &_outlined {
      background: transparent;
      color: $primary;
      &:hover {
        background: $neutral-50;
      }
      &:active {
        background: $secondary;
      }
    }
  }
}
</style>
