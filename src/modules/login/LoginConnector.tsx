import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { connect, MapDispatchToPropsFunction } from "react-redux";

import { httpService } from "../../utils/httpService";
import {
  FieldError,
  LoginValues,
  User,
} from "../../shared/constants/interfaces";
import { FormikHelpers } from "formik";
import {
  setAccessToken,
  setCurrentUser,
} from "../../store/actions/auth.actions";
import { RouteComponentProps } from "react-router";
import { LoginForm } from "../../components/LoginForm";

interface Props {
  setCurrentUser: (user: User) => void;
  setToken: (token: string) => void;
}

const LoginConnector = ({
  history,
  setCurrentUser,
  setToken,
}: Props & RouteComponentProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [showSendLinkAgain, setShowSendLinkAgain] = useState<boolean>(false);

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting, setErrors }: FormikHelpers<LoginValues>
  ) => {
    setSubmitting(true);
    try {
      const { data } = await httpService.post("/login", values);
      if (data) {
        const { user, token } = data;
        setCurrentUser(user);
        setToken(token);
        enqueueSnackbar("Login Success", { variant: "success" });
        history.push("/");
      }
    } catch ({ data }) {
      const errors = data.reduce((acc: any, { path, message }: FieldError) => {
        acc[path] = message;
        return acc;
      }, {});
      if (errors.email === "Please confirm your email first") {
        setShowSendLinkAgain(true);
      }
      setErrors(errors);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <LoginForm showSendLinkAgain={showSendLinkAgain} onSubmit={handleSubmit} />
  );
};

const mapDispatchToProps: MapDispatchToPropsFunction<any, any> = (
  dispatch
) => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user)),
  setToken: (token: string) => dispatch(setAccessToken(token)),
});

export default connect(null, mapDispatchToProps)(LoginConnector);
