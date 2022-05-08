import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { db } from "./lib/firebase.prod";
import { AuthContext } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider value={{ db }}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
