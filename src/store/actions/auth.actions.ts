import {AnyAction} from "redux";

import * as types from "./actionTypes";
import {updateHttpServiceToken} from "../../utils/httpService";

export const setAccessToken = (token: string): AnyAction => {
  window.localStorage.setItem("accessToken", token);
  updateHttpServiceToken(token);
  return {
    type: types.LOGIN_SUCCESS,
    payload: token
  };
};

export const setCurrentUser = (user: any): AnyAction => {
  window.localStorage.setItem("currentUser", JSON.stringify(user));
  return {
    type: types.SET_CURRENT_USER,
    payload: user
  };
};

export const logout = (): AnyAction => {
  window.localStorage.setItem("accessToken", "");
  updateHttpServiceToken("");
  return {
    type: types.LOGOUT
  };
};
