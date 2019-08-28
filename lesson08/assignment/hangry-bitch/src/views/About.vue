<template>
  <div class="about">
    <Headers v-slot:header>{{title}}</Headers>
    <Accordion />
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from "@/components/Headers.vue";
import Accordion from "@/components/Accordion.vue";
export default {
  name: "About",
  components: {
    Accordion,
    Headers
  },
  data: () => ({
    title: "About the Hangry Bitch."
  })
};
</script>
