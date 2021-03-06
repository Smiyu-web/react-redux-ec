import React from "react";
import { Route, Switch } from "react-router";
import { Login, Home } from "./templates/index";

const RouterFile = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="(/)?" component={Home} />
    </Switch>
  );
};

export default RouterFile;
