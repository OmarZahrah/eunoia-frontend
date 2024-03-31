import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const PackageWrapper = styled.div`
  .details {
    background-color: white;
    border-radius: 0.625rem;
    padding-left: 0.625rem;
    padding-bottom: 0.5rem;
    justify-content: space-between;
    align-items: center;
  }
  .h2 {
    color: #000000ae;
    font-size: 1.6rem;
    font-weight: 500;
  }
  .p {
    color: #000000ae;
    font-size: 1.4rem;
    font-weight: 300;
    margin-left: 0.25rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .h2 {
      font-size: 1.3rem;
    }
    .p {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .h2 {
      font-size: 1rem;
    }
    .p {
      font-size: 1rem;
    }
  }
`;

const Image = styled.img`
  height: auto;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 220px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 170px;
  }
`;

function VenuePackages({ image, title, price, width, showRate }) {
  return (
    <PackageWrapper>
      <Image src={image} alt={title} width={width} />
      <div className="details">
        <h2 className="h2">{title}</h2>
        <p className="p">{price}</p>
        {showRate && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaStar style={{ color: "#FFF279", marginRight: "0.25rem" }} />
            <p className="p">{showRate}</p>
          </div>
        )}
      </div>
    </PackageWrapper>
  );
}

export default VenuePackages;
