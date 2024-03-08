import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

  
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <Section>
      <Label>
        + Add Images
        <br />
        <Span>up to 10 images</Span>
        <Input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </Label>
      <br />

      <Input type="file" multiple />

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
      </Images>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  background-color: #fef9f0;
`;

const Label = styled.label`
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

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;

const Span = styled.span`
  font-weight: lighter;
  font-size: small;
  padding-top: 0.5rem;
`;

const Input = styled.input`
  display: none;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin: 1rem 0.5rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const Image = styled.img`
  height: 10rem; 
  width: 10rem; 
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  border: none;
  color: white;
  background-color: lightcoral;

  &:hover {
    background-color: red;
  }
`;

const Error = styled.p`
  text-align: center;
`;

const ErrorSpan = styled.span`
  color: red;
`;

export default App;
