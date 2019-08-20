<template>
  <div>
    <h1 class="display-2 text-center">{{title}}</h1>
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Noms",
  components: {
    Gallery
  },
  data: () => ({
    title: "Noms",
    tagLine: "What's cookin' good lookin'?"
  })
};
</script>
