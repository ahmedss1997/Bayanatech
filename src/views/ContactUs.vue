<template>
  <div class="home">
    <Nav />
    <!-- Start Contact Us Section -->

    <div class="contact-us py-15 txtOnPrimary">
      <v-container>
        <h2 class="primary--text text-h4 text-md-h3 mb-5">
          {{ $t(`contact.heading1`) }}
        </h2>
        <v-row class="mt-8">
          <v-col cols="12" md="8">
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
                    <v-textarea
                      solo
                      name="input-7-4"
                      :label="$t(`form.message`)"
                    >
                    </v-textarea>
                  </v-col>
                </v-row>
                <v-btn
                  block
                  rounded
                  elevation="0"
                  class="py-7 primary txtOnPrimary--text text-capitalize text-h6 mt-5"
                  @click="createAccount()"
                >
                  {{ $t(`form.btn`) }}
                </v-btn>
              </v-container>
            </v-form>
          </v-col>
          <v-col cols="12" md="4">
            <div
              class="info-contact primary txtOnPrimary--text pa-8 mt-10 rounded-lg"
            >
              <h3 class="txtOnPrimary--text text-h6 mb-8">
                {{ $t(`contact.heading1`) }}
              </h3>
              <div class="mb-8">
                <v-avatar size="25" color="support">
                  <v-icon small class="textHead--text"
                    >mdi-email-outline</v-icon
                  >
                </v-avatar>
                <span class="mb-0 mx-3 txtOnPrimary--text">
                  info@bayanatech.com.sa
                </span>
              </div>
              <div class="mb-8">
                <v-avatar size="25" color="support">
                  <v-icon small class="textHead--text">mdi-phone</v-icon>
                </v-avatar>
                <span class="mb-0 mx-3 txtOnPrimary--text">0503326610</span>
              </div>
              <div class="mb-8">
                <v-avatar size="25" color="support">
                  <v-icon small class="textHead--text">mdi-map-marker</v-icon>
                </v-avatar>
                <span class="d-md-flex mb-0 mx-3 txtOnPrimary--text">
                  {{ $t(`contact.location`) }}
                </span>
              </div>
              <ul class="flex mt-10 mb-5 pa-0 justify-center">
                <li
                  v-for="(social, i) in socials"
                  :key="i"
                  class="d-flex align-center ml-3"
                >
                  <v-avatar size="38" color="support">
                    <v-icon class="textHead--text">{{ social.icon }}</v-icon>
                  </v-avatar>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-12">
          <v-col cols="12">
            <div class="map-location">
              <h3 class="primary--text text-h4 text-md-h3 mb-8">
                {{ $t(`contact.heading2`) }}
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232410.1047849267!2d39.75764495530979!3d24.471320340220785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe5197d220d5%3A0x2e54514fea3b08d9!2z2KfZhNmF2K_ZitmG2Kkg2KfZhNmF2YbZiNix2Kkg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1667931901536!5m2!1sar!2seg"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- End Contact Us Section -->

    <div class="footerr-home txtOnPrimary px-6 pb-6 pt-12">
      <Footerr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as models from "@/code/models";
// import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";
import Nav from "@/components/Nav.vue";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";
import Footerr from "@/components/Footerr.vue";

export default Vue.extend({
  name: "contact",
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
    socials: [
      { icon: "mdi-youtube" },
      { icon: "mdi-linkedin" },
      { icon: "mdi-twitter" },
      { icon: "mdi-facebook" },
    ],
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
.contact-us {
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
