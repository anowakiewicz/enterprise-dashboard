import React from "react";
import SearchInput from "./SearchInput";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 4.5em;
  padding: 10px;
`;

const Header = ({ type, result }) => {
  return type === "search" ? (
    <SearchInput />
  ) : (
    <Wrapper>{result.length}</Wrapper>
  );
};

export default Header;
