import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import Slider from "../components/Slider";
import coverimg from "../../public/images/Rectangle 9.svg";

function CoverPhotoSlider({ businessName, location, rate }) {
  return (
    <Wrapper>
      <div className="image">
        <Slider photos={coverimg} cover={coverimg} />
      </div>
      <div className="text">
        <p className="title">{businessName}</p>
        <span className="rate">
          <FaStar style={{ color: "#FFF279" }} /> {rate}
        </span>
      </div>
      <p className="description">{location}</p>
      <hr />
    </Wrapper>
  );
}

export default CoverPhotoSlider;

const Wrapper = styled.div`
  background-color: #fef9f0;

  .image {
    margin-bottom: 0.7rem;
  }

  .container {
    height: 25.5rem;
  }

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
    font-weight: 350;
  }

  .description {
    color: #06050599;
  }

  hr {
    width: 70%;
    border-color: rgba(0, 0, 0, 0.2);
    margin: 2rem auto;
  }
`;
