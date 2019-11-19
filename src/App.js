import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* PLACE TO IMPORT YOUR COMPONENTS */
import Main from "./pages/main.js";
import "../src/style.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />

        {/* PLACE YOUR NEW PATHS TO COMPONENTS HERE */}

        {/* DEFAULT PATH: < Route component={ NotFound } /> :UNCOMMENT WHEN APPLIED*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
