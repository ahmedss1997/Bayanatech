<template>
  <div class="home">
    <div class="lightPrimary">
      <Nav />
    </div>
    <div class="signup lightPrimary py-10 pb-15 px-4">
      <v-card
        class="mx-auto mt-12 py-3 px-3 txtOnPrimary--text"
        elevation="0"
        color="txtOnPrimary"
        max-width="900"
        rounded="xl"
      >
        <v-sheet max-width="750" class="mx-auto" color="transparent">
          <h1 class="text-center primary--text my-10 text-h4">
            {{ $t(`form.rigster`) }}
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
                <v-col cols="12" md="6" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">
                    {{ $t(`form.password`) }}
                  </span>
                  <v-text-field
                    v-model="newAccount.password"
                    :label="$t(`form.password`)"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="validationRules.passowrdRules"
                    solo
                    class="rounded inputt"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">
                    {{ $t(`form.repeatpass`) }}
                  </span>
                  <v-text-field
                    v-model="newAccount.repeatPass"
                    :label="$t(`form.repeatpass`)"
                    :type="show2 ? 'text' : 'password'"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="repeatPasswordRules"
                    solo
                    class="rounded inputt"
                    @click:append="show2 = !show2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12"> </v-col>
              </v-row>
              <v-btn
                block
                rounded
                elevation="0"
                class="py-7 primary txtOnPrimary--text"
                @click="createAccount()"
              >
                {{ $t(`form.rigster`) }}
              </v-btn>
              <v-card-actions class="justify-center">
                <span class="px-0">{{ $t(`form.alredyHave`) }}</span>
                <v-btn
                  color="darkPrimary"
                  text
                  href="/logIn"
                  class="px-0 text-capitalize primary--text"
                >
                  {{ $t(`form.login`) }}
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-form>
        </v-sheet>
      </v-card>
    </div>
    <div class="footerr-home lightPrimary px-6 pb-6 pt-8">
      <Footerr />
    </div>
  </div>
</template>

<!-- <script lang="ts" src="./Register"></script> -->

<script lang="ts">
import Vue from "vue";
import * as models from "@/code/models";
// import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";
import Nav from "@/components/Nav.vue";
import Footerr from "@/components/Footerr.vue";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

export default Vue.extend({
  name: "register",
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
  methods: {
    createAccount: async function () {
      console.log("test");
    },
  },
});
</script>

<style lang="scss"></style>
