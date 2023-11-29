import styled from "styled-components";
import FormInput from "../../components/FormInput";

const Step1 = () => {
  return (
    <Wrapper>
      {/* <header>
        <h2 className="step-title">Personal Details</h2>
      </header> */}
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
