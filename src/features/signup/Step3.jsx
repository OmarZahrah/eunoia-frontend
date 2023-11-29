import styled from "styled-components";
import FormInput from "../../components/FormInput";
import { IoImageOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { useState } from "react";

const Step3 = () => {
  const [profilePhoto, setProfilePhoto] = useState("");

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const photo = URL.createObjectURL(...selectedFiles);

    setProfilePhoto(photo);
  };
  // const handleDeleteImage = (image) => {
  //   const newImages = AlbumImages.filter((images) => images !== image);
  //   setProfilePhoto("");
  // };
  return (
    <Wrapper>
      <div className="image-box">
        <div className="image">
          <label className="image-uploader">
            {!profilePhoto && <IoImageOutline className="image-icon" />}
            {profilePhoto && (
              <img className="profile-photo" src={profilePhoto} />
            )}
            <input
              className="image-input"
              type="file"
              onChange={onSelectFile}
            />
            <MdAdd className="add-icon" />
          </label>
        </div>
        <div className="image-text">
          <h3>Upload Your Profile Picture</h3>
          <p>Preferably Your Personal Photo</p>
        </div>
      </div>
      <FormInput label="Mobile Number" placeholder="+20 1234567890" />
      <div className="about-box">
        <label htmlFor="">About</label>
        <textarea placeholder="Describe Your Business"></textarea>
      </div>
    </Wrapper>
  );
};
export default Step3;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem;
  .image-box {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .image-uploader {
    width: 7rem;
    height: 7rem;
    border: 1px solid var(--color-grey-500);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
  .profile-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .image-input {
    display: none;
  }
  .image-icon {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
  }
  .add-icon {
    position: absolute;
    bottom: 0;
    left: 60%;
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
  .about-box {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  textarea {
    border: none;
    width: 60%;
    height: 5rem;
    box-shadow: 0px 2px 11px -5px rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
  }
`;
