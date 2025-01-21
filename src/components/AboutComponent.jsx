import styled from "styled-components";
import Select from "./Select";
import { businessCategories, governorates } from "../data/data";
import FormInput from "./FormInput";
import Input from "./Input";
import { useServiceContext } from "../context/ServiceContext";
import SelectLocation from "../components/SelectLocation";
import { device } from "../assets/styles/breakpoints";

function AboutComponent({ service }) {
  const { register } = useServiceContext();

  return (
    <AboutWrapper>
      <Details>
        <Select
          label="Category"
          options={businessCategories}
          name="businessCategory"
          placeholder={service?.businessCategory}
          register={register}
        />
        <FormInput label="Mobile Number">
          <Input
            type="text"
            id="mobile"
            // placeholder="+20 1234567890"
            placeholder={service?.phoneNumber}
            {...register("phoneNumber")}
          />
        </FormInput>
        <div className="location-field">
          <Select
            label="governorate"
            options={governorates}
            name="location"
            placeholder={service?.location}
            register={register}
          />
        </div>
        <div className="about-box">
          <label htmlFor="">About</label>
          <textarea
            {...register("about")}
            // value="test test test"
            placeholder={service?.about}
          ></textarea>
        </div>
      </Details>
      <Map>
        <SelectLocation
          defaultPosition={[service.latitude, service.longitude]}
        />
      </Map>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  gap: 1rem;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;
const Details = styled.div`
  flex: 2;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 5px;
    display: block;
  }
  select {
    box-shadow: none;
    border-radius: 0;
    background-color: transparent;
    border-bottom: 0.2px solid #ccc;
    padding-left: 0;
  }
  input {
    box-shadow: none;
    border-radius: 0;
    background-color: transparent;
    border-bottom: 0.2px solid #ccc;
    width: 100%;
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

  @media ${device.mobile} {
    label {
      font-size: 1.24rem;
    }
  }
`;
const Map = styled.div`
  flex: 1;
  padding-top: 1rem !important;
`;

export default AboutComponent;
