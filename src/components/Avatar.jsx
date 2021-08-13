import { MdAccountCircle } from "react-icons/md";

const Avatar = ({ size, src }) =>
  src ? (
    <div className="avatar">
      <img className="avatar__img" src={src} alt="user avatar" />
    </div>
  ) : (
    <MdAccountCircle size={size} />
  );

export default Avatar;
