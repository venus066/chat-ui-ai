const config = {
  API_URL: "http://localhost:3000/",
  AUTH_BACKEND: "Dummy",
  FIRE_BASE: {
    API_KEY: process.env.REACT_APP_APIKEY,
    AUTH_DOMAIN: process.env.REACT_APP_AUTHDOMAIN,
    DATABASEURL: process.env.REACT_APP_DATABASEURL,
    PROJECTID: process.env.REACT_APP_PROJECTID,
    STORAGEBUCKET: process.env.REACT_APP_STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.REACT_APP_MESSAGINGSENDERID,
    APPID: process.env.REACT_APP_APPID,
    MEASUREMENTID: process.env.REACT_APP_MEASUREMENTID,
  },
};

export default config;
