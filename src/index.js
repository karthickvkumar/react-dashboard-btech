import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './pages/home-page';
import ProfilePage from './pages/profile-page';

import './index.css';

const App = () => {
  return (
    <div>
      <h2>Welcome to React</h2>
      <ProfilePage></ProfilePage>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
