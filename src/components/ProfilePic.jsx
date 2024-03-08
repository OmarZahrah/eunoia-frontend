import { useState } from "react";
import styled from "styled-components";

function ProfilePic() {
  const [imageSrc, setImageSrc] = useState(
    "https://as1.ftcdn.net/v2/jpg/01/87/38/18/1000_F_187381803_PkyqnKdHacpV4dXk6jaHGTvtdwqVCclS.jpg"
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file)); // Create a temporary URL for the file
    }
  };

  return (
    <Wrapper>
      <div>
        <label>
          <img src={imageSrc} alt="Upload" />
          <input id="image-upload" type="file" onChange={handleImageUpload} />
        </label>
      </div>
      <span>Your Name</span>
    </Wrapper>
  );
}

export default ProfilePic;

const Wrapper = styled.div`
  width: 30%;
  text-align: center;
  height: 80vh;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.593);
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    cursor: pointer;
  }

  input {
    padding-top: 20px;
    display: none;
  }
  span {
    margin-top: 20px;
    font-size: 30px;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 15rem;
  }

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: -10px -5px 1px 1px #f5b9a7;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    height: 75vh;
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      object-fit: cover;
    }
    span {
      font-size: 27px;
    }
  }
  @media only screen and (max-width: 52.5em) {
    width: 40%;

    span {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    border-right: none;
    height: 17rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.347);
    span {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.347);
    height: 17rem;
    span {
      font-size: 26px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    span {
      /* font-size: 30px; */
    }
  }
`;
