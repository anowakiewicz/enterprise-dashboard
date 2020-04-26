import styled from "styled-components";

const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  min-height: ${(props) => props.height};
  box-shadow: 7px 6px 3px -2px rgba(233, 233, 233, 1);
  margin-top: 10px;
  border: solid 1px #e3e4e3;

  @media (max-width: 1024px) {
    margin-top: unset;
    margin-bottom: ${(props) => props.marginBottom || "unset"};
    min-height: 176px;
    height: auto;
  }
`;

export default ComponentWrapper;
