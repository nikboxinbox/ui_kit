<script setup lang="ts"></script>
<template>
  <h1 class="heading-1">Typography</h1>
  <h2 class="heading-1">Heading 1</h2>
  <h2 class="heading-2">Heading 2</h2>
  <h2 class="heading-3">Heading 3</h2>
  <h1 class="headline-2">Headline-2</h1>
</template>

<style lang="scss">
// heading - это не для VCC !
.heading {
  &-1 {
    font-size: 34px;
    margin: 20px 0px;
    font-weight: 300;
  }
  &-2 {
    font-size: 22px;
    margin: 20px 0px;
    font-weight: 300;
  }
  &-3 {
    font-size: 17px;
    margin: 20px 0px;
    font-weight: 300;
  }
}
// VCC
.headline {
  &-2 {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }
}

.subtitles {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
}

.text_description {
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.content_input {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.label_input {
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

.small_text {
  //styleName: Small text SB;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
}
</style>
