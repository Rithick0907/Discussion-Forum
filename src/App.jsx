import Routes from "./Routes";
import { useSelector } from "react-redux";
import { userSelector } from "./store/auth";

const App = () => {
  const user = useSelector(userSelector);
  return <Routes user={user} />;
};

export default App;
