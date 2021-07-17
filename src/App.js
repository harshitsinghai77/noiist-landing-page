import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import ThankYouForRegistration from "./pages/ThankYouForRegistration";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/get-started">
          <GetStarted />
        </Route>
        <Route path="/authorization-success">
          <ThankYouForRegistration />
        </Route>
        {/* <Route path="/signup">
          <SignUp />
        </Route> */}
        {/* <Route path="/reset-password">
          <ResetPassword />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
