<template>
  <div>
    <Headers v-slot:header>{{title}}</Headers>
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import Headers from "@/components/Headers.vue";

export default {
  name: "Noms",
  components: {
    Gallery,
    Headers
  },
  data: () => ({
    title: "Noms",
    tagLine: "What's cookin' good lookin'?"
  })
};
</script>
