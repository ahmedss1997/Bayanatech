<template>
  <div class="home">
    <div class="lightPrimary">
      <Nav />
    </div>
    <div class="logIn lightPrimary py-10 pb-15 px-4">
      <v-card
        class="mx-auto mt-12 py-3 px-3 txtOnPrimary--text"
        elevation="0"
        color="txtOnPrimary"
        max-width="900"
        rounded="xl"
      >
        <v-sheet max-width="750" class="mx-auto" color="transparent">
          <h1 class="text-center primary--text my-10 text-h4">
            {{ $t(`form.login`) }}
          </h1>
          <v-form ref="createAccount">
            <v-container>
              <v-row>
                <v-col cols="12" class="py-0">
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
                <v-col cols="12" class="py-0">
                  <div class="d-flex align-center mb-2">
                    <span class="font-weight-bold px-0 my-3 flex-grow-1">
                      {{ $t(`form.password`) }}
                    </span>
                    <router-link to="/reset">{{
                      $t(`form.forgetPassword`)
                    }}</router-link>
                  </div>
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
                <v-col cols="12"> </v-col>
              </v-row>
              <router-link to="/openTick">
                <v-btn
                  block
                  rounded
                  elevation="0"
                  class="py-7 primary txtOnPrimary--text"
                  @click="createAccount()"
                >
                  {{ $t(`form.login`) }}
                </v-btn>
              </router-link>
              <v-card-actions class="justify-center">
                <span class="px-0">{{ $t(`form.dontHave`) }}</span>
                <router-link to="/register">
                  <v-btn
                    color="darkPrimary"
                    text
                    class="px-2 text-capitalize primary--text"
                  >
                    {{ $t(`form.rigster`) }}
                  </v-btn>
                </router-link>
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

<script lang="ts">
import Vue from "vue";
import * as models from "@/code/models";
// import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";
import Nav from "@/components/Nav.vue";
import Footerr from "@/components/Footerr.vue";

export default Vue.extend({
  name: "login",
  components: {
    Nav,
    Footerr,
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
});
</script>

<style lang="scss">
.logIn {
  .v-input__slot {
    box-shadow: 0px 0px 0px 5px #f2f7fd, 0px 0px 0px 5px #f2f7fd !important;
    border-radius: 5px;
  }
  .tel-input .v-text-field {
    padding: 0 5px;
    margin-top: 0;
  }
  .tel-input .v-text-field__slot {
    padding: 0 5px;
  }
  .tel-input
    .theme--light.v-text-field
    > .v-input__control
    > .v-input__slot::before {
    border: none !important;
  }
}
</style>
