import React from "react";

// scss
import "./assets/scss/theme.scss";

// // Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// //api config
// import config from "./config";
import fakeBackend from "./helpers/fakeBackend";
import Routes from "./routes";

// TODO
fakeBackend();

// const firebaseConfig = {
//   apiKey: config.FIRE_BASE.API_KEY,
//   authDomain: config.FIRE_BASE.AUTH_DOMAIN,
//   databaseURL: config.FIRE_BASE.DATABASEURL,
//   projectId: config.FIRE_BASE.PROJECTID,
//   storageBucket: config.FIRE_BASE.STORAGEBUCKET,
//   messagingSenderId: config.FIRE_BASE.MESSAGINGSENDERID,
//   appId: config.FIRE_BASE.APPID,
//   measurementId: config.FIRE_BASE.MEASUREMENTID,
// };

// // init firebase backend
// initFirebaseBackend(firebaseConfig);

const App = () => {
  return <Routes />;
};

export default App;
