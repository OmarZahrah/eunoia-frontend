import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import useImageUploader from "../../hooks/useImageUploader";

import defaultProfile from "/images/defaultProfile.jpg";
import { MdOutlineCameraAlt } from "react-icons/md";

function ProfilePic({ type, picture, name, register }) {
  const { previewImages: previewImage, handleSelectFiles: selectImage } =
    useImageUploader();

  return (
    <Wrapper>
      {type === "form" ? (
        <FileInputPhoto>
          <label>
            <img
              src={previewImage[0] || picture || defaultProfile}
              alt="Upload"
            />

            <input
              id="image-upload"
              type="file"
              {...register("avatar", { onChange: selectImage })}
            />
          </label>
          <div className="camera">
            <MdOutlineCameraAlt className="camera-icon" />
          </div>
        </FileInputPhoto>
      ) : (
        <img src={picture || defaultProfile} alt="user-profile-picture" />
      )}
      {name && <span>{name}</span>}
    </Wrapper>
  );
}

export default ProfilePic;

const Wrapper = styled.div`
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;

  @media ${device.tablet} {
    border: none;
  }

  span {
    margin-top: 20px;
    font-size: 30px;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 15rem;
    color: var(--color-black-mid);
    text-align: center;
  }

  img {
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: -10px -5px 1px 1px #f5b9a7;
  }
`;

const FileInputPhoto = styled.div`
  position: relative;

  label {
    cursor: pointer;
  }

  input {
    display: none;
  }

  .camera {
    position: absolute;
    bottom: 10%;
    right: 10%;
    background-color: var(--green, #74ab70);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .camera-icon {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    color: #fff;
  }
`;
