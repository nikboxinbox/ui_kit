<!-- UIKit -->
<template lang="pug">
.custom-input(:class="{ 'invalid': !isValid }")
  input(
    :value="value" 
    :placeholder="placeholder" 
    @input="$emit('update:value', $event.target.value)").content_input
  label.label().label_input {{ label }}
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "Почта / телефон",
  },
  placeholder: {
    type: String,
    default: "Введите вашу почту или телефон",
  },
  value: {
    type: String,
    default: "",
  },
  isValid: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
.custom-input {
  position: relative;

  input {
    width: 100%;
    max-width: 312px;
    height: 62px;
    padding: 27px 20px 11px 20px;
    color: $text-dark;
    border: 1px solid $background-light;
    background-color: $background-light;
    border-radius: 8px;

    &:focus {
      outline: none;
      border-color: $primary;
    }

    &::placeholder {
      color: $text-dark;
      opacity: 0.1;
    }
  }

  .label {
    position: absolute;
    left: 20px;
    top: 11px;
    color: $neutral-400;
  }

  &.invalid {
    input {
      border-color: $error;
    }
  }
}
</style>
