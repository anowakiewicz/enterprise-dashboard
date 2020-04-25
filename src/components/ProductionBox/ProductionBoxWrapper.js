import styled from "styled-components";

const ProductionBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  min-height: 450px;
  box-shadow: 7px 6px 3px -2px rgba(233, 233, 233, 1);
  margin-top: 10px;

  @media (max-width: 1024px) {
    margin-top: unset;
  }
`;

export default ProductionBoxWrapper;
