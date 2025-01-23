import { useEffect } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

import styled from "styled-components";
import { useServiceContext } from "../../context/ServiceContext";
import { useDeletePhotos } from "../../features/serviceProfile/useDeletePhotos";

const PhotosComponent = ({ images, setChange }) => {
  const { deletePhotos, isLoading: deletingPhotos } = useDeletePhotos();

  const {
    albumImages,
    setAlbumImages,
    setNewPhotos,
    setOldPhotos,
    newPhotos,
    register,
  } = useServiceContext();
  useEffect(() => {
    const f = () => {
      setAlbumImages(images);
    };

    f();
  }, []);

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;

    setNewPhotos((images) => images.concat(...selectedFiles));
  };
  const deleteImage = (image) => {
    deletePhotos(image);
  };
  const handleDeleteImage = (image) => {
    const newImages = albumImages.filter((images) => images !== image);
    const deletedNewPhotos = newPhotos.filter((images) => images !== image);
    setNewPhotos(deletedNewPhotos);
    setAlbumImages(newImages);
    const oldImages = images.filter((photos) => photos !== image);
    setOldPhotos(oldImages);
    setChange(true);
  };

  return (
    <Section>
      <div className="album">
        {albumImages?.map((image, i) => (
          <div className="image" key={i}>
            <img src={image} />
            <div className="delete-icon" onClick={() => deleteImage(image)}>
              <RiDeleteBin7Line className="icon" />
            </div>
          </div>
        ))}
        {newPhotos?.map((image, i) => (
          <div className="image" key={i}>
            <img src={URL.createObjectURL(image)} />
            <div
              className="delete-icon"
              onClick={() => handleDeleteImage(image)}
            >
              <RiDeleteBin7Line className="icon" />
            </div>
          </div>
        ))}
        <label className="add-image">
          +
          <input
            {...register("images")}
            className="image-input"
            type="file"
            onChange={(e) => onSelectFile(e)}
            multiple
          />
        </label>
      </div>
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
