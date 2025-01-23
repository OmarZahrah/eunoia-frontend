import styled from "styled-components";
import { useState } from "react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import MiniPackage from "../MiniPackage";
import CreateMiniPackage from "./CreateMiniPackage";
import { filterData } from "../../utils/filterData";
import { useAddPackage } from "../../features/package/useAddPackage";
import { device } from "../../assets/styles/breakpoints";

const CreatePackage = () => {
  const [packages, setPackages] = useState([]);
  const [openPackage, setOpenPackage] = useState(false);
  const { register, handleSubmit } = useForm();
  const { addPackage, isLoading } = useAddPackage();

  const onSubmit = (formData) => {
    const data = {
      ...formData,
      packagePhoto: "",
      customizePackage: packages.length ? packages : "",
    };
    const filteredData = filterData(data);
    addPackage(filteredData);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add Package</h1>
        <Field>
          <label>Package Name:</label>
          <input
            type="text"
            className="top-input"
            {...register("packageName", {
              required: "this field is required",
            })}
          />
        </Field>
        <Field>
          <label>Description:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            {...register("description", {
              required: "this field is required",
            })}
          ></textarea>
        </Field>
        <Field>
          <label>Price:</label>
          <input
            type="number"
            className="top-input"
            {...register("price", {
              required: "this field is required",
            })}
          />
        </Field>

        <div className="customized-package">
          <h2>Customized Package:</h2>
          {packages.map((miniPackage, i) => (
            <MiniPackage key={i} data={miniPackage} />
          ))}
          <span className="add" onClick={() => setOpenPackage(true)}>
            + Add customized package
          </span>
          {openPackage && (
            <CreateMiniPackage
              setPackages={setPackages}
              packages={packages}
              setOpenPackage={setOpenPackage}
            />
          )}
        </div>
        <Button className="submit-package" type="submit">
          {isLoading ? "Adding Package..." : "Add Package"}
        </Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70vh;
  max-height: 70vh;
  overflow-y: scroll;
  width: 70vw;
  background-color: #fef9f0;
  padding-bottom: 3rem;

  @media ${device.tablet} {
    width: 90vw;
  }
  @media ${device.tablet} {
    width: 100vw;
    height: 90vh;
  }
`;

const Form = styled.form`
  padding: 0 4rem;
  h1 {
    text-align: center;
    font-size: 1.5rem;
    color: #444;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 1.25rem;
    color: #444;
    margin-top: 3rem;
  }
  .add {
    color: var(--color-brand-green);
    cursor: pointer;
    font-size: 0.875rem;
    display: block;
    margin-top: 1rem;
  }
  .submit-package {
    display: block;
    margin: 5rem auto 0 auto;
  }
  @media ${device.mobile} {
    padding: 0 1rem;
    .add {
      margin-bottom: 15px;
    }
    .submit-package {
      width: 100%;
    }
  }
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem !important;

  .top-input {
    width: 70%;
    height: 3rem;
    background: transparent;
    outline: none;
    border: 1px solid #ddd;
  }
  input:hover,
  input:focus {
    outline: 1px solid #ddd;
  }

  textarea {
    width: 70%;
    background: transparent;
    height: 6rem;
    border: 1px solid #ddd;
  }
  textarea:hover,
  textarea:focus {
    outline: 1px solid #ddd;
  }
  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
    gap: 10px;

    .top-input {
      width: 100% !important;
    }
    input,
    textarea {
      font-size: 20px;
    }
    textarea {
      width: 100% !important;
    }
  }
`;
export default CreatePackage;
