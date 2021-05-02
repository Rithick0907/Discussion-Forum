import { MdAccountCircle } from "react-icons/md";
import { Image } from "../styles/Avatar.styles";

const Avatar = ({ size, src }) =>
  src ? <Image src={src} size={size} /> : <MdAccountCircle size={size} />;

export default Avatar;
