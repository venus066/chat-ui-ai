import React from 'react';

// scss
import './assets/scss/theme.scss';

//api config
import config from "./config";

import Login from "./pages/Authentication/Login";

const App = () => {
  return (
    <Login />
  );
};

export default App;
