import * as React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Button, Typography } from "@material-ui/core";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

import "./styles.scss";
import { TextFormField } from "../FormFields";
import { LoginValues } from "../../shared/constants/interfaces";
import { validLoginSchema } from "../../shared/validations";

interface Props {
  onSubmit: (
    values: LoginValues,
    helpers: FormikHelpers<LoginValues>
  ) => Promise<void>;
  showSendLinkAgain: boolean;
  disableTitle?: boolean;
  onRegisterClick: () => void;
}

export const LoginForm: React.FC<Props & any> = ({
  onSubmit,
  showSendLinkAgain,
  disableTitle,
  onRegisterClick,
  ...props
}: Props) => {
  return (
    <div className={"login-container"}>
      <Formik
        validationSchema={validLoginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={"login-container_form"} {...props}>
            {!disableTitle && <Typography variant={"h2"}>Login</Typography>}
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
              color={"secondary"}
              component={TextFormField}
              variant="outlined"
            />
            <div>
              <Button
                disabled={isSubmitting}
                type="submit"
                variant={"contained"}
                color={"secondary"}
                fullWidth
              >
                Login
              </Button>
              <a href={process.env.REACT_APP_SERVER_URL + "/auth/google"}>
                <GoogleButton type="light" className={"gbutton"} />
              </a>
            </div>
            {showSendLinkAgain && (
              <div style={{ paddingTop: 20 }}>
                <Link to={"/send-confirmation"}>Send confirmation a again</Link>
              </div>
            )}
            <div>
              <div style={{ paddingTop: 20 }}>
                <Typography>
                  Haven't account?{" "}
                  <Link to={"/"} onClick={onRegisterClick}>
                    Register now
                  </Link>
                </Typography>
              </div>
              <div style={{ paddingTop: 20 }}>
                <Typography>
                  <a href={"/forgot-password"}>Forgot password</a>
                </Typography>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
