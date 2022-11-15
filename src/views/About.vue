<template>
  <div class="home">
    <Nav />
    <!-- Start Head-About Section -->
    <div class="section-top txtOnPrimary w-full h-full">
      <div class="head-about py-12">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <div class="text-head-about pt-10 md:text-center">
                <h2 class="text-h4 mb-8">
                  {{ $t(`About.head-about.heading`) }}
                </h2>
                <p class="leading-8 mb-10">
                  {{ $t(`About.head-about.text1`) }}
                </p>
                <p class="leading-8">
                  {{ $t(`About.head-about.text2`) }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center">
              <div class="image-about w-4/5 h-9/12">
                <img src="../assets/imgs/who.png" class="w-full h-full" />
              </div>
            </v-col>
          </v-row>
          <v-row class="mt-15">
            <v-col cols="12" md="4" class="mb-5">
              <div
                class="box-head-about text-center txtOnPrimary rounded-lg py-10 px-8"
              >
                <v-icon class="primary--text text-h4 font-weight-medium"
                  >mdi-plus</v-icon
                >
                <span class="primary--text text-h4 font-weight-medium"
                  >100</span
                >
                <p class="">{{ $t(`About.head-about.boxText3`) }}</p>
              </div>
            </v-col>
            <v-col cols="12" md="4" class="mb-5">
              <div
                class="box-head-about text-center txtOnPrimary rounded-lg py-10 px-8"
              >
                <v-icon class="primary--text text-h4 font-weight-medium"
                  >mdi-plus</v-icon
                >
                <span class="primary--text text-h4 font-weight-medium">50</span>
                <p class="">{{ $t(`About.head-about.boxText2`) }}</p>
              </div>
            </v-col>
            <v-col cols="12" md="4" class="mb-5">
              <div
                class="box-head-about text-center txtOnPrimary rounded-lg py-10 px-8"
              >
                <v-icon class="primary--text text-h4 font-weight-medium"
                  >mdi-plus</v-icon
                >
                <span class="primary--text text-h4 font-weight-medium">10</span>
                <p class="">{{ $t(`About.head-about.boxText1`) }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- End Head-About Section -->

    <!-- Start CV-File Section -->

    <div class="cv-about py-12 lightPrimary">
      <v-container>
        <v-row>
          <div
            class="cv-top d-flex justify-center align-center w-full px-8 mb-8"
          >
            <h2 class="text-h4">{{ $t(`About.cv-about.heading`) }}</h2>
            <v-spacer class="d-md-block d-none"></v-spacer>
            <button
              class="w-60 h-16 transparent primary--text rounded-pill d-md-block d-none"
            >
              <span class="mx-2 text-body-2 text-capitalize">{{
                $t(`About.cv-about.span`)
              }}</span>
              <img src="../assets/imgs/download.svg" class="d-inline mx-2" />
            </button>
          </div>
          <v-col cols="12" md="6" class="d-flex justify-center">
            <div class="image-cv w-11/12 h-9/12">
              <img src="../assets/imgs/file.png" class="w-full h-full" />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text-cv-about md:text-center">
              <p class="leading-8 mb-10">
                {{ $t(`About.cv-about.text1`) }}
              </p>
              <p class="leading-8 mb-10">
                {{ $t(`About.cv-about.text2`) }}
              </p>
              <p class="leading-8 mb-10">
                {{ $t(`About.cv-about.text3`) }}
              </p>
              <p class="leading-8 mb-10">
                {{ $t(`About.cv-about.text4`) }}
              </p>
              <p class="leading-8">
                {{ $t(`About.cv-about.text5`) }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- End CV-File Section -->

    <!-- Start our-seen section -->

    <div class="our-seen py-12 txtOnPrimary text-center">
      <v-container>
        <v-row class="">
          <v-col cols="12" md="6" class="mb-5">
            <div class="light lightPrimary rounded-lg pa-2">
              <div
                class="box-our-seen shadoow text-center txtOnPrimary rounded-lg py-10 px-8"
              >
                <span
                  class="w-16 h-16 rounded-full lightPrimary d-flex justify-center mx-auto mb-5"
                >
                  <v-icon class="primary--text">mdi-crosshairs-gps</v-icon>
                </span>
                <h3 class="text-h5 mb-4">
                  {{ $t(`About.our-seen.heading2`) }}
                </h3>
                <p>
                  {{ $t(`About.our-seen.text2`) }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mb-5">
            <div class="light lightPrimary rounded-lg pa-2">
              <div
                class="box-our-seen shadoow text-center txtOnPrimary rounded-lg py-10 px-8"
              >
                <span
                  class="w-16 h-16 rounded-full lightPrimary d-flex justify-center mx-auto mb-5"
                >
                  <v-icon class="primary--text">mdi-eye-outline</v-icon>
                </span>
                <h3 class="text-h5 mb-4">
                  {{ $t(`About.our-seen.heading1`) }}
                </h3>
                <p>
                  {{ $t(`About.our-seen.text1`) }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <Service />

    <!-- End our-seen section -->
    <div class="footerr txtOnPrimary px-6 pb-6">
      <Footerr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import Footerr from "@/components/Footerr.vue";
import Service from "@/components/Service.vue";

@Component({
  components: {
    Footerr,
    Service,
    Nav,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.section-top {
  .head-about {
    .box-head-about {
      box-shadow: 0px 0px 0px 5px #f2f7fd, 0px 0px 0px 5px #f2f7fd;
    }
  }
}

.cv-about {
  .cv-top {
    button {
      box-shadow: none !important;
      border: 1px solid #0a6dca !important;
    }
  }
}

.our-seen {
  .box-our-seen {
    min-height: 380px;
  }
}
</style>
