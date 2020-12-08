import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreem } from "../components/login/LoginScreem";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreem} />
          <Route path="/" component={DashboardRouter} />
        </Switch>
      </div>
    </Router>
  );
};
