import { Switch, Route, Redirect } from "react-router-dom";
import routes, { protectedRoutes } from "./routes";

const getRoutes = () =>
  routes.map((route, index) => (
    <Route key={index} exact path={route.path} component={route.component} />
  ));

const getProtectedRoutes = (user) =>
  protectedRoutes.map((route) => {
    const CustomComponent = route.component; //Because Component name always start with Uppercase.
    return (
      <Route
        exact
        path={route.path}
        render={(props) =>
          user ? <CustomComponent {...props} /> : <Redirect to="/login" />
        }
      />
    );
  });

const App = () => {
  const user = null;
  return (
    <Switch>
      {getRoutes()}
      {getProtectedRoutes(user)}
      <Redirect to="/login" />
    </Switch>
  );
};

export default App;
