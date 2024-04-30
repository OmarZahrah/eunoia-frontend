import styled from "styled-components";
import { FaStar, FaMapPin } from "react-icons/fa";
import photo from "../../public/images/Rectangle 9.png";
import mask from "../../public/images/Mask group.png";
import { Link } from "react-router-dom";

const PackageWrapper = styled.div`
  /* padding-left: 8rem; */
  width: 100%;
  position: relative;
  cursor: pointer;

  .details {
    position: relative;
    background-color: white;
    border-radius: 0.625rem 0.625rem 0 0;
    padding-left: 0.625rem;
    padding-bottom: 0.5rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding-top: 30px;
    z-index: 1;
  }

  .h2 {
    color: #000000ae;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .h3 {
    font-family: Literata;
    color: #00000099;
    font-weight: 300;
    font-size: 1rem;
  }

  .p {
    color: #000000ae;
    font-size: 1rem;
    font-weight: 300;
    margin-left: 1rem;
  }

  .photo-search {
    width: 100%;
    height: 200px;
    position: relative;
    object-fit: cover;
    z-index: 1; /* Set z-index to 1 for the search photo */
  }

  .bottom-right {
    position: absolute;
    bottom: 8%;
    right: 2.5%;
    display: flex;
    align-items: center;
  }

  .top-right {
    position: absolute;
    top: 8%;
    right: 2.5%;
    display: flex;
    align-items: center;
  }

  .mask-wrapper {
    position: absolute;
    top: 50%;
    left: 5%;
    /* width: 100%; */
    /* height: 100%; */
    z-index: 2;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
  }

  @media only screen and (max-width: ${({ theme }) => theme.avg}) {
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .photo-search {
      width: 100%;
      height: 130px;
      position: relative;
      z-index: 1;
    }
  }
`;

const MaskImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    width: 60px;
    height: 60px;
  }
`;

function VenuePackages({ showRate, className, data, favorites }) {
  return (
    <Link className="link" to={`/venueprofile/${data?._id}`}>
      <PackageWrapper>
        <img className="photo-search" src={data?.imageCover || photo} />
        <div className="details">
          <h2 className="h2">{data?.businessName}</h2>
          <h3 className="h3">
            {" "}
            <FaMapPin /> {data?.location}
          </h3>
          <div className="bottom-right">
            <p className="p">Starts from: 4000 EGP</p>
          </div>
          <div className="top-right">
            {showRate && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaStar style={{ color: "#FFF279", marginRight: "0.01rem" }} />
                <p className="p">{data?.ratingsAverage || ""}</p>
              </div>
            )}
          </div>
        </div>
        <div className="mask-wrapper">
          <MaskImage src={data.avatar || mask} alt="mask" />
        </div>
      </PackageWrapper>
    </Link>
  );
}

export default VenuePackages;
