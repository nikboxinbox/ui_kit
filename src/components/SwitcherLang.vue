<script setup lang="ts">
defineProps({
  language: {
    type: String,
    default: "ru",
    validator: (value: string) => {
      return ["ru", "en"].includes(value);
    },
  },
});

const emits = defineEmits(["update:language"]);
</script>

<template lang="pug">
.swither-lang().subtitles 
  span.lang(
    :class="{ 'lang--active': language === 'ru' }"
    @click="emits('update:language', 'ru')"

  ) RU 
  .vertical-line
  span.lang(
    :class="{ 'lang--active': language === 'en' }"
    @click="emits('update:language', 'en')"

  ) EN
</template>

<style lang="scss">
.swither-lang {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 84px;
  height: 30px;
}

.lang {
  cursor: pointer;

  &--active {
    color: $primary;
  }
}

.vertical-line {
  width: 3px;
  height: 30px;
  background-color: #e5e5e5;
}
</style>
