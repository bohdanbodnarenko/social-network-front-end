import * as React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {Button} from "@material-ui/core";

import {TextFormField} from "../../../components/";
import {RegisterValues, validUserSchema} from "../types";

interface Props {
  onSubmit: (
    values: RegisterValues,
    helpers: FormikHelpers<RegisterValues>
  ) => Promise<void>;
}

const RegisterView: React.FC<Props> = ({ onSubmit }: Props) => {
  return (
    <Formik
      validationSchema={validUserSchema}
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            name={"firstName"}
            label={"First Name"}
            component={TextFormField}
            variant="outlined"
          />
          <Field
            name={"lastName"}
            label={"lastName"}
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
          <Button disabled={isSubmitting} type="submit" variant={"outlined"}>
            submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterView;
