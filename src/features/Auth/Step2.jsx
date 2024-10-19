import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { IoImageOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import FormInput from "../../components/FormInput";
import Input from "../../components/Input";
import useImageUploader from "../../hooks/useImageUploader";
import BusinessProfilePic from "../../components/businessProfile/businessProfilePic";

const Step2 = () => {
  const { profilePhoto, setProfilePhoto, setProfilePhotoFile, register } =
    useAuthContext();
  const {
    imageFiles: profileFile,
    previewImages: previewProfile,
    handleSelectFiles: selectProfilePicture,
  } = useImageUploader();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (previewProfile.length > 0 || profileFile.length > 0) {
      setProfilePhoto(previewProfile);
      setProfilePhotoFile(profileFile);
    }
  }, [
    previewProfile,
    setProfilePhoto,
    profileFile,
    setProfilePhotoFile,
    profilePhoto,
  ]);

  return (
    <>
      <ImageBox className="image-box">
        <div className="image-container">
          <label className="image-uploader">
            <input
              {...register("avatar")}
              className="image-input"
              type="file"
              onChange={(e) => selectProfilePicture(e)}
            />
            <MdAdd className="add-icon" />
          </label>
          <BusinessProfilePic photo={profilePhoto} />
        </div>

        <h3>Upload Your Business Profile Picture</h3>
      </ImageBox>

      <FormInput label="Mobile Number">
        <Input
          type="text"
          id="mobile"
          placeholder="+20 1234567890"
          {...register("phoneNumber")}
        />
      </FormInput>
      <AboutBox className="about-box">
        <label htmlFor="">About</label>
        <textarea
          {...register("about")}
          // value="test test test"
          placeholder="Describe Your Business"
        ></textarea>
      </AboutBox>
    </>
  );
};
export default Step2;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .image-container {
    width: 7rem;
    height: 7rem;
    position: relative;
  }

  .image-input {
    display: none;
  }
  .image-icon {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
  }
  .image-uploader {
    position: absolute;
    bottom: 0;
    left: 60%;
    cursor: pointer;
  }
  .add-icon {
    color: #fff;
    border-radius: 50%;
    background-color: var(--color-brand-pink);
    transform: translate(50%, 50%);
    width: 24px;
    height: 24px;
    transform: translateX(50%);
  }
  .image-text {
    color: var(--color-black-light);
  }
`;

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  textarea {
    border: none;
    height: 5rem;
    box-shadow: 0px 2px 11px -5px rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    outline: none;
  }
`;
