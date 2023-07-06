import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Switch>
  );
};

export default Routes;
