import styled from "styled-components";

const OptionItem = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;

  background-color: ${(props) =>
    props.active ? "#ddd" : props.selected ? "#eee" : "#fff"};
  &:hover {
    background-color: ${(props) => (props.active ? "#ddd" : "#eee")};
  }

  &:hover {
    background-color: ${(props) => (props.active ? "#ddd" : "#eee")};
  }
`;

export default OptionItem;
