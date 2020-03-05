import * as React from "react";
import {useEffect} from "react";
import {Button, Form, Typography} from "antd";
import {Field, FormikErrors, FormikProps, withFormik} from "formik";
import {Link} from "react-router-dom";

import "./styles.css";
import {RegisterValues} from "../types";
import {FieldError} from "../../../shared/constants/interfaces";

const FormItem = Form.Item;

interface Props extends FormikProps<RegisterValues> {
  submit: (values: RegisterValues) => Promise<FormikErrors<RegisterValues>>;
  loading: boolean;
  serverErrors: FieldError[];
  errors: any;
}

const RegisterView = ({
  serverErrors,
  errors,
  handleSubmit,
  loading
}: Props) => {
  useEffect(() => {
    props.serverErrors.forEach(
      error => (props.errors[error.path] = error.message)
    );
  }, [props.serverErrors]);

  const { handleSubmit, loading } = props;

  return (
    <Form onFinish={handleSubmit} className="register-wrapper">
      <Typography.Title>Register</Typography.Title>
      <Field
        name="email"
        label="Email"
        required
        prefix={<Icon type="user" className="register_icon" />}
        component={InputField}
        type="email"
        placeholder="Email"
      />
      <Field
        label="Password"
        required
        name="password"
        prefix={<Icon type="lock" className="register_icon" />}
        type="password"
        placeholder="Password"
        component={InputField}
      />
      <Field
        label="Name"
        required
        name="name"
        prefix={<Icon type="experiment" className="register_icon" />}
        type="text"
        component={InputField}
        placeholder="Name"
      />
      <Field
        label="Phone"
        name="phone"
        required
        prefix={<Icon type="phone" />}
        type="phone"
        component={InputField}
        placeholder="Phone"
      />
      <Field
        label="Site"
        name="url"
        prefix={<Icon type="global" className="register_icon" />}
        type="url"
        component={InputField}
        placeholder="Site"
      />
      <FormItem>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Register
        </Button>
      </FormItem>
      <FormItem>
        Or <Link to="/login">login now!</Link>
      </FormItem>
    </Form>
  );
};

export default withFormik<Props, IRegisterValues>({
  validationSchema: validProviderSchema,
  mapPropsToValues: () => ({
    email: "",
    password: "",
    name: "",
    phone: ""
  }),
  handleSubmit: async (values, { props }) => {
    values.phones = [values.phone];
    await props.submit(values);
  }
})(RegisterView);
