import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RegisterConnector from "./modules/register/RegisterConnector";
import LoginConnector from "./modules/login/LoginConnector";
import ForgotPassword from "./modules/forgotPassword/ForgotPassword";
import LandingPage from "./modules/landing/LandingPage";
import SendConfirmationAgain from "./modules/sendConfirmationAgain.tsx/SendConfirmationAgain";
import OAuthPage from "./modules/oauth/OAuthPage";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={RegisterConnector} />
        <Route path="/login" component={LoginConnector} />
        <Route path="/forgot-password/:recoverId" component={ForgotPassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/send-confirmation" component={SendConfirmationAgain} />
        <Route path="/oauth" component={OAuthPage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};
