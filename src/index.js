import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RootContext } from "./store";
import { Timer } from "./store/Timer";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RootContext.Provider value={{ timer: new Timer() }}>
      <App />
    </RootContext.Provider>
  </StrictMode>,
  rootElement
);
