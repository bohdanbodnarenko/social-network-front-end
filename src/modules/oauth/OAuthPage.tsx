import React, { useEffect, useState } from "react";
import { RouteComponentProps, Redirect } from "react-router";

import { setAccessToken } from "../../store/actions/auth.actions";

const OAuthPage: React.FC<RouteComponentProps> = (props) => {
  const [pathToRedirect, setPathToRedirect] = useState<string>("");
  useEffect(() => {
    const token = props.location.search.replace("?token=", "");
    if (token) {
      setAccessToken(token);
      setPathToRedirect("/");
    } else {
      setPathToRedirect("/login");
    }
  }, [props.location.search]);

  if (!pathToRedirect) {
    return <div>Loading...</div>;
  }

  return <Redirect to={pathToRedirect} />;
};

export default OAuthPage;
