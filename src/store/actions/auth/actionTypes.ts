import { User } from "../../../shared/constants/interfaces";

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const LOGOUT = "LOGOUT";

export interface SetAccessTokenAction {
  type: typeof SET_ACCESS_TOKEN;
  payload: string;
}

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: User;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes =
  | SetAccessTokenAction
  | SetCurrentUserAction
  | LogoutAction;
