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
          <h1 class="text-center primary--text my-10 text-h5 text-md-h4">
            {{ $t(`form.head`) }}
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
                <v-col cols="12">
                  <span class="font-weight-bold px-0 my-3 d-block">{{
                    $t(`form.slice`)
                  }}</span>
                  <v-autocomplete
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    :label="$t(`form.slice`)"
                    solo
                    required
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-btn
                block
                rounded
                elevation="0"
                class="py-7 my-10 primary txtOnPrimary--text text-h6"
                @click="createAccount()"
              >
                {{ $t(`form.btn`) }}
              </v-btn>
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
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
    ],
    newAccount: {} as models.user,
    validationRules: validate.validation,
  }),
});
</script>

<style lang="scss">
.signup {
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
