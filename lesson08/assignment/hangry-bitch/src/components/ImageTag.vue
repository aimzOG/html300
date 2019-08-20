<template>
  <!-- uses props to render title src and alt -->
  <img v-bind:class="{selected: border}" :title="title" :src="src" :alt="alt" />
</template>

<script>
export default {
  name: "ImageTag",
  // prop validation
  props: {
    src: String,
    alt: String,
    title: String,
    border: Boolean
  }
};
</script>

<style>
.selected {
  border: 3px solid white;
}
</style>
