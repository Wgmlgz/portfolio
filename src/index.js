import {render} from "react-dom";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter, Route , Routes} from "react-router-dom";

import "./background";


export default function Test() {
  return (<div>aboba</div>);
}
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/warehouse"
        render={() => {
          window.location.href = "/warehouse/index.html";
        }}
      />
      <Route
        path="/trees"
        render={() => {
          window.location.href = "/trees/index.html";
        }}
      />
      <Route
        path="/fractals"
        render={() => {
          window.location.href = "/fractals/index.html";
        }}
      />
      <Route
        path="/planets"
        render={() => {
          window.location.href = "/planets/index.html";
        }}
      />
      <Route
        path="/graphs"
        render={() => {
          window.location.href = "/graphs/index.html";
        }}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// render(<App />, document.getElementById("root"));