import { Dispatch } from "redux";
import { push } from "react-router-redux";

import * as types from "./actionTypes";
import {
  httpService,
  updateHttpServiceToken,
} from "../../../utils/httpService";
import { User } from "../../../shared/constants/interfaces";
import { AppActions } from "../app.actions";

export const setAccessToken = (token: string): AppActions => {
  window.localStorage.setItem("accessToken", token);
  updateHttpServiceToken(token);
  push("/");
  return {
    type: types.SET_ACCESS_TOKEN,
    payload: token,
  };
};

export const setCurrentUser = (user: User): AppActions => {
  window.localStorage.setItem("currentUser", JSON.stringify(user));
  return {
    type: types.SET_CURRENT_USER,
    payload: user,
  };
};

export const logout = (): AppActions => {
  window.localStorage.clear();
  updateHttpServiceToken("");

  return {
    type: types.LOGOUT,
  };
};

export const fetchMe = () => async (dispatch: Dispatch<AppActions>) => {
  const { data } = await httpService.get("me");
  if (data) {
    dispatch(setCurrentUser(data));
  }
};
