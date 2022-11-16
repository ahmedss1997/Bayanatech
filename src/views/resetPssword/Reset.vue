<template>
  <div class="reset lightPrimary py-10 pb-15">
    <v-card
      class="mx-auto mt-12 py-8 px-3 txtOnPrimary--text"
      elevation="0"
      color="txtOnPrimary"
      max-width="600"
      rounded="xl"
    >
      <v-sheet max-width="440" class="mx-auto">
        <v-icon
          v-if="currentIcon"
          v-text="currentIcon"
          class="ico rounded-circle d-block mx-auto my-2 mb-6 text-center"
          color="white"
        ></v-icon>
        <h1
          class="text-center text-h6 primary--text"
          v-html="currentTitle"
        ></h1>

        <v-card-text class="py-2 px-0 text-subtitle-1 text-center">
          {{ currentPargraph }}
        </v-card-text>
        <v-window v-model="step" class="px-1">
          <v-window-item :value="1">
            <v-form ref="createAccount">
              <span class="font-weight-bold px-0 my-3 d-block">Email</span>
              <v-text-field
                label="Enter Your Email"
                v-model="CheckEmail.email"
                :rules="validRules.emailRules"
                :append-icon="'mdi-email-outline'"
                solo
                class="rounded inputt"
              ></v-text-field>

              <v-btn
                block
                class="py-6 primary text-capitalize"
                @click="SendEmail()"
              >
                Reset Password
              </v-btn>
              <v-card-actions class="justify-center">
                <span class="px-0">Already have an account?</span>
                <v-btn
                  color="primary"
                  text
                  href="/Login"
                  class="px-0 text-capitalize"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-window-item>

          <v-window-item :value="2">
            <v-form ref="createAccount">
              <v-sheet class="my-2 mx-auto" max-width="80%">
                <v-otp-input
                  length="6"
                  :hide-details="false"
                  v-model="CheckEmail.verifyCode"
                  :rules="validRules.numberRules"
                ></v-otp-input>
              </v-sheet>

              <v-btn
                block
                min-width="50% !important"
                class="py-6 mx-auto my-3 primary"
                @click="Verify()"
              >
                Verify Code
              </v-btn>
              <v-card-actions class="justify-center">
                <span class="px-0">Already have an account?</span>
                <v-btn
                  color="warning"
                  text
                  href="/Login"
                  class="px-0 text-capitalize"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-window-item>

          <v-window-item :value="3">
            <v-form ref="createAccount">
              <span class="font-weight-bold d-inline-block px-0 my-3"
                >New Password</span
              >
              <v-text-field
                label="Enter Email"
                solo
                v-model="CheckEmail.password"
                :rules="validRules.passowrdRules"
              ></v-text-field>
              <span class="font-weight-bold d-inline-block px-0 my-3"
                >Repeat Password</span
              >
              <v-text-field
                label="Enter Email"
                solo
                :rules="repeatPasswordRules"
              ></v-text-field>

              <v-btn block class="py-6 primary" @click="ChangePassword()">
                Change Password
              </v-btn>
              <v-card-actions class="justify-center">
                <span class="px-0">Already have an account?</span>
                <router-link to="/logIn">
                  <v-btn
                    color="warning"
                    text
                    class="px-0 text-capitalize"
                  >
                    Login
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-form>
          </v-window-item>
          <v-window-item :value="4">
            <v-form ref="createAccount">
              <v-sheet class="my-2 mx-auto" max-width="80%">
                <v-btn block class="py-6 primary" href="/Login">
                  Let's go to login
                </v-btn>
              </v-sheet>
              <v-card-actions class="justify-center">
                <span class="px-0">Don't have account?</span>
                <router-link to="/register">
                  <v-btn
                    color="warning"
                    text
                    href="/signUp"
                    class="px-0 mx-2 text-capitalize"
                  >
                    Register
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-form>
          </v-window-item>
        </v-window>
      </v-sheet>
    </v-card>

    <v-snackbar v-model="error.displayError" multi-line>
      <div v-if="error.errorCode" class="text-center">
        <v-chip color="error" size="20">{{ error.errorCode }}</v-chip>
        <span class="mx-2">{{ error.msg }}</span>
      </div>
      <div v-else class="text-center">
        <span class="mx-2">Something Went Wrong!</span>
      </div>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="error.displayError = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar
      :timeout="2000"
      :value="true"
      fixed
      bottom
      color="success"
      elevation="24"
      v-model="dialoges.success"
    >
      <div class="text-center">
        The Password Changed successfully
        <v-icon class="mx-2">mdi-check-bold</v-icon>
      </div>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as models from "@/code/models";
