import React from "react";
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";

import {MainRouter} from "./MainRouter";
import store from "./store/store";
import "antd/dist/antd.css";
import "./App.css";
import {setupInterceptors} from "./utils/httpService";

const history = createBrowserHistory();

setupInterceptors(store, history);
const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
