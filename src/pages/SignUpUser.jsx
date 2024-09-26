import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../features/Auth/useSignUp";

import registerPhoto from "/images/auth/register.png";
import AuthForm from "../components/Auth/AuthForm";
import PhotoComponent from "../components/Auth/PhotoComponent";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import Input from "../components/Input";

const SignUpUser = () => {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  const onSubmit = (data) => {
    const finalData = { ...data, role: "user" };
    signup(finalData);
  };
  return (
    <Wrapper>
      <AuthForm title="Register">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputsContainer>
            <FormInput label="name" required error={errors?.fullname?.message}>
              <Input
                type="text"
                id="fullname"
                placeholder="Your Full Name"
                {...register("name", {
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
            <FormInput
              type="password"
              label="confirm password"
              required
              error={errors?.passwordConfirm?.message}
            >
              <Input
                type="password"
                id="passwordConfirm"
                placeholder="Confirm Your Password"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
            </FormInput>
          </InputsContainer>
          <Bottom>
            <Button
              className="button"
              size="large"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : " Create Account"}
            </Button>
            <p className="text">
              Already have an account ?{" "}
              <Link to="/login" className="login-link">
                Login
              </Link>
            </p>
          </Bottom>
        </Form>
      </AuthForm>
      <PhotoComponent
        heading="Hello, Friend!"
        text="Join our family"
        image={registerPhoto}
      />
    </Wrapper>
  );
};
export default SignUpUser;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;
const Form = styled.form`
  width: 90%;
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
  .login-link {
    color: var(--color-brand-green);
    font-weight: 550;
  }
`;
