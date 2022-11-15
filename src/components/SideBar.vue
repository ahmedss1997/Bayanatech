<template>
  <v-navigation-drawer
    v-model="$store.state.drawerAll.view"
    :mini-variant.sync="miniSide"
    mini-variant-width="60"
    class="sideBar pt-4 primary"
    fixed
    @mouseover.native="open()"
    @mouseleave.native="close()"
    :class="miniSide ? 'hide-scroll' : ''"
  >
    <div class="list-top d-flex align-center px-4">
      <div class="switch-button shadoww d-flex align-center">
        <input
          class="switch-button-checkbox"
          type="checkbox"
          v-model="$vuetify.rtl"
          @change="$vuetify.rtl ? ($i18n.locale = 'ar') : ($i18n.locale = 'en')"
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
      <v-spacer></v-spacer>
      <v-btn
        class="txtOnPrimary rounded-circle pa-0"
        @click="manualClose()"
        height="20"
        min-width="auto"
        width="20"
      >
        <v-icon class="text-caption primary--text">mdi-close-thick</v-icon>
      </v-btn>
    </div>
    <v-list class="list-side transparent mt-6 pb-0" dense>
      <div>
        <v-list-item
          class="sideBar-item mb-4 mx-0 py-0 px-5 transparent txtOnPrimary--text"
          v-for="(item, i) in items"
          :key="'item' + item.title + i"
          :to="!item.includeList ? { path: item.path || '' } : ''"
          active-class="active"
          link
          dense
        >
          <template v-if="!item.includeList">
            <v-list-item-icon class="mx-1">
              <v-icon color="txtOnPrimary" v-text="item.action"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-if="!miniSide"
                class="d-flex align-center justify-space-between"
              >
                {{ $t(item.title) }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-else>
            <v-expansion-panels
              accordion
              tile
              class="elevation-0"
              :value="$route.path.includes(item.path) ? 0 : false"
            >
              <v-expansion-panel
                class="transparent elevation-0 txtOnPrimary--text"
              >
                <v-expansion-panel-header class="pa-0 px-2">
                  <v-row align="center">
                    <v-list-item-icon class="mx-1">
                      <v-icon
                        color="txtOnPrimary"
                        v-text="item.action"
                      ></v-icon>
                    </v-list-item-icon>
                    <span v-if="!miniSide" class="text-body-2">
                      {{ $t(item.title) }}
                    </span>
                  </v-row>

                  <template v-slot:actions>
                    <v-icon small color="txtOnPrimary" v-show="!miniSide"
                      >mdi-chevron-down</v-icon
                    >
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content
                  class="ma-0 pa-0 transition-all duration-500 delay-1000 ease-in-out"
                  v-if="!miniSide"
                >
                  <v-list dense class="overflow-hidden">
                    <v-list-item
                      class="sideBar-item mb-1"
                      v-for="(li, i) in item.list"
                      :key="'item' + li.title + i"
                      :to="li.path"
                      exact-active-class="primary--text"
                      exact
                      dense
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          class="text-capitalize d-flex align-center justify-space-between"
                        >
                          <a class="txtOnPrimary--text">{{ $t(li.title) }}</a>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  name: "sidebar",
  data: () => ({
    miniSide: false,
    items: [
      {
        action: "mdi-home",
        title: "sideBar.side.home",
        path: "/",
        includeList: false,
      },
      {
        action: "mdi-contacts",
        title: "sideBar.side.about",
        path: "/about",
        includeList: false,
      },
      {
        action: "mdi-podium",
        title: "sideBar.side.services",
        // path: "/services",
        includeList: true,
        list: [
          { title: "sideBar.servicesList.link1", path: "/services" },
          { title: "sideBar.servicesList.link2", path: "/services" },
          { title: "sideBar.servicesList.link3", path: "/services" },
          { title: "sideBar.servicesList.link4", path: "/services" },
          { title: "sideBar.servicesList.link5", path: "/services" },
          { title: "sideBar.servicesList.link6", path: "/services" },
        ],
      },
      {
        action: "mdi-lightbulb-on-outline",
        title: "sideBar.side.solutions",
        // path: "",
        includeList: true,
        list: [
          { title: "sideBar.solutionsList.link1", path: "" },
          { title: "sideBar.solutionsList.link2", path: "" },
          { title: "sideBar.solutionsList.link3", path: "" },
          { title: "sideBar.solutionsList.link4", path: "" },
        ],
      },
      {
        action: "mdi-check-decagram",
        title: "sideBar.side.products",
        // path: "/test",
        includeList: true,
        list: [
          { title: "sideBar.productsList.link1", path: "/system" },
          { title: "sideBar.productsList.link2", path: "/systemTow" },
        ],
      },
      {
        action: "mdi-briefcase-search",
        title: "sideBar.side.recruitment",
        path: "/jobs",
        includeList: false,
      },
      {
        action: "mdi-account-hard-hat",
        title: "sideBar.side.itSupport",
        path: "/logIn",
        includeList: false,
      },

      {
        action: "mdi-phone-in-talk",
        title: "sideBar.side.contactUs",
        path: "/contact",
        includeList: false,
      },
    ],
  }),
  watch: {
    "$store.state.drawerAll": {
      deep: true, // for arrays and objects
      handler() {
        const that = this as any;
        that.miniSide = that.$store.state.drawerAll.mini;
      },
    },
    "$vuetify.breakpoint.name": {
      immediate: true, // بتشتغل اول ما الصفحة تحمل
      deep: true, // for arrays and objects
      handler(): any {
        const that = this as any;
        const val = that.$vuetify.breakpoint.name;
        let drawer = Object.assign({}, that.$store.state.drawerAll); // copy of the object

        if (val == "xs" || val == "sm" || val == "md") {
          drawer.view = false;
        } else {
          drawer.view = false;
        }
        that.$store.commit("get_drawer", drawer);
      },
    },
  },
  methods: {
    open() {
      const that = this as any;
      const drawer = that.$store.state.drawerAll;
      if (drawer.mini) {
        that.miniSide = false;
      }
    },
    close() {
      const that = this as any;
      const drawer = that.$store.state.drawerAll;
      if (drawer.mini) {
        that.miniSide = true;
      }
    },
    manualClose() {
      const that = this as any;
      let drawer = Object.assign({}, that.$store.state.drawerAll);
      if (drawer.view) {
        drawer.view = !drawer.view;
      }
      that.$store.commit("get_drawer", drawer);
    },
  },
};
</script>

<style lang="scss">
.sideBar {
  transition: all 0.5s ease;
  z-index: 1000 !important;
  &.hide-scroll .v-navigation-drawer__content {
    overflow: hidden;
  }
  .v-expansion-panel {
    &::before {
      box-shadow: none !important;
    }
  }
  .v-expansion-panel-content__wrap {
    padding: 0 !important;
    .v-list {
      .sideBar-item {
        margin-bottom: 12px !important;
        &::before {
          width: 100%;
          left: auto;
          right: auto;
        }
        .v-list-item__content {
          padding: 8px 16px;
          .v-list-item__title {
            white-space: normal !important;
          }
        }
      }
    }
  }
  .list-top {
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
}

.sideBar {
  .list-side {
    .sideBar-item {
      .v-list-item__content {
        padding: 8px 16px !important;
      }
      .v-expansion-panel {
        .text-body-2 {
          padding: 8px 16px !important;
        }
      }
    }
  }
}

.sideBar .v-expansion-panel > .v-expansion-panel-header,
.sideBar .v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 35px !important;
}
</style>
