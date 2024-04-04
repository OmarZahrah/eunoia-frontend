import NavBar from "../components/NavBar";
import styled from "styled-components";
import SearchResults from "../components/SearchResults";
import { FaSort, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import Category from "../components/Category";

function Search() {
  return (
    <Wrapper>
      <NavBar />
      <Category />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
`;

export default Search;
