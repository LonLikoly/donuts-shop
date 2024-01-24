<template>
<body>
    <main>
        <div class="container">
            <h1 class="donut_types">Donut gallery</h1>
            <hr class="mt-2 mb-5">
            <div class="row text-center text-lg-start">
              <GalleryCard
                v-for="image in galleryList"
                :key="image.id"
                :image="image.image"
          />
            </div>
        </div>
    </main>
    <hr class="pink_hr" />

  </body>
</template>
<script>
// import gallery from "@/assets/gallery.json";
import { useGalleryStore } from "@/stores/GalleryStore";

import GalleryCard from "@/components/GalleryCard.vue";
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
     galleryList: useGalleryStore()
    };
  },
  components: { RouterLink, GalleryCard },
  mounted() {
    // this.galleryList = gallery.gallery;
  },
}
</script>