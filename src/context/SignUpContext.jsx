import { createContext, useContext, useState } from "react";
import Step1 from "../features/signup/step1";
import Step2 from "../features/signup/step2";
import Step3 from "../features/signup/step3";
import Step4 from "../features/signup/step4";

const SignUpContext = createContext();

const steps = [
  { stepNum: 1, stepTitle: "Personal Details", stepForm: <Step1 /> },
  { stepNum: 2, stepTitle: "Business Type", stepForm: <Step2 /> },
  { stepNum: 3, stepTitle: "Business Info", stepForm: <Step3 /> },
  { stepNum: 4, stepTitle: "More Details", stepForm: <Step4 /> },
];

const SignUpProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <SignUpContext.Provider value={{ steps, currentStep, setCurrentStep }}>
      {children}
    </SignUpContext.Provider>
  );
};

function useSignUpContext() {
  const context = useContext(SignUpContext);
  if (context === undefined)
    throw new Error("SignUpContext was used outside the Form Provider");
  return context;
}
export { SignUpProvider, useSignUpContext };
