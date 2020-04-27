import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 0.6;
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export default Overlay;
