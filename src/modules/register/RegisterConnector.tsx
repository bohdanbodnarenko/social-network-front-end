import React from "react";
import {useSnackbar} from "notistack";

import RegisterView from "./ui/RegisterView";
import {httpService} from "../../utils/httpService";
import {FieldError} from "../../shared/constants/interfaces";
import {RegisterValues} from "./types";
import {FormikHelpers} from "formik";

export const RegisterConnector = (props: any) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    values: RegisterValues,
    { setSubmitting, setErrors }: FormikHelpers<RegisterValues>
  ) => {
    setSubmitting(true);
    try {
      const { data } = await httpService.post("/register", values);
      if (data) {
        enqueueSnackbar("Registration Success", { variant: "success" });
        props.history.push("/login");
      }
    } catch ({ data }) {
      setErrors(
        data.reduce((acc: any, { path, message }: FieldError) => {
          acc[path] = message;
          return acc;
        }, {})
      );
    } finally {
      setSubmitting(false);
    }
  };
  return <RegisterView onSubmit={handleSubmit} />;
};
