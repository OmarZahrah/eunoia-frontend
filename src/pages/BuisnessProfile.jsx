import styled from "styled-components";
import NavBar from "../components/NavBar";
import coverimg from "../../public/images/Rectangle 9.svg";
import photo from "../../public/images/Mask group.svg";
import changephoto from "../../public/images/Group 47.svg";
import { useState } from "react";
import AboutComponent from "../components/AboutComponent";
import PackagesComponent from "../components/PackagesComponent";
import Cover from "../components/Cover";
import PhotosComponent from "../components/PhotosComponent";
import { useServiceContext } from "../context/ServiceContext";
import { IoImageOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { useService } from "../features/signup/useService";
import { useUser } from "../features/signup/useUser";
import { useOutletContext, useParams } from "react-router-dom";
function BuisnessProfile() {
  const [activeItem, setActiveItem] = useState("About");
  const { service } = useOutletContext();
  console.log(service);
  const {
    coverPhoto,
    setCoverPhoto,
    profilePhoto,
    setProfilePhoto,
    setProfilePhotoFile,
    setCoverPhotoFile,
  } = useServiceContext();
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const onSelectFile = (e, type) => {
    const selectedFiles = e.target.files;
    if (type == "avatar") {
      setProfilePhotoFile(selectedFiles[0]);
      const photo = URL.createObjectURL(...selectedFiles);
      setProfilePhoto(photo);
    } else if (type == "cover") {
      setCoverPhotoFile(selectedFiles[0]);
      const photo = URL.createObjectURL(...selectedFiles);
      setCoverPhoto(photo);
    }
  };

  const handlePhotoChange = (event) => {
    // Handle photo change
  };

  return (
    <Wrapper>
      <div className="section">
        <div className="section1">
          {/* <label className="image-uploader">
            {coverPhoto.length === 0 && (
              <IoImageOutline className="image-icon" />
            )}
            {coverPhoto.length > 0 && (
              <img className="cover-photo" src={service?.imgCover} />
            )}
            <input
              // {...register("imageCover")}
              className="image-input"
              type="file"
              onChange={(e) => onSelectFile(e, "cover")}
            />
            <MdAdd className="add-icon" />
          </label> */}
          <label>
            <img className="cover" src={coverPhoto || coverimg} alt="cover" />
            <input
              // {...register("imageCover")}
              className="image-input"
              type="file"
              onChange={(e) => onSelectFile(e, "cover")}
            />
            <img className="change" src={changephoto} alt="change photo" />
          </label>

          {/* <Cover/> */}
          <img className="profile" src={photo} alt="profile" />
          {/* <img
            className="change"
            src={changephoto}
            alt="change photo"
            onClick={() => document.getElementById("fileInput").click()}
          /> */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
        </div>
        <p className="name">Islam Tarek</p>
        <div className="section2">
          <ul className="list">
            <li>
              <button
                className={`button ${activeItem === "About" ? "active" : ""}`}
                onClick={() => handleItemClick("About")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`button ${
                  activeItem === "Packages" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Packages")}
              >
                Packages
              </button>
            </li>
            <li>
              <button
                className={`button ${activeItem === "Photos" ? "active" : ""}`}
                onClick={() => handleItemClick("Photos")}
              >
                Photos
              </button>
            </li>
          </ul>
          {activeItem && SelectedItem(activeItem)}
        </div>
      </div>
    </Wrapper>
  );
}

function SelectedItem(activeItem) {
  switch (activeItem) {
    case "About":
      return <AboutComponent />;
    case "Packages":
      return <PackagesComponent />;
    case "Photos":
      return <PhotosComponent />;
    default:
      return null;
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fef9f0;
  padding-bottom: 2rem;
  /* padding-bottom: auto; */
  /* height: 100vh; */

  .section {
    /* background-color: #fef9f0; */
    width: 90%;
    /* height: 100vh; */
    margin: 0 auto;
  }
  .section1 {
    position: relative;
    /* width: 90%; */
    /* margin-bottom: 3rem; */
    margin: 0 auto 7rem auto;
  }

  .image-uploader {
    width: 100%;
    min-height: 20rem;
    border: 1px solid var(--color-grey-500);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 10px;
    position: relative;
  }
  .cover-photo {
    width: 100%;
    height: 100%;
  }
  .add-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    border-radius: 50%;
    background-color: var(--color-brand-pink);
    transform: translate(50%, 50%);
    width: 24px;
    height: 24px;
  }
  .image-input {
    display: none;
  }
  .image-icon {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
  }

  .cover {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .profile {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 1;
    width: 15%;
    /* height: 200px; */
  }
  .change {
    position: absolute;
    width: 3rem;
    height: 3rem;
    bottom: 5%;
    right: 5%;
    /* transform: translate(-100%); */
    cursor: pointer;
  }

  .name {
    font-family: Literata;
    font-size: 2rem;
    font-weight: 400;
    line-height: 5rem;
    letter-spacing: 0.0625rem;
    text-align: center;
    color: #00000099;
    /* border-bottom: 0.2px solid #ccc; */
  }
  .section2 {
    width: 100%;
    margin: 0 auto;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 370;
    border-bottom: 0.2px solid #ccc;
    border-top: 0.2px solid #ccc;
    /* width: 90%; */
    margin: 0 auto 1rem auto;
    padding: 2px;
  }

  button:hover {
    transform: scale(1.1);
    font-weight: 450;
    transition: transform 0.6s ease;
  }

  .active {
    text-decoration: underline;
    font-weight: 450;
  }

  .button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    padding: 0;
    color: rgba(0, 0, 0, 0.5);
  }
  /* @media only screen and (max-width: ${({ theme }) => theme.mid}) {
  }

  */
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .section1 {
      margin-bottom: 5rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    /* height: 100vh; */
    .name {
      font-size: 2.1875rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    /* .profile {
      top: 32%;
      width: 150px;
      height: 150px;
    } */
    .section {
      width: 100%;
    }
    .section1 {
      /* width: 100%; */
      margin-bottom: 2rem;
    }
    .profile {
      width: 20%;
    }
    .name {
      font-size: 2.1rem;
    }
    .section2 {
      width: 95%;
    }
    .list {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    /* .profile {
      top: 27%;
      width: 120px;
      height: 120px;
    } */

    .name {
      font-size: 1.8rem;
    }

    .list {
      font-size: 1.24rem;
    }
  }
`;

export default BuisnessProfile;
