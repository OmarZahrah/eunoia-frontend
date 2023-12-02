import styled from "styled-components";
import FormInput from "../../components/FormInput";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";

const Step1 = () => {
  const { register, getValues, errors } = useAuthContext();

  return (
    <Wrapper>
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
        <FormInput label="password" required error={errors?.password?.message}>
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
    </Wrapper>
  );
};
export default Step1;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;

  .step-title {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: capitalize;
    font-family: var(--font-main);
    color: var(--color-black-mid);
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
