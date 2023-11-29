import styled from "styled-components";
import Select from "../../components/Select";
import { IoImageOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

import { MdAdd } from "react-icons/md";
import { useState } from "react";

const Step4 = () => {
  const keywords = ["test1", "test2", "test3"];
  const [AlbumImages, setAlbumImages] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState([]);

  const onSelectFile = (e, type) => {
    const selectedFiles = e.target.files;

    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    if (type === "album") {
      setAlbumImages((images) => images.concat(imagesArray));
    } else if (type === "cover") {
      setCoverPhoto(imagesArray);
    }
  };

  const handleDeleteImage = (image) => {
    const newImages = AlbumImages.filter((images) => images !== image);
    setAlbumImages(newImages);
  };

  return (
    <Wrapper>
      <Select
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
              className="image-input"
              type="file"
              onChange={(e) => onSelectFile(e, "album")}
              multiple
            />
          </label>
        </p>
        <div className="images">
          {AlbumImages &&
            AlbumImages.map((image) => (
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
