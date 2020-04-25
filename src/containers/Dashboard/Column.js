import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex: 0 1 100%;
  }
`;

export default Column;
