import styled from "styled-components";
import Colors from "../../consts/Colors";

const { blue } = Colors;
const ListItem = styled.li`
  position: relative;
  list-style-type: none;
  padding-left: 22px;
  :before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 7px;
    width: 5px;
    height: 11px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    border-color: ${blue};
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
`;

export default ListItem;
