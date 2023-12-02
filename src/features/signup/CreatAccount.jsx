import styled from "styled-components";
import logo from "../../../public/logo-1.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <Wrapper>
      <div className="child">
        <img src={logo} />
        <div className="buttons">
          <p> Create account as a</p>
          <Link to="/signup/provider">
            <Button size="medium" className="provbutton">
              Service Provider
            </Button>
          </Link>
          <Link to="/signup/user">
            <Button
              className="userbutton"
              size="medium"
              background="transparent"
              bo
            >
              User
            </Button>
          </Link>
        </div>
        <footer>
          Already have an account ?<Link to="/login"> Login </Link>
        </footer>
      </div>
    </Wrapper>
  );
};

export default CreateAccount;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--beige, #fef9f0);
  height: 100vh;

  /* .container {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .child {
    /* width: 75rem; */
    /* height: 37.5rem; */
    width: 80%;
    height: 80%;
    flex-shrink: 0;
    background: #ffffffe5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 3rem 0;
  }

  img {
    width: 2.625rem;
    height: 2.813rem;
  }

  p {
    color: var(--text, rgba(0, 0, 0, 0.6));
    text-align: center;
    font-family: Koh Santepheap;
    font-size: 2.25rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.00625rem;
    /* margin-top: 3.4375rem; */
    /* margin-bottom: 1.25rem; */
  }
  .buttons {
    gap: 1rem;
  }
  .buttons p {
    margin-bottom: 1.5rem;
  }
  Button {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 26.875rem;
    height: 2.8125rem;
    padding: 1.25rem 0.625rem;
    gap: 0.625rem;
  }
  .provbutton {
    color: var(--white, #fff);
    font-family: Literata;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.375rem;
    letter-spacing: 0.0625rem;
  }
  .userbutton {
    color: var(--green, #74ab70);
    font-family: Literata;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.375rem;
    letter-spacing: 1px;
    border-radius: 6.25rem;
    border: 2px solid var(--green, #74ab70);
    margin-top: 1.375rem;
  }

  footer {
    color: var(--text, rgba(0, 0, 0, 0.6));
    font-family: Source Serif Pro;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* margin-top: 8.125rem; */

    a {
      color: var(--green, #74ab70);
      font-weight: 700;
    }
  }
`;
