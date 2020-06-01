import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ForgotPassword from "./modules/forgotPassword/ForgotPassword";
import LandingPage from "./modules/landing/LandingPage";
import SendConfirmationAgain from "./modules/sendConfirmationAgain.tsx/SendConfirmationAgain";
import OAuthPage from "./modules/oauth/OAuthPage";
import { TopBar } from "./components/TopBar";
import { SideBar } from "./components/SideBar";
import { reduxConnect } from "./shared/hoc/reduxConnect";

interface Props {
  isAuth?: boolean;
}

export const MainRouter: React.FC<Props> = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <TopBar />
      <div className={isAuth ? "auth-routes" : ""}>
        {isAuth && <SideBar />}
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

interface LinkStateProps {
  isAuth: boolean;
}

reduxConnect<Props, LinkStateProps, any>(
  MainRouter,
  null,
  ({ auth: { isAuth } }) => ({ isAuth })
);
