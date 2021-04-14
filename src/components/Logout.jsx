import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const renderTooltip = (props) => <Tooltip {...props}>Logout</Tooltip>;

const Logout = () => {
  return (
    <NavLink to="/login">
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
