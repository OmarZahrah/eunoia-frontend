import styled from "styled-components";
import coverimg from "../../../public/images/Rectangle 9.svg";
import photo from "../../../public/images/Mask group.svg";
import changephoto from "../../../public/images/Group 47.svg";
import { useState } from "react";
import AboutComponent from "../../components/AboutComponent";
import PackagesComponent from "../../components/PackagesComponent";
import Cover from "../../components/Cover";
import PhotosComponent from "../../components/PhotosComponent";
import { useServiceContext } from "../../context/ServiceContext";
import { IoImageOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { useOutletContext, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { useEditService } from "../serviceProfile/useEditService";
import { useGetMyService } from "../serviceProfile/useGetMyService";
import { CiEdit } from "react-icons/ci";
import FormInput from "../../components/FormInput";
import { filterData } from "../../utils/filterData";
import { createFormData } from "../../utils/createFormData";
import { useAddPhotos } from "./useAddPhotos";
import { deletePhotos } from "../../services/apiServices";
import { useDeletePhotos } from "./useDeletePhotos";

function BuisnessProfile() {
  const { userId } = useParams();
  const { myService: service, isLoading } = useGetMyService();
  const [activeItem, setActiveItem] = useState("About");
  const [change, setChange] = useState(false);
  const { editService, isLoading: editing } = useEditService();
  const { deletePhotos, isLoading: deletingPhotos } = useDeletePhotos();
  const [changeName, setChangeName] = useState(false);
  const { addPhotos, isLoading: addingPhotos } = useAddPhotos();
  // console.log(service);
  const {
    coverPhoto,
    setCoverPhoto,
    profilePhoto,
    setProfilePhoto,
    setProfilePhotoFile,
    setCoverPhotoFile,
    oldPhotos,
    newPhotos,
    profilePhotoFile,
    coverPhotoFile,
    deletedPhotos,
    noOldPhotos,
    register,
    handleSubmit,
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

  const onSubmit = (data) => {
    const allData = {
      ...data,
      avatar: profilePhotoFile && profilePhotoFile,
      imageCover: coverPhotoFile && coverPhotoFile,
      // images: oldPhotos && [...oldPhotos],
    };
    const serviceData =
      profilePhotoFile ||
      coverPhotoFile ||
      data.businessName ||
      data.businessCategory ||
      data.about ||
      data.location ||
      data.phoneNumber ||
      data.images;

    // =========================================
    // filter the empty data an create form data
    // =========================================
    const filteredData = filterData(allData, true);
    let finalData = createFormData(filteredData);

    // ========================================
    // Add the old photos to form data if exist
    // ========================================
    oldPhotos &&
      oldPhotos.forEach((photo, index) => {
        finalData.append(`images`, photo);
      });
    // if (noOldPhotos) {
    //   finalData.append(`images`, "");
    // }

    // ========================================
    // Add the new photos to form data if exist
    // ========================================

    const newPhotosFormData = new FormData();

    for (let i = 0; i < newPhotos.length; i++) {
      // finalData.append("newPhoto", newPhotos[i]);
      newPhotosFormData.append("newImages", newPhotos[i]);
    }

    const deletedPhotosFormData = new FormData();
    deletedPhotos.forEach((photo) =>
      deletedPhotosFormData.append("imageLinks", photo)
    );
    // deletePhotos(deletedPhotosFormData);
    // deletePhotos(JSON.stringify(deletedPhotos));
    // deletePhotos(deletedPhotos);

    serviceData && editService(finalData);
    newPhotos && addPhotos(newPhotosFormData);
    // console.log(Object.fromEntries(finalData));
    // console.log("deleted Photos", deletedPhotos);
    setChangeName(false);
  };

  return (
    <Wrapper>
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
          <div className="section1">
            {/* <div className="cover-container"> */}
            <label className="cover-container">
              <img
                className="cover"
                src={coverPhoto || service?.imageCover || coverimg}
                alt="cover"
              />
              <input
                {...register("imageCover")}
                className="image-input"
                type="file"
                onChange={(e) => onSelectFile(e, "cover")}
              />
              <img className="change" src={changephoto} alt="change photo" />
            </label>
            {/* </div> */}
            {/* <Cover/> */}
            <label className="profile-container">
              <img
                className="profile"
                src={profilePhoto || service?.avatar || photo}
                alt="profile"
              />
              <input
                {...register("avatar")}
                className="image-input"
                type="file"
                onChange={(e) => onSelectFile(e, "avatar")}
              />
            </label>
            {/* <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
            /> */}
          </div>
          <div className="name-container">
            {changeName ? (
              <input
                type="text"
                {...register("businessName")}
                defaultValue={service?.businessName}
                className="name name-input"
                autoFocus
              />
            ) : (
              <p className="name">{service?.businessName}</p>
            )}
            <CiEdit
              className="edit-icon"
              onClick={() => setChangeName((e) => !e)}
            />
          </div>
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
                  className={`button ${
                    activeItem === "Photos" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("Photos")}
                >
                  Photos
                </button>
              </li>
            </ul>
            {activeItem && SelectedItem(activeItem, service, setChange)}
          </div>
          {change && (
            <Button
              type="submit"
              // type="button"
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

function SelectedItem(activeItem, service, setChange) {
  switch (activeItem) {
    case "About":
      return <AboutComponent service={service} />;
    case "Packages":
      return <PackagesComponent />;
    case "Photos":
      return <PhotosComponent images={service.images} setChange={setChange} />;
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
  .submit {
    display: block;
    margin-left: auto;
    margin-top: 5rem;
  }

  .section {
    /* background-color: #fef9f0; */
    width: 90%;
    /* height: 100vh; */
    margin: 0 auto;
    /* height: 100%; */
  }
  .section1 {
    position: relative;
    /* width: 90%; */
    /* margin-bottom: 3rem; */
    margin: 0 auto 7rem auto;
  }
  .cover-container {
    min-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f1e6;
    border-bottom-right-radius: 3rem;
    border-bottom-left-radius: 3rem;
    cursor: pointer;
  }
  .cover {
    /* max-height: 30rem; */
    width: 100%;
    height: 35rem;
    /* display: block; */
    /* margin: 0 auto;/ */
    object-fit: cover;
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

  .profile-container {
    max-width: 20%;
    /* max-height: 20%; */
    /* width: 20%; */
    /* height: 20%; */
    width: 10rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 5rem; */
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 1;
    cursor: pointer;
  }

  .profile {
    border-radius: 50%;
    /* height: 200px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  .name-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .edit-icon {
    width: 24px;
    height: 24px;
  }
  .name {
    font-family: Literata;
    font-size: 2rem;
    font-weight: 400;
    line-height: 5rem;
    letter-spacing: 0.0625rem;
    text-align: center;
    color: #00000099;
    background: transparent;
    border: none;
    /* margin: 0 auto; */
    /* border-bottom: 0.2px solid #ccc; */
  }
  .name-input {
    height: auto;
    width: auto;
    background: #f8f1e6;
    outline: none;
    border-bottom: 1px solid #74ab70;
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
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .cover {
      max-height: 23rem;
    }
    .section1 {
      margin: 0 auto 5rem auto;
    }
  }

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
    .cover {
      max-height: 15rem;
    }
    .profile-container {
      width: 7rem;
      height: 7rem;
      /* margin-bottom: 32px; */
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
