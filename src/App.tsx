import React from "react";
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";
import {SnackbarProvider} from "notistack";

import {MainRouter} from "./MainRouter";
import store from "./store/store";
import "./App.css";
import {setupInterceptors} from "./utils/httpService";

const history = createBrowserHistory();

setupInterceptors(store, history);
const App = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <MainRouter />
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
