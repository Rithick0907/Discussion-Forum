import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

export const protectedRoutes = [
  {
    path: "/main",
    name: "landing",
    component: Landing,
  },
];

export default routes;
