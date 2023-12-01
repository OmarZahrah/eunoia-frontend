import styled from "styled-components";
import Select from "../../components/Select";
import { IoImageOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { useSignUpContext } from "../../context/SignUpContext";

const Step4 = () => {
  const keywords = [
    { option: "test1", value: "test1" },
    { option: "test2", value: "test2" },
    { option: "test3", value: "test3" },
    { option: "test4", value: "test4" },
  ];
  // const [AlbumImages, setAlbumImages] = useState([]);
  // const [coverPhoto, setCoverPhoto] = useState([]);
  const {
    register,
    coverPhoto,
    setCoverPhoto,
    albumImages,
    setAlbumImages,
    setCoverPhotoFile,
    setAlbumPhotosFile,
  } = useSignUpContext();

  const onSelectFile = (e, type) => {
    const selectedFiles = e.target.files;
    console.log(selectedFiles);
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    if (type === "album") {
      setAlbumPhotosFile(selectedFiles);
      setAlbumImages((images) => images.concat(imagesArray));
    } else if (type === "cover") {
      setCoverPhotoFile(selectedFiles[0]);
      setCoverPhoto(imagesArray);
    }
  };

  const handleDeleteImage = (image) => {
    const newImages = albumImages.filter((images) => images !== image);
    setAlbumImages(newImages);
  };

  return (
    <Wrapper>
      <Select
        name="keywords"
        label="Words describe your business (Choose 3)"
        options={keywords}
      />
      <div>
        <span className="image-label">Upload your cover photo</span>
        <label className="image-uploader">
          {coverPhoto.length === 0 && <IoImageOutline className="image-icon" />}
          {coverPhoto.length > 0 && (
            <img className="cover-photo" src={coverPhoto} />
          )}
          <input
            // {...register("coverPhoto")}
            className="image-input"
            type="file"
            onChange={(e) => onSelectFile(e, "cover")}
          />
          <MdAdd className="add-icon" />
        </label>

        <p className="add-photos">
          Do you want to add more photos for people to see?{" "}
          <label>
            + Add photos
            <input
              // {...register("photoAlbum")}
              className="image-input"
              type="file"
              onChange={(e) => onSelectFile(e, "album")}
              multiple
            />
          </label>
        </p>
        <div className="images">
          {albumImages &&
            albumImages.map((image) => (
              <div className="image" key={image}>
                <img src={image} />
                <TiDeleteOutline
                  className="delete-icon"
                  onClick={() => handleDeleteImage(image)}
                />
              </div>
            ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default Step4;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .image-uploader {
    width: 60%;
    height: 10rem;
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
  .add-photos {
    color: var(--color-black-light);
    margin-top: 5px;
  }
  .add-photos label {
    color: var(--color-brand-green);
    cursor: pointer;
  }
  .images {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .image {
    position: relative;
  }
  .image img {
    border: 2px solid var(--color-grey-500);
    width: 50px;
  }
  .delete-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    transform: translateX(50%);
    background-color: #a00808;
    border-radius: 50%;
    cursor: pointer;
  }
`;
