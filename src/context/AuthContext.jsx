import { createContext, useContext, useState } from "react";
import Step1 from "../features/signup/step1";
import Step2 from "../features/signup/step2";
import Step3 from "../features/signup/step3";
import Step4 from "../features/signup/step4";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "../features/signup/useAddService";

const AuthContext = createContext();

const steps = [
  // { stepNum: 1, stepTitle: "Personal Details", stepForm: <Step1 /> },
  { stepNum: 1, stepTitle: "Business Type", stepForm: <Step2 /> },
  { stepNum: 2, stepTitle: "Business Info", stepForm: <Step3 /> },
  { stepNum: 3, stepTitle: "More Details", stepForm: <Step4 /> },
];

const AuthProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState([]);
  const [albumImages, setAlbumImages] = useState([]);
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((s) => !s);
  };

  const [profilePhotoFile, setProfilePhotoFile] = useState("");
  const [coverPhotoFile, setCoverPhotoFile] = useState("");
  const [albumPhotosFile, setAlbumPhotosFile] = useState("");

  // const { updateUser, isUpdating } = useUpdateUser();

  // const onSubmit = async (formData, role) => {
  //   // const profile = Array.from(formData.profile);
  //   // console.log(profilePhotoFile);
  //   // console.log(profile);
  //   // console.log(profilePic);
  //   console.log(formData);
  //   const finalData = {
  //     ...formData,
  //     role: "provider",
  //     photo: profilePhotoFile,
  //     coverPhoto: coverPhotoFile,
  //     photoAlbum: [...Object.values(albumPhotosFile)],
  //   };
  //   // console.log(formData);
  //   // console.log(updateUser(finalData));
  //   console.log(finalData);
  // };

  return (
    <AuthContext.Provider
      value={{
        steps,
        currentStep,
        setCurrentStep,
        register,
        handleSubmit,
        // getValues,
        // errors,
        // onSubmit,
        profilePhoto,
        setProfilePhoto,
        coverPhoto,
        setCoverPhoto,
        albumImages,
        setAlbumImages,
        showPassword,
        togglePasswordVisibility,

        profilePhotoFile,
        coverPhotoFile,
        albumPhotosFile,

        setProfilePhotoFile,
        setCoverPhotoFile,
        setAlbumPhotosFile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the Form Provider");
  return context;
}
export { AuthProvider, useAuthContext };
