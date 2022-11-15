<template>
  <div class="home">
    <Nav />
    <!-- Start Contract Section -->
    <div class="contract lightPrimary mt-6 py-15">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-contract text-center">
              <h2 class="text-h6 text-md-h4 primary--text mb-8">
                {{ $t(`Services.contract.heading`) }}
              </h2>
              <p class="leading-8 textOnP--text">
                {{ $t(`Services.contract.text`) }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Contract Section -->

    <!-- Start Support Section -->

    <div class="section-support txtOnPrimary py-15">
      <v-container>
        <v-row class="mb-15">
          <v-col cols="12" md="6" class="d-flex align-center">
            <div class="detal-support">
              <h3 class="text-h6 text-md-h4 mb-5">
                {{ $t(`Services.support.box1.heading`) }}
              </h3>
              <p class="leading-8 textOnP--text">
                {{ $t(`Services.support.box1.text`) }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="img-support w-11/12 h-11/12">
              <img src="../assets/imgs/contract1.png" class="w-full h-full" />
            </div>
          </v-col>
        </v-row>
        <v-row class="mb-15">
          <v-col cols="12" md="6">
            <div class="img-support w-11/12 h-11/12">
              <img src="../assets/imgs/contract2.png" class="w-full h-full" />
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center">
            <div class="detal-support">
              <h3 class="text-h6 text-md-h4 mb-5">
                {{ $t(`Services.support.box2.heading`) }}
              </h3>
              <p class="leading-8 textOnP--text">
                {{ $t(`Services.support.box2.text`) }}
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mb-15">
          <v-col cols="12" md="6" class="d-flex align-center">
            <div class="detal-support">
              <h3 class="text-h6 text-md-h4 mb-5">
                {{ $t(`Services.support.box3.heading`) }}
              </h3>
              <p class="leading-8 textOnP--text">
                {{ $t(`Services.support.box3.text`) }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="img-support w-11/12 h-11/12">
              <img src="../assets/imgs/contract3.png" class="w-full h-full" />
            </div>
          </v-col>
        </v-row>
        <Service />
      </v-container>
    </div>

    <!-- End Support Section -->

    <div class="footerr txtOnPrimary px-6 pb-6">
      <Footerr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import Service from "@/components/Service.vue";
import Footerr from "@/components/Footerr.vue";

export default Vue.extend({
  name: "services",
  components: {
    Service,
    Footerr,
    Nav,
  },
  //  data: () => ({
  //
  //  }),
  //  computed: {
  //
  //  },
  //  methods: {
  //
  //  },
});
</script>

<style lang="scss"></style>
