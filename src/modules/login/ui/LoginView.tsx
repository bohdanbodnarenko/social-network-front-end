import * as React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

import {TextFormField} from "../../../components/";
import {LoginValues, validLoginSchema} from "../types";

import "./styles.scss";

interface Props {
  onSubmit: (
    values: LoginValues,
    helpers: FormikHelpers<LoginValues>
  ) => Promise<void>;
  showSendLinkAgain: boolean;
}

const LoginView: React.FC<Props> = ({ onSubmit, showSendLinkAgain }: Props) => {
  return (
    <div className={"login-container"}>
      <Formik
        validationSchema={validLoginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Typography variant={"h2"}>Login</Typography>
            <Field
              name={"email"}
              label={"Email"}
              component={TextFormField}
              variant="outlined"
            />
            <Field
              name={"password"}
              label={"Password"}
              type={"password"}
              component={TextFormField}
              variant="outlined"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant={"contained"}
              fullWidth
              color={"primary"}
            >
              Login
            </Button>
            {showSendLinkAgain && (
              <div style={{ paddingTop: 20 }}>
                <Link to={"/send-confirmation"}>
                  Send confirmation link again
                </Link>
              </div>
            )}
            <div style={{ paddingTop: 20 }}>
              <Typography>
                Haven't account? <Link to={"/register"}>Register now</Link>
              </Typography>
            </div>
            <div style={{ paddingTop: 20 }}>
              <Typography>
                <Link to={"/forgot-password"}>Forgot password</Link>
              </Typography>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginView;
