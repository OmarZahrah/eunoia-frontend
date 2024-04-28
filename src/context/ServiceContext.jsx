import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const serviceContext = createContext();
const ServiceProvider = ({ children }) => {
  const [coverPhoto, setCoverPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [albumImages, setAlbumImages] = useState([]);
  const { register, handleSubmit } = useForm();

  const [profilePhotoFile, setProfilePhotoFile] = useState("");
  const [coverPhotoFile, setCoverPhotoFile] = useState("");
  const [oldPhotos, setOldPhotos] = useState("");
  const [newPhotos, setNewPhotos] = useState([]);
  const [noOldPhotos, setNoOldPhotos] = useState(false);
  const [deletedPhotos, setDeletedPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <serviceContext.Provider
      value={{
        coverPhoto,
        setCoverPhoto,
        profilePhoto,
        setProfilePhoto,
        coverPhotoFile,
        setCoverPhotoFile,
        profilePhotoFile,
        setProfilePhotoFile,
        albumImages,
        setAlbumImages,
        oldPhotos,
        setOldPhotos,
        newPhotos,
        setNewPhotos,
        noOldPhotos,
        setNoOldPhotos,
        deletedPhotos,
        setDeletedPhotos,
        register,
        handleSubmit,
        favorites,
        setFavorites,
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
