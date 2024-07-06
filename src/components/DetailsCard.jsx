import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import outdoorr from "../../public/images/outdoor.jpeg";

function DetailsCard({
  image,
  title,
  description,
  width,
  height,
  id,
  link,
  rate,
  price,
  location,
}) {
  return (
    <Link to={`/${link}/${id}`}>
      <Wrapper width={width} height={height}>
        <img src={image || outdoorr} alt={title} />
        <div>
          <p>{title}</p>
          <div className="description">
            {description && <span className="price">{description}</span>}
            {price && <span className="price">{price} EGP</span>}
            {location && <span className="price">{location} </span>}
            <span className="rate">
              <FaStar style={{ color: "#FFF279", marginRight: "0.01rem" }} />{" "}
              {rate}
            </span>
          </div>
        </div>
      </Wrapper>
    </Link>
  );
}

export default DetailsCard;

const Wrapper = styled.div`
  width: ${(props) => props.width}px;
  /* height: ${(props) => props.height}px; */
  /* height: fit-content; */
  position: relative;

  img {
    width: 100%;

    height: 10rem;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    /* border-radius: 10px; */
  }
  div {
    background-color: white;
    width: 100%;
    color: #000000ae;
    /* border-radius: 10px; */
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 5px 10px;
    margin-top: -5px;
    /* position: absolute;
    top: 80%; */
  }
  p {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .description {
    padding: 0;
    width: 100%;
    display: flex;
  }
  .price {
    color: gray;
    font-size: 0.9rem;
    margin-top: 5px;
    font-weight: 400;
  }
  .rate {
    margin-left: auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    /* width: ${(props) => props.width * 0.8}px;
    height: ${(props) => props.height * 0.8}px; */
    p {
      font-size: 1.1rem;
      font-weight: 500;
    }
    span {
      font-size: 0.9rem;
      font-weight: 400;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 21rem;
    /* width: ${(props) => props.width * 0.7}px; */
    /*height: ${(props) => props.height * 0.7}px; */
  }
`;
