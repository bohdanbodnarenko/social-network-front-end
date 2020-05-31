import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core";

import { MainRouter } from "./MainRouter";
import store from "./store/store";
import "./App.scss";
import { setupInterceptors } from "./utils/httpService";
import { theme } from "./theme";

const history = createBrowserHistory();

setupInterceptors(store, history);
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <MainRouter />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
