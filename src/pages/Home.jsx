import NavBar from "../components/NavBar";

import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
`;
export default Home;
