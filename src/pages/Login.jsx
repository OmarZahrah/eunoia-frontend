// import customFetch from "../utils/customFetch";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import styled from "styled-components";
import pana from "../images/pana.png";
import { LuUser } from "react-icons/lu";
import { VscLock } from "react-icons/vsc";
import WelcomeSection from "../components/WelcomeSection";

const Login = () => {
  return (
    <Wrapper>
      <div>
        <section className="left">
          <h2>Log in</h2>
          <header>
            <span className="login-text">
              Log in with your data you entered during your registration
            </span>
            <div className="input-with-icon">
              <LuUser className="icon" />
              <FormInput required type="text" placeholder="Email" />
              <VscLock className="icon" />
              <FormInput required type="password" placeholder="Password" />
            </div>
          </header>
          <footer>
            <a className="text" href="#">
              Forgot your password ?
            </a>
            <Button
              className="button"
              size="medium"
              // onClick={}
            >
              Log In
            </Button>
            <p className="text">
              Not a user ?{" "}
              <a className="create-link" href="#">
                Create account
              </a>
            </p>
          </footer>
        </section>
        <WelcomeSection
          img={pana}
          welcomeText={"Nice to see you again"}
          header={"Welcome Back!"}
          style={{ width: "34.375rem", height: "21.875rem" }}
        />
      </div>
    </Wrapper>
  );
};
export default Login;

const Wrapper = styled.div`
  .input-with-icon ::before {
    content: "";
    position: absolute;
    width: 0.063rem;
    height: 1.563rem;
    border: 0.063rem solid grey;
    margin: 2.5rem 0 1.25rem 2.188rem;
  }

  .input-with-icon input {
    padding: 0 0 0.625rem 2.813rem;
    margin: 1.875rem 0 1.25rem 0;
    height: 2.813rem;
    font-family: Koh Santepheap;
    font-size: 0.938rem;
    width: 29.375rem;
    /* width: 433px; */
    /* width: 550px; */
  }

  .icon {
    position: absolute;
    margin: 2.313rem 0;
    padding: 0 0.188rem 0 0.375rem;
    width: 1.875rem;
    height: 2.5rem;
  }
  .button {
    font-size: 1.25rem;
    width: 29.375rem;
    /* width: 550px; */
    /* old size 432px */
  }

  header {
    /* margin-left: 168px; */
    margin-left: 9.25rem;
  }

  .login-text {
    color: rgba(0, 0, 0, 0.5);
    font-family: Literata;
    font-size: 1.063rem;
    font-weight: 500;
    letter-spacing: -0.026rem;
    display: block;
    padding: 1.25rem 0;
  }

  .text {
    color: var(--text, rgba(0, 0, 0, 0.6));
    font-family: Koh Santepheap;
    font-size: 0.938rem;
    letter-spacing: 0.063rem;
    /* padding: 3.75rem 0 0.625rem 0; */
    margin: 3.75rem 0 0.9rem 0;
    display: block;
  }

  footer {
    text-align: center;
  }

  h2 {
    color: rgba(0, 0, 0, 0.65);
    font-family: Literata;
    font-size: 1.875rem;
    font-weight: 800;
    margin-left: 9.25rem;
    /* margin-left: 168px; */
    /* margin-left: 108px; */
  }

  section {
    width: 50%;
    float: left;
    padding-top: 3.75rem;
  }

  .left {
    height: 100vh;
  }

  .create-link {
    color: var(--green, #74ab70) !important;
    font-weight: 550;
  }
`;
