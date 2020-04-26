import React from "react";
import SearchInput from "./SearchInput";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 4.5em;
  padding: 10px;
`;

const Header = ({ type, result }) => {
  const header = (val) => {
    switch (val) {
      case "repos":
        return result.public_repos || 0;
      case "followers":
        return result.followers || 0;
      case "subscriptions":
        return result.length;
      default:
        return null;
    }
  };

  return type === "search" ? (
    <SearchInput />
  ) : (
    <Wrapper>{header(type)}</Wrapper>
  );
};

export default Header;
