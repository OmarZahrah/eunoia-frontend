import styled from "styled-components";
import logo from "../../../public/logo-1.png";
import Button from "../../components/Button";

const CreateAccount = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="child">
          <div className="childcontent">
            <img src={logo} />
            <p> Create account as a</p>
            <Button size="medium"
             className="provbutton">
              Service Provider
            </Button>
            <Button
              className="userbutton"
              size="medium"
              background="transparent"
              bo
            >
              User
            </Button>
            <footer>
              Already have an account ?<a href="#"> Login </a>
            </footer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateAccount;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: var(--beige, #fef9f0);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .child {
    width: 75rem;
    height: 37.5rem;
    flex-shrink: 0;
    background: #ffffffe5;
  }

  .childcontent {
    text-align: center;
    padding: 6.25rem;
    display: block;
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
    margin-top: 3.4375rem;
    margin-bottom: 1.25rem;
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
    margin-top: 8.125rem;

    a {
      color: var(--green, #74ab70);
      font-weight: 700;
    }
  }
`;
