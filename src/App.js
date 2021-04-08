import React from "react";
import "./index.css";

//Importing notification package
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//importing screens
import { Home, About, Careers, Contactus, OurWork } from "./screens/";
import { TermsAndCondition, PrivacyPolicy, Disclaimer } from "./patterns/terms";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/our_work" exact component={OurWork} />
        <Route path="/careers" exact component={Careers} />
        <Route path="/contactus" exact component={Contactus} />
        <Route
          path="/terms_and_condition"
          exact
          component={TermsAndCondition}
        />
        <Route path="/privacy_policy" exact component={PrivacyPolicy} />
        <Route path="/disclaimer" exact component={Disclaimer} />
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
