import React, { useEffect, useState } from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { connect, MapDispatchToPropsFunction } from "react-redux";

import { setAccessToken } from "../../store/actions/auth.actions";

const OAuthPage: React.FC<RouteComponentProps & any> = (props) => {
  const [pathToRedirect, setPathToRedirect] = useState<string>("");
  useEffect(() => {
    const token = props.location.search.replace("?token=", "");
    if (token) {
      props.setToken(token);
      setPathToRedirect("/");
    } else {
      setPathToRedirect("/login");
    }
  }, [props]);

  if (!pathToRedirect) {
    return <div>Loading...</div>;
  }

  return <Redirect to={pathToRedirect} />;
};

const mapDispatchToProps: MapDispatchToPropsFunction<any, any> = (
  dispatch
) => ({
  setToken: (token: string) => dispatch(setAccessToken(token)),
});

export default connect(null, mapDispatchToProps)(OAuthPage);
