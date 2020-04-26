import styled from "styled-components";
import Colors from "../../consts/Colors";

const { grey_light } = Colors;

const GreyBar = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${grey_light};
`;

export default GreyBar;
