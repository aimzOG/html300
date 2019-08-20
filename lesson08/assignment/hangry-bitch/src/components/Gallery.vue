<template>
  <div class="gallery">
    <div class="gallery-panel" v-for="image in images" :key="image.id">
      <router-link :to="`/images/${image.id}`">
        <img :src="thumbUrl(image.filename)" />
      </router-link>
    </div>
  </div>
</template>

<script>
import images from "@/gallery.json";
export default {
  name: "Gallery",
  data() {
    return {
      images
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/gallery/thumbnails/${filename}`);
    }
  }
};
</script>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}
.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>
