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

const emit = defineEmits(["click"]);

const clickOnBtn = () => {
  if (!props.disabled) {
    emit("click");
  }
};
</script>

<template lang="pug">

button(
  :class="['btn', `btn_${color}`,{[`btn_${color}_outlined`]: outlined}, {'btn_disabled': disabled}]"
  @click="clickOnBtn"
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

  &_disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover,
    &:active {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &_primary {
    background: $primary;
    border: 1px solid $primary;

    &:not(.btn_disabled) {
      &:hover {
        background: $primary-hover;
      }
      &:active {
        background: $primary-active;
      }
    }

    &_outlined {
      background: transparent;
      color: $primary;

      &:not(.btn_disabled) {
        &:hover {
          background: $neutral-50;
        }
        &:active {
          background: $secondary;
        }
      }
    }
  }
}
</style>
