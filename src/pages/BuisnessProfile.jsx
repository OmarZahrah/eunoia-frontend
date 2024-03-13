import styled from "styled-components";
import NavBar from "../components/NavBar";
import coverimg from "../../public/images/Rectangle 9.svg";
import photo from "../../public/images/Mask group.svg";
import changephoto from "../../public/images/Group 47.svg";
import { useState } from "react";
import AboutComponent from "../components/AboutComponent";
import PackagesComponent from "../components/PackagesComponent";
import Cover from "../components/Cover";
import PhotosComponent  from "../components/PhotosComponent";
function BuisnessProfile() {
  const [activeItem, setActiveItem] = useState(null);


  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handlePhotoChange = (event) => {
    // Handle photo change
  };

  return (
    <Wrapper>
      
        <NavBar />
    
      <div className="Section1">
        <img className="cover" src={coverimg} alt="cover" />
        {/* <Cover/> */}
        <img className="profile" src={photo} alt="profile" />
        <img
          className="change"
          src={changephoto}
          alt="change photo"
          onClick={() => document.getElementById("fileInput").click()}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ display: "none" }}
        />
      </div>
      <p className="name">Islam Tarek</p>
      <ul className="list">
        <li>
          <button
            className={`button ${activeItem === "About" ? "active" : ""}`}
            onClick={() => handleItemClick("About")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={`button ${activeItem === "Packages" ? "active" : ""}`}
            onClick={() => handleItemClick("Packages")}
          >
            Packages
          </button>
        </li>
        <li>
          <button
            className={`button ${activeItem === "Photos" ? "active" : ""}`}
            onClick={() => handleItemClick("Photos")}
          >
            Photos
          </button>
        </li>
      </ul>
      {activeItem && <SelectedItemComponent activeItem={activeItem} />}
    </Wrapper>
  );
}

function SelectedItemComponent({ activeItem }) {
  switch (activeItem) {
    case "About":
      return <AboutComponent />;
    case "Packages":
      return <PackagesComponent />;
    case "Photos":
      return <PhotosComponent />;
    default:
      return null;
  }
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #fef9f0;
  
  .section1{
    position: relatives;
    
  }
  .cover {
    width: 90%;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .profile {
    position: absolute;
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 200px;
    height: 200px;
  }
  .change {
    position: absolute ;
    width: 95.44px;
    height: 66px;
    top: 57.5%;
    left: 86%;
    cursor: pointer;
  }

  .name {
    font-family: Literata;
    font-size: 2rem;
    font-weight: 400;
    line-height: 5rem;
    letter-spacing: 0.0625rem;
    text-align: center;
    color: #00000099;
    padding-top: 2.3rem;
    border-bottom: 0.2px solid #ccc;
    width: 90%;
    margin: 0 auto;
  }

  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 370;
    border-bottom: 0.2px solid #ccc;
    width: 90%;
    margin: 0 auto;
    
  }

  button:hover {
    transform: scale(1.1);
    font-weight: 450;
    transition: transform 0.6s ease;
  }

  .active {
    text-decoration: underline;
    font-weight: 450;
  }

  .button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    padding: 0;
    color: rgba(0, 0, 0, 0.5);
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .profile {
      top: 52%;
    }
    .change {
      position: absolute;
      top: 48.5%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .profile {
      top: 47%;
      width: 200px;
      height: 200px;
    }
    .change {
      position: absolute;
      top: 42.5%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .profile {
      top: 42%;
      width: 170px;
      height: 170px;
    }
    .change {
      position: absolute;
      top: 35.5%;
      left: 84%;
    }
    .name {
      font-size: 2.1875rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .profile {
      top: 32%;
      width: 150px;
      height: 150px;
    }
    .change {
      position: absolute;
      top: 26.5%;
      left: 80%;
      width: 90.44px;
      height: 60px;
    }
    .name {
      font-size: 2.1rem;
    }
    .cover {
      width: 87%;
    }
    .list {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .profile {
      top: 27%;
      width: 120px;
      height: 120px;
    }
    .change {
      top: 21%;
      left: 73%;
      width: 5.028rem;
      height: 3.125rem;
    }
    .name {
      font-size: 1.8rem;
    }
    .cover {
      width: 83%;
    }
    .list {
      font-size: 1.5rem;
    }
  }


  
`;


export default BuisnessProfile;
