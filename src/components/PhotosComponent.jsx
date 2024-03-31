import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { RiDeleteBin7Line } from "react-icons/ri";

import styled from "styled-components";
import { useServiceContext } from "../context/ServiceContext";

const PhotosComponent = ({ images }) => {
  const [selectedImages, setSelectedImages] = useState(images);
  const {
    albumImages,
    setAlbumImages,
    albumPhotosFile,
    setAlbumPhotosFile,
    register,
  } = useServiceContext();

  () => setAlbumImages(images);
  useEffect(() => {
    const f = () => {
      setAlbumImages(images);
    };

    f();
  }, []);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    console.log(selectedFiles);
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setAlbumPhotosFile(selectedFiles);
    setAlbumImages((previousImages) => previousImages.concat(imagesArray));
    // setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    // setAlbumImages(selectedImages);

    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const handleDeleteImage = (image) => {
    const newImages = albumImages.filter((images) => images !== image);
    setAlbumImages(newImages);
  };

  return (
    <Section>
      <div className="album">
        {/* {selectedImages.map((image) => ( */}
        {albumImages.map((image) => (
          <div className="image" key={image}>
            <img src={image} />
            <div
              className="delete-icon"
              onClick={() => handleDeleteImage(image)}
            >
              <RiDeleteBin7Line className="icon" />
            </div>
          </div>
        ))}
      </div>
      <label className="add-image">
        +
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      {/* <label>
        + Add photos
        <input
          {...register("images")}
          className="image-input"
          type="file"
          onChange={(e) => onSelectFile(e)}
          multiple
        />
      </label> */}
      {/* <br /> */}

      {/* <Input type="file" multiple /> */}
      {/* 
      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <Error>
            You can not upload more than 10 images! <br />
            <ErrorSpan>
              please delete <b>{selectedImages.length - 10}</b> of them{" "}
            </ErrorSpan>
          </Error>
        ) : null)}

      <Images>
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <ImageContainer key={image}>
                <Image src={image} alt="uploaded" />
                <Button onClick={() => deleteHandler(image)}>
                  delete image
                </Button>
                <p>{index + 1}</p>
              </ImageContainer>
            );
          })}
      </Images> */}
    </Section>
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
    /* height: auto; */
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
