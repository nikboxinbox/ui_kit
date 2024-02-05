<template lang="pug">
transition(name="popup-fade")
  div(v-if="isVisible" 
  :class="['popup-message', `popup-message--${color}`]").small_text
    .text {{ message }}
    .close-btn(@click="closePopup") &times;
</template>

<script setup lang="ts">
import { ref, defineExpose } from "vue";

defineProps({
  color: { type: String, default: "alarm" },
});

const isVisible = ref(false);
const message = ref("");

const closePopup = () => {
  isVisible.value = false;
};

const showMessage = (text, options = { autoHide: true, hideTimeout: 5000 }) => {
  message.value = text;

  isVisible.value = true;

  if (options.autoHide) {
    setTimeout(() => {
      closePopup();
    }, options.hideTimeout);
  }
};

defineExpose({ showMessage });
</script>

<style lang="scss" scoped>
.popup-message {
  position: fixed;
  display: flex;
  justify-content: space-between;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 15px 20px 14px 27px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: bottom 0.5s ease-in-out, opacity 0.5s ease-in-out;
  z-index: 99;

  .close-btn {
    margin-left: 16px;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.popup-fade-enter,
.popup-fade-leave-to {
  opacity: 0;
}

.popup-message--error {
  background-color: $alarm;
}
</style>
