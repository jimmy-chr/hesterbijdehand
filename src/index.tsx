import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "fomantic-ui-less/semantic.less";
import "pure-react-carousel/dist/react-carousel.es.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
