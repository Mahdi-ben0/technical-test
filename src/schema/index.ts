import * as yup from "yup";

export const userSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
