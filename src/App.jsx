import { login, logout, userSelector } from "./store/auth";
import { useDispatch, useSelector } from "react-redux";

import Routes from "./Routes";
import { auth } from "./service/firebase.utils";
import { useEffect } from "react";

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

  return <Routes user={user} />;
};

export default App;
