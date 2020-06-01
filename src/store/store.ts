import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk, { ThunkMiddleware } from "redux-thunk";

import * as reducers from "./reducers";
import { AppActions } from "./actions/app.actions";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  ...reducers,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  process.env.REACT_APP_PROD === "true"
    ? applyMiddleware(
        routerMiddleware(history),
        thunk as ThunkMiddleware<AppState, AppActions>
      )
    : composeWithDevTools(
        applyMiddleware(
          routerMiddleware(history),
          thunk as ThunkMiddleware<AppState, AppActions>
        )
      )
);

export default store;
