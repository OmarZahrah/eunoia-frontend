import { RiDeleteBin7Line } from "react-icons/ri";
import { ImSpinner } from "react-icons/im";
import styled from "styled-components";
import { useDeletePhotos } from "../../features/serviceProfile/useDeletePhotos";
import { useState } from "react";
import Button from "../Button";
import useImageUploader from "../../hooks/useImageUploader";
import { useAddPhotos } from "../../features/serviceProfile/useAddPhotos";

const PhotosComponent = ({ images }) => {
  const [change, setChange] = useState(false);
  const { addPhotos, isLoading: addingPhotos } = useAddPhotos();

  const { deletePhotos, isLoading: deletingPhotos } = useDeletePhotos();

  const {
    previewImages,
    imageFiles,
    handleSelectFiles,
    handleDeleteImage,
    clear,
  } = useImageUploader("album");

  const deleteImage = (image) => {
    deletePhotos(image);
  };

  function onSelectFile(e) {
    setChange(true);
    handleSelectFiles(e);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPhotosFormData = new FormData();

    for (let i = 0; i < imageFiles.length; i++) {
      newPhotosFormData.append("newImages", imageFiles[i]);
    }
    // console.log(imageFiles);
    console.log(Object.fromEntries(newPhotosFormData));
    addPhotos(newPhotosFormData, {
      onSuccess: () => {
        clear();
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section>
        <div className="album">
          {images?.map((image) => (
            <div className="image" key={image}>
              <img src={image} />
              <div className="delete-icon" onClick={() => deleteImage(image)}>
                {deletingPhotos ? (
                  <ImSpinner className="icon" />
                ) : (
                  <RiDeleteBin7Line className="icon" />
                )}
              </div>
            </div>
          ))}
          {previewImages?.map((image, i) => (
            <div className="image" key={i}>
              <img src={image} />
              <div className="delete-icon" onClick={() => handleDeleteImage(i)}>
                {deletingPhotos ? (
                  <ImSpinner className="icon" />
                ) : (
                  <RiDeleteBin7Line className="icon" />
                )}
              </div>
            </div>
          ))}
          <label className="add-image">
            +
            <input
              className="image-input"
              type="file"
              onChange={(e) => onSelectFile(e)}
              multiple
            />
          </label>
        </div>
      </Section>
      {change && (
        <Button
          type="submit"
          background="green"
          size="small"
          disabled={addingPhotos}
          className="submit"
        >
          {addingPhotos ? "Saving..." : "Save "}
        </Button>
      )}
    </form>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  background-color: #fef9f0;
  display: flex;
  gap: 20px;

  .album {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .add-image {
    cursor: pointer;
    background-color: #f5b9a735;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
    transition: 0.3s ease;
  }
  .add-image:hover {
    scale: 1.05;
  }
  input {
    display: none;
  }
  .image {
    position: relative;
  }
  .image img {
    border: 2px solid var(--color-grey-500);
    width: 10rem;
  }
  .delete-icon {
    position: absolute;
    top: -10px;
    right: 5px;
    color: #fff;
    transform: translateX(50%);
    background-color: #fef9f0;
    border-radius: 50%;
    cursor: pointer;
    color: #555;
    padding: 5px;
  }
`;

export default PhotosComponent;
