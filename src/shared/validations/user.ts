import * as yup from "yup";

export const validEmailSchema = yup
  .string()
  .min(3, "Email must be at least 3 characters")
  .max(255)
  .email("Email must be a valid email")
  .required();

export const validLoginSchema = yup.object().shape({
  email: validEmailSchema,
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(255)
    .required(),
});
