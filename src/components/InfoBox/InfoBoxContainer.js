import styled from "styled-components";
import InnerWrapper from "./InnerWrapper";
import GreyBar from "./GreyBar";

const InfoBoxContainer = styled.div`
  min-height: 200px;
  max-height: 200px;
  flex: 0 1 calc(25% - 10px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 7px 6px 3px -2px rgba(233, 233, 233, 1);
  background-color: white;
  border: solid 1px #e3e4e3;
  &:first-of-type {
    & ${InnerWrapper} {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    & ${GreyBar} {
      justify-content: space-between;
    }
  }

  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 5px);
    margin-bottom: 10px;
  }

  @media (max-width: 840px) {
    flex: 0 1 100%;
  }
`;

export default InfoBoxContainer;
