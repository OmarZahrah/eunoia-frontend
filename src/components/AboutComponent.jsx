import React, { useState } from "react";
import styled from "styled-components";
import Select from "./Select";
import { businessCategories, governorates } from "../data/data";
import FormInput from "./FormInput";
import Input from "./Input";
import { useServiceContext } from "../context/ServiceContext";

function AboutComponent({ service }) {
  const [category, setCategory] = useState("");
  const [mobileNumber, setMobileNumber] = useState("+20 1234567890");
  const [location, setLocation] = useState("");
  const { register } = useServiceContext();

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
      <Select
        label="Category"
        options={businessCategories}
        name="businessCategory"
        placeholder={service.businessCategory}
        register={register}
      />
      <FormInput label="Mobile Number">
        <Input
          type="text"
          id="mobile"
          // placeholder="+20 1234567890"
          placeholder={service.phoneNumber}
          {...register("phoneNumber")}
        />
      </FormInput>
      <Select
        label="Location"
        options={governorates}
        name="location"
        placeholder={service.location}
        register={register}
      />
      <div className="about-box">
        <label htmlFor="">About</label>
        <textarea
          {...register("about")}
          // value="test test test"
          placeholder={service.about}
        ></textarea>
      </div>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  margin-top: 25px;
  /* background-color: #fef9f0; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .select-box {
    width: 100%;
  }
  label {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 0;
  }
  select {
    box-shadow: none;
    border-radius: 0;
    /* padding: 0; */
    background-color: transparent;
    border-bottom: 0.2px solid #ccc;
    padding-left: 0;
  }
  input {
    box-shadow: none;
    border-radius: 0;
    /* padding: 0; */
    background-color: transparent;
    border-bottom: 0.2px solid #ccc;
    width: 100%;
  }
  .about-box {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  textarea {
    border: none;
    width: 100%;
    min-height: 6rem;
    box-shadow: 0px 2px 11px -5px rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    background-color: #fbf8f2;
    outline: none;
  }
  /* 
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
  } */
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    label {
      font-size: 1.24rem;
    }
  }
`;

export default AboutComponent;
