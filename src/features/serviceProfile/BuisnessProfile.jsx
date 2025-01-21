import styled from "styled-components";
import defaultPhoto from "../../../public/images/Group 47.svg";
import { useState } from "react";
import AboutComponent from "../../components/AboutComponent";
import PackagesComponent from "../../components/PackagesComponent";
import PhotosComponent from "../../components/PhotosComponent";
import { useServiceContext } from "../../context/ServiceContext";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { useEditService } from "../serviceProfile/useEditService";
import { useGetMyService } from "../serviceProfile/useGetMyService";
import { CiEdit } from "react-icons/ci";
import { filterData } from "../../utils/filterData";
import { createFormData } from "../../utils/createFormData";
import { useAddPhotos } from "./useAddPhotos";
import { usePackageContext } from "../../context/PackageContext";
import useImageUploader from "../../hooks/useImageUploader";
import Slider from "../../components/Slider";
import BusinessProfilePic from "../../components/businessProfile/businessProfilePic";
import defaultProfile from "/images/defaults/defaultProfile.jpg";
import { device } from "../../assets/styles/breakpoints";

function BusinessProfile() {
  const { myService: service, isLoading } = useGetMyService();
  const [activeItem, setActiveItem] = useState("About");
  const { change, setChange } = useServiceContext();
  const { editService, isLoading: editing } = useEditService();
  const [changeName, setChangeName] = useState(false);
  const { addPhotos, isLoading: addingPhotos } = useAddPhotos();

  // console.log("service", service);
  const { editPackage, setEditPackage } = usePackageContext();
  const {
    oldPhotos,
    newPhotos,
    deletedPhotos,
    newPosition,
    register,
    handleSubmit,
  } = useServiceContext();
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const {
    previewImage: previewProfile,
    imageFile: profileFile,
    handleSelectFiles: selectProfile,
  } = useImageUploader("image");
  const {
    previewImage: previewCover,
    imageFile: coverFile,
    handleSelectFiles: selectCover,
  } = useImageUploader("image");

  const onSubmit = (data) => {
    const allData = {
      ...data,
      avatar: profileFile && profileFile,
      imageCover: coverFile && coverFile,
      images: "",
      latitude: newPosition[0],
      longitude: newPosition[1],
    };
    const serviceData =
      profileFile ||
      coverFile ||
      data.businessName ||
      data.businessCategory ||
      data.about ||
      data.location ||
      data.phoneNumber ||
      data.images ||
      newPosition.length;

    // =========================================
    // filter the empty data an create form data
    // =========================================
    const filteredData = filterData(allData);
    let finalData = createFormData(filteredData);
    console.log(filteredData);

    // ========================================
    // Add the old photos to form data if exist
    // ========================================
    oldPhotos &&
      oldPhotos.forEach((photo) => {
        finalData.append(`images`, photo);
      });

    // ========================================
    // Add the new photos to form data if exist
    // ========================================

    const newPhotosFormData = new FormData();

    for (let i = 0; i < newPhotos.length; i++) {
      newPhotosFormData.append("newImages", newPhotos[i]);
    }

    const deletedPhotosFormData = new FormData();
    deletedPhotos.forEach((photo) =>
      deletedPhotosFormData.append("imageLinks", photo)
    );
    serviceData && editService(finalData);
    newPhotos.length && addPhotos(newPhotosFormData);

    setChangeName(false);
  };

  return (
    <Wrapper
      onClick={() => {
        if (editPackage === true) setEditPackage(false);
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
          }}
          className="section"
          onChange={() => setChange(true)}
        >
          <Section1 className="section1">
            <CoverContainer className="cover-container">
              <Slider
                cover={previewCover || service?.imageCover}
                photos={service?.images || []}
              />
              <label className="cover-upload">
                <img
                  className="cover-upload-icon"
                  src={defaultPhoto}
                  alt="change photo"
                />
                <input
                  {...register("imageCover", { onChange: selectCover })}
                  className="cover-input"
                  type="file"
                />
              </label>
            </CoverContainer>
            <ProfilerContainer>
              <div className="profile-image">
                <BusinessProfilePic
                  photo={previewProfile || service?.avatar}
                  defaultPhoto={defaultProfile}
                />
                <label className="profile-uploader">
                  <input
                    // {...register("avatar")}
                    {...register("avatar", { onChange: selectProfile })}
                    className="profile-input"
                    type="file"
                  />
                  <CiEdit className="profile-icon" />
                </label>
              </div>
            </ProfilerContainer>
          </Section1>
          <BusinessName>
            {changeName ? (
              <input
                type="text"
                {...register("businessName")}
                defaultValue={service?.businessName}
                className="name-text name-input"
                autoFocus
              />
            ) : (
              <p className="name-text">{service?.businessName}</p>
            )}
            <CiEdit
              className="edit-icon"
              onClick={() => setChangeName((e) => !e)}
            />
          </BusinessName>

          <Section2 className="section2">
            <Nav className="list">
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
                  className={`button ${
                    activeItem === "Photos" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("Photos")}
                >
                  Photos
                </button>
              </li>
            </Nav>
            {activeItem === "About" && <AboutComponent service={service} />}
            {activeItem === "Packages" && (
              <PackagesComponent packages={service.packages} />
            )}
            {activeItem === "Photos" && (
              <PhotosComponent images={service.images} setChange={setChange} />
            )}
          </Section2>
          {change && (
            <Button
              type="submit"
              background="green"
              size="small"
              disabled={editing || addingPhotos}
              className="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {editing || addingPhotos ? "Saving..." : "Save "}
            </Button>
          )}
        </form>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fef9f0;
  padding-bottom: 2rem;
  .submit {
    display: block;
    margin-left: auto;
    margin-top: 5rem;
  }

  .section {
    width: 90%;
    margin: 0 auto;
  }
  @media ${device.tablet} {
    .section {
      width: 100%;
    }
  }
`;

const Section1 = styled.div`
  position: relative;

  margin: 0 auto 7rem auto !important;

  .profile-container {
    max-width: 20%;

    width: 10rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 1;
    cursor: pointer;
  }

  .profile {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfilerContainer = styled.div`
  width: 9rem;
  height: 9rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  box-shadow: var(--shadow-md);
  border-radius: 50%;
  @media ${device.mobile} {
    width: 7rem;
    height: 7rem;
  }
  .profile-image {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    .profile-uploader {
      width: 24px;
      height: 24px;
      background-color: var(--color-brand-green);
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      transform: translateY(-50%);
      left: 80%;
      cursor: pointer;

      .profile-input {
        display: none;
      }
    }
  }
`;
const CoverContainer = styled.div`
  position: relative;
  .cover-upload {
    position: absolute;
    right: 3%;
    bottom: 3%;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
  .cover-input {
    display: none;
  }

  .cover-upload-icon {
    width: 100%;
  }
`;

const BusinessName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  @media ${device.mobile} {
    margin-top: 3rem;
  }
  .edit-icon {
    width: 24px;
    height: 24px;
  }
  .name-text {
    font-family: Literata;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.0625rem;
    text-align: center;
    color: var(--color-black-mid);
    background: transparent;
    border: none;
  }
  .name-input {
    background: none;
    outline: none;
    border-bottom: 1px solid #74ab70;
  }
`;

const Section2 = styled.div`
  min-height: 50vh;
  @media ${device.tablet} {
    padding: 0 1rem;
  }
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 370;
  border-bottom: 0.2px solid #ccc;
  border-top: 0.2px solid #ccc;
  margin: 0 auto 1rem auto;
  padding: 2px;
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
`;

export default BusinessProfile;
