import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import { IoImageOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { MdAdd } from "react-icons/md";
import useImageUploader from "../../hooks/useImageUploader";

const Step3 = () => {
  const {
    register,
    coverPhoto,
    setCoverPhoto,
    albumImages,
    setAlbumImages,
    setCoverPhotoFile,
    setAlbumPhotosFile,
  } = useAuthContext();

  const {
    previewImages: previewCover,
    imageFiles: coverFile,
    handleSelectFiles: selectCover,
  } = useImageUploader("image");

  const {
    previewImages: previewAlbum,
    imageFiles: albumFiles,
    handleSelectFiles: selectAlbum,
    handleDeleteImage: deleteAlbumImage,
  } = useImageUploader("album");

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (previewCover.length > 0) {
      setCoverPhoto(previewCover);
      setCoverPhotoFile(coverFile);
    }
    if (previewAlbum.length > 0) {
      setAlbumImages(previewAlbum);
      setAlbumPhotosFile(albumFiles);
    }
  }, [
    albumImages,
    coverFile,
    setCoverPhotoFile,
    previewCover,
    setCoverPhoto,
    setAlbumImages,
    previewAlbum,
    setAlbumPhotosFile,
    albumFiles,
  ]);

  return (
    <>
      <span className="image-label">Upload your Business cover photo</span>
      <ImageUploader className="image-uploader">
        {coverPhoto.length === 0 && <IoImageOutline className="image-icon" />}
        {coverPhoto.length > 0 && (
          <img className="cover-photo" src={coverPhoto} />
        )}
        <input
          {...register("imageCover")}
          className="image-input"
          type="file"
          onChange={(e) => selectCover(e)}
        />
        <AddIcon />
      </ImageUploader>

      <AlbumUploader>
        Do you want to add more photos for people to see?{" "}
        <label>
          + Add photos
          <input
            {...register("images")}
            type="file"
            onChange={(e) => selectAlbum(e)}
            multiple
          />
        </label>
      </AlbumUploader>
      <AlbumContainer>
        {albumImages &&
          albumImages.map((image, index) => (
            <div className="image" key={image}>
              <img src={image} />
              <DeleteIcon onClick={() => deleteAlbumImage(index)} />
            </div>
          ))}
      </AlbumContainer>
    </>
  );
};
export default Step3;

const ImageUploader = styled.label`
  height: 13rem;
  border: 1px solid var(--color-grey-500);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
  position: relative;

  input {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AddIcon = styled(MdAdd)`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  border-radius: 50%;
  background-color: var(--color-brand-pink);
  transform: translate(50%, 50%);
  width: 24px;
  height: 24px;
`;

const AlbumUploader = styled.div`
  color: var(--color-black-light);
  margin-top: 5px;
  label {
    color: var(--color-brand-green);
    cursor: pointer;

    input {
      display: none;
    }
  }

  .image-icon {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
  }
`;

const AlbumContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  .image {
    position: relative;
  }
  .image img {
    border: 2px solid var(--color-grey-500);
    width: 50px;
  }
`;

const DeleteIcon = styled(TiDeleteOutline)`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  transform: translateX(50%);
  background-color: #a00808;
  border-radius: 50%;
  cursor: pointer;
`;
