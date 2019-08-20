<template>
  <!-- enlarges selected picture and shows attached info -->
  <div class="lightbox" @click.self="closeLightbox">
    <ImageTag :src="photoUrl(photo.filename)" :alt="photo.alt" :title="photo.title" />
    <div class="lightbox-info">
      <!-- if json holds this data, show when lightbox is activated -->
      <div class="lightbox-info-inner">
        <p v-if="photo.title">{{ photo.title }}</p>
        <p v-if="photo.location">{{ photo.location }}</p>
        <p v-if="photo.photographer">
          <a rel="nofollow" :href="photo.photographer.url">{{ photo.photographer.name }}</a>
        </p>
        <p v-if="photo.source">
          via
          <a rel="nofollow" :href="photo.source.url">{{ photo.source.name }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageTag from "@/components/ImageTag.vue";
import photos from "@/gallery.json";
export default {
  name: "Lightbox",
  components: {
    ImageTag
  },
  data() {
    return {
      photos
    };
  },
  computed: {
    photo() {
      return this.photos.find(photo => {
        return photo.id === Number(this.$route.params.id);
      });
    }
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets/gallery/${filename}`);
    },
    closeLightbox() {
      this.$router.push("/noms");
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
