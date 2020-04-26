import styled from "styled-components";
import Colors from "../../consts/Colors";

const { blue } = Colors;
const Link = styled.a`
  position: relative;
  top: 6px;
  left: 7px;
  color: ${blue};
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.8;
  }
`;

export default Link;
