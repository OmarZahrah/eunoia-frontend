import styled from "styled-components";
import NavBar from "../components/NavBar";
import image from "../../public/images/unsplash.jpeg";
import { FaStar, FaMapPin } from "react-icons/fa";
import LoveButton from "../components/LoveButton";
import imgloc from "../../public/images/image 2.png";
import VenuePackages from "../components/VenuePackages";
import indoor from "../../public/images/indoor.jpeg";
import outdoorr from "../../public/images/outdoor.jpeg";
import firstpack from "../../public/images/firstpack.jpeg";
import secondpack from "../../public/images/secondpack.jpeg";
import thirdpack from "../../public/images/thirdpack.jpeg";

function VenueProfile() {
  return (
    <Wrapper>
      <NavBar />
      <div className="main">
        <div className="first-section">
          <div className="image-container">
            <img className="img" src={image} alt="venue" />
            <LoveButton className="like" />
          </div>
          <div className="text">
            <p className="name-venue">Mercure Al-Forsan Hotel</p>
            <p className="rate">
              <FaStar style={{ color: "#FFF279" }} /> 3.8
            </p>
          </div>
          <p className="pin">
            {" "}
            <FaMapPin /> Ismailia
          </p>
        </div>
        <div className="second-section">
          <p className="location">Location</p>
          <img className="imgloc" src={imgloc} alt="map" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=30.59569736038205,32.270704449476916"
            target="_blank"
            rel="noopener noreferrer"
            className="google-maps-link"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="third-section">
          <p className="location">Packages</p>
          <div className="packages-container">
            <VenuePackages
              image={indoor}
              width={280}
              title="Indoor Hall"
              price="13,500 EGP"
            />
            <VenuePackages
              image={outdoorr}
              width={280}
              title="Outdoor Venue"
              price="15,000 EGP"
            />
            
          </div>
        </div>
        <div className="fourth-section">
          <p className="location">Similar</p>
          <div className="packages-container">
            <VenuePackages
              image={firstpack}
              width={370}
              title="Omar Eleven"
              showRate={4.5}
            />
            <VenuePackages
              image={secondpack}
              width={370}
              title="Occhio Films"
              showRate={4}
            />
            <VenuePackages
              image={thirdpack}
              width={370}
              title=" Omar Eleven"
              showRate={3.5}
            />
            <VenuePackages
              image={secondpack}
              width={370}
              title="Occhio Films"
              showRate={3.5}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  height: 100%;

  .first-section {
    position: relative;
    padding-bottom: 1.5rem;
  }

  .first-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 0.013rem;
    background-color: #ccc; /* Border color */
  }

  .image-container {
    position: relative;
  }

  .img {
    width: 90%;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .like {
    position: absolute;
    top: 5%;
    right: 7%;
  }

  .text {
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
  }

  .name-venue {
    font-family: Literata;
    color: #00000099;
    font-size: 2.1rem;
    font-weight: 600;
  }

  .rate {
    font-family: Literata;
    color: #00000099;
    font-size: 1.8rem;
    font-weight: 350;
  }

  .pin {
    font-family: Literata;
    color: #00000099;
    padding-left: 5.2rem;
    font-weight: 300;
    font-size: 1.3rem;
  }

  .location {
    padding-left: 5.2rem;
    padding-top: 1rem;
    font-family: Literata;
    color: #00000099;
    font-size: 2.1rem;
    font-weight: 600;
  }

  .imgloc {
    width: 1210px;
    /* height: 450px; */
    height: auto;
    padding-top: 2.5rem;
    display: block;
    padding-left: 5.2rem;
  }

  .google-maps-link {
    display: block;
    margin-top: 0.5rem;
    font-family: Literata;
    color: #74ab70;
    font-size: 1.3rem;
    font-weight: 450;
    text-decoration: none;
    text-align: right;
    width: 84%;
    padding-bottom: 1.5rem;
  }
  .second-section {
    position: relative;
  }
  .second-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 0.013rem;
    background-color: #ccc; /* Border color */
  }

  .packages-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .third-section {
    position: relative;
    padding-bottom: 2rem;
  }
  .third-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 0.013rem;
    background-color: #ccc; /* Border color */
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .imgloc {
      width: 1200px;
      /* height: 450px; */
    }

    @media only screen and (max-width: 82em) {
      .imgloc {
        width: 900px;
        /* height: 450px; */
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .imgloc {
      width: 1100px;
      /* height: 450px; */
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .text {
      padding-top: 0.5rem;
    }

    .imgloc {
      width: 940px;
      /* height: 450px; */
      padding-top: 2rem;
    }

    .location {
      font-size: 1.9rem;
    }
    .name-venue {
      font-size: 1.9rem;
    }
    .rate {
      font-size: 1.6rem;
    }
    .img {
      width: 85%;
    }

    .like {
      right: 10%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.avg}) {
    .text {
      padding-top: 0.5rem;
    }

    .imgloc {
      width: 750px;
      /* height: 450px; */
      padding-top: 1.8rem;
    }

    .location {
      font-size: 1.6rem;
    }
    .name-venue {
      font-size: 1.6rem;
    }
    .rate {
      font-size: 1.3rem;
    }
    .img {
      width: 85%;
    }
    .like {
      right: 10%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .text {
      padding-top: 0.5rem;
    }

    .imgloc {
      width: 610px;
      padding-top: 1.3rem;
    }

    .location {
      font-size: 1.2rem;
    }
    .name-venue {
      font-size: 1.3rem;
    }
    .rate {
      font-size: 1.2rem;
    }
  }


  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .img {
      width: 75%;
      padding-bottom:1rem;
    }
    .like {
      right: 16%;
    }
    .name-venue{
      font-size:1rem;
     font-weight: 400;
     padding-left:0.01rem;
    }

    .text {
   
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    }
    .location{
      padding-left:3rem;
    }
    .pin {
    padding-left: 4rem;
    font-weight: 300;
    font-size: 1rem;
  }
  .google-maps-link {
    font-size: 1rem;

  }

    .imgloc {
      width: 350px;
      padding-top: 1.3rem;
      padding-left:3rem
    }

    .location {
      font-size: 1.2rem;
    }
    .name-venue {
      font-size: 1.3rem;
    }
    .rate {
      font-size: 1rem;
    }

  }
`;

export default VenueProfile;
