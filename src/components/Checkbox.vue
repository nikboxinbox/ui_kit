<script setup lang="ts">
const emits = defineEmits(["update:checked"]);

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  color: { type: String, default: "primary" },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
div(:class="['checkbox', `checkbox_${color}`]") 
  input(
    type="checkbox"
    :checked="checked"
    @input="emits('update:checked', $event.target.checked)"
    :disabled="disabled"
    id="chekboxId"
    )
  label(for="chekboxId").text_description {{ label }}
</template>

<style lang="scss" scoped>
.checkbox {
  color: $primary;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + label::before {
      border: none;
      width: 15px;
      height: 15px;
      // Данный бекраунд (галочка и фон) svg цвета primary.
      background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M13.3333 0H1.66667C0.741667 0 0 0.75 0 1.66667V13.3333C0 14.25 0.741667 15 1.66667 15H13.3333C14.2583 15 15 14.25 15 13.3333V1.66667C15 0.75 14.2583 0 13.3333 0ZM5.83333 11.6667L1.66667 7.5L2.84167 6.325L5.83333 9.30833L12.1583 2.98333L13.3333 4.16667L5.83333 11.6667Z" fill="%233EA089"/></svg>');
      background-size: 100%;
    }
  }

  label {
    display: flex;
    align-items: center;
    &::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      box-sizing: border-box;
      border: 1px solid $primary;
      border-radius: 2px;
      margin-right: 6px;
    }
  }

  &_primary {
    color: $primary;

    input {
      &:checked + label::before {
        background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M13.3333 0H1.66667C0.741667 0 0 0.75 0 1.66667V13.3333C0 14.25 0.741667 15 1.66667 15H13.3333C14.2583 15 15 14.25 15 13.3333V1.66667C15 0.75 14.2583 0 13.3333 0ZM5.83333 11.6667L1.66667 7.5L2.84167 6.325L5.83333 9.30833L12.1583 2.98333L13.3333 4.16667L5.83333 11.6667Z" fill="%233EA089"/></svg>');
      }
    }

    label {
      &::before {
        border: 1px solid $primary;
      }
    }
  }
}
</style>
