import styled from "styled-components";
import NavBar from "../components/NavBar";
import error from "../../public/images/error.svg";
const Error = () => {
  return (
    <Wrapper>
      <NavBar showLoginButton={true} showRegisterButton={true} />
      <div className="container">
        <p>Something went Wrong!</p>
        <img src={error} alt="error" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
  .container {
    margin: auto;
    margin-top: 2rem;
    width: 30rem;
    /* width: fit-content; */
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  img {
    /* width: 20rem; */
  }
  p {
    font-size: 1.25rem;
  }
`;

export default Error;
