import { useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import defaultCover from "/images/defaults/default-cover.png";

const AlbumSwiper = ({ photos = [], cover }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const album = [cover || defaultCover, ...photos];
  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === album.length - 1 ? 0 : (prevIndex) => prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? album.length - 1 : (prevIndex) => prevIndex - 1
    );
  };
  return (
    <Wrapper>
      {/* <div className="overlay"></div> */}
      <div
        className="container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {album?.map((photo, index) => (
          <div key={index} className="img-container">
            <img className="album-image" src={photo} alt={`photo-${index}`} />
          </div>
        ))}
      </div>
      <button className="prev arrow" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="next arrow" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #14141415;
    z-index: 3;
  }
  .container {
    display: flex;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: 30.5rem;
    /* justify-content: center; */
  }
  .img-container {
    border-bottom-right-radius: 3rem;
    border-bottom-left-radius: 3rem;
    min-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f1e6;
  }
  .album-image {
    /* max-width: 100%; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    border: none;
    font-size: 2.5rem;
    color: #74ab706b;
    background: transparent;
    transform: translateY(-50%);
  }
  .arrow {
    z-index: 5;
  }
  .prev {
    top: 50%;
    left: 0;
  }
  .next {
    right: 0;
    top: 50%;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .container {
      max-height: 23.5rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .container {
      max-height: 15rem;
    }
  }
`;

export default AlbumSwiper;
