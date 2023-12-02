import styled from "styled-components";
import Stepper from "../../components/Stepper";
import Button from "../../components/Button";
import { useAuthContext } from "../../context/AuthContext";

const SignUpBusiness = () => {
  const { currentStep, setCurrentStep, steps, handleSubmit, onSubmit } =
    useAuthContext();

  const lastStep = currentStep === steps.length;

  const handleNext = () => {
    if (currentStep === steps.length) return;
    setCurrentStep((s) => s + 1);
  };
  const handleBack = () => {
    if (currentStep === 1) return;
    setCurrentStep((s) => s - 1);
  };

  return (
    <Wrapper>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <h2>JOIN US TODAY</h2>
        <hr />
        <Stepper />
        <div className="form-step">
          <header>
            <h2 className="form-title">{steps[currentStep - 1].stepTitle}</h2>
          </header>

          <div className="form-inputs">{steps[currentStep - 1].stepForm}</div>
        </div>
        <div className="buttons">
          {/* <Link to="/signup/create"> */}
          <Button
            type="button"
            onClick={handleBack}
            color="green"
            background="transparent"
            size="small"
          >
            &lt; Back
          </Button>
          {/* </Link> */}

          {!lastStep && (
            <Button
              type="button"
              onClick={handleNext}
              background="green"
              size="small"
            >
              Next &gt;
            </Button>
          )}
          {lastStep && (
            <Button type="submit" background="green" size="small">
              Submit
            </Button>
          )}
        </div>
      </form>
    </Wrapper>
  );
};
export default SignUpBusiness;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100rem;
  margin: auto;
  .container {
    width: 90%;
    /* width: 130rem; */
    min-height: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 20% 1fr;
    /* grid-auto-rows: 20% min-content; */
    /* grid-auto-rows: 20% minmax(min-content, 1fr) 20%; */
    grid-auto-rows: 12.5% minmax(min-content, 1fr) 15%;
  }

  h2 {
    align-self: center;
    justify-self: center;
    font-family: var(--font-sec);
    font-weight: 400;
    color: var(--color-black-mid);
  }
  hr {
    align-self: center;
    width: 80%;
    height: 2px;
  }
  .form-step {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 2rem 0.5rem 2.5rem;
    border-left: 2px solid #ddd;
    min-height: 60%;
  }
  .form-title {
    font-family: var(--font-main);
    font-size: 1.9rem;
    font-weight: 500;
  }
  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2rem;
    justify-content: space-between;
    grid-column: span 2;
  }
`;
