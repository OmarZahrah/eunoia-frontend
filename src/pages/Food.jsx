import styled from "styled-components";
import NavBar from "../components/NavBar";
import Category from "../components/Category";

function Food() {
  return (
    <Wrapper>
      <NavBar />
      <Category title="Food" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
`;

export default Food;
