// import customFetch from "../utils/customFetch";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import styled from "styled-components";
import pana from "../images/pana.png";
import { LuUser } from "react-icons/lu";
import { VscLock } from "react-icons/vsc";

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
              <FormInput type="text" placeholder="Email" name="email" />
              <VscLock className="icon" />
              <FormInput
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
          </header>
          <footer>
            <p className="text">Forgot your password ?</p>
            <Button size="medium">Log In</Button>
            <p className="text">
              Not a user ? <a href="#">Create account</a>
            </p>
          </footer>
        </section>
        <section className="right">
          <p className="again">Nice to see you again</p>
          <h1>Welcome Back!</h1>
          <img src={pana} />
        </section>
      </div>
    </Wrapper>
  );
};
export default Login;

const Wrapper = styled.div`
  .input-with-icon ::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 25px;
    border: 1px solid grey;
    margin: 40px 0px 20px 35px;
  }

  .input-with-icon input {
    padding: 0px 0px 10px 45px;
    margin: 30px 0px 20px 0px;
    height: 45px;
    font-family: Koh Santepheap;
    font-size: 15px;
  }

  .icon {
    position: absolute;
    margin: 37px 0px;
    padding: 0 3px 0 6px;
    width: 30px;
    height: 40px;
  }

  header {
    margin-left: 180px;
  }

  .login-text {
    color: rgba(0, 0, 0, 0.5);
    font-family: Literata;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.408px;
    display: block;
    padding: 20px 0px;
  }

  .text {
    color: var(--text, rgba(0, 0, 0, 0.6));
    font-family: Koh Santepheap;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
    padding: 60px 0px 25px 0px;
  }

  footer {
    text-align: center;
  }

  h2 {
    color: rgba(0, 0, 0, 0.65);
    font-family: Literata;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.408px;
    margin-left: 180px;
    display: inline;
  }

  section {
    width: 50%;
    float: left;
    padding-top: 60px;
  }

  .right {
    border-radius: 90px 0px 0px 80px;
    background: var(--beige, #fef9f0);
    height: 100vh;
    text-align: center;
  }

  .left {
    height: 100vh;
  }
  .again {
    color: var(--text, rgba(0, 0, 0, 0.6));
    text-align: center;
    font-family: Literata;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.408px;
  }

  h1 {
    color: var(--pink, #f5b9a7);
    font-family: Literata;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 5px;
    padding-bottom: 60px;
  }

  img {
    width: 600px;
    height: 400px;
  }

  a {
    color: var(--green, #74ab70);
    font-weight: 550;
  }
`;
