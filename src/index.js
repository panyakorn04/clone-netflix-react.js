import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./global-styles";
import App from "./App";
ReactDOM.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </>,
  document.getElementById("root")
);
