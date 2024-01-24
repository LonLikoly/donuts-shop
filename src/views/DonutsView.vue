<template>
<body>
      <main>
    <h1 class="donut_types">Our Donuts</h1>
    <h3>Why us?</h3>
    <ul class="wecool">
      <li>Fast</li>
      <li>Delicious</li>
      <li>Cheap</li>
    </ul>
        <button class="accordion" id="accordion">Image Donut Boxes</button>
        <div class="row-grid">
          <DonutCard
          class="row-grid__items"
            v-for="donut in boxDonutsList"
            :key="donut.id"
            :name="donut.name"
            :image="donut.image"
            :description="donut.description"
            :oldprice="donut.oldprice"
            :newprice="donut.newprice"
          />
        </div>
        <button class="accordion" id="accordion">Triple Donut Boxes</button>
        <div class="row-grid">
        <DonutCard
        class="row-grid__items"
          v-for="donut in tripleDonutsList"
          :key="donut.id"
          :name="donut.name"
          :image="donut.image"
          :description="donut.description"
          :oldprice="donut.oldprice"
          :newprice="donut.newprice"
          />
        </div>
        <button class="accordion" id="accordion">Solo Donuts</button>
        <div class="row-grid">
          <DonutCard
          class="row-grid__items"
            v-for="donut in soloDonutsList"
            :key="donut.id"
            :name="donut.name"
            :image="donut.image"
            :description="donut.description"
            :oldprice="donut.oldprice"
            :newprice="donut.newprice"
          />
        </div>
  </main>
  <hr class="pink_hr" />

  </body>
</template>
<script>
import donuts from "@/assets/donuts.json";
import DonutCard from "@/components/DonutCard.vue";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      donutsData: donuts.donuts,
      soloDonutsList: [],
      tripleDonutsList: [],
      boxDonutsList: []
    };
  },
  computed: {
    tripleSets() {
      return this.donutsData.find((d) => d.slug === "triple_sets");
    },
    soloDonuts() {
      return this.donutsData.find((d) => d.slug === "solo_donuts");
    },
    boxDonut() {
      return this.donutsData.find((d) => d.slug === "image_donut_boxes");
    },
  },
  components: { RouterLink, DonutCard },
  mounted() {
    this.boxDonutsList = this.boxDonut.donuts;
    this.tripleDonutsList = this.tripleSets.donuts;
    this.soloDonutsList = this.soloDonuts.donuts;
  },
}
</script>
<style scoped>
.row-grid{
  display: grid;
  grid-template-columns: repeat(12,1fr);
  row-gap: 25px;
}

.row-grid__items{
  grid-column: 3 span;
}
</style>
