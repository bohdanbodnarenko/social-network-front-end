import * as yup from "yup";

export const validUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, "Email must be at least 3 characters")
    .max(255)
    .email("Email must be a valid email")
    .required(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(255)
    .required(),
  firstName: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100)
    .required(),
  lastName: yup
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(100)
    .required()
});

export interface RegisterValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
