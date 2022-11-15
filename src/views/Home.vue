<template>
  <div class="home">
    <Nav />
    <Headerr />
    <!-- Start About Section -->
    <div class="about-system txtOnPrimary mx-6 px-6 py-12 rounded-lg">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6">
            <div class="about-text pa-8 text-center text-md-start">
              <h3 class="primary--text mb-5 text-h6 text-md-h4">
                {{ $t("Home.aboutHeading") }}
              </h3>
              <p class="leading-8">
                {{ $t("Home.aboutP") }}
              </p>
              <v-btn
                rounded
                elevation="0"
                class="primary txtOnPrimary--text mt-5"
                width="220"
                height="55"
              >
                <span class="text-h6 text-capitalize">{{
                  $t("Home.orderPrice")
                }}</span>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-12 my-md-0">
            <div class="cover-video w-auto h-96 sm:h-48">
              <img src="../assets/imgs/videoCover.png" class="h-full w-full" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End About Section -->

    <!-- Start services section -->
    <div class="services py-12 lightPrimary">
      <v-container>
        <h2 class="mb-5 text-center font-weight-bold text-h5 text-md-h4">
          {{ $t("Home.services") }}
        </h2>
        <p class="mb-10 text-center">
          {{ $t("Home.serviceP") }}
          <span class="d-block">{{ $t("Home.serviceSpan") }}</span>
        </p>
        <v-row>
          <v-col cols="12" lg="4" md="6" v-for="index in 6" :key="index">
            <div class="box-serv txtOnPrimary rounded-lg py-10 px-4">
              <h3 class="mb-6 font-weight-bold text-h6">
                {{ $t(`Home.servicesBox.Box${index}.title`) }}
              </h3>
              <p class="leading-8 textOnP--text">
                {{ $t(`Home.servicesBox.Box${index}.text`) }}
              </p>
              <button
                class="w-48 h-16 d-block mx-auto border border-solid border-primary primary--text rounded-pill mt-5"
              >
                {{ $t("Home.servicesBox.btn") }}
              </button>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End services section -->

    <!-- Start request-service -->

    <Service />

    <!-- End request-service -->

    <!-- Start our-solution section -->
    <div class="our-solution py-12">
      <v-container>
        <h2 class="mb-5 font-weight-bold text-h5 text-md-h4 text-center">
          {{ $t("Home.solutions.heading") }}
        </h2>
        <p class="mb-10 text-center">
          {{ $t("Home.solutions.phargraph") }}
          <span class="d-block">{{ $t("Home.solutions.span") }}</span>
        </p>
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="mb-5 fill-height"
            v-for="solution in solutions"
            :key="solution.id"
          >
            <v-card
              class="my-3 mx-auto rounded-xl pa-1 lightPrimary shadow-cu fill-height"
              flat
              max-width="500"
            >
              <div
                class="box-solution txtOnPrimary rounded-xl py-8 px-3 fill-height"
              >
                <v-sheet
                  color="transparent"
                  max-width="90%"
                  class="mx-auto fill-height"
                >
                  <v-img
                    :src="require('@/assets/imgs/' + solution.img)"
                    height="300px"
                    class="rounded-xl mb-6"
                  ></v-img>
                  <v-sheet>
                    <h3 class="mb-6 font-weight-bold text-h6 text-md-h5">
                      {{ $t(solution.title) }}
                      <span class="primary--text">
                        {{ $t(solution.titleSpan) }}
                      </span>
                      <span
                        class="primary--text mx-2 mx-md-8"
                        v-if="solution.titleKey"
                      >
                        {{ solution.titleKey }}
                      </span>
                    </h3>
                    <p class="leading-8 textOnP--text">
                      {{ $t(solution.description) }}
                    </p>
                    <button
                      class="w-48 h-16 bord primary--text rounded-pill mt-5"
                    >
                      {{ $t("Home.solutions.btn") }}
                    </button>
                  </v-sheet>
                </v-sheet>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End our-solution section -->

    <!-- Start customer-reviews section -->

    <div class="customer-reviews txtOnPrimary py-15">
      <h2 class="mb-10 font-weight-bold text-h5 text-md-h4 text-center">
        {{ $t(`Home.testimonials.heading`) }}
      </h2>
      <v-slide-group v-model="fullSlider" center-active :show-arrows="false">
        <template v-slot:prev></template>
        <template v-slot:next></template>
        <v-slide-item
          v-for="index in 5"
          :key="index"
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
                <v-avatar size="56">
                  <img src="../assets/imgs/avatar.png" />
                </v-avatar>
                <div class="media-body mx-4 mt-2">
                  <h3>{{ $t(`Home.testimonials.Box${index}.title`) }}</h3>
                  <p class="textOnP--text">
                    {{ $t(`Home.testimonials.Box${index}.descrption`) }}
                  </p>
                </div>
              </div>
              <div class="card-text">
                <p class="textOnP--text">
                  {{ $t(`Home.testimonials.Box${index}.text`) }}
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

    <!-- Start customer-reviews section -->

    <!-- Start from-customers section -->
    <div class="from-customers py-15">
      <v-container>
        <h2 class="mb-5 font-weight-bold text-h5 text-md-h4 text-center">
          {{ $t("Home.clients.title") }}
        </h2>
        <p class="mb-10 text-center">
          {{ $t("Home.clients.textP") }}
          <span class="d-block">
            {{ $t("Home.clients.textSpan") }}
          </span>
        </p>
        <v-row>
          <v-col cols="12" md="3" sm="6" v-for="n in 8" :key="n">
            <v-card
              width="300"
              height="160"
              class="my-3 mx-auto rounded-lg pa-1 lightPrimary"
              flat
            >
              <div
                class="box-customers txtOnPrimary fill-width rounded-lg fill-height d-flex justify-center align-center"
              >
                <v-img
                  :src="require(`@/assets/imgs/f-customer${n}.svg`)"
                  max-width="90"
                ></v-img>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End from-customers section -->

    <div class="footerr-home px-6 pb-6">
      <Footerr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footerr from "@/components/Footerr.vue";
