<template lang="pug">
Popup(ref="popupEl")  
</template>
<script setup lang="ts">
import Popup from "@/components/Popup.vue";
import { onMounted, ref } from "vue";

const popupEl = ref();
onMounted(() => {
  popupEl.value.showMessage("Ты ошибся, Вазген !", {
    autoHide: true,
    hideTimeout: 2000,
  });
});
</script>

<style lang="scss"></style>
