import { createContext, useContext, useState } from "react";

const serviceContext = createContext();
const ServiceProvider = ({ children }) => {
  const [coverPhoto, setCoverPhoto] = useState("");
  const [coverPhotoFile, setCoverPhotoFile] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [profilePhotoFile, setProfilePhotoFile] = useState("");
  return (
    <serviceContext.Provider
      value={{
        coverPhoto,
        setCoverPhoto,
        profilePhoto,
        setProfilePhoto,
        setCoverPhotoFile,
        setProfilePhotoFile,
      }}
    >
      {children}
    </serviceContext.Provider>
  );
};

function useServiceContext() {
  const context = useContext(serviceContext);
  if (context === undefined)
    throw new Error("Service Context was used outside the Form Provider");
  return context;
}
export { ServiceProvider, useServiceContext };
