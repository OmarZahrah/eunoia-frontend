import styled from "styled-components";
import NavBar from "../components/NavBar";
import CoverPhotoSlider from "../components/CoverPhotoSlider";
import TitleDesc from "../components/TitleDesc";
import CustomizeDetails from "../components/CustomizeDetails";
import Button from "../components/Button";
import { LuPencilLine } from "react-icons/lu";
import Reviews from "../components/Reviews";
import man from "../images/man.png";
function CustomizePackage() {
  return (
    <Wrapper>
      <NavBar />
      <div className="content">
        <CoverPhotoSlider
          businessName={"Outdoor Venue"}
          location={"Mercure Al-Forsan"}
          rate={"4.5"}
        />
        <TitleDesc
          title={"Description"}
          description={
            "Perfect for hosting events, provides an idyllic backdrop for intimate gatherings, and special occasions. "
          }
        />
        <TitleDesc
          title={"Customize Package"}
          description={"The venue only for 15,000 EGP"}
        />
        <CustomizeDetails title={"Capacity"} />
        <CustomizeDetails title={"Capacity"} />
        <CustomizeDetails title={"Capacity"} />
        <p className="total">
          Total: <span className="price">3270 EGP</span>
        </p>
        {/* <br/> */}
        <div className="button">
          <Button size="medium" type="submit" className="button">
            Request Reservation
          </Button>
        </div>
        <hr className="hr" />
        <p className="reviews">Reviews</p>
        <LuPencilLine className="icon" />
        <div className="reviews-container">
          <Reviews
            profilePic={man}
            name={"Sara Mohammed"}
            rate={4.5}
            review={
              "Very helpful and friendly, birthday memories beautifully captured!"
            }
          />
          <Reviews
            profilePic={man}
            name={"Sara Mohammed"}
            rate={4.5}
            review={
              "Very helpful and friendly, birthday memories beautifully captured!"
            }
          />
          <Reviews
            profilePic={man}
            name={"Sara Mohammed"}
            rate={4.5}
            review={"Very"}
          />
          <Reviews
            profilePic={man}
            name={"Sara Mohammed"}
            rate={4.5}
            review={
              "Very helpful and friendly, birthday memories beautifully captured!"
            }
          />
          <Reviews
            profilePic={man}
            name={"Sara Mohammed"}
            rate={4.5}
            review={
              "Very helpful and friendly, birthday memories beautifully captured!"
            }
          />
          <Reviews
            profilePic={man}
            name={"Sara Mohammed"}
            rate={4.5}
            review={
              "Very helpful and friendly, birthday memories beautifully captured!"
            }
          />
          <Reviews
            profilePic={man}
            name={"Sara Mohammed"}
            rate={4.5}
            review={"Very "}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default CustomizePackage;

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
  .content {
    padding: 0 4rem;
  }

  .total {
    color: #00000099;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
  }
  .price {
    font-size: 1.3rem;
    font-weight: 400;
  }
  .button {
    text-align: center;
    font-size: 20px;
  }
  .hr {
    width: 70%;
    border-color: rgba(0, 0, 0, 0.2);
    margin: 2rem auto;
  }
  .reviews {
    color: #00000099;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 15px;
    display: inline;
    padding-right: 8px;
  }
  .icon {
    color: #00000078;
    width: 1.7rem;
    height: 1.4rem;
  }
  .reviews-container {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 1.2rem;
  }

  .reviews-container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
  }

  .reviews-container::-webkit-scrollbar {
    height: 0.5rem;
  }
`;
