import { useState } from "react";
import styled from "styled-components";

const Step4 = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <Wrapper>
      <label>
        + Add Images
        <br />
        <span>up to 10 images</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      {/* <input type="file" multiple /> */}

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You cannot upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};
export default Step4;

const Wrapper = styled.section`
  label {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dotted black;
    border-radius: 20px;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    font-size: large;
  }

  label span {
    font-weight: lighter;
    font-size: small;
    padding-top: 0.5rem;
  }

  input {
    display: none;
  }

  img {
    padding: 0;
    margin: 0;
  }

  .images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .image {
    margin: 1rem 0.5rem;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .image button {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    border: none;
    color: white;
    background-color: lightcoral;
  }

  .image button:hover {
    background-color: red;
  }

  .image p {
    padding: 0 0.5rem;
    margin: 0;
  }

  .upload-btn {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    border: none;
    border-radius: 20px;
    width: 10rem;
    height: 3rem;
    color: white;
    background-color: green;
  }

  label:hover,
  .upload-btn:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  .error {
    text-align: center;
  }

  .error span {
    color: red;
  }
`;
