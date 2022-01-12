import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Profile from "./component/profile/profile"
import Home from "./container/Home";


export default function Routes() {

  return (
    <BrowserRouter>
    <Switch>
<Route path="/" component={Home} exact/>
<Route path="/profile_setting" component={Profile} />
</Switch>
</BrowserRouter>
  )
}



