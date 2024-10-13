import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";
import { useAuthContext } from "../context/AuthContext";
import { useAddService } from "../features/serviceProfile/useAddService";
import Stepper from "../components/Stepper";
import Button from "../components/Button";
import Step1 from "../features/Auth/step1";
import Step2 from "../features/Auth/Step2";
import Step3 from "../features/Auth/Step3";
import { useState } from "react";

const steps = [
  { stepNum: 1, stepTitle: "Business Type", stepForm: <Step1 /> },
  { stepNum: 2, stepTitle: "Business Info", stepForm: <Step2 /> },
  { stepNum: 3, stepTitle: "More Details", stepForm: <Step3 /> },
];

const SignUpBusiness = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const lastStep = currentStep === steps.length;
  const { handleSubmit, profilePhotoFile, coverPhotoFile, albumPhotosFile } =
    useAuthContext();

  const { addService, isLoading } = useAddService();

  const handleNext = () => {
    if (!lastStep) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const onSubmit = (formData) => {
    const allData = {
      ...formData,
      avatar: profilePhotoFile || "",
      imageCover: coverPhotoFile || "",
      images: albumPhotosFile || [],
    };

    const filteredData = Object.fromEntries(
      Object.entries(allData).filter(
        ([key, value]) => value && key !== "images"
      )
    );

    const finalData = new FormData();
    Object.keys(filteredData).forEach((key) =>
      finalData.append(key, filteredData[key])
    );

    albumPhotosFile?.forEach((file) => finalData.append("images", file));
    console.log(Object.fromEntries(finalData));
    addService(finalData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>JOIN US TODAY</h2>
      <hr />
      <Stepper steps={steps} currentStep={currentStep} />
      <FormStep>
        <header>
          <h2 className="form-title">{steps[currentStep - 1]?.stepTitle}</h2>
        </header>
        <FormInputs>{steps[currentStep - 1]?.stepForm}</FormInputs>
      </FormStep>
      <Buttons className="buttons">
        <Button
          type="button"
          onClick={handleBack}
          color="green"
          background="transparent"
          size="small"
          disabled={currentStep === 1}
        >
          &lt; Back
        </Button>

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
          <Button
            type="submit"
            background="green"
            size="small"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        )}
      </Buttons>
    </Form>
  );
};

export default SignUpBusiness;

const Form = styled.form`
  width: 90%;
  min-height: 100vh;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 12.5% minmax(min-content, 1fr) 15%;
  margin: auto !important;

  h2 {
    font-family: var(--font-sec);
    font-weight: 400;
    color: var(--color-black-mid);
    align-self: center;
    justify-self: center;
  }

  hr {
    align-self: center;
    width: 80%;
    height: 2px;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 3rem 0;
    gap: 1rem;
    margin: auto;
    hr {
      display: none;
    }
    h2 {
      font-size: 1.3rem;
    }
  }

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    padding: 3rem 0;
  }
`;

const FormStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 2rem;
  border-left: 2px solid #ddd;
  min-height: 80%;

  @media ${device.tablet} {
    border-left: none;
    border-top-left-radius: 100px;
    padding-top: 2rem;
  }

  @media ${device.mobile} {
    padding: 0.5rem 1.5rem;
  }

  .form-title {
    font-family: var(--font-main);
    font-size: 1.9rem;
    font-weight: 500;
  }
`;

const FormInputs = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
  grid-column: span 2;

  @media ${device.mobile} {
    padding: 2rem 1.5rem;
  }
`;
