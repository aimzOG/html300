<template>
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="imageUrl(image.filename)" />
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <p v-if="image.title">{{ image.title }}</p>
        <p v-if="image.location">{{ image.location }}</p>
        <p v-if="image.photographer">
          <a rel="nofollow" :href="image.photographer.url">{{ image.photographer.name }}</a>
        </p>
        <p v-if="image.source">
          via
          <a rel="nofollow" :href="image.source.url">{{ image.source.name }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import images from "@/gallery.json";
export default {
  name: "Image",
  data() {
    return {
      images
    };
  },
  computed: {
    image() {
      return this.images.find(image => {
        return image.id === Number(this.$route.params.id);
      });
    }
  },
  methods: {
    imageUrl(filename) {
      return require(`../assets/gallery/${filename}`);
    },
    closeLightbox() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
.lightbox img {
  margin: auto;
  width: 100%;
  grid-column-start: 2;
}
.lightbox-info {
  margin: auto 2rem auto 0;
}
.lightbox-info-inner {
  background-color: #ffffff;
  display: inline-block;
  padding: 2rem;
}
</style>
