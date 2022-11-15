import Vue from "vue";
import * as models from "@/code/models";
// import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

export default Vue.extend({
  name: "register",
  components: { VueTelInputVuetify },
  data: () => ({
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
