import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

const App = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Registration />
    </Route>
    <Route path="/main">
      <Landing />
    </Route>
    <Redirect to="/login" />
  </Switch>
);

export default App;
