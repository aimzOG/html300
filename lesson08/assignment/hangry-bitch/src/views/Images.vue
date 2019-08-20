<template>
  <div class="images">
    <!-- <h1 class="display-2 text-sm-center text-lg-right">{{title}}</h1> -->
    <Gallery />
    <Photo />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import Photo from "@/components/Image.vue";

export default {
  name: "Images",
  components: {
    Gallery,
    Photo
  }
};
</script>