import Headerr from "@/components/Headerr.vue";
import Service from "@/components/Service.vue";
import Nav from "@/components/Nav.vue";

export default Vue.extend({
  name: "home",
  components: {
    Footerr,
    Headerr,
    Service,
    Nav,
  },
  data() {
    return {
      fullSlider: 0,
      //      slidesNum: 5,
      solutions: [
        {
          id: 1,
          title: "Home.solutions.Box1.title",
          titleKey: "LAN",
          description: "Home.solutions.Box1.text",
          img: "solu1.png",
        },
        {
          id: 2,
          title: "Home.solutions.Box2.title",
          titleKey: "WAN",
          description: "Home.solutions.Box2.text",
          img: "solu2.png",
        },
        {
          id: 3,
          title: "Home.solutions.Box3.title",
          titleKey: "",
          description: "Home.solutions.Box3.text",
          img: "solu3.png",
        },
        {
          id: 4,
          title: "Home.solutions.Box4.title",
          titleSpan: "Home.solutions.Box4.tSpan",
          titleKey: "",
          description: "Home.solutions.Box4.text",
          img: "solu4.png",
        },
      ],
    };
  },
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
.home {
  .shadow-cu {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05) !important;
  }
  .about-system {
    .about-text {
      @media (max-width: 960px) {
        padding: 0px !important;
      }
    }
  }
  .services {
    .box-serv {
      transition: all 0.5s ease-in-out;
      min-height: 430px;
      p {
        min-height: 150px !important;
      }
      &:hover {
        /*        border: 1px solid #0A6DCA !important;*/
        box-shadow: 0px 0px 0px 4px #92bee7, 0px 0px 0px 4px #92bee7;
        button {
          background-color: #f2f7fd;
          border: 0;
        }
      }
    }
  }
  .request-service {
    .content-request-service {
      background: url("../assets/imgs/Path.svg") no-repeat center;
      background-size: cover;
      .image-request-service {
        height: 450px;
      }
    }
  }
  .our-solution {
    .box-solution {
      min-height: 650px;
      button {
        border-color: #0a6dca;
        transition: all 0.5s ease-in-out;
        &:hover {
          background-color: #f2f7fd;
          border: 0;
        }
      }
    }
  }
  .customer-reviews {
    .v-slide-group__prev,
    .v-slide-group__next {
      display: none;
    }
    .next-prev {
      direction: ltr !important;
    }
  }
}

.bord {
  border: 1px solid #0a6dca;
}

// box-shadow: 10px 10px 10px 0px #f2f7fd, 0px 0px 0px 15px #f2f7fd;
</style>
