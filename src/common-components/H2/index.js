import styled from "styled-components";

const H2 = styled.h2`
  font-size: ${(props) => (props.large ? "2.5em" : "1.5em")};
  padding: 0 10px;
  margin: ${(props) => (props.noMargin ? "unset" : "10px 0")};
`;

export default H2;
