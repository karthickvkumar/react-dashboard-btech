import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignupPage from './pages/signup-page';
import HomePage from './pages/home-page';
import NewsPage from './pages/news-page';
import ApiPage from './pages/api-page';
import SingleUser from './pages/single-user';
import PageNotFound from './components/page-not-found';
import SharingData from './pages/sharing-data';
import ParentToChild from './pages/parent-to-child';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignupPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/feeds" component={NewsPage}></Route>
        <Route path="/api" component={ApiPage}></Route>
        <Route path="/user/:userId" component={SingleUser}></Route>
        <Route path="/parent-child" component={ParentToChild}></Route>
        <Route path="/context-api" component={SharingData}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>

  )
}

ReactDOM.render(<App />, document.getElementById('root'));
