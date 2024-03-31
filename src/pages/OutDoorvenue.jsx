import styled from "styled-components";
import NavBar from "../components/NavBar";
import LoveButton from "../components/LoveButton";
import out from "../../public/images/outdoorven.jpeg";
import { FaStar} from "react-icons/fa";

function OutDoorvenue() {
    return (
        
            <Wrapper>
                <NavBar/>
                <div className="out-main">
        <div className="first-section">
          <div className="image-container">
            <img className="img" src={out} alt="venue" />
            <LoveButton className="like" />
          </div>
          <div className="text">
            <p className="name-venue">Outdoor Venue</p>
            <p className="rate">
              <FaStar style={{ color: "#FFF279" }} /> 4.5
            </p>

          </div>
          <p className="pin">
            {" "}
            Mercure Al-Forsan Hotel
          </p>
        
        </div>
        <div className="second-section">
          <p className="location">Description</p>
          <p className="pin">
            {" "}
            Perfect for hosting events, provides an idyllic backdrop for intimate gatherings, and special 
            <br/>
           occasions.
          </p>
        </div>
        <div className="third-section">
          <p className="location">Customize Package</p>
          <p className="pin">
            {" "}
            The venue only for 15,000 EGP
           
          </p>
        </div>
        
        </div>
            </Wrapper>
       
    )
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
    background-color: #ccc; 
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
`

export default OutDoorvenue
