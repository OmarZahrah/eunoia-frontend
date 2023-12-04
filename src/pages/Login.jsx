// import customFetch from "../utils/customFetch";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import styled from "styled-components";
import pana from "../images/pana.png";
import { LuUser } from "react-icons/lu";
import { VscLock } from "react-icons/vsc";
import WelcomeSection from "../components/WelcomeSection";
import { Link } from "react-router-dom";
// import customFetch from "../utils/customFetch";
// import { useAuthContext } from "../context/AuthContext";
// import { login } from "../services/Auth";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { showPassword } = useAuthContext();

  const onSubmit = async (formData) => {
    // console.log(login(formData));
    console.log(formData);
  };
  return (
    <Wrapper>
      <div className="left">
        <form className="left-container" onSubmit={handleSubmit(onSubmit)}>
          <header>
            <h2>Log in</h2>
            <span className="login-text">
              Log in with your data you entered during your registration
            </span>
          </header>

          <div className="inputs">
            <FormInput icon={<LuUser className="icon" />}>
              <Input
                type="email"
                id="email"
                placeholder="example@example.com"
                {...register("email", {
                  required: "this field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
            </FormInput>
            <FormInput type="password" icon={<VscLock className="icon" />}>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Your Password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
              />
            </FormInput>
          </div>

          <footer>
            <Link className="text" to="">
              Forgot your password ?
            </Link>
            <Button size="large" type="submit">
              Log In
            </Button>
            <p className="text">
              Not a user ?{" "}
              <Link
                to="/signup/user
               "
                className="create-link"
              >
                Create account
              </Link>
            </p>
          </footer>
        </form>
      </div>
      <WelcomeSection
        className="right"
        img={pana}
        welcomeText={"Nice to see you again"}
        header={"Welcome Back!"}
        imgsize="70%"
      />
    </Wrapper>
  );
};
export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    /* height: 100vh; */
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .left-container {
    width: 30rem;
    height: 100vh;
  }
  header {
    /* width: 30rem; */
    width: 100%;
  }
  header h2 {
    color: rgba(0, 0, 0, 0.65);
    font-family: "Literata";
    font-size: 1.875rem;
    font-weight: 800;
    /* margin-left: 0; */
    display: inline-block;
    margin-right: auto;
    padding: 3.75rem 0 2.45rem 0;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 2rem;
  }
  .input {
    position: relative;
  }

  .inputs input {
    padding: 0 0 0.625rem 2.813rem;
    height: 2.813rem;
    font-family: "Koh Santepheap";
    font-size: 0.938rem;
    /* width: 30rem; */
    width: 100%;
  }

  /* .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    padding-right: 5px;
    border-right: 1px solid #333;
  } */
  footer button {
    font-size: 1.25rem;
    /* width: 30rem; */
    width: 100%;
    margin-bottom: 2rem;
  }

  .login-text {
    color: rgba(0, 0, 0, 0.5);
    font-family: Literata;
    font-size: 1.063rem;
    font-weight: 500;
    letter-spacing: -0.026rem;
    display: block;
    padding-bottom: 3rem;
  }

  .text {
    color: var(--text, rgba(0, 0, 0, 0.6));
    font-family: Koh Santepheap;
    font-size: 0.938rem;
    letter-spacing: 0.063rem;
    /* padding: 3.75rem 0 0.625rem 0; */
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    display: block;
  }

  footer {
    text-align: center;
  }

  .right {
    width: 50%;
    height: 100vh;
  }

  .create-link {
    color: var(--green, #74ab70);
    font-weight: 550;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    footer button {
      margin-bottom: 0.7rem;
    }
    .login-text {
      padding-bottom: 2rem;
    }
    .inputs {
      gap: 2rem;
      padding-bottom: 0.5rem;
    }
    h1 {
      padding-bottom: 3rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .left-container {
      width: 25rem;
      height: 100vh;
    }
    h1 {
      font-size: 2.5rem;
      letter-spacing: 0.2rem;
    }

    img {
      width: 80%;
    }

    .inputs {
      gap: 1rem;
      /* padding-bottom: 0.5rem; */
    }
    .again {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 52.5em) {
    .left-container {
      width: 20rem;
      height: 100vh;
    }
    header h2 {
      font-size: 1.6rem;
      padding: 3.75rem 0 1.3rem 0;
    }

    .login-text {
      font-size: 0.9rem;
      padding-bottom: 2.1rem;
    }

    .inputs input {
      padding: 0 0 1.2rem 2.3rem;
      height: 2.3rem;
      font-size: 0.8rem;
    }
    .icon {
      width: 27px;
      transform: translateY(-60%);
    }
    footer button {
      font-size: 1rem;
    }
    .text {
      font-size: 0.8rem;
      letter-spacing: 0.063rem;
    }
    .again {
      font-size: 1.5rem;
    }
    img {
      width: 90%;
      padding-top: 1.2rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    footer {
      text-align: center;
    } /////mlhash lazma
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .left-container {
      width: 17rem;
      height: 100vh;
    }

    header h2 {
      font-size: 1.6rem;
      padding: 3.75rem 0 1.3rem 0;
    }

    .login-text {
      font-size: 0.8rem;
      padding-bottom: 2.1rem;
    }

    .inputs input {
      padding: 0 0 1.2rem 2.3rem;
      height: 2rem;
      font-size: 0.75rem;
    }
    .icon {
      width: 27px;
      transform: translateY(-60%);
    }
    footer button {
      font-size: 1rem;
    }
    .text {
      font-size: 0.8rem;
      letter-spacing: 0.063rem;
    }
    h1 {
      font-size: 2.2rem;
    }

    .again {
      font-size: 1.5rem;
    }

    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .left {
      width: 100vh;
    }
    .left-container {
      width: 80%;
    }
    .right {
      display: none;
    }
  }
`;
