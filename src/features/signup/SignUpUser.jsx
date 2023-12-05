// import { Outlet } from "react-router-dom";
import pana2 from "../../images/pana2.png";
import WelcomeSection from "../../components/WelcomeSection";
import styled from "styled-components";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
// import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { useSignup } from "./useSignUp";

const SignUpUser = () => {
  // const { handleSubmit } = useAuthContext();
  const { register, getValues, handleSubmit, errors } = useAuthContext();
  const { showPassword } = useAuthContext();
  const { signup, isLoading } = useSignup();
  const onSubmit = async (data) => {
    signup(data);
    // console.log("data");
    // console.log(await getCurrentUser());
  };
  return (
    <Wrapper>
      <section className="left">
        <form className="left-container" onSubmit={handleSubmit(onSubmit)}>
          <header>
            <h2>Register</h2>
          </header>
          <div className="inputs">
            <FormInput label="name" required error={errors?.fullname?.message}>
              <Input
                type="text"
                id="fullname"
                placeholder="Your Full Name"
                {...register("fullname", {
                  required: "this field is required",
                })}
              />
            </FormInput>
            <FormInput label="email" required error={errors?.email?.message}>
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
            <FormInput
              label="password"
              required
              error={errors?.password?.message}
              type="password"
            >
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
            <FormInput
              type="password"
              label="confirm password"
              required
              error={errors?.passwordConfirm?.message}
            >
              <Input
                type={showPassword ? "text" : "password"}
                id="passwordConfirm"
                placeholder="Confirm Your Password"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
            </FormInput>
          </div>
          <footer>
            <Button
              className="button"
              size="large"
              type="submit"
              // onClick={}
            >
              Create Account
            </Button>
            <p className="text">
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </footer>
        </form>
      </section>
      <WelcomeSection
        img={pana2}
        className="right"
        welcomeText={"Join our family"}
        header={"Hello, friend!"}
        imgsize="50%"
      />
    </Wrapper>
  );
};
export default SignUpUser;

const Wrapper = styled.div`
  // height: 100vh;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 20px;
  .left {
    width: 50%;
    /* padding: 0 3rem; */
    /* padding-left: 5rem; */
    /* align-items: center; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .left-container {
    width: 30rem;
    display: flex;
    flex-direction: column;
    /* gap: 4.35rem; */
  }
  header {
    /* width: 30rem; */
    width: 100%;
    /* margin-right: auto; */
  }
  header h2 {
    color: rgba(0, 0, 0, 0.65);
    font-size: 1.875rem;
    font-weight: 800;
    /* margin-bottom: 4rem; */
    padding-bottom: 2rem;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    /* width: 100%; */
    /* align-items: center; */
  }
  .inputs input {
    width: 100%;
    /* width: 30rem; */
  }
  .right {
    width: 50%;
    height: 100vh;
  }
  footer {
    /* display: flex; */
    flex-direction: column;
    gap: 0px;
    align-items: center;
  }
  footer button {
    /* width: 30rem; */
    width: 100%;
    margin-top: 5rem;
    font-size: 1.25rem;
  }
  footer p {
    text-align: center;
    color: var(--text, rgba(0, 0, 0, 0.6));
    font-family: Koh Santepheap;
    font-size: 1rem;
    letter-spacing: 0.063rem;
    margin-top: 1rem;
  }

  a {
    color: var(--green, #74ab70) !important;
    font-weight: 550;
    /* font-family: Source Serif Pro !important; */
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .inputs {
      gap: 1rem;
    }
    footer button {
      margin-top: 3rem;
      font-size: 1.15rem;
    }
    h1 {
      font-size: 3rem;
      padding-bottom: 2.9rem;
    }
    .again {
      font-size: 1.8rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    gap: 15px;

    .left-container {
      width: 25rem;
      height: 100vh;
    }
    h2 {
      margin-top: 3rem;
    }
    h1 {
      font-size: 2.5rem;
      letter-spacing: 0.2rem;
      padding-bottom: 3.1rem;
    }
    .again {
      font-size: 1.7rem;
      /* padding-bottom: 0.5rem; */
    }
    img {
      width: 60%;
    }
  }

  @media only screen and (max-width: 52.5em) {
    .left-container {
      width: 22rem;
      height: 100vh;
    }
    h1 {
      font-size: 2.3rem;
      letter-spacing: 0.2rem;
      padding-bottom: 3.75rem;
    }

    img {
      width: 70%;
    }

    .inputs {
      gap: 0.6rem;
      /* padding-bottom: 0.5rem; */
    }
    .again {
      font-size: 1.5rem;
      padding-bottom: 0.5rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    a {
      color: var(--green, #74ab70) !important; //mlhash lazma
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .left-container {
      width: 17rem;
      height: 100vh;
    }
    h2 {
      margin-top: 3rem;
    }

    .inputs input {
      font-size: 0.75rem;
    }
    .inputs label {
      font-size: 0.9rem;
    }
    footer button {
      margin-top: 2.5rem;
      font-size: 1rem;
    }

    footer p {
      font-size: 0.85rem;
      letter-spacing: 0.053rem;
    }

    h1 {
      padding-bottom: 4rem;
    }
    img {
      width: 70%;
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
