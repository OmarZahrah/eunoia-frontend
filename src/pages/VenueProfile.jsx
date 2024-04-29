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
import { useParams } from "react-router";
import { useService } from "../features/serviceProfile/useService";
import Loading from "../components/Loading";
import CoverSlider from "../components/CoverSlider";
import Slider from "../components/Slider";
import coverimg from "../../public/images/Rectangle 9.svg";
import DetailsCard from "../components/DetailsCard";
import man from "../images/man.png";
import table from "../images/table.png";
import { LuPencilLine } from "react-icons/lu";
import Reviews from "../components/Reviews";
import ScrollSection from "../components/ScrollSection";
import { useState } from "react";
import WriteReview from "../components/WriteReview";
import Map from "../components/Map";

function VenueProfile() {
  const { venuId } = useParams();
  const { service, isLoading } = useService(venuId);
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(service);
  return (
    <Wrapper>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="main">
          <div className="first-section">
            <div className="images">
              <Slider
                photos={service?.images}
                cover={service?.imageCover || coverimg}
              />
              <img className="profile" src={service?.avatar} alt="profile" />
            </div>

            {/* <CoverSlider photos={service.images} /> */}
            <div className="text">
              <p className="name-venue">{service?.businessName}</p>
              <p className="rate">
                <FaStar style={{ color: "#FFF279" }} />{" "}
                {service?.ratingsAverage}
              </p>
            </div>
            <p className="pin">
              <FaMapPin /> {service?.location}
            </p>
            <p className="pin">{service?.phoneNumber}</p>
            <div className="about">{service?.about}</div>
          </div>
          <div className="second-section">
            <p className="location">Location</p>
            <Map />
            {/* <img className="imgloc" src={imgloc} alt="map" /> */}
            {/* <a
              href="https://www.google.com/maps/search/?api=1&query=30.59569736038205,32.270704449476916"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-link"
            >
              Open in Google Maps
            </a> */}
          </div>
          <div className="third-section">
            {Boolean(service?.packages?.length) && (
              // <div className="third-section">
              //   <p className="location">Packages</p>
              //   <div className="packages-container">
              //     {service.packages?.map((pack) => (
              //       <DetailsCard
              //         key={pack._id}
              //         id={pack._id}
              //         link="package"
              //         image={outdoorr}
              //         title={pack.packageName}
              //         width={330}
              //         height={180}
              //       />
              //     ))}
              //   </div>
              // </div>
              <ScrollSection title="Packages">
                {service.packages?.map((pack) => (
                  <DetailsCard
                    key={pack._id}
                    id={pack._id}
                    link="package"
                    image={pack.packagePhoto || outdoorr}
                    title={pack.packageName}
                    width={330}
                    height={180}
                  />
                ))}
              </ScrollSection>
            )}
            {/* <div className="fourth-section"> */}
            {/* <p className="location">Similar</p> */}
            {/* <div className="packages-container"> */}
            <ScrollSection title="Similar">
              <DetailsCard
                image={table}
                title="The Garden"
                description="Photographers"
                width={330}
                height={180}
              />
              <DetailsCard
                image={table}
                title="The Garden"
                description="Photographers"
                width={330}
                height={180}
              />
              <DetailsCard
                image={table}
                title="The Garden"
                description="Photographers"
                width={330}
                height={180}
              />
              <DetailsCard
                image={table}
                title="The Garden"
                description="Photographers"
                width={330}
                height={180}
              />
            </ScrollSection>

            {/* </div> */}
            {/* <p className="reviews">
              Reviews
              <LuPencilLine className="icon" />
            </p> */}
            {/* <div className="reviews-container"> */}
            <ScrollSection title={"Reviews"}>
              <span className="add-review" onClick={() => setIsOpenModal(true)}>
                Add Review
              </span>
              {service?.reviews?.map((review) => (
                <Reviews
                  key={review._id}
                  id={review._id}
                  profilePic={review?.user?.avatar || man}
                  name={review?.user?.name}
                  rate={review?.ratings}
                  review={review?.title}
                />
              ))}
            </ScrollSection>
          </div>
          {isOpenModal && (
            <div className="bottom">
              {isOpenModal && (
                <WriteReview
                  serviceId={service._id}
                  openModal={setIsOpenModal}
                  setOpenModal={setIsOpenModal}
                />
              )}
              {isOpenModal && (
                <div
                  className="overlay"
                  onClick={() => setIsOpenModal(false)}
                ></div>
              )}
            </div>
          )}
        </div>
        // </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  /* height: 100%; */
  min-height: 100vh;
  padding-bottom: 2rem;
  position: relative;
  overflow: hidden;
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* top: 0; */
    width: 100vw;
    height: 100vh;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #00000040;
  }
  .main {
    margin: 0 auto;
    width: 90%;
  }
  .first-section {
    position: relative;
    padding-bottom: 1.5rem;
    margin-bottom: 4rem;
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
    /* width: 90%; */
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .images {
    position: relative;
    margin-bottom: 2rem;
  }
  .profile {
    position: absolute;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 50%);
  }

  .like {
    position: absolute;
    top: 5%;
    right: 7%;
  }

  .text {
    display: flex;
    justify-content: space-between;
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
    font-weight: 300;
    font-size: 1.3rem;
    margin-top: 5px;
  }
  .about {
    color: #06050599;
    margin-top: 1rem;
    width: 60%;
  }
  .location {
    /* padding-top: 1rem; */
    font-family: Literata;
    color: #00000099;
    font-size: 2.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .imgloc {
    width: 90%;
    /* height: 15rem; */
    /* height: auto; */
    display: block;
    margin: 0 auto;
  }

  .second-section {
    position: relative;
    /* width: 100%; */
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

  /* .packages-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #74ab70;
    border-radius: 5px;
  } */
  .packages-container {
    display: flex;
    gap: 1.2rem;
    overflow-x: auto;
    /* height: 220px; */
    height: 14rem;
    /* white-space: nowrap; */
    /* justify-content: space-evenly; */
  }
  .packages-container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
  }
  .packages-container::-webkit-scrollbar {
    height: 0.5rem;
  }
  .third-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .reviews {
    color: #00000099;
    font-size: 1.6rem;
    font-weight: 600;
  }
  .icon {
    color: #00000078;
    width: 1.7rem;
    height: 1.4rem;
    margin-left: 5px;
  }
  .reviews-container {
    display: flex;
    overflow-x: auto;
    /* width: 200rem; */
  }
  .reviews-container::-webkit-scrollbar {
    height: 0.5rem;
  }

  .reviews-container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
  }
  .add-review {
    position: absolute;
    right: 0;
    top: 0;
    color: #74ab70;
    cursor: pointer;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .name-venue {
      font-size: 1.5rem;
    }
    .rate {
      font-size: 1.5rem;
    }
    .pin {
      font-size: 1rem;
    }
    .location {
      font-size: 1.7rem;
    }
    .google-maps-link {
      font-size: 1rem;
    }
    .images {
      margin-bottom: 3rem;
    }
    .profile {
      width: 8rem;
      height: 8rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .name-venue {
      font-size: 1.2rem;
    }
    .rate {
      font-size: 1.2rem;
    }
    .location {
      font-size: 1.7rem;
    }
    .google-maps-link {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .profile {
      width: 7rem;
      height: 7rem;
    }
    .images {
      margin-bottom: 4rem;
    }
    .about {
      width: 100%;
    }
  }

  /*

    @media only screen and (max-width: 82em) {
      .imgloc {
        width: 900px;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .imgloc {
      width: 1100px;
    }
  }

  
    .imgloc {
      width: 940px;
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

  

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .img {
      width: 75%;
      padding-bottom: 1rem;
    }
    .like {
      right: 16%;
    }
    .name-venue {
      font-size: 1rem;
      font-weight: 400;
      padding-left: 0.01rem;
    }

    .text {
      display: flex;
      justify-content: space-between;
      padding: 0 4rem;
    }
    .location {
      padding-left: 3rem;
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
      padding-left: 3rem;
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
  } */
`;

export default VenueProfile;
