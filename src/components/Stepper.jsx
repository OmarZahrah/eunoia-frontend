import styled from "styled-components";
import { useAuthContext } from "../context/AuthContext";

const Stepper = () => {
  const { steps, currentStep } = useAuthContext();
  return (
    <Wrapper>
      {steps.map((step, i) => {
        return (
          <div className="step" key={step.stepNum}>
            <span className="step-title">{step.stepTitle}</span>
            <span
              className={currentStep >= i + 1 ? "step-num active" : "step-num"}
            >
              {step.stepNum}
            </span>
          </div>
        );
      })}
    </Wrapper>
  );
};
export default Stepper;

const Wrapper = styled.div`
  padding: 0.5rem 2rem;
  height: 25rem;
  /* border-right: 2px solid #ddd; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* position: sticky; */
  /* top: 5rem; */
  position: relative;
  .step {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    position: relative;
  }
  .step-num {
    width: 35px;
    height: 35px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--color-brand-pink);
    color: var(--color-brand-pink);
    border-radius: 50%;
    font-family: var(--font-sec);
    font-size: 1.4rem;
    z-index: 10;
    position: relative;
  }
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: calc(100% - 34px);
    background-color: var(--color-brand-pink);
    /* top: 100%; */
    top: 17px;
    /* right: 50%; */
    right: calc(2rem + 17px);
  }
  .step:last-of-type .step-num::after {
    height: 0;
  }

  .active {
    background-color: var(--color-brand-pink);
    color: #fff;
  }
  .step-title {
    color: var(--color-black-light);
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    padding: 0.5rem 1rem 0.5rem 0;
    .step-title {
      font-size: 0.9rem;
    }
    &::after {
      right: calc(2rem + 1px);
    }
    .step:first-of-type {
      align-items: start;
    }
    .step:last-of-type {
      align-items: end;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    height: 20%;
    padding: 0.5rem 2rem;

    &:after {
      height: 3px;
      width: calc(100% - 8rem);
      top: calc(0.5rem + 17px);
      /* right: 50%; */
      right: 0;
      transform: translateX(-4rem);
    }
    .step {
      flex-direction: column;
      justify-content: flex-start;
    }

    .step-num {
      order: 1;
    }
    .step-title {
      order: 2;
    }
    .step-title {
      margin-top: 10px;
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.5rem 1rem;
    &::after {
      width: calc(100% - 4rem);
      transform: translateX(-2rem);
    }

    .step:first-of-type {
      align-items: start;
    }
    .step:last-of-type {
      align-items: end;
    }
  }
`;
