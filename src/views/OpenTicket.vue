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
            {{ $t(`form.headTicnekal`) }}
          </h1>
          <v-form ref="createAccount">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <span class="font-weight-bold px-0 my-3 d-block">{{
                    $t(`form.select`)
                  }}</span>
                  <v-autocomplete
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    :label="$t(`form.select`)"
                    solo
                    required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">
                    {{ $t(`form.TheMessage`) }}
                  </span>
                  <v-textarea solo name="input-7-4" :label="$t(`form.message`)">
                  </v-textarea>
                </v-col>
                <v-col cols="12" class="py-0">
                  <span class="font-weight-bold px-0 my-3 d-block">
                    {{ $t(`form.upload`) }}
                    <span class="textOnP--text">
                      {{ $t(`form.choosFile`) }}
                    </span>
                  </span>
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

export default Vue.extend({
  name: "register",
  components: {
    Nav,
    Footerr,
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
