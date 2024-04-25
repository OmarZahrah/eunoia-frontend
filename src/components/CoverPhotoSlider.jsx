import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import Slider from "../components/Slider";
import coverImg from "../../public/images/Rectangle 9.svg";

function CoverPhotoSlider({ businessName, location, rate, image }) {
  return (
    <Wrapper>
      {/* <Slider photos={coverImg} cover={coverImg} /> */}
      <img src={image || coverImg} className="image" />
      <div className="text">
        <p className="title">{businessName}</p>
        <span className="rate">
          <FaStar style={{ color: "#FFF279" }} /> {rate || "4.5"}
        </span>
      </div>
      {/* <p className="description">{location}</p> */}
      <hr />
    </Wrapper>
  );
}

export default CoverPhotoSlider;

const Wrapper = styled.div`
  background-color: #fef9f0;

  .image {
    margin-bottom: 1rem;
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }

  /* .container {
    height: 25.5rem;
  } */

  .text {
    display: flex;
    justify-content: space-between;
  }
  .title {
    color: #00000099;
    font-size: 1.6rem;
    font-weight: 600;
  }

  .rate {
    color: #00000099;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .description {
    color: #06050599;
  }

  hr {
    width: 70%;
    border-color: rgba(0, 0, 0, 0.086);
    margin: 2rem auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .image {
      height: 21.5rem;
    }
    .title {
      font-size: 1.4rem;
    }
    .rate {
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .image {
      height: 20rem;
    }
    .title {
      font-size: 1.3rem;
    }
    .rate {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .image {
      height: 18rem;
    }
  }
  @media only screen and (max-width: 52.5em) {
    .image {
      height: 15rem;
    } 
    .title {
      font-size: 1.2rem;
    }
    .rate {
      font-size: 1.1rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .image {
      height: 12rem;
    } 
   
  }
`;
