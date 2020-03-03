import * as React from "react";
import {Redirect, Route} from "react-router-dom";

import {reduxConnect} from "./reduxConnect";

interface Props {
  isAuth: boolean;
  component: any;
}

const PrivateRoute = ({
  component: Component,
  isAuth,
  ...rest
}: Props & any) => (
  <Route
    {...rest}
    render={props => {
      return isAuth ? <Component {...props} /> : <Redirect to="/login" />;
    }}
  />
);

export default reduxConnect(PrivateRoute, null, ({ auth: { isAuth } }) => ({
  isAuth
})) as any;
