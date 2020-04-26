import styled from "styled-components";
import Colors from "../../consts/Colors";

const { red } = Colors;
const Link = styled.a`
  color: ${red};
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.8;
  }
`;

export default Link;
