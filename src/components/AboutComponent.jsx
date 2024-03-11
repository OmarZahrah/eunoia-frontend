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
      <div className="options">
        <div className="li">
          <Header>CATEGORY</Header>
          <CategorySelector value={category} onChange={handleCategoryChange}>
            <option disabled value="">
              Select Category
            </option>
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
        <div className="li">
          <Header>Mobile Number</Header>
          <MobileNumberInput
            type="number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Mobile Number"
          />
        </div>
        <div className="li">
          <Header>Location</Header>
          <LocationSelector value={location} onChange={handleLocationChange}>
            <option disabled value="">
              Select Location
            </option>
            <option value="Location 1">Cairo</option>
            <option value="Location 2">Ismailia</option>
            <option value="Location 3">Portsaid</option>
            <option value="Location 3">Alex</option>
          </LocationSelector>
        </div>
      </div>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  margin-top: 25px;
  background-color: #fef9f0;

  .options {
    padding: 0 0.625rem 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top : 0.325rem;
  }

.li{
  display: flex;
  flex-direction: column;
  gap:0.04rem;
}
`;

const Header = styled.label`
  font-size: 1.3rem;
  font-weight: 370;
  color: #00000099;


  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.3rem;
  }
`;

const CategorySelector = styled.select`
  border: none;
  border-bottom: 0.013rem solid #ccc;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  width: 95%;
  font-weight: 370;
  color: #00000099;
  font-family: Literata;
  background-color: #fef9f0;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.3rem;
  }
`;
const MobileNumberInput = styled.input`
  border: none;
  border-bottom: 0.013rem solid #ccc;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  width: 95%;
  font-weight: 370;
  color: #00000099;
  font-family: Literata;
  background-color: #fef9f0;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1rem;
  }
`;

const LocationSelector = styled.select`
  border: none;
  border-bottom: 0.013rem solid #ccc;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  width: 95%;
  font-weight: 370;
  color: #00000099;

  font-family: Literata;
  background-color: #fef9f0;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1rem;
  }
`;

export default AboutComponent;
