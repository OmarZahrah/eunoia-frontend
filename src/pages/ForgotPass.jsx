import NavBar from "../components/NavBar";
import styled from "styled-components";
import ForgotPassword from "../components/ForgotPassword";


function ForgotPass() {
  return (
    <Wrapper>
     <NavBar/>
        <ForgotPassword/>
    </Wrapper>
  );
}

export default ForgotPass;

const Wrapper = styled.section`
  height: 100vh;
  background: #fef9f0;
`;
