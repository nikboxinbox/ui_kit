<script setup lang="ts">
defineProps({
  lang: {
    type: String,
    default: "ru",
    validator: (value: string) => {
      return ["ru", "en"].includes(value);
    },
  },
});

const emit = defineEmits(["set_language"]);

const setLanguage = (lang: "ru" | "en") => emit("set_language", lang);
</script>

<template lang="pug">
.swither-lang().subtitles 
  span.lang(
    :class="{ 'lang--active': lang === 'ru' }"
    @click="setLanguage('ru')"

  ) RU 
  .vertical-line
  span.lang(
    :class="{ 'lang--active': lang === 'en' }"
    @click="setLanguage('en')"

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
