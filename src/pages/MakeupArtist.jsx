import styled from "styled-components";
import NavBar from "../components/NavBar";
import Category from "../components/Category";

function MakeupArtist() {
  return (
    <Wrapper>
      <NavBar />
      <Category title="MakeUp Artist" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
`;

export default MakeupArtist;
