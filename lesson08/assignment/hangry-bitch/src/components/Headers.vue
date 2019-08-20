<template>
  <h1 class="display-2 text-center">
    <!-- creates slot to input unique h1 from parent -->
    <slot name="header">Heading.</slot>
  </h1>
</template>

<script>
export default {
  name: "Headers"
};
</script>

<style>
</style>
