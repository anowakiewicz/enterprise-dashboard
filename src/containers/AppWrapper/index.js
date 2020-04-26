import styled from "styled-components";
import Colors from "../../consts/Colors";

const { grey_dark } = Colors;
const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  background-color: #f8f8f8;
  color: ${grey_dark};
`;

export default AppWrapper;
