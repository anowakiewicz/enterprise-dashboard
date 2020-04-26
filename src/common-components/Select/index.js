import styled from "styled-components";
import Colors from "../../consts/Colors";

const { grey_light } = Colors;

const Select = styled.select`
  width: 50%;
  height: 35px;
  background: ${grey_light};
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  outline: none;
`;

export default Select;
