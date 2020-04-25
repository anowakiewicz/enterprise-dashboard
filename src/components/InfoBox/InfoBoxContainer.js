import styled from "styled-components";

const InfoBoxContainer = styled.div`
  flex: 0 1 calc(25% - 10px);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 7px 6px 3px -2px rgba(233, 233, 233, 1);
  background-color: white;
  border: solid 1px #e3e4e3;

  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 5px);
    margin-bottom: 10px;
  }

  @media (max-width: 840px) {
    flex: 0 1 100%;
  }
`;

export default InfoBoxContainer;
