import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import "antd/dist/reset.css";
import UseWrapperHandler from "./hooks/UseWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UseWrapperHandler>
    <Root />
  </UseWrapperHandler>
);
