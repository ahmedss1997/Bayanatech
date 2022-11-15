<template>
  <div class="header w-auto mt-3 mx-3 mt-md-6 mx-md-6">
    <v-carousel
      v-model="model"
      hide-delimiter-background
      height="calc(100vh - 30px)"
      :show-arrows="false"
      class="rounded-xl"
    >
      <v-carousel-item v-for="(bg, i) in bgs" :key="i" :src="bg">
        <div class="caption d-flex h-full justify-center align-center">
          <v-sheet
            max-width="600"
            color="transparent"
            class="txtOnPrimary--text cont-caption text-center mt-10"
          >
            <h2 class="text-md-h3 text-h6 mb-5">
              {{ $t("Home.headerHeading") }}
            </h2>
            <p class="text-subtitle-2 text-md-h6">{{ $t("Home.headerP") }}</p>
          </v-sheet>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      model: 0,
      bgs: [
        require("@/assets/imgs/hero.png"),
        require("@/assets/imgs/hero.png"),
        require("@/assets/imgs/hero.png"),
      ],
    };
  },
});
</script>

<style lang="scss"></style>
