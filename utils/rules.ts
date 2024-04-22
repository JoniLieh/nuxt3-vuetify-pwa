// :rules="[formRules.required]"

const rules = {
  required: (v: string) => !!v || "This field is required",
  email: (value: string) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "E-Mail must be valid";
  },
  length: (v: string, len: number = 6) => (!!v && v.length >= len) || `Must be atleast ${len} or more characters`,
};

export default rules;