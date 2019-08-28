<template>
  <div class="gallery">
    <div class="gallery-panel" v-for=" photo in photos" :key="photo.id">
      <!-- <router-link :to="`/photo/${photo.id}`"> PUT BACK FOR FINAL-->
      <ImageTag
        @click.native="() => updateSelected(photo.id)"
        :border="isSelected(photo.id)"
        :src="thumbUrl(photo.filename)"
        :alt="photo.alt"
        :title="photo.title"
      />
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import ImageTag from "@/components/ImageTag.vue";
import photos from "@/gallery.json";

const mixin = {
  data() {
    return {
      selectedPhotoId: false
    };
  },
  methods: {
    // tracks and updates id as clicked- if not selected, border. if selected, unboarder.
    updateSelected: function(id) {
      this.selectedPhotoId = this.isSelected(id) ? undefined : id;
    },
    isSelected: function(id) {
      return this.selectedPhotoId == id;
    }
  }
};

export default {
  name: "Gallery",
  components: {
    ImageTag
  },
  mixins: [mixin],
  data() {
    return {
      photos
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
