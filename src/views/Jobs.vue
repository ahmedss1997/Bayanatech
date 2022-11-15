<template>
  <div class="home">
    <div class="lightPrimary">
      <Nav />
    </div>

    <!-- Start Jobs Section -->

    <div class="section-jobs py-15 lightPrimary">
      <v-container>
        <h2 class="primary--text text-h2 mb-5 text-center">
          {{ $t(`Jobs.heading`) }}
        </h2>
        <p class="leading-8 mb-10 text-center">
          {{ $t(`Jobs.phargraph`) }}
        </p>
        <v-row class="mt-8">
          <v-col cols="12" md="6" v-for="job in jobs" :key="job.id">
            <div class="choose-job txtOnPrimary rounded-lg pa-6">
              <h3 class="mb-4">
                {{ $t(job.title) }}
              </h3>
              <div class="market d-block d-md-flex mb-4">
                <div class="f-icon mb-2 mb-md-0">
                  <v-icon class="textOnP--text">{{ $t(job.icon1) }}</v-icon>
                  <span class="mx-2">{{ $t(job.titleKey1) }}</span>
                </div>
                <div class="s-icon mx-0 mx-md-2">
                  <v-icon class="textOnP--text">{{ $t(job.icon2) }}</v-icon>
                  <span class="mx-2">{{ $t(job.titleKey2) }}</span>
                </div>
              </div>
              <p class="mb-4">
                {{ $t(job.description) }}
              </p>
              <router-link to="/jobAbout">
                <button
                  class="btnjob txtOnPrimary--text rounded-full px-8 py-3"
                >
                  {{ $t(job.btnn) }}
                </button>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- End Jobs Section -->

    <div class="footerr-home lightPrimary px-6 pb-6 pt-12">
      <Footerr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import Footerr from "@/components/Footerr.vue";

export default Vue.extend({
  name: "jobs",
  components: {
    Footerr,
    Nav,
  },
  data: () => ({
    jobs: [
      {
        id: 1,
        title: "Jobs.box1.title",
        icon1: "mdi-map-marker",
        icon2: "mdi-clock-time-five",
        titleKey1: "Jobs.box1.span1",
        titleKey2: "Jobs.box1.span2",
        description: "Jobs.box1.text",
        btnn: "Jobs.box1.btn",
      },
      {
        id: 2,
        title: "Jobs.box1.title",
        icon1: "mdi-map-marker",
        icon2: "mdi-clock-time-five",
        titleKey1: "Jobs.box1.span1",
        titleKey2: "Jobs.box1.span2",
        description: "Jobs.box1.text",
        btnn: "Jobs.box1.btn",
      },
      {
        id: 3,
        title: "Jobs.box1.title",
        icon1: "mdi-map-marker",
        icon2: "mdi-clock-time-five",
        titleKey1: "Jobs.box1.span1",
        titleKey2: "Jobs.box1.span2",
        description: "Jobs.box1.text",
        btnn: "Jobs.box1.btn",
      },
      {
        id: 4,
        title: "Jobs.box1.title",
        icon1: "mdi-map-marker",
        icon2: "mdi-clock-time-five",
        titleKey1: "Jobs.box1.span1",
        titleKey2: "Jobs.box1.span2",
        description: "Jobs.box1.text",
        btnn: "Jobs.box1.btn",
      },
    ],
  }),
});
</script>

<style lang="scss"></style>
