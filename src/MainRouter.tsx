import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {ForgotPassword, LandingPage, LoginConnector, RegisterConnector} from "./modules";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={RegisterConnector} />
        <Route path="/login" component={LoginConnector} />
        <Route path="/forgot-password/:recoverId" component={ForgotPassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};
