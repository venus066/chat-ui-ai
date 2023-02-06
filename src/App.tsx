import React, { useEffect } from "react";
// scss
import "./assets/scss/theme.scss";
// actions
import { useDispatch, useSelector } from "react-redux";
import { changelayoutMode } from "./redux/actions";
//Route
import Routes from "./routes";
//api config
// import config from "./config";
import fakeBackend from "./helpers/fakeBackend";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";


// TODO
fakeBackend();

const App = () => {
  const dispatch = useDispatch();

  const { layoutMode } = useSelector((state: any) => ({
    layoutMode: state.Layout.layoutMode,
  }));

  // Dark/Light Mode 
  useEffect(() => {
    var getLayoutMode = localStorage.getItem("layoutMode");
    if (getLayoutMode) {
      dispatch(changelayoutMode(getLayoutMode));
    } else {
      dispatch(changelayoutMode(layoutMode));
    }
  }, [layoutMode, dispatch]);

  return <Routes />;
};

export default App;
