<template>
  <v-app-bar
    class="navv z-10 left-auto right-auto w-full transparent"
    :absolute="navSettings.absolute"
    elevation="0"
    height="auto"
    v-if="navSettings.view"
  >
    <v-sheet
      width="100%"
      max-width="1224"
      class="text-center pa-3 mx-auto transparent"
    >
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
          justify-md="space-between"
          class="mb-3 mt-3 d-none d-md-flex"
        >
          <v-col cols="12" md="6">
            <v-container>
              <v-row align="center" justify="center" justify-md="start">
                <div>
                  <v-avatar size="35" color="support">
                    <v-icon
                      small
                      :class="navSettings.absolute ? 'textHead--text' : ''"
                      >mdi-email-outline</v-icon
                    >
                  </v-avatar>
                  <span
                    class="mb-0 mx-3"
                    :class="navSettings.absolute ? 'txtOnPrimary--text' : ''"
                  >
                    info@bayanatech.com.sa
                  </span>
                </div>
                <div>
                  <v-avatar size="35" color="support">
                    <v-icon small class="textHead--text">mdi-phone</v-icon>
                  </v-avatar>
                  <span
                    class="mb-0 mx-3"
                    :class="navSettings.absolute ? 'txtOnPrimary--text' : ''"
                    >0503326610</span
                  >
                </div>
              </v-row>
            </v-container>
          </v-col>
          <v-spacer></v-spacer>
          <div class="switch-button shadoww d-flex align-center">
            <input
              class="switch-button-checkbox"
              type="checkbox"
              v-model="$vuetify.rtl"
              @change="
                $vuetify.rtl ? ($i18n.locale = 'ar') : ($i18n.locale = 'en')
              "
            />
            <span class="switch-button-label-span">
              <v-icon small color="primary">mdi-web</v-icon>
              AR
            </span>
            <span class="switch-button-label-span">EN</span>
            <span
              class="switchMove txtOnPrimary"
              :class="$i18n.locale == 'ar' ? '' : 'right'"
            ></span>
          </div>
        </v-row>
      </v-container>
      <div
        class="nav-content txtOnPrimary rounded-pill d-flex align-center py-3 px-3 justify-center fill-width"
      >
        <div class="logo w-36 h-16 md:w-20 md:h-12 lg:w-20 lg:h-12 mx-3">
          <img src="../assets/imgs/logo.png" class="w-full h-full" />
        </div>
        <v-spacer></v-spacer>
        <div class="listt">
          <ul class="d-md-flex justify-space-between d-none px-0">
            <li class="cursor-pointer text-body-2">
              <router-link
                :to="{ name: 'Home' }"
                exact-active-class="primary--text activeNav"
                exact
                >{{ $t("navBar.nav.home") }}</router-link
              >
            </li>
            <li class="cursor-pointer text-body-2">
              <router-link
                :to="{ name: 'About' }"
                exact-active-class="primary--text activeNav"
                exact
                >{{ $t("navBar.nav.about") }}</router-link
              >
            </li>
            <v-menu
              offset-y
              transition="slide-x-transition"
              nudge-bottom="17"
              min-width="260"
              max-width="60%"
              class="over"
            >
              <template v-slot:activator="{ on, attrs }">
                <li v-bind="attrs" v-on="on" class="text-body-2">
                  {{ $t("navBar.nav.services") }}
                  <v-icon>mdi-chevron-down</v-icon>
                </li>
              </template>
              <v-list min-height="100px">
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-list-item
                        v-for="(min, index) in mins"
                        :key="index"
                        link
                        :to="min.path"
                        class="d-block mb-6"
                      >
                        <v-list-item-title class="primary--text mb-2">
                          {{ $t(min.title) }}
                        </v-list-item-title>
                        <p class="textOnP--text text-body-2">
                          {{ $t(min.pragraph) }}
                        </p>
                      </v-list-item>
                    </v-col>
                    <v-col cols="6">
                      <v-list-item
                        v-for="(min, index) in mins2"
                        :key="index"
                        link
                        :to="min.path"
                        class="d-block mb-6"
                      >
                        <v-list-item-title class="primary--text mb-2">
                          {{ $t(min.title) }}
                        </v-list-item-title>
                        <p class="textOnP--text text-body-2">
                          {{ $t(min.pragraph) }}
                        </p>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-list>
            </v-menu>
            <v-menu
              offset-y
              transition="slide-x-transition"
              nudge-bottom="17"
              min-width="260"
              max-width="55%"
              class="over"
            >
              <template v-slot:activator="{ on, attrs }">
                <li v-bind="attrs" v-on="on" class="text-body-2">
                  {{ $t("navBar.nav.solutions") }}
                  <v-icon>mdi-chevron-down</v-icon>
                </li>
              </template>
              <v-list min-height="100px">
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-list-item link class="d-block mb-6">
                        <v-list-item-title class="primary--text mb-2">
                          {{ $t(`navBar.solutionsList.link1`) }}
                          <span class="primary--text mx-3">LAN</span>
                        </v-list-item-title>
                        <p class="textOnP--text text-body-2">
                          {{ $t(`navBar.solutionsList.desc1`) }}
                        </p>
                      </v-list-item>
                      <v-list-item link class="d-block mb-6">
                        <v-list-item-title class="primary--text mb-2">
                          {{ $t(`navBar.solutionsList.link3`) }}
                        </v-list-item-title>
                        <p class="textOnP--text text-body-2">
                          {{ $t(`navBar.solutionsList.desc2`) }}
                        </p>
                      </v-list-item>
                    </v-col>
                    <v-col cols="6">
                      <v-list-item link class="d-block mb-6">
                        <v-list-item-title class="primary--text mb-2">
                          {{ $t(`navBar.solutionsList.link2`) }}
                          <span class="primary--text mx-3">WAN</span>
                        </v-list-item-title>
                        <p class="textOnP--text text-body-2">
                          {{ $t(`navBar.solutionsList.desc3`) }}
                        </p>
                      </v-list-item>
                      <v-list-item link class="d-block mb-6">
                        <v-list-item-title class="primary--text mb-2">
                          {{ $t(`navBar.solutionsList.link4`) }}
                        </v-list-item-title>
                        <p class="textOnP--text text-body-2">
                          {{ $t(`navBar.solutionsList.desc4`) }}
                        </p>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-list>
            </v-menu>
            <v-menu
              offset-y
              transition="slide-x-transition"
              nudge-bottom="17"
              min-width="260"
              max-width="45%"
              class="over"
            >
              <template v-slot:activator="{ on, attrs }">
                <li v-bind="attrs" v-on="on" class="text-body-2">
                  {{ $t("navBar.nav.products") }}
                  <v-icon>mdi-chevron-down</v-icon>
                </li>
              </template>
              <v-list min-height="60px">
                <v-container>
                  <v-row>
                    <v-col cols="6" v-for="(min, index) in mins3" :key="index">
                      <v-list-item link :to="min.path" class="mb-4 d-block">
                        <v-list-item-title class="primary--text mb-2">
                          {{ $t(min.title) }}
                        </v-list-item-title>
                        <p class="textOnP--text text-body-2">
                          {{ $t(min.pragraph) }}
                        </p>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-list>
            </v-menu>
            <li class="cursor-pointer text-body-2">
              <router-link
                :to="{ name: 'jobs' }"
                exact-active-class="primary--text activeNav"
                exact
              >
                {{ $t("navBar.nav.recruitment") }}
              </router-link>
            </li>
          </ul>
        </div>
        <v-spacer></v-spacer>

        <v-btn icon @click.stop="toggle()" class="d-block d-md-none primary">
          <v-app-bar-nav-icon class="txtOnPrimary--text"></v-app-bar-nav-icon>
        </v-btn>
        <div class="btns d-md-block d-none text-end">
          <router-link to="/logIn">
            <v-btn
              :width="btnWidth"
              :height="btnHeight"
              elevation="0"
              rounded
              outlined
              class="primary--text mx-1 mx-lg-3"
            >
              <span class="text-caption text-lg-body-2">{{
                $t("navBar.nav.itSupport")
              }}</span>
            </v-btn>
          </router-link>
          <router-link to="/contact">
            <v-btn
              :width="btnWidth"
              :height="btnHeight"
              elevation="0"
              rounded
              class="linear txtOnPrimary--text mx-1 mx-lg-3"
            >
              <span class="text-caption text-lg-body-2">{{
                $t("navBar.nav.contactUs")
              }}</span>
            </v-btn>
          </router-link>
        </div>
      </div>
    </v-sheet>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navv",
  data: () => ({
    mins: [
      {
        title: "navBar.servicesList.link1",
        pragraph: "navBar.servicesList.desc1",
        path: "/services",
      },
      {
        title: "navBar.servicesList.link2",
        pragraph: "navBar.servicesList.desc2",
        path: "/services",
      },
      {
        title: "navBar.servicesList.link3",
        pragraph: "navBar.servicesList.desc3",
        path: "/services",
      },
    ],
    mins2: [
      {
        title: "navBar.servicesList.link4",
        pragraph: "navBar.servicesList.desc4",
        path: "/services",
      },
      {
        title: "navBar.servicesList.link5",
        pragraph: "navBar.servicesList.desc5",
        path: "/services",
      },
      {
        title: "navBar.servicesList.link6",
        pragraph: "navBar.servicesList.desc6",
        path: "/services",
      },
    ],
    mins3: [
      {
        title: "navBar.productsList.link1",
        pragraph: "navBar.productsList.desc1",
        path: "/system",
      },
      {
        title: "navBar.productsList.link2",
        pragraph: "navBar.productsList.desc2",
        path: "/systemTow",
      },
    ],
    navSettings: {
      view: true,
      absolute: false,
    },
  }),
  watch: {
    "$i18n.locale": {
      immediate: true,
      handler() {
        localStorage.setItem("lang", this.$i18n.locale);
        console.log(this.$i18n.locale);
        if (this.$i18n.locale == "ar") {
          this.$vuetify.rtl = true;
        } else {
          this.$vuetify.rtl = false;
        }
      },
    },

    $route: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        try {
          const that = this as any;
          // nav settings based on the current page
          if (newVal && newVal.meta && newVal.meta.nav) {
            that.navSettings.view = newVal.meta.nav.view;
            that.navSettings.absolute = newVal.meta.nav.absolute;
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  },
  methods: {
    toggle() {
      const that = this as any;
      const val = that.$vuetify.breakpoint.name;
      let drawer = Object.assign({}, that.$store.state.drawerAll); // copy of the object
      if (val == "xs" || val == "sm" || val == "md") {
        drawer.view = !drawer.view;
      } else {
        drawer.mini = !drawer.mini;
      }
      that.$store.commit("get_drawer", drawer);
    },
  },
  computed: {
    btnWidth() {
      const that = this as any;
      return that.$vuetify.breakpoint.name == "xl" ||
        that.$vuetify.breakpoint.name == "lg"
        ? "140px"
        : "90px";
    },
    btnHeight() {
      const that = this as any;
      return that.$vuetify.breakpoint.name == "xl" ||
        that.$vuetify.breakpoint.name == "lg"
        ? "55px"
        : "34px";
    },
  },
});
</script>

