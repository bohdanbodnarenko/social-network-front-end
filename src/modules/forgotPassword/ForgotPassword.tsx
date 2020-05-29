import * as React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { RouteComponentProps } from "react-router";
import { Button, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";

import { TextFormField } from "../../components/FormFields";
import { validForgotPasswordSchema } from "./types";
import { Link } from "react-router-dom";
import { httpService } from "../../utils/httpService";
import { FieldError } from "../../shared/constants/interfaces";

import "./styles.scss";
import { validEmailSchema } from "../../shared/validations";

interface Values {
  password: "";
  confirmPassword: "";
  email: "";
}

const ForgotPassword: React.FC<RouteComponentProps<{
  recoverId: string;
}>> = (props) => {
  const {
    match: {
      params: { recoverId },
    },
  } = props;

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>
  ) => {
    try {
      const { data } = await httpService.post(
        recoverId ? `/reset-password/${recoverId}` : "/change-password",
        values
      );
      enqueueSnackbar(data.message, { variant: "success" });
      if (recoverId) {
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

  const fields = recoverId ? (
    <React.Fragment>
      <Field
        name={"password"}
        label={"Password"}
        type={"password"}
        component={TextFormField}
        variant="outlined"
      />
      <Field
        name={"confirmPassword"}
        label={"Confirm Password"}
        type={"password"}
        component={TextFormField}
        variant="outlined"
      />
    </React.Fragment>
  ) : (
    <Field
      name={"email"}
      label={"Email"}
      component={TextFormField}
      variant="outlined"
    />
  );

  return (
    <div className={"forgot-password-container"}>
      <Formik
        initialValues={{ password: "", confirmPassword: "", email: "" }}
        onSubmit={handleSubmit}
        validationSchema={
          recoverId ? validForgotPasswordSchema : validEmailSchema
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <Typography variant={"h3"}>Forgot Password</Typography>
            {fields}
            <Button
              disabled={isSubmitting}
              type="submit"
              variant={"contained"}
              fullWidth
              color={"primary"}
            >
              {recoverId ? "Change password" : "Send email"}
            </Button>
            <div>
              <Typography>
                Or <Link to={"/login"}>log in now</Link>
              </Typography>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
