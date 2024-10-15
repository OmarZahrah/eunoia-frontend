import styled from "styled-components";
import error from "../../public/images/error.svg";
const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>This Page Not Found!</p>
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

    width: 30rem;
    padding: 2rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  p {
    color: var(--color-black-mid);
    font-size: 1.25rem;
  }
`;

export default Error;
