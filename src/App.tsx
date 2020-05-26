import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { SnackbarProvider } from "notistack";

import { MainRouter } from "./MainRouter";
import store from "./store/store";
import "./App.scss";
import { setupInterceptors } from "./utils/httpService";
import { TopBar, SideBar } from "./components/";

const history = createBrowserHistory();

setupInterceptors(store, history);
const App = () => {
  return (
    <Provider store={store}>
      {store.getState().auth.isAuth && <SideBar />}
      <SnackbarProvider maxSnack={3}>
        <TopBar />
        <MainRouter />
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
