import { createContext, useContext, useState } from "react";
import Step1 from "../features/signup/step1";
import Step2 from "../features/signup/step2";
import Step3 from "../features/signup/step3";
import Step4 from "../features/signup/step4";
import { useForm } from "react-hook-form";
import customFetch from "../utils/customFetch";
import { signup } from "../services/signup";

const SignUpContext = createContext();

const steps = [
  { stepNum: 1, stepTitle: "Personal Details", stepForm: <Step1 /> },
  { stepNum: 2, stepTitle: "Business Type", stepForm: <Step2 /> },
  { stepNum: 3, stepTitle: "Business Info", stepForm: <Step3 /> },
  { stepNum: 4, stepTitle: "More Details", stepForm: <Step4 /> },
];

const SignUpProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { register, handleSubmit } = useForm();
  const [profilePhoto, setProfilePhoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState([]);
  const [albumImages, setAlbumImages] = useState([]);
  const [profilePhotoFile, setProfilePhotoFile] = useState("");
  const [coverPhotoFile, setCoverPhotoFile] = useState("");
  const [albumPhotosFile, setAlbumPhotosFile] = useState("");

  const onSubmit = async (formData) => {
    // const profile = Array.from(formData.profile);
    console.log(profilePhotoFile);
    // console.log(profile);
    // console.log(profilePic);
    const finalData = {
      ...formData,
      role: "provider",
      photo: profilePhotoFile,
      coverPhoto: coverPhotoFile,
      // photoAlbum: [...Object.values(albumPhotosFile)],
    };
    console.log(finalData);
    console.log(signup(finalData));
  };

  return (
    <SignUpContext.Provider
      value={{
        steps,
        currentStep,
        setCurrentStep,
        register,
        handleSubmit,
        onSubmit,
        profilePhoto,
        setProfilePhoto,
        coverPhoto,
        setCoverPhoto,
        albumImages,
        setAlbumImages,
        setProfilePhotoFile,
        setCoverPhotoFile,
        setAlbumPhotosFile,
      }}
    >
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
