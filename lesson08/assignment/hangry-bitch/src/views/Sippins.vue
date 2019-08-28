<template>
  <div class="noms">
    <Headers v-slot:header>{{title}}</Headers>
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import Headers from "@/components/Headers.vue";

export default {
  name: "Sippin's",
  components: {
    Gallery,
    Headers
  },
  data: () => ({
    title: "Sippin's",
    tagLine: "What's in your glass?"
  })
};
</script>

// Vue grid photo gallery tutorial https://travishorn.com/creating-a-photo-gallery-with-vue-css-grid-3e0a3dd25285
