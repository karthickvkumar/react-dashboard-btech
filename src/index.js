import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignupPage from './pages/signup-page';
import NewsPage from './pages/news-page';
import HomePage from './pages/home-page';
import ApiPage from './pages/api-page';

import './index.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignupPage}></Route>
          <Route path="/feeds" component={NewsPage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route component={ApiPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'));
