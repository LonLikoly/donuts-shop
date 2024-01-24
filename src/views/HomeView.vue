<template>
  <body>
    <main>
      <div class="slider">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/carousel1.png"
                class="carousel_img"
                alt="n1"
              />
            </div>
            <div class="carousel-item">
              <img
                src="/carousel2.png"
                class="carousel_img d-block w-100"
                alt="n2"
              />
            </div>
            <div class="carousel-item">
              <img
                src="/carousel3.png"
                class="carousel_img d-block w-100"
                alt="n3"
              />
            </div>
            <div class="carousel-item">
              <img
                src="/carousel4.png"
                class="carousel_img d-block w-100"
                alt="n4"
              />
            </div>
            <div class="carousel-item">
              <img
                src="/carousel5.png"
                class="carousel_img d-block w-100"
                alt="n5"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev hide"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next hide"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <h2 class="donut_types">Triple Sets</h2>
      <div class="row">
        <DonutCard
            v-for="donut in tripleDonutsList"
            :key="donut.id"
            :name="donut.name"
            :image="donut.image"
            :description="donut.description"
            :oldprice="donut.oldprice"
            :newprice="donut.newprice"
          />
      </div>

      <form action="" class="button_donut_cont">
        <router-link to="/Donuts">
          <button class="button_donut">See all of them</button>
        </router-link>
      </form>

      <h2 class="donut_types">Solo donuts</h2>
      <div class="row">
        <DonutCard
            v-for="donut in soloDonutsList"
            :key="donut.id"
            :name="donut.name"
            :image="donut.image"
            :description="donut.description"
            :oldprice="donut.oldprice"
            :newprice="donut.newprice"
          />
      </div>
      <form action="" class="button_donut_cont">
        <router-link to="/Donuts">
          <button class="button_donut">See all of them</button>
        </router-link>
      </form>
    </main>
  </body>

  <hr class="pink_hr" />
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
      tripleDonutsList: []
    };
  },
  computed: {
    tripleSets() {
      return this.donutsData.find((d) => d.slug === "triple_sets");
    },
    soloDonuts() {
      return this.donutsData.find((d) => d.slug === "solo_donuts");
    }
  },
  components: { RouterLink, DonutCard },
  mounted() {
    this.tripleDonutsList = this.tripleSets.donuts;
    this.soloDonutsList = this.soloDonuts.donuts;
  },
}
</script>
