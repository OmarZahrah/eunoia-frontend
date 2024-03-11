import { useState } from "react";
import styled from "styled-components";

function Cover() {
  const [imageSrc, setImageSrc] = useState(
"default-coverImage.png"  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file)); // Create a temporary URL for the file
    }
  };

  return (
    // <Wrapper>
    <>
      <div>
        <label>
          <img src={imageSrc} alt="Upload" />
          <input id="image-upload" type="file" onChange={handleImageUpload} />
        </label>
      </div>
      <span>Your Name</span>
      </>
    // </Wrapper>
  );

}


export default Cover;