<style lang="scss">
.navv {
  .nav-content {
    box-shadow: 0px 0px 0px 5px #f2f7fd, 0px 0px 0px 5px #f2f7fd;
    .listt {
      .v-menu__conten {
        overflow-y: hidden !important;
      }
      ul {
        li {
          margin: 0 8px;
          cursor: pointer;
        }
      }
    }
    .btns {
      .linear {
        background: linear-gradient(to right, #76ade1, #0a6dca) !important;
      }
    }
  }
  a {
    text-decoration: none !important;
    &:not(.activeNav) {
      color: inherit !important;
    }
  }

  .switch-button {
    background: rgba(255, 255, 255, 0.56);
    border-radius: 30px;
    overflow: hidden;
    width: 90px;
    height: 24px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 1px;
    position: relative;
    direction: ltr;

    .switchMove {
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 15px;
      z-index: 1;
      transform: translateX(0);
      transition: all 0.5s ease;
      &.right {
        transform: translateX(100%);
      }
    }
    .switch-button-label-span {
      position: relative;
      z-index: 2;
      flex: 1;
    }
    .switch-button-checkbox {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 3;
      top: 0;
      left: 0;
      cursor: pointer;
    }
  }
}

.shadoww {
  box-shadow: 0px 0px 0px 3px rgba(10, 109, 202, 0.3),
    0px 0px 0px 3px rgba(10, 109, 202, 0.3) !important;
}

.over {
  overflow-y: hidden !important;
}
</style>
