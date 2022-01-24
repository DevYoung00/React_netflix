import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Profile from "./component/profile/profile"
import Home from "./container/Home";
import InfoPage from './container/InfoPage'
import Main from './container/Main'


export default function Routes() {

  return (
    <BrowserRouter>
    <Switch>
<Route path="/" component={Main} exact />
<Route path="/Home" component={Home}/>
<Route path="/profile_setting" component={Profile} />
<Route path="/info_page" component={InfoPage} />
</Switch>
</BrowserRouter>
  )
}



