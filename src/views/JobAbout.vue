<template>
  <div class="home">
    <div class="lightPrimary">
      <Nav />
    </div>
    <div class="job-about py-15 lightPrimary">
      <v-container>
        <h2 class="text-center font-weight-medium text-h5 text-md-h3">
          {{ $t(`JobDescrption.heading`) }}
          <span class="primary--text d-block my-4">{{
            $t(`JobDescrption.span`)
          }}</span>
        </h2>
        <v-row>
          <v-col cols="12">
            <div class="job-contentt mt-10">
              <h3 class="mb-3 font-weight-medium text-h5">
                {{ $t(`JobDescrption.list1.title`) }}
              </h3>
              <ul class="list-disc px-6 mb-10">
                <li v-for="i in 11" :key="i" class="mb-2">
                  {{ $t(`JobDescrption.list1.li${i}`) }}
                </li>
              </ul>
              <h3 class="mb-3 font-weight-medium text-h5">
                {{ $t(`JobDescrption.list2.title`) }}
              </h3>
              <ul class="list-disc px-6">
                <li class="mb-2">{{ $t(`JobDescrption.list1.li1`) }}</li>
                <li class="mb-2">{{ $t(`JobDescrption.list1.li2`) }}</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="signup lightPrimary pt-10 pb-15 px-4">
      <v-card
        class="mx-auto py-3 pb-8 px-3 txtOnPrimary--text"
        elevation="0"
        color="txtOnPrimary"
        max-width="900"
        rounded="xl"
      >
        <v-sheet max-width="750" class="mx-auto" color="transparent">
          <h1 class="text-center primary--text my-10 text-h4">
            {{ $t(`JobDescrption.formHeading`) }}
          </h1>
          <v-form ref="createAccount">
            <v-container>
              <v-row>
                <v-col cols="12" md="6" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">
                    {{ $t(`form.firstName`) }}
                  </span>
                  <v-text-field
                    :label="$t(`form.firstName`)"
                    :rules="validationRules.textRules"
                    solo
                    class="rounded inputt"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">
                    {{ $t(`form.lastName`) }}
                  </span>
                  <v-text-field
                    :label="$t(`form.lastName`)"
                    :rules="validationRules.textRules"
                    solo
                    class="rounded inputt"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">{{
                    $t(`form.email`)
                  }}</span>
                  <v-text-field
                    :label="$t(`form.email`)"
                    :rules="validationRules.emailRules"
                    solo
                    class="rounded inputt"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">
                    {{ $t(`form.phone`) }}
                  </span>
                  <vue-tel-input-vuetify
                    :rules="validationRules.numberRules"
                    :label="$t(`form.phone`)"
                    wrapperClasses="v-text-field v-text-field--single-line v-text-field--solo tel-input mt-0 pt-0"
                  >
                  </vue-tel-input-vuetify>
                </v-col>
                <v-col cols="12" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">
                    {{ $t(`form.textarea`) }}
                  </span>
                  <v-textarea solo name="input-7-4" :label="$t(`form.message`)">
                  </v-textarea>
                </v-col>
                <v-col cols="12" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">{{
                    $t(`form.file`)
                  }}</span>
                  <div
                    class="file-input w-full h-40 d-flex justify-center align-center bordd relative mb-8"
                  >
                    <input
                      type="file"
                      class="w-full h-full absolute opacity-0"
                    />
                    <div class="uploadd w-full text-center">
                      <v-img
                        src="../assets/imgs/upload.svg"
                        max-width="19"
                        min-height="19"
                        class="mx-auto mb-3"
                      ></v-img>
                      <p class="mb-0">{{ $t(`form.upload`) }}</p>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-btn
                block
                rounded
                elevation="0"
                class="py-7 primary txtOnPrimary--text text-capitalize mt-5"
                @click="createAccount()"
              >
                {{ $t(`form.btn`) }}
              </v-btn>
            </v-container>
          </v-form>
        </v-sheet>
      </v-card>
    </div>
    <div class="footerr-home lightPrimary px-6 pb-6">
      <Footerr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as models from "@/code/models";
// import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";
import Nav from "@/components/Nav.vue";
import Footerr from "@/components/Footerr.vue";

export default Vue.extend({
  name: "jobAbout",
  components: {
    Nav,
    Footerr,
    VueTelInputVuetify,
  },
  data: () => ({
    show1: false,
    show2: false,
    newAccount: {} as models.user,
    validationRules: validate.validation,
  }),
  computed: {
    repeatPasswordRules: {
      // getter
      get: function () {
        return validate.confirmPassword(this.newAccount.password);
      },
      // setter
      set: function () {
        return validate.confirmPassword(this.newAccount.password);
      },
    },
  },
  // methods: {

  // },
});
</script>

<style lang="scss"></style>
