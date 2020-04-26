import styled from "styled-components";

const H2 = styled.h2`
  font-size: ${(props) => (props.large ? "2em" : "1.5em")};
  padding: 0 10px;
  margin: ${(props) => (props.noMargin ? "unset" : "10px 0")};
  @media (max-width: 840px) {
    font-size: ${(props) => (props.large ? "1.8em" : "1.3em")};
  }
`;

export default H2;
