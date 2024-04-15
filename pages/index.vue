<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <!-- Hero -->
  <section class="relative h-screen" id="hero">
    <div class="absolute inset-0 jarallax" data-jarallax data-speed="0.5">
      <img
        src="../assets/hero-pattern.svg"
        class="w-screen h-screen object-cover animate-pulse"
        alt="Pattern"
      />
    </div>

    <div
      class="container mx-auto flex items-center justify-center h-full relative z-10"
    >
      <img
        src="../assets/logo/logo_big_color_nobg.svg"
        class="drop-shadow-2xl md:w-2/3 duration-1000 hover:scale-105"
        alt="Logo"
      />
    </div>
  </section>
  <!-- Counter -->
  <section class="w-screen h-48 bg-pink" id="counter">
    <div class="container mx-auto flex items-center justify-center h-full">
      <countdown />
    </div>
  </section>
  <!-- Hero w button -->
  <section class="h-screen wiggle heropattern-jigsaw-blue-900" id="info">
    <div class="container text-white flex flex-row pt-12 pb-12">
      <div class="md:w-1/2 flex flex-col">
        <h1 class="font-velodroma text-6xl md:text-6xl pl-6 md:pl-0">SPR?</h1>
        <h1 class="font-velodroma text-2xl md:text-4xl pl-6 md:pl-0">
          Wat is dat?
        </h1>
        <p class="mt-12 pl-6 md:pl-0 text-2xl font-semibold">
          Speelplaatsrock 2024 is een eendaags festival ten voordele van twee
          goede doelen. Het wordt georganiseerd door een gemotiveerd team van
          leerlingen uit het 5de en 6de jaar van het Sint-Pieterscollege. Het
          festival vindt plaats op de speelplaats van onze school. Op het
          terrein zelf zal er niet alleen een groot podium staan, maar ook een
          DJ-booth zodat we voor een fijne afwisseling van opkomende DJ’s en
          hippe artiesten kunnen zorgen.
        </p>
      </div>
      <div class="w-1/2 ml-6 mr-6 flex align-middle">
        <!-- <Carousel
          :items-to-show="1"
          :wrap-around="true"
          :autoplay="2000"
          :transition="800"
          class="bg-yellow"
        >
<Slide v-for="(image, index) in imageUrls" :key="index" class="">
            <img :src="image" alt="" class="object-cover" />
          </Slide>
        </Carousel> -->
      </div>
    </div>
  </section>

  <!-- Carousel -->
  <section class="container mt-12 mb-12">
    <div class="flex items-center justify-center mb-12">
      <h1 class="font-velodroma text-2xl md:text-4xl">onze Sponsors</h1>
    </div>
    <Carousel
      :items-to-show="3"
      :wrap-around="true"
      :autoplay="2000"
      :pauseAutoplayOnHover="true"
      :transition="800"
    >
      <Slide class="h-40" :key="1">
        <div class="h-48 w-48 p-3">
          <img
            src="../assets/sponsors/logo_alliantie.svg"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
      </Slide>
      <Slide class="h-40" :key="2">
        <div class="h-48 w-48 p-3">
          <img
            src="../assets/sponsors/logo_let.png"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
      </Slide>
      <Slide class="h-40" :key="3">
        <div class="h-48 w-48 p-3">
          <img
            src="../assets/sponsors/logo_pm.png"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
      </Slide>
      <Slide class="h-40" :key="4">
        <div class="h-48 w-48 p-3">
          <img
            src="../assets/sponsors/logo_sde.bmp"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
      </Slide>
      <Slide class="h-40" :key="5">
        <div class="h-48 w-48 p-3">
          <img
            src="../assets/sponsors/logo_studio52.svg"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
      </Slide>
      <Slide class="h-40" :key="6">
        <div class="h-48 w-48 p-3">
          <img
            src="../assets/sponsors/logo_ua.svg"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
      </Slide>
      <Slide class="h-40" :key="7">
        <div class="h-48 w-48 p-3">
          <img
            src="../assets/sponsors/logo_ucll.png"
            alt=""
            class="w-full h-full object-contain"
          />
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      // Define an array of image URLs
      imageUrls: [
        "pictures/1.jpeg",
        "pictures/2.jpeg",
        "pictures/3.jpeg",
        "pictures/4.jpeg",
        "pictures/5.jpeg",
        "pictures/6.jpeg",
        "pictures/7.jpeg",
        "pictures/8.jpeg",
        "pictures/9.jpeg",
      ] as string[],
    };
  },
});
</script>
