import * as React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

import "./styles.scss";
import { RegisterValues } from "../../shared/constants/interfaces";
import { TextFormField } from "../FormFields";
import { validUserSchema } from "../../shared/validations";

interface Props {
  onSubmit: (
    values: RegisterValues,
    helpers: FormikHelpers<RegisterValues>
  ) => Promise<void>;
  onLoginClick: (event: any) => void;
}

export const RegisterForm: React.FC<Props> = ({
  onSubmit,
  onLoginClick,
}: Props) => {
  return (
    <div className={"register-container"}>
      <Formik
        validationSchema={validUserSchema}
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Typography variant={"h2"} color={"secondary"}>
              Registration
            </Typography>
            <Field
              name={"firstName"}
              label={"First Name"}
              component={TextFormField}
              variant="outlined"
              color={"secondary"}
            />
            <Field
              name={"lastName"}
              label={"Last Name"}
              component={TextFormField}
              variant="outlined"
              color={"secondary"}
            />
            <Field
              name={"email"}
              label={"Email"}
              component={TextFormField}
              variant="outlined"
              color={"secondary"}
            />
            <Field
              name={"password"}
              label={"Password"}
              type={"password"}
              component={TextFormField}
              variant="outlined"
              color={"secondary"}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant={"contained"}
              fullWidth
              color={"primary"}
            >
              Register
            </Button>
            <a href={process.env.REACT_APP_SERVER_URL + "/auth/google"}>
              <GoogleButton
                label={"Sign up with Google"}
                type="light"
                className={"gbutton"}
              />
            </a>
            <div style={{ paddingTop: 20 }}>
              <Typography>
                Already a user? Please{" "}
                <Link to={"/"} onClick={onLoginClick}>
                  log in
                </Link>
              </Typography>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
