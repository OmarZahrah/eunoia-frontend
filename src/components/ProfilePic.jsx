import { useState } from "react";
import styled from "styled-components";
import { MdOutlineCameraAlt, MdOutlineImagesearchRoller } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";
import defaultProfile from "../../public/images/defaultProfile.jpg";

function ProfilePic({ form, register }) {
  const { user } = useOutletContext();
  const { setAvatar } = useUserContext();
  const [imageSrc, setImageSrc] = useState("");

  console.log(imageSrc);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
    // console.log(file);
    if (file) {
      setImageSrc(URL.createObjectURL(file)); // Create a temporary URL for the file
    }
  };

  return (
    <Wrapper>
      {form ? (
        <>
          <div className="photo">
            <label>
              <img
                src={imageSrc || user.avatar || defaultProfile}
                // src={defaultProfile}
                alt="Upload"
              />

              <input
                id="image-upload"
                type="file"
                {...register("avatar")}
                onChange={handleImageUpload}
              />
            </label>
            <div className="camera">
              <MdOutlineCameraAlt className="camera-icon" />
            </div>
          </div>
          <span>{user?.name}</span>
        </>
      ) : (
        <>
          <div className="photo">
            <img src={user?.avatar || imageSrc} alt="Upload" />
          </div>
          <span>{user?.name}</span>
        </>
      )}
    </Wrapper>
  );
}

export default ProfilePic;

const Wrapper = styled.div`
  width: 30%;
  text-align: center;
  height: 80vh;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  color: rgba(0, 0, 0, 0.593);
  display: flex;
  flex-direction: column;
  align-items: center;
  .photo {
    position: relative;
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

  label {
    cursor: pointer;
  }

  input {
    padding-top: 20px;
    display: none;
  }
  span {
    margin-top: 20px;
    font-size: 30px;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 15rem;
  }

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: -10px -5px 1px 1px #f5b9a7;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    height: 75vh;
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      object-fit: cover;
    }
    span {
      font-size: 27px;
    }
  }
  @media only screen and (max-width: 52.5em) {
    width: 40%;

    span {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    border-right: none;
    height: 17rem;
    margin-top: 40px;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.347); */
    span {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    border-right: none;
    margin-top: 45px;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.347); */
    height: 17rem;
    span {
      font-size: 26px;
    }
  }
`;
