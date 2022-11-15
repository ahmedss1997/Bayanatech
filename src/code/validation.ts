const maxText = 50; // Same Rules Validate Between Front And Back
const minText = 3;
const passwordMin = 8; // rule from backend

export const validation = {
  textRules: [
    // 1 - required
    // 2 - min 3
    // 3- max  50
    // 4- must contain alphabet characters
    (value?: string) => !!value || "Required!",
    (value?: string) =>
      (value && value.trim().length >= minText) ||
      "The input must contain at least " + minText + " characters!",
    (value?: string) =>
      (value && value.trim().length <= maxText) ||
      "The input can not exceed " + maxText + " characters!",
    (value?: string) => {
      const pattern = /[a-zA-Z\u0600-\u06FF]/g;
      return value ? pattern.test(value.trim()) || "Invalid Input!" : false;
    },
  ],
  numberRules: [
    (value?: number) => !!value || "Required!",
    (value?: number) => {
      const pattern = /[0-9]/g;
      let v = value + ""; // convert to string
      v = v.replace(pattern, "");
      if (v.length > 0) {
        return "Must only be numbers!";
      } else {
        return true;
      }
    },
  ],
  emailRules: [
    // function takes a parameter (value) with type string => check if the value is not an empty string ""
    // if it is an empty string the 'Required will be returned
    (value?: string) => !!value || "Required!",
    (value?: string) =>
      (value && value.trim().length <= maxText) ||
      "The input can not exceed " + maxText + " characters!",
    // function below makes sure that is is an email
    (value?: string) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return value
        ? pattern.test(value.trim()) || "Invalid email."
        : "Required!";
    },
  ],
  passowrdRules: [
    (value?: string) => !!value || "Required!",
    (value?: string) =>
      (value && value.trim().length <= maxText) ||
      "The input can not exceed " + maxText + " characters!",
    (value?: string) =>
      (value && value.trim().length >= passwordMin) ||
      "Password must be of at least " + passwordMin + " characters/numbers!",
  ],
};

export function confirmPassword(password: string | any) {
  return [
    (value?: string) => !!value || "Required!",
    (value?: string) =>
      (value && value.length >= 8) ||
      "Password must be of at least " + passwordMin + " characters/numbers!",
    (value?: string) => value === password || "Passwords are not matched!",
  ];
}
