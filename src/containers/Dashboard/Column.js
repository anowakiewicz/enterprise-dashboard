import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  &:not(:last-of-type) {
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    flex: 0 1 100%;
    &:not(:last-of-type) {
      margin-right: unset;
      margin-bottom: 10px;
    }
  }
`;

export default Column;
