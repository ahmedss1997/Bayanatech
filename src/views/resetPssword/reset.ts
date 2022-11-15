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
