<template>
  <v-app>
    <!-- <Nav /> -->
    <SideBar />
    <v-main class="">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import Nav from "@/components/Nav.vue";
import SideBar from "@/components/SideBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    //     Nav,
    SideBar,
  },

  data: () => ({
    //
  }),
  watch: {},
});
</script>

<style lang="scss" src="@/assets\styles\global.scss"></style>
