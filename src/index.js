import React from 'react';
import ReactDOM from 'react-dom';

//import SignupPage from './pages/signup-page';
import ApiPage from './pages/api-page';

import './index.css';

const App = () => {
  return (
    <div>
      <ApiPage></ApiPage>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
