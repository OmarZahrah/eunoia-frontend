// import { Outlet } from "react-router-dom";
import pana2 from "../../images/pana2.png";
import WelcomeSection from "../../components/WelcomeSection";
import styled from "styled-components";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";

const SignUpUser = () => {
  // const { handleSubmit } = useAuthContext();
  const { register, getValues, handleSubmit, errors } = useAuthContext();

  const onSubmit = async (data) => {
    console.log(data);
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
              label="confirm password"
              required
              error={errors?.passwordConfirm?.message}
              type="password"
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
    gap: 3rem;
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
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
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
    gap: 10px;
    align-items: center;
  }
  footer button {
    /* width: 30rem; */
    width: 100%;
  }
  footer p {
    text-align: center;
    margin-top: 1rem;
  }

  a {
    color: var(--green, #74ab70) !important;
    font-weight: 550;
    /* font-family: Source Serif Pro !important; */
  }
`;
