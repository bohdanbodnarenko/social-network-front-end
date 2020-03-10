import axios from "axios";
import {Store} from "redux";
import {History} from "history";

import {logout} from "../store/actions/auth.actions";

const badAuthStatuses = [401, 403];

export const httpService = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || window.location.origin,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
  }
});

export const updateHttpServiceToken = (token: string) => {
  httpService.defaults.headers["Authorization"] = "Bearer " + token;
};

export const setupInterceptors = (store: Store, history: History) => {
  httpService.interceptors.response.use(
    response => {
      return Promise.resolve(response);
    },
    error => {
      if (!error.response) {
        return Promise.reject({ data: { error: "Server error" } });
      }
      if (badAuthStatuses.includes(error.response.status)) {
        if (store.getState().auth.isAuth) {
          store.dispatch(logout());
          history.push("/login");
        }
        return Promise.reject(error.response);
      } else {
        if (error.response.data.error) {
          return Promise.reject(error.response);
        }
      }
      return Promise.reject(error.response);
    }
  );
};
