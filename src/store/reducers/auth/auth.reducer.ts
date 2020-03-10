import {AnyAction} from "redux";

import * as types from "../../actions/actionTypes";
import {AuthState} from "./types";

const currentUser = window.localStorage.getItem("currentUser"),
  token = window.localStorage.getItem("accessToken");

const initialState: AuthState = {
  accessToken: token || "",
  isAuth: !!token,
  currentUser: currentUser ? JSON.parse(currentUser) : null
};

export const auth = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        accessToken: action.payload
      };

    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      };

    case types.LOGOUT:
      return initialState;

    default:
      return state;
  }
};
