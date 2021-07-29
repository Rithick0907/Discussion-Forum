import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { auth } from "../service/firebase.utils";
import { resetPosts } from "../store/postSlice";
import { useDispatch } from "react-redux";

const renderTooltip = (props) => <Tooltip {...props}>Logout</Tooltip>;

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth.signOut();
    dispatch(resetPosts());
  };

  return (
    <NavLink onClick={handleLogout} to="/login">
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
        content="Logout"
      >
        <IoLogOutOutline size="3rem" />
      </OverlayTrigger>
    </NavLink>
  );
};

export default Logout;
