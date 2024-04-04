import styled from "styled-components";
import NavBar from "../components/NavBar";
import Category from "../components/Category";

function HairStylest() {
  return (
    <Wrapper>
      <NavBar />
      <Category title="Hair Stylist" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
`;

export default HairStylest;
