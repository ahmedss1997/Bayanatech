<template>
  <footer class="foot txtOnPrimary md:text-center rounded-lg">
    <v-container>
      <v-row class="">
        <v-col cols="12" lg="4" md="6">
          <div class="foot-content">
            <img src="@/assets/imgs/logo.png" alt="" class="my-6 md:block" />
            <ul class="email">
              <li
                v-for="(footlist, i) in footlists1"
                :key="i"
                class="d-flex md:justify-center align-center mb-4"
              >
                <span
                  class="w-10 h-10 leading-10 text-center rounded-full support"
                >
                  <v-icon class="textHead--text">{{ footlist.iconn }}</v-icon>
                </span>
                <p class="mb-0 mx-3">{{ footlist.title }}</p>
              </li>
            </ul>
            <ul class="flex my-6 md:justify-center">
              <li
                v-for="(social, i) in socials"
                :key="i"
                class="d-flex align-center ml-3"
              >
                <span
                  class="w-10 h-10 leading-10 text-center rounded-full support"
                >
                  <v-icon class="textHead--text">{{ social.icon }}</v-icon>
                </span>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" lg="5" md="6" class="">
          <div class="ul-content pt-7">
            <h3 class="text-h4 my-6 primary--text font-weight-bold">
              {{ $t(`footer.services.heading`) }}
            </h3>
            <div class="flex md:block">
              <div class="w-auto">
                <ul>
                  <router-link
                    to="/services"
                    v-for="(footlist, i) in footlists2"
                    :key="i"
                  >
                    <li class="textHead--text my-4">
                      {{ $t(footlist.text) }}
                    </li>
                  </router-link>
                </ul>
              </div>
              <div class="sc mx-5">
                <ul>
                  <router-link
                    to="/services"
                    v-for="(footlist, i) in footlists3"
                    :key="i"
                  >
                    <li class="textHead--text my-4">
                      {{ $t(footlist.text) }}
                    </li>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" md="12" class="">
          <div class="ul-content pt-7">
            <h3 class="text-h4 my-6 primary--text font-weight-bold">
              {{ $t(`footer.solutions.heading`) }}
            </h3>
            <div class="pt-px">
              <ul class="">
                <li
                  v-for="(footlist, i) in footlists4"
                  :key="i"
                  class="textHead--text my-4"
                >
                  {{ $t(footlist.text) }}
                </li>
              </ul>
            </div>
          </div>
        </v-col>
        <div class="privacy text-center w-full pa-4 mb-6 mt-8">
          <span class="py-1 px-2 foterColor--text">
            {{ $t(`footer.priavcy`) }} 2022 &copy;
          </span>
        </div>
      </v-row>
    </v-container>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",

  data: () => ({
    socials: [
      { icon: "mdi-youtube" },
      { icon: "mdi-linkedin" },
      { icon: "mdi-twitter" },
      { icon: "mdi-facebook" },
    ],
    footlists1: [
      { title: "info@bayanatech.com.sa", iconn: "mdi-email-outline" },
      { title: "0503326610", iconn: "mdi-phone" },
    ],
    footlists2: [
      {
        text: "footer.services.link1",
      },
      {
        text: "footer.services.link2",
      },
      {
        text: "footer.services.link3",
      },
    ],
    footlists3: [
      {
        text: "footer.services.link4",
      },
      {
        text: "footer.services.link5",
      },
      {
        text: "footer.services.link6",
      },
    ],
    footlists4: [
      {
        text: "footer.solutions.link1",
      },
      {
        text: "footer.solutions.link2",
      },
      {
        text: "footer.solutions.link3",
      },
      {
        text: "footer.solutions.link4",
      },
    ],
  }),
});
</script>

<style lang="scss">
.foot {
  box-shadow: 0px 0px 0px 3px rgba(10, 109, 202, 0.3),
    0px 0px 0px 3px rgba(10, 109, 202, 0.3) !important;
  .foot-content {
    img {
      @media (max-width: 960px) {
        display: block;
        margin: 0 auto;
      }
    }
  }
  .ul-content {
    @media (max-width: 960px) {
      padding-top: 0px !important;
    }
  }
}

.f-border {
  border-right: 2px solid #7a7f84;
  border-left: 2px solid #7a7f84;
}
</style>
