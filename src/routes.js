import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
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
  {
    path: "/forgetPassword",
    name: "forgetPassword",
    component: ForgetPassword,
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
