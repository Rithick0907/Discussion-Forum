import { MdAccountCircle } from "react-icons/md";
import styled from "styled-components";

const Image = styled.img`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border-radius: 100%;
`;

const Avatar = ({ size, src }) =>
  src ? <Image src={src} size={size} /> : <MdAccountCircle size={size} />;

export default Avatar;
