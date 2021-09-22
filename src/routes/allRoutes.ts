/*
pages
*/
//root
import Root from "../pages/Root/index";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Dashboard from "../pages/Dashboard/index";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const publicRoutes: Array<RouteProps> = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
];

const privateRoutes: Array<RouteProps> = [
  { path: "/dashboard", exact: true, component: Dashboard },
  { path: "/", exact: true, component: Root },
];

export { publicRoutes, privateRoutes };
