import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { device } from "../assets/styles/breakpoints";
import { useLogin } from "../features/Auth/useLogin";

import loginImage from "/images/auth/login.png";
import { LuUser } from "react-icons/lu";
import { VscLock } from "react-icons/vsc";

import AuthForm from "../components/Auth/AuthForm";
import PhotoComponent from "../components/Auth/PhotoComponent";
import Button from "../components/Button";
import Input from "../components/Input";
import FormInput from "../components/FormInput";

const Login = () => {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const { login, isLoading } = useLogin();

  const onSubmit = async (formData) => {
    login(formData);
  };

  return (
    <Wrapper className="login">
      <AuthForm title="Login">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputsContainer>
            <FormInput
              icon={<LuUser className="icon" />}
              error={errors?.email?.message}
            >
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
              type="password"
              icon={<VscLock className="icon" />}
              error={errors?.password?.message}
            >
              <Input
                type="password"
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
          </InputsContainer>
          <Bottom>
            <Link className="text" to="/forgotpassword">
              Forgot your password ?
            </Link>
            <Button size="large" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
            <p className="text">
              Not a user ?{" "}
              <Link to="/signup/user" className="create-link">
                Create account
              </Link>
            </p>
          </Bottom>
        </Form>
      </AuthForm>
      <PhotoComponent
        heading="Welcome Back!"
        text="Nice to see you again"
        image={loginImage}
      />
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Form = styled.form`
  width: 80%;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const Bottom = styled.footer`
  text-align: center;

  .text {
    color: var(--color-black-light);
    font-size: 0.938rem;
    letter-spacing: 0.063rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    display: block;
  }

  .create-link {
    color: var(--color-brand-green);
    font-weight: 550;
  }
`;

// Media queries can be added to the Wrapper or styled components as needed.
