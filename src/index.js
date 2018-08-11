import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store/configureStore";
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