// import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";

export default Vue.extend({
  name: "reset",
  data: () => ({
    CheckEmail: {} as models.user,
    dialoges: {
      success: false,
    },
    error: {
      displayError: false,
      msg: "",
      errorCode: 0,
    },
    validRules: validate.validation,
    step: 1,
  }),
  computed: {
    repeatPasswordRules: {
      // getter
      get: function () {
        return validate.confirmPassword(this.CheckEmail.password);
      },
      // setter
      set: function () {
        return validate.confirmPassword(this.CheckEmail.password);
      },
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Forgot Password?";
        case 2:
          return "Verify Code";
        case 3:
          return "Reset Password";
        default:
          return '<div class="text-center">The Password Changed successfully </div>';
      }
    },
    currentIcon() {
      switch (this.step) {
        case 1:
          return "";
        case 2:
          return "";
        case 3:
          return "";
        default:
          return "mdi-check-bold";
      }
    },
    currentPargraph() {
      switch (this.step) {
        case 1:
          return "Enter your email to get a password reset link";
        case 2:
          return "Please Enter The Code You Have Received From Email";
        case 3:
          return "Please enter you new password";
        default:
          return "";
      }
    },
  },
  // methods: {
  //   SendEmail: async function () {
  //     const form = this.$refs.createAccount as HTMLFormElement;
  //     if (form && form.validate()) {
  //       const result = await Emp.Employee.sendEmail(
  //         this.CheckEmail.email,
  //         false,
  //         true
  //       ); // await comes with promise

  //       if (result.ok) {
  //         //
  //         // this.$router.push('/');
  //         console.log(result.body);
  //         this.step = 2;
  //       } else {
  //         // there is something wrong
  //         this.error.displayError = true;
  //         this.error.errorCode = result.errorCode;
  //         this.error.msg = result.errorMsg;
  //       }
  //     }
  //   },
  //   Verify: async function () {
  //     const form = this.$refs.createAccount as HTMLFormElement;
  //     if (form && form.validate()) {
  //       const result = await Emp.Employee.sendCode(this.CheckEmail, false); // await comes with promise

  //       if (result.ok) {
  //         //
  //         // this.$router.push('/');
  //         console.log(result.body);
  //         this.step = 3;
  //       } else {
  //         // there is something wrong
  //         this.error.displayError = true;
  //         this.error.errorCode = result.errorCode;
  //         this.error.msg = result.errorMsg;
  //       }
  //     }
  //   },
  //   ChangePassword: async function () {
  //     const form = this.$refs.createAccount as HTMLFormElement;
  //     if (form && form.validate()) {
  //       const result = await Emp.Employee.newPass(this.CheckEmail, false); // await comes with promise

  //       if (result.ok) {
  //         //
  //         // this.$router.push('/');
  //         console.log(result.body);
  //         this.step = 4; // 4
  //         // this.dialoges.success = true;
  //       } else {
  //         // there is something wrong
  //         this.error.displayError = true;
  //         this.error.errorCode = result.errorCode;
  //         this.error.msg = result.errorMsg;
  //       }
  //     }
  //   },
  // },
});
</script>

<style lang="scss">
.reset {
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

.ico {
  width: 40px;
  height: 40px;
  line-height: 34px !important;
  background-color: #53b257;
  color: #fff !important;
}
</style>
