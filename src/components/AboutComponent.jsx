import React, { useState } from "react";
import styled from "styled-components";

function AboutComponent() {
  const [category, setCategory] = useState("");
  const [mobileNumber, setMobileNumber] = useState("+20 1234567890");
  const [location, setLocation] = useState("");



  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };


  return (
    <AboutWrapper>
      <Header>CATEGORY</Header>

      <div className="options">
      <CategorySelector value={category} onChange={handleCategoryChange}>
        <option disabled value="">Select Category</option>
        <option value="Category 1">Venues</option>
        <option value="Category 2">Photographer </option>
        <option value="Category 3">Event Planners</option>
        <option value="Category 4">DJS</option>
        <option value="Category 5">Makeup Artist </option>
        <option value="Category 6">Food</option>
        <option value="Category 7">Hair Stylist</option> 
        <option value="Category 8">Other Details</option>
      </CategorySelector>
      </div>

      <Header>Mobile Number</Header>
      <MobileNumberInput
        type="number"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        placeholder="Mobile Number"
      />

      <Header>Location</Header>
      <LocationSelector value={location} onChange={handleLocationChange}>
        <option disabled value="">Select Location</option>
        <option value="Location 1">Cairo</option>
        <option value="Location 2">Ismailia</option>
        <option value="Location 3">Portsaid</option>
        <option value="Location 3">Alex</option>
      </LocationSelector>
  
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  margin-top: 25px;
  background-color:#FEF9F0;
  
  
`;

const Header = styled.div`
  font-size: 1.8rem;
    font-weight: 370;
    color: #00000099;
    padding-left: 4.3rem;
    margin-top: 2rem;


  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
  font-size:1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size:1.3rem;
  }
`;

const CategorySelector = styled.select`
  border: none;
  border-bottom: 0.013rem solid #ccc;
  margin-bottom: 0.625rem ;
  font-size: 1.6rem;
  width: 95%;
  font-weight: 370;
  color: #00000099;
  padding-left: 4.1rem;
  font-family: Literata;
  background-color: #FEF9F0;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
  font-size:1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size:1.3rem;
  }
`;
const MobileNumberInput = styled.input`
  border: none;
  border-bottom: 0.013rem solid #ccc;
  margin-bottom: 0.625 rem ;
  font-size: 1.6rem;
  width: 95%;
  font-weight: 370;
  color: #00000099;
  padding-left: 4.1rem;
  font-family: Literata;
  background-color: #FEF9F0;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
  font-size:1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size:1.3rem;
  }
`;

const LocationSelector = styled.select`
  border: none;
  border-bottom: 0.013rem solid #ccc;
  margin-bottom: 0.625rem;
  font-size: 1.6rem;
  width: 95%;
  font-weight: 370;
  color: #00000099;
  padding-left: 4.1rem;
  font-family: Literata;
  background-color: #FEF9F0;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
  font-size:1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size:1.3rem;
  }
`;



export default AboutComponent;
