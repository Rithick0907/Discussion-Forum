import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: Registration,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/main",
    name: "landing",
    component: Landing,
  },
];

export default routes;
