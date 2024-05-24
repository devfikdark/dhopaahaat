export const requiredField = [(v) => !!v || "Field is required"];
export const validateEmail = [(v) => !!v || "Field is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"];
