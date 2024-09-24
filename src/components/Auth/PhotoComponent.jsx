import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";

function PhotoComponent({ image, heading, text }) {
  return (
    <Wrapper>
      <div className="header-container">
        <p>{text}</p>
        <h1>{heading}</h1>
      </div>
      <img src={image} alt="Welcome-image" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  background-color: var(--color-brand-beige);
  border-radius: 5.625rem 0 0 5rem;
  text-align: center;
  padding: 3.75rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    display: none;
  }

  p {
    color: var(--text, rgba(0, 0, 0, 0.6));
    text-align: center;
    font-family: Literata;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.026rem;
    @media ${device.laptop} {
      font-size: 1.5rem;
    }
  }
  h1 {
    color: var(--pink, #f5b9a7);
    font-family: Literata;
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.313rem;
    padding-bottom: 4.375rem;
    @media ${device.laptop} {
      font-size: 2.5rem;
    }
    @media ${device.tablet} {
      font-size: 2rem;
    }
  }
  img {
    width: 60%;
    @media ${device.laptop} {
      width: 60%;
    }
  }
`;
export default PhotoComponent;
