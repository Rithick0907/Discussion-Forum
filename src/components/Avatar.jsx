import { MdAccountCircle } from "react-icons/md";
import cn from "classnames";

const Avatar = ({ size, src, ...otherAttributes }) =>
  src ? (
    <div className={cn("avatar", otherAttributes.className)}>
      <img className="avatar__img" src={src} alt="user avatar" />
    </div>
  ) : (
    <MdAccountCircle size={size} />
  );

export default Avatar;
