import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/store/createStore';

import SignupPage from './pages/signup-page';
import HomePage from './pages/home-page';
import NewsPage from './pages/news-page';
import ApiPage from './pages/api-page';
import SingleUser from './pages/single-user';
import PageNotFound from './components/page-not-found';
import SharingData from './pages/sharing-data';
import ParentToChild from './pages/parent-to-child';
import TodoListPage from './pages/todo-list';
import PreviewTodo from './pages/preview-todo';
import Demo from './pages/demo';

import './index.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Demo}></Route> */}
        <Route path="/" exact component={SignupPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/feeds" component={NewsPage}></Route>
        <Route path="/api" component={ApiPage}></Route>
        <Route path="/user/:userId" component={SingleUser}></Route>
        <Route path="/parent-child" component={ParentToChild}></Route>
        <Route path="/context-api" component={SharingData}></Route>
        <Route path="/todo" component={TodoListPage}></Route>
        <Route path="/preview" component={PreviewTodo}></Route>

        <Route component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
    

  )
}

ReactDOM.render(<App />, document.getElementById('root'));
