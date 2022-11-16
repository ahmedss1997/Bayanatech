<template>
  <div class="request-service txtOnPrimary py-12">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <div class="content-request-service w-full rounded-xl">
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <div
                  class="text-request-service h-full py-8 px-10 text-center text-md-start"
                >
                  <h2
                    class="txtOnPrimary--text mt-12 mb-3 mb-md-12 text-h5 text-md-h4 font-weight-medium"
                  >
                    {{ $t("Home.orderService.title") }}
                  </h2>
                  <div class="pt-1">
                    <p class="txtOnPrimary--text mb-5 mt-3 mt-md-12">
                      {{ $t("Home.orderService.text") }}
                    </p>
                  </div>
                  <router-link to="/inqPrice">
                    <button
                      class="w-40 h-16 txtOnPrimary primary--text rounded-pill mt-5"
                    >
                      {{ $t("Home.orderService.btn") }}
                    </button>
                  </router-link>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="image-request-service">
                  <img src="../assets/imgs/banner.png" class="w-full h-full" />
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",

  data: () => ({}),
});
</script>
