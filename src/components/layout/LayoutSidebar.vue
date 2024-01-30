<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});

const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Button", href: "/button" },
  { name: "Checkbox", href: "/checkbox" },
  { name: "Logo", href: "/logo" },
  { name: "Switcher", href: "/switcher" },
]);
</script>

<template lang="pug">
div(:class="['sidebar', { sidebar_isopen: openSidebar }]") 
  router-link(
    v-for="link in links"
    :key="link.name"
    :to="link.href"
    :class="['sidebar__link', { sidebar__link_active: route.name === link.name }]"
    ) {{ link.name }} 
</template>

<style lang="scss">
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translate(0px);
  background-color: #fff;
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      border-color: $primary;
    }
    &_active {
      border-color: black;
      color: black;
    }
  }
}
</style>
