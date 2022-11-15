<template>
  <div class="home">
    <Nav />
    <!-- Start Head-System  -->
    <div class="system mt-6">
      <v-container fluid class="px-8">
        <div class="head-system rounded-lg px-8 py-15">
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <div class="text-system pt-10 md:text-center">
                  <h2 class="txtOnPrimary--text text-h6 text-md-h4 mb-5">
                    {{ $t(`System.head-system.heading`) }}
                  </h2>
                  <p class="txtOnPrimary--text">
                    {{ $t(`System.head-system.text`) }}
                  </p>
                  <div class="btnss mt-8">
                    <v-btn
                      width="auto"
                      height="60"
                      elevation="0"
                      class="txtOnPrimary--text mx-3 px-3 mb-5 rounded-pill borderr"
                    >
                      {{ $t(`System.head-system.btn1`) }}
                    </v-btn>
                    <v-btn
                      width="auto"
                      height="60"
                      elevation="0"
                      class="txtOnPrimary primary--text mx-3 px-3 mb-5 rounded-pill"
                    >
                      {{ $t(`System.head-system.btn2`) }}
                    </v-btn>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="imag-system">
                  <v-img src="../assets/imgs/dashboard.png"></v-img>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </div>
    <!-- End Head-System -->
    <!-- Start Advantages Section -->
    <div class="advantages py-15 txtOnPrimary text-center">
      <v-container>
        <h2 class="primary--text text-center text-h4 text-md-h3 mb-10">
          {{ $t(`System.advantages.heading`) }}
        </h2>
        <v-row class="">
          <v-col cols="12" md="4" class="mb-5">
            <div class="light lightPrimary rounded-lg pa-2">
              <div
                class="box-advantages text-center txtOnPrimary rounded-lg py-10 px-8"
              >
                <span
                  class="w-24 h-24 rounded-full lightPrimary d-flex justify-center mx-auto mb-5 pa-4"
                >
                  <v-img src="../assets/imgs/ideas.svg" class=""></v-img>
                </span>
                <h3 class="text-h5 mb-4">
                  {{ $t(`System.advantages.box1.heading`) }}
                </h3>
                <p>
                  {{ $t(`System.advantages.box1.text`) }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="mb-5">
            <div class="light lightPrimary rounded-lg pa-2">
              <div
                class="box-advantages text-center txtOnPrimary rounded-lg py-10 px-8"
              >
                <span
                  class="w-24 h-24 rounded-full lightPrimary d-flex justify-center mx-auto mb-5 pa-4"
                >
                  <v-img src="../assets/imgs/ideas.svg" class=""></v-img>
                </span>
                <h3 class="text-h5 mb-4">
                  {{ $t(`System.advantages.box2.heading`) }}
                </h3>
                <p>
                  {{ $t(`System.advantages.box2.text`) }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="mb-5">
            <div class="light lightPrimary rounded-lg pa-2">
              <div
                class="box-advantages text-center txtOnPrimary rounded-lg py-10 px-8"
              >
                <span
                  class="w-24 h-24 rounded-full lightPrimary d-flex justify-center mx-auto mb-5 pa-4"
                >
                  <v-img src="../assets/imgs/ideas.svg" class=""></v-img>
                </span>
                <h3 class="text-h5 mb-4">
                  {{ $t(`System.advantages.box3.heading`) }}
                </h3>
                <p>
                  {{ $t(`System.advantages.box3.text`) }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Advantages Section -->

    <!-- Start Services System -->

    <div class="services-system txtOnPrimary py-15">
      <h2 class="mb-8 font-weight-bold text-h4 text-md-h3 text-center">
        {{ $t(`System.services-system.heading`) }}
      </h2>
      <p class="text-center mb-8">
        {{ $t(`System.services-system.phargraph`) }}
        <span class="d-block">
          {{ $t(`System.services-system.span`) }}
        </span>
      </p>
      <v-slide-group v-model="fullSlider" center-active :show-arrows="false">
        <template v-slot:prev></template>
        <template v-slot:next></template>
        <v-slide-item
          v-for="n in slidesNum"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            @click="toggle"
            max-width="360"
            class="ma-3 rounded-xl pa-1 lightPrimary"
            flat
            :class="active ? 'elevation-3' : 'elevation-0'"
          >
            <div class="cardd pa-4 txtOnPrimary rounded-xl fill-height">
              <div class="card-titlee d-flex">
                <span
                  class="w-28 h-24 rounded-xl lightPrimary primary--text d-flex justify-center mx-auto mb-5 pa-4"
                >
                  <v-img
                    src="../assets/imgs/pepole.svg"
                    class="primary--text"
                  ></v-img>
                </span>
              </div>
              <div class="card-text text-center">
                <h3 class="text-h5 mb-8">
                  {{ $t(`System.services-system.box${n}.heading`) }}
                </h3>
                <p class="textOnP--text">
                  {{ $t(`System.services-system.box${n}.text`) }}
                </p>
              </div>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <div class="next-prev mt-6">
        <v-row justify="center">
          <v-btn fab color="primary" small class="mx-1" @click="prev()">
            <v-icon small>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn fab color="primary" small class="mx-1" @click="next()">
            <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
        </v-row>
      </div>
    </div>

    <!-- End Services System -->

    <!-- Start system support Section -->

    <div class="system-support lightPrimary py-15">
      <v-container>
        <v-row class="mb-15">
          <v-col cols="12" md="6" class="d-flex align-center">
            <div class="detal-system-support">
              <h3 class="primary--text text-h4 mb-5">
                {{ $t(`System.system-support.box1.heading`) }}
              </h3>
              <p class="leading-8 textOnP--text">
                {{ $t(`System.system-support.box1.text`) }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="img-system-support w-11/12 h-11/12">
              <v-img src="../assets/imgs/solu4.png" class="rounded-xl"></v-img>
            </div>
          </v-col>
        </v-row>
        <v-row class="mb-15">
          <v-col cols="12" md="6">
            <div class="img-system-support w-11/12 h-11/12">
              <v-img src="../assets/imgs/solu3.png" class="rounded-xl"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center">
            <div class="detal-system-support">
              <h3 class="primary--text text-h4 mb-5">
                {{ $t(`System.system-support.box2.heading`) }}
              </h3>
              <p class="leading-8 textOnP--text">
                {{ $t(`System.system-support.box2.text`) }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- End system support Section -->

    <div class="detal-advantages txtOnPrimary py-15">
      <v-container>
        <h2 class="mb-8 font-weight-bold text-h4 text-md-h3 text-center">
          {{ $t(`System.detal-advantages.heading`) }}
        </h2>
        <p class="text-center mb-8">
          {{ $t(`System.detal-advantages.phargraph`) }}
          <span class="d-block">
            {{ $t(`System.detal-advantages.span`) }}
          </span>
        </p>
        <v-row>
          <v-col cols="12" md="6">
            <div class="list-tabs px-10 mt-10">
              <v-tabs vertical>
                <v-tab>
                  <v-avatar size="25" height="30" class="mx-4">
                    <v-img src="../assets/imgs/tab1.png"></v-img>
                  </v-avatar>
                  <span>{{ $t(`System.detal-advantages.links.link1`) }}</span>
                </v-tab>
                <v-tab>
                  <v-avatar size="25" height="30" class="mx-4">
                    <v-img src="../assets/imgs/tab2.svg"></v-img>
                  </v-avatar>
                  <span>{{ $t(`System.detal-advantages.links.link2`) }}</span>
                </v-tab>
                <v-tab>
                  <v-avatar size="40" height="35" class="mx-4">
                    <v-img src="../assets/imgs/tab3.svg"></v-img>
                  </v-avatar>
                  <span>{{ $t(`System.detal-advantages.links.link3`) }}</span>
                </v-tab>
                <v-tab>
                  <v-avatar size="35" height="30" class="mx-4">
                    <v-img src="../assets/imgs/pepole.svg"></v-img>
                  </v-avatar>
                  <span>{{ $t(`System.detal-advantages.links.link4`) }}</span>
                </v-tab>
                <v-tab>
                  <v-avatar size="25" height="30" class="mx-4">
                    <v-img src="../assets/imgs/tab5.svg"></v-img>
                  </v-avatar>
                  <span>{{ $t(`System.detal-advantages.links.link5`) }}</span>
                </v-tab>
                <v-tab>
                  <v-avatar size="35" height="35" class="mx-4">
                    <v-img src="../assets/imgs/tab6.svg"></v-img>
                  </v-avatar>
                  <span>{{ $t(`System.detal-advantages.links.link6`) }}</span>
                </v-tab>
              </v-tabs>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="img-detal-advntage lightPrimary rounded-lg">
              <v-img src="../assets/imgs/dash.png"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="detal-videoss py-15 lightPrimary">
      <v-container>
        <h2
          class="mb-8 font-weight-medium primary--text text-h5 text-md-h3 text-center"
        >
          {{ $t(`System.detal-videoss.heading`) }}
        </h2>
        <v-row>
          <v-col cols="12" md="6">
            <div class="video-de txtOnPrimary rounded-lg pa-6">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/yJg-Y5byMMw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 class="text-h6 text-md-h5 my-6">
                {{ $t(`System.detal-videoss.box1.heading`) }}
              </h3>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="video-de txtOnPrimary rounded-lg pa-6">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/yJg-Y5byMMw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 class="text-h6 text-md-h5 my-6">
                {{ $t(`System.detal-videoss.box2.heading`) }}
              </h3>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="video-de txtOnPrimary rounded-lg pa-6">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/yJg-Y5byMMw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 class="text-h6 text-md-h5 my-6">
                {{ $t(`System.detal-videoss.box3.heading`) }}
              </h3>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="video-de txtOnPrimary rounded-lg pa-6">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/yJg-Y5byMMw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 class="text-h6 text-md-h5 my-6">
                {{ $t(`System.detal-videoss.box4.heading`) }}
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="footerr-system lightPrimary px-6 pb-6">
      <Footerr />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "@/components/Nav.vue";
import Footerr from "@/components/Footerr.vue";

export default Vue.extend({
  name: "system",
  components: {
    Nav,
    Footerr,
  },
  data: () => ({
    fullSlider: 0,
    slidesNum: 5,
    items: [
      {
        id: 1,
        srcV: "https://www.youtube.com/embed/yJg-Y5byMMw",
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        id: 1,
        srcV: "https://www.youtube.com/embed/yJg-Y5byMMw",
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        id: 1,
        srcV: "https://www.youtube.com/embed/yJg-Y5byMMw",
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        id: 1,
        srcV: "https://www.youtube.com/embed/yJg-Y5byMMw",
        desc: "Lorem ipsum dolor sit amet",
      },
    ],
  }),
  methods: {
    prev() {
      if (this.fullSlider <= 0) {
        this.fullSlider = this.slidesNum - 1;
      } else {
        this.fullSlider--;
      }
    },
    next() {
      if (this.fullSlider >= this.slidesNum - 1) {
        this.fullSlider = 0;
      } else {
        this.fullSlider++;
      }
    },
  },
});
</script>

<style lang="scss">
.system {
  .head-system {
    background: url("../assets/imgs/Path.svg") no-repeat center;
    background-size: cover;
  }
}

.detal-advantages {
  .list-tabs {
    .v-tabs {
      .v-tabs-slider-wrapper {
        display: none !important;
        .v-tabs-slider {
          display: none !important;
        }
      }
      .v-tab {
        justify-content: start;
        border-radius: 50px;
        max-width: 400px !important;
        /*        width: auto !important;*/
        margin-bottom: 16px;
        text-transform: capitalize;
        @media (max-width: 767px) {
          height: auto;
          padding: 12px !important;
          white-space: normal !important;
        }
        .v-avatar {
          border-radius: 0px !important;
        }
      }
      .v-tab--active {
        background: linear-gradient(to left, #0a6dca7d, #053a6a08) !important;
      }
    }
  }
}

.borderr {
  border: 1px solid #f2f7fd !important;
  background-color: transparent !important;
}
</style>
