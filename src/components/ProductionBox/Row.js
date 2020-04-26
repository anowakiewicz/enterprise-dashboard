import styled from "styled-components";

const Row = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
`;

export default Row;
