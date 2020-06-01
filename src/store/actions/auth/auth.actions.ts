import { Dispatch } from "redux";

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
  window.localStorage.setItem("accessToken", "");
  updateHttpServiceToken("");
  return {
    type: types.LOGOUT,
  };
};

export const fetchMe = () => async (dispatch: Dispatch<AppActions>) => {
  console.log("Triggered fetchMe");
  const { data } = await httpService.get("me");
  console.log(data);
  if (data) {
    dispatch(setCurrentUser(data));
  }
};
