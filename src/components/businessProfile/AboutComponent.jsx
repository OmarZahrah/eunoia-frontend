import styled from "styled-components";
import Select from "../Select";
import { businessCategories, governorates } from "../../data/data";
import FormInput from "../FormInput";
import Input from "../Input";
import { useServiceContext } from "../../context/ServiceContext";
import SelectLocation from "../../components/SelectLocation";
import { device } from "../../assets/styles/breakpoints";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { useEditService } from "../../features/serviceProfile/useEditService";
import { useState } from "react";
import { createFormData } from "../../utils/createFormData";
import { filterData } from "../../utils/filterData";

function AboutComponent({ service }) {
  const [change, setChange] = useState(false);
  const [newPosition, setNewPosition] = useState([]);

  const { editService, isLoading: editing } = useEditService();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      businessCategory: service?.businessCategory,
      phoneNumber: service?.phoneNumber,
      location: service?.location,
      about: service?.about,
    },
  });

  function onSubmit(data) {
    const finalData = {
      ...data,
      latitude: newPosition[0],
      longitude: newPosition[1],
    };
    let formData = createFormData(filterData(finalData));
    editService(formData);
  }

  return (
    <AboutWrapper
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit);
      }}
      onChange={() => setChange(true)}
    >
      <Modal>
        <Details>
          <Select
            label="Category"
            options={businessCategories}
            name="businessCategory"
            register={register}
          />
          <FormInput label="Mobile Number">
            <Input type="text" id="mobile" {...register("phoneNumber")} />
          </FormInput>
          <div className="location-field">
            <Select
              label="governorate"
              options={governorates}
              name="location"
              register={register}
            />
            <Modal.Open opens="map">
              <span>Location</span>
            </Modal.Open>
          </div>
          <div className="about-box">
            <label htmlFor="">About</label>
            <textarea {...register("about")}></textarea>
          </div>
        </Details>
        <Modal.Window name="map">
          <Map>
            <SelectLocation
              defaultPosition={[service.latitude, service.longitude]}
              setChange={setChange}
              setNewPosition={setNewPosition}
            />
          </Map>
        </Modal.Window>
      </Modal>
      {change && (
        <Button
          type="submit"
          background="green"
          size="small"
          disabled={editing}
          className="submit"
          onClick={handleSubmit(onSubmit)}
        >
          {editing ? "Saving..." : "Save "}
        </Button>
      )}
    </AboutWrapper>
  );
}

const AboutWrapper = styled.form`
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
  .location-field {
    position: relative;
    span {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.2rem;
      color: var(--color-brand-green);
      cursor: pointer;
    }
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
  padding-top: 1.5rem;
`;

export default AboutComponent;
