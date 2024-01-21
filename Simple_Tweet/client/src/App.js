import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import PrivateRoute from "./components/PrivateRoute";
import "./App.scss";
import { useLocalStorage } from "usehooks-ts";

function App() {
  const [token] = useLocalStorage("token");
  const authenticated = !!token;

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Signup} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <PrivateRoute
            path="/feed"
            component={Feed}
            exact={true}
            authenticated={authenticated}
          />
          <PrivateRoute
            path="/profile"
            component={Profile}
            exact={true}
            authenticated={authenticated}
          />
          <PrivateRoute
            path="/users"
            component={Users}
            exact={true}
            authenticated={authenticated}
          />
          <Route exact path="/" render={() => <Redirect to="/feed" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
