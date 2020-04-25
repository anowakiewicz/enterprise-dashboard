import styled from "styled-components";
import IconWrap from "./IconWrap";

const Link = styled.a`
  width: 80px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #bdc3c6;
  cursor: pointer;
  transition: background-color 0.1s linear;
  border-radius: 4px;
  margin-bottom: 10px;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:last-of-type {
    margin-right: 5px;
  }
  &:hover,
  &:hover ${IconWrap} {
    background-color: #f5f6f6;
  }
`;

export default Link;
