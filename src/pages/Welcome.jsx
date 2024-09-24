import styled from "styled-components";
import image1 from "/images/welcome/unsplash-ebv-cs-rypmx-m.png";
import image2 from "/images/welcome/unsplash-fn-0-xxl-9-szc-u.png";
import image3 from "/images/welcome/unsplash-azod-v-2-d-0-g-lc.png";
import { device } from "..//assets/styles/breakpoints";

const Welcome = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={image1} alt="welcome-image" />
        <img src={image2} className="mobile-img" />
        <img src={image3} alt="welcome-img" />
      </ImageContainer>
      <TextContainer>
        <h1>Your Event, Perfected Here.</h1>
        <p>
          Empower your event dreams with our comprehensive platform, your
          ultimate guide to seamless and unforgettable gatherings.
        </p>
      </TextContainer>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: linear-gradient(to top, #fef9f0 55%, #fff 45%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    margin: 0;
  }

  img {
    width: 20%;
    @media ${device.mobile} {
      display: none;

      &.mobile-img {
        display: block;
        width: 80%;
      }
    }
  }
`;

const TextContainer = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-align: center;

  h1 {
    color: var(--color-black-light);
    font-size: 2.5rem;
    font-weight: 510;
    font-style: italic;
    letter-spacing: 0.0625rem;

    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  }

  p {
    width: 60%;
    color: var(--color-black-light);
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.0625rem;

    @media ${device.tablet} {
      width: 40%;
      font-size: 1rem;
    }

    @media ${device.mobile} {
      font-size: 0.8rem;
    }
  }
`;
