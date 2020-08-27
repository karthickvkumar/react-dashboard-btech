import React from 'react';
import ReactDOM from 'react-dom';

import SignupPage from './pages/signup-page';

import './index.css';

const App = () => {
  return (
    <div>
      <SignupPage></SignupPage>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
