import { Redirect, Route, Switch } from "react-router-dom";

import ForgetPassword from "./pages/ForgetPassword";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Routes = ({ user }) => (
  <Switch>
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/forgetPassword" component={ForgetPassword} />
    <Route
      path="/main"
      render={(props) =>
        user ? <Landing {...props} /> : <Redirect to="/login" />
      }
    />
    <Redirect to="/login" />
  </Switch>
);

export default Routes;
