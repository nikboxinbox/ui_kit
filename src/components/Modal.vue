<script setup lang="ts">
const props = defineProps({});
</script>

<template lang="pug">
.modal 
  slot

</template>

<style lang="scss" scoped>
.modal {
  padding: 34px 102px 78px 102px;
  width: 516px;
  box-shadow: 0px 4px 20px 0px #00000014;
  border-radius: 20px;
}
</style>
