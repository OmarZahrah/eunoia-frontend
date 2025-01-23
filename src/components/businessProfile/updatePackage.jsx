import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import MiniPackage from "../MiniPackage";
import CreateMiniPackage from "./CreateMiniPackage";
import { filterData } from "../../utils/filterData";
import { TiDeleteOutline } from "react-icons/ti";
import { createFormData } from "../../utils/createFormData";
import { useGetPackage } from "../../features/package/useGetPackage";
import { useEditPackage } from "../../features/package/useEditPackage";
import { useAddPhoto } from "../../features/package/useAddPhoto";
import { CiEdit } from "react-icons/ci";
import { device } from "../../assets/styles/breakpoints";
const UpdatePackage = ({ id: packageId }) => {
  const { packageData, isLoading: loadingPackage } = useGetPackage(packageId);
  const { addPhoto, isLoading: addingPhoto } = useAddPhoto();
  const [packages, setPackages] = useState([]);
  const [openPackage, setOpenPackage] = useState(false);
  const { register, handleSubmit } = useForm();
  const [packagePhoto, setPackagePhoto] = useState("");
  const { editPackage, isLoading } = useEditPackage();
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    const func = () => {
      if (packageData) {
        setPackages(packageData.customizePackage);
        setPhoto(packageData.packagePhoto);
      }
    };
    func();
  }, [packageData]);

  const onSubmit = (formData) => {
    const data = {
      ...formData,
      packagePhoto: "",
      customizePackage: packages.length ? packages : "",
    };
    const filteredData = filterData(data);
    if (packagePhoto) {
      const photo = createFormData({ packagePhoto: packagePhoto });
      addPhoto({ id: packageData._id, photo: photo });
    }

    editPackage({ id: packageId, data: filteredData });
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Update Package</h1>
        <Field>
          <label>Package Name:</label>
          <input
            type="text"
            className="top-input"
            defaultValue={packageData?.packageName}
            {...register("packageName")}
          />
        </Field>
        <Field>
          <label>Description:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            defaultValue={packageData?.description}
            {...register("description")}
          ></textarea>
        </Field>
        <Field>
          <label>Price:</label>
          <input
            type="number"
            defaultValue={packageData?.price}
            className="top-input"
            {...register("price")}
          />
        </Field>
        <Field>
          <label>Package Photo:</label>
          <div className="img-container">
            {packagePhoto ? (
              <div className="image">
                <img src={URL.createObjectURL(packagePhoto)} />
                <TiDeleteOutline
                  className="delete-icon"
                  onClick={() => setPackagePhoto("")}
                />
              </div>
            ) : photo ? (
              <div className="image">
                <img src={packageData.packagePhoto} />
                <CiEdit className="edit-icon " onClick={() => setPhoto("")} />
              </div>
            ) : (
              <label className="img-label">
                Select File
                <input
                  type="file"
                  className="img-input top-input"
                  {...register("packagePhoto")}
                  onChange={(e) => setPackagePhoto(e.target.files[0])}
                />
              </label>
            )}
          </div>
        </Field>
        <div className="customized-package">
          <h2>Customized Package:</h2>
          {packages?.map((miniPackage, i) => (
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
          {isLoading || addingPhoto ? "Updating Package..." : "Update Package"}
        </Button>
      </Form>
    </Wrapper>
  );
};

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
  .img-container {
    width: 70%;
  }
  .img-label {
    border: 1px solid var(--color-brand-green);
    padding: 5px 10px;
    color: var(--color-brand-green);
  }
  .img-label:hover {
    background-color: var(--color-brand-green);
    color: #fff;
    cursor: pointer;
  }
  .img-input {
    display: none;
  }
  .image {
    position: relative;
    width: fit-content;
  }
  .image img {
    border: 2px solid var(--color-grey-500);
    width: 100px;
  }
  .edit-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    transform: translateX(50%);
    background-color: #fef9f0;
    color: #555;
    border-radius: 50%;
    cursor: pointer;
  }
  .delete-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    transform: translateX(50%);
    background-color: #a00808;
    border-radius: 50%;
    cursor: pointer;
  }

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
    gap: 10px;

    input,
    textarea {
      font-size: 20px;
    }
    .top-input {
      width: 100% !important;
    }
    .add {
      margin-bottom: 15px;
    }
    .submit-package {
      width: 100%;
    }
    textarea {
      width: 100% !important;
    }
  }
`;

const Wrapper = styled.div`
  width: 70vw;
  height: 70vh;
  max-height: 70vh;
  background-color: #fef9f0;
  padding-bottom: 3rem;
  overflow-y: scroll;
  @media ${device.tablet} {
    width: 90vw;
  }
  @media ${device.tablet} {
    width: 100vw;
    height: 90vh;
  }
`;

export default UpdatePackage;
