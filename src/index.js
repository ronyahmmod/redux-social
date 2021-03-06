import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import stelaTheme from "./themes/stela";
import { ThemeProvider } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import "./firebase/firebase.config";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(stelaTheme);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={stelaTheme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
