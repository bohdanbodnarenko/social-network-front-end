import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store/store";

import ForgotPassword from "./modules/forgotPassword/ForgotPassword";
import LandingPage from "./modules/landing/LandingPage";
import SendConfirmationAgain from "./modules/sendConfirmationAgain.tsx/SendConfirmationAgain";
import OAuthPage from "./modules/oauth/OAuthPage";
import { TopBar } from "./components/TopBar";
import { SideBar } from "./components/SideBar";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <div className={store.getState().auth.isAuth ? "auth-routes" : ""}>
        {store.getState().auth.isAuth && <SideBar />}

        <Switch>
          <Route
            path="/forgot-password/:recoverId"
            component={ForgotPassword}
          />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/send-confirmation" component={SendConfirmationAgain} />
          <Route path="/oauth" component={OAuthPage} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
