import NavBar from "../components/NavBar";
import styled from "styled-components";

function ForgotPass() {
  return (
    <Wrapper>
      <div>
        <NavBar />
      </div>
    </Wrapper>
  );
}

export default ForgotPass;

const Wrapper = styled.section`
  height: 100vh;
  background: #fef9f0;
`;
