import styled from "styled-components";
import { FaStar, FaMapPin } from "react-icons/fa";
import photo from "../../public/images/Rectangle 9.png";
import mask from "../../public/images/Mask group.png";

const PackageWrapper = styled.div`
  padding-left: 8rem;
  position: relative;

  .details {
    position: relative;
    background-color: white;
    border-radius: 0.625rem 0.625rem 0 0;
    padding-left: 0.625rem;
    padding-bottom: 0.5rem;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height:100px;
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
    width: 500px;
    height: 200px;
    position: relative;
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
    left: 22%;
    width: 100%; 
    height: 100%; 
    z-index: 2; 
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .details {
  
    width: 400px;
    height:100px;
   
  }

  .photo-search {
    width: 400px;
    height: 150px;
    position: relative;
    z-index: 1; /* Set z-index to 1 for the search photo */
  }
  .mask-wrapper {
    position: absolute;
    top: 50%;
    left: 26%;
    width: 100%; 
    height: 100%; 
    z-index: 2; 
  }

    
  }
  
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .details {
  
    width: 370px;
    height:90px;
   
  }

  .photo-search {
    width: 370px;
    height: 130px;
    position: relative;
    z-index: 1; 
  }
  .mask-wrapper {
    position: absolute;
    top: 48%;
    left: 27%;
    width: 100%; 
    height: 100%; 
    z-index: 2; 
  }

  }
  
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
 .details {
  
    width: 340px;
    height:90px;
   
  }

  .photo-search {
    width: 340px;
    height: 130px;
    position: relative;
    z-index: 1; 
  }
  .mask-wrapper {
    position: absolute;
    top: 46%;
    left: 30%;
    width: 100%; 
    height: 100%; 
    z-index: 2; 
  }
  }

  @media only screen and (max-width: ${({ theme }) => theme.avg}) {
 .details {
  
    width: 450px;
    height:90px;
   
  }

  .photo-search {
    width: 450px;
    height: 130px;
    position: relative;
    z-index: 1; 
  }
  .mask-wrapper {
    position: absolute;
    top: 46%;
    left: 24%;
    width: 100%; 
    height: 100%; 
    z-index: 2; 
  }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {

 .details {
  
    width: 300px;
    height:90px;
   
  }

  .photo-search {
    width: 300px;
    height: 130px;
    position: relative;
    z-index: 1; 
  }
  .mask-wrapper {
    position: absolute;
    top: 46%;
    left: 30%;
    width: 100%; 
    height: 100%; 
    z-index: 2; 
  }
  }
  
  
`;

const MaskImage = styled.img`
  width: 80px;
  height: 80px;

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    width:60px;
    height:60px
  }
  
`;

function VenuePackages({ showRate }) {
  return (
    <PackageWrapper>
      <img className="photo-search" src={photo} />
      <div className="details">
        <h2 className="h2">Islam Tarek</h2>
        <h3 className="h3">
          {" "}
          <FaMapPin /> Cairo, Ismailia
        </h3>
        <div className="bottom-right">
          <p className="p">Starts from: 4000 EGP</p>
        </div>
        <div className="top-right">
          {showRate && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaStar style={{ color: "#FFF279", marginRight: "0.01rem" }} />
              <p className="p">{showRate}</p>
            </div>
          )}
        </div>
      </div>
      <div className="mask-wrapper">
        <MaskImage src={mask} alt="mask" />
      </div>
    </PackageWrapper>
  );
}

export default VenuePackages;
