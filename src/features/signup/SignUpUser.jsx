// import { Outlet } from "react-router-dom";
import pana2 from "../../images/pana2.png";
import WelcomeSection from "../../components/WelcomeSection";
import styled from "styled-components";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";

const SignUpUser = () => {
  return (
    <Wrapper>
      <div>
        <section className="left">
          <h2>Register</h2>
          <header>
            <div className="inputs">
              <FormInput
                label="name"
                type="text"
                required
                placeholder="Your Full Name"
              />
              <FormInput
                label="email"
                type="email"
                required
                placeholder="example@example.com"
              />
              <FormInput
                label="password"
                type="password"
                required
                placeholder="Your Password"
              />
              <FormInput
                label="confirm password"
                type="password"
                required
                placeholder="Your Password"
              />
            </div>
          </header>
          <footer>
            <Button
              className="button"
              size="medium"
              // onClick={}
            >
              Create Account
            </Button>
            <p className="text">
              Already have an account ? <a href="#">Login</a>
            </p>
          </footer>
        </section>
        <WelcomeSection
          img={pana2}
          welcomeText={"Join our family"}
          header={"Hello, friend!"}
          style={{ width: "25rem", height: "21.875rem" }}
        />
      </div>
    </Wrapper>
  );
};
export default SignUpUser;

const Wrapper = styled.div`
  .inputs input {
    margin: 0.313rem 0 0.188rem 0;
    font-family: Koh Santepheap;
    font-size: 0.938rem;
    width: 29.375rem;
    /* width: 550px; */
  }
  .inputs label {
    color: rgba(0, 0, 0, 0.65);
    margin-top: 1.875rem;
  }

  header {
    /* margin-left: 108px; */
    margin-left: 9.25rem;
  }

  .text {
    color: #55665e;
    text-align: center;
    font-family: Source Serif Pro;
    font-size: 1.063rem;
    padding-top: 0.938rem;
  }

  .button {
    margin-top: 2.5rem;
    padding: 0.625rem;
    font-family: Koh Santepheap;
    font-size: 1.25rem;
    /* width: 29.375rem; */
    /* width: 550px; */
  }

  footer {
    text-align: center;
  }

  h2 {
    color: rgba(0, 0, 0, 0.65);
    font-family: Literata;
    font-size: 1.875rem;
    font-weight: 800;
    /* margin-left: 108px; */
    margin-left: 9.25rem;
  }

  section {
    width: 50%;
    float: left;
    padding-top: 3.75rem;
  }

  .left {
    height: 100vh;
  }

  a {
    color: var(--green, #74ab70) !important;
    font-weight: 550;
    /* font-family: Source Serif Pro !important; */
  }
`;
