import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import routes, { protectedRoutes } from "./routes";
import { auth } from "./service/firebase.utils";
import { login, logout, userSelector } from "./store/auth";

const getRoutes = () =>
  routes.map((route, index) => (
    <Route key={index} exact path={route.path} component={route.component} />
  ));

const getProtectedRoutes = (user) =>
  protectedRoutes.map((route, index) => {
    const CustomComponent = route.component; //Because Component name always start with Uppercase.
    return (
      <Route
        key={index}
        exact
        path={route.path}
        render={(props) =>
          user ? <CustomComponent {...props} /> : <Redirect to="/login" />
        }
      />
    );
  });

const App = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            email: authUser.email,
            name: authUser.displayName,
            uid: authUser.uid,
            photo: authUser.photoURL,
          })
        );
      } else dispatch(logout());
    });
  }, [dispatch]);

  return (
    <Switch>
      {getRoutes()}
      {getProtectedRoutes(user)}
      <Redirect to="/login" />
    </Switch>
  );
};

export default App;
