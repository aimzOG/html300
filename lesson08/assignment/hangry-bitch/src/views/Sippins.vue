<template>
  <div class="noms">
    <h1 class="display-2 text-center">{{title}}</h1>
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
export default {
  name: "Sippin's",
  components: {
    Gallery
  },
  data: () => ({
    title: "Sippin's",
    tagLine: "What's in your glass?"
  })
};
</script>

// Vue grid photo gallery tutorial https://travishorn.com/creating-a-photo-gallery-with-vue-css-grid-3e0a3dd25285
