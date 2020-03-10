import * as React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

import {TextFormField} from "../../../components/";
import {RegisterValues, validUserSchema} from "../types";

import "./styles.css";

interface Props {
  onSubmit: (
    values: RegisterValues,
    helpers: FormikHelpers<RegisterValues>
  ) => Promise<void>;
}

const RegisterView: React.FC<Props> = ({ onSubmit }: Props) => {
  return (
    <div className={"register-container"}>
      <Formik
        validationSchema={validUserSchema}
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={"register-form"}>
            <Typography variant={"h2"}>Registration</Typography>
            <Field
              name={"firstName"}
              label={"First Name"}
              component={TextFormField}
              variant="outlined"
            />
            <Field
              name={"lastName"}
              label={"Last Name"}
              component={TextFormField}
              variant="outlined"
            />
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
              Register
            </Button>
            <div style={{ paddingTop: 20 }}>
              <Typography>
                Already a user? Please <Link to={"/login"}>log in</Link>
              </Typography>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterView;
