import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";

const getRoutes = () =>
  routes.map((route, index) => (
    <Route
      key={index}
      exact
      path={route.path}
      render={(props) => <route.component {...props} />}
    />
  ));

const App = () => (
  <Switch>
    {getRoutes()}
    <Redirect to="/login" />
  </Switch>
);

export default App;
