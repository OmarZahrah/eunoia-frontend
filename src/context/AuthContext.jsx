import { createContext, useContext, useState } from "react";
import Step1 from "../features/Auth/step1";
import Step2 from "../features/Auth/Step2";
import Step3 from "../features/Auth/Step3";
import { useForm } from "react-hook-form";
const AuthContext = createContext();

// const steps = [
//   { stepNum: 1, stepTitle: "Business Type", stepForm: <Step1 /> },
//   { stepNum: 2, stepTitle: "Business Info", stepForm: <Step2 /> },
//   { stepNum: 3, stepTitle: "More Details", stepForm: <Step3 /> },
// ];

const AuthProvider = ({ children }) => {
  // const [currentStep, setCurrentStep] = useState(1);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState([]);
  const [albumImages, setAlbumImages] = useState([]);
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((s) => !s);
  };

  const [profilePhotoFile, setProfilePhotoFile] = useState("");
  const [coverPhotoFile, setCoverPhotoFile] = useState("");
  const [albumPhotosFile, setAlbumPhotosFile] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        // steps,
        // currentStep,
        // setCurrentStep,
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
        isAuthenticated,
        setIsAuthenticated,
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
