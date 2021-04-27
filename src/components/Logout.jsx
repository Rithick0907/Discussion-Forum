import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { auth } from "../service/firebase.utils";

const renderTooltip = (props) => <Tooltip {...props}>Logout</Tooltip>;

const Logout = () => {
  return (
    <NavLink onClick={() => auth.signOut()} to="/login">
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
