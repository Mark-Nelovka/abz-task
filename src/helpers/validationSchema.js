import * as yup from "yup";

export const schemaStepOne = yup.object().shape({
  firstName: yup
    .string()
    .min(1)
    .matches(/^[a-zA-z""]/, "Available latin-based alphabet")
    .max(30, "Must be less than 30 characters")
    .required("Required"),
  lastName: yup
    .string()
    .min(1)
    .matches(/^[a-zA-z""]/, "Available latin-based alphabet")
    .max(30, "Must be less than 30 characters")
    .required("Required"),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.""]+$/,
      "Available latin-based alphabet, numeric character and _ . + -"
    )
    .min(1, "Must be at least 6 characters")
    .max(63, "Email length must be less than 63 characters")
    .required("Required"),
  tel: yup
    .string()
    .matches(/^[0-9""]/, "Available number")
    .min(9)
    .max(16, "Must be less than 16 characters")
    .required("Required"),
});
