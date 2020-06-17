import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ForgotPassword from "./modules/forgotPassword/ForgotPassword";
import LandingPage from "./modules/landing/LandingPage";
import SendConfirmationAgain from "./modules/sendConfirmationAgain.tsx/SendConfirmationAgain";
import OAuthPage from "./modules/oauth/OAuthPage";
import { TopBar } from "./components/TopBar";
import { SideBar } from "./components/SideBar";
import { reduxConnect } from "./shared/hoc/reduxConnect";
import People from "./modules/people/People";
import Categories from "./modules/categories/Categories";
import Feed from "./modules/feed/Feed";
import Messages from "./modules/messages/Messages";

interface Props {
  isAuth?: boolean;
}

const Router: React.FC<Props> = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <TopBar />
      {isAuth && <SideBar />}
      <div className={isAuth ? "routes__auth" : "routes"}>
        <Switch>
          <Route
            path="/forgot-password/:recoverId"
            component={ForgotPassword}
          />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/send-confirmation" component={SendConfirmationAgain} />
          <Route path="/oauth" component={OAuthPage} />
          <Route path="/people/:personId" component={People} />
          <Route path="/categories/:categoryId" component={Categories} />
          <Route path="/feed" component={Feed} />
          <Route path="/messages" component={Messages} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

interface LinkStateProps {
  isAuth: boolean;
}

export const MainRouter = reduxConnect<Props, LinkStateProps, any>(
  Router,
  null,
  ({ auth: { isAuth } }) => ({ isAuth })
);
