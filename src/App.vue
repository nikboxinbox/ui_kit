<script setup lang="ts">
import { ref } from "vue";
import LayoutHeader from "@/components/layout/LayoutHeader.vue";
import LayoutSidebar from "@/components/layout/LayoutSidebar.vue";

const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template lang="pug">
.container 
  .sidebar-toggle(@click="toggleMenu") &#5125
  LayoutHeader
  LayoutSidebar(:openSidebar="isOpenMenu") 
  div(:class="['content', { content_full: !isOpenMenu }]")
    router-view
</template>

<style lang="scss">
@import "./styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: $primary;
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
