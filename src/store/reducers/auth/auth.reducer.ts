import * as types from "../../actions/auth/actionTypes";
import { AuthActionTypes } from "../../actions/auth/actionTypes";
import { User } from "../../../shared/constants/interfaces";

const currentUser = window.localStorage.getItem("currentUser"),
  token = window.localStorage.getItem("accessToken");

export interface AuthState {
  accessToken: string;
  isAuth: boolean;
  currentUser: User | null;
}

const initialState: AuthState = {
  accessToken: token || "",
  isAuth: !!token,
  currentUser: currentUser ? JSON.parse(currentUser) : null,
};

export const auth = (
  state = initialState,
  action: AuthActionTypes
): typeof initialState => {
  switch (action.type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        isAuth: true,
        accessToken: action.payload,
      };

    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };

    case types.LOGOUT:
      return {
        accessToken: "",
        isAuth: false,
        currentUser: null,
      };

    default:
      return state;
  }
};
