import "dotenv/config";
import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import SimpleReactLightbox from "simple-react-lightbox";
import App from "./App";
import Wrapper from "./lang/Wrapper";

ReactDOM.render(
  <Wrapper>
    <ToastProvider
      autoDismissTimeout={5000}
      autoDismiss={true}
      placement={"bottom-center"}
    >
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </ToastProvider>
  </Wrapper>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
