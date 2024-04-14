import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import MiniPackage from "../../components/MiniPackage";
import CreateMiniPackage from "../../components/CreateMiniPackage";
import { filterData } from "../../utils/filterData";
import { TiDeleteOutline } from "react-icons/ti";
const CreatePackage = () => {
  const [packages, setPackages] = useState([
    // {
    //   title: "Capacity",
    //   options: [
    //     { title: "150", price: 5000 },
    //     { title: "200", price: 5500 },
    //     { title: "300", price: 6000 },
    //     { title: "400", price: 7000 },
    //   ],
    // },
    // {
    //   title: "Desserts",
    //   options: [
    //     { title: "gateau", price: 3000 },
    //     { title: "2 mini pizza", price: 4500 },
    //     { title: "2 sticks baton sale", price: 2000 },
    //   ],
    // },
  ]);
  const [openPackage, setOpenPackage] = useState(false);
  const { register, handleSubmit } = useForm();
  const [packagePhoto, setPackagePhoto] = useState("");
  const onSubmit = (formData) => {
    const data = {
      ...formData,
      packagePhoto: packagePhoto,
      customizePackage: packages.length ? packages : "",
    };
    const filteredData = filterData(data);
    console.log(filteredData);
  };
  return (
    <Wrapper>
      <NavBar />
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <h1>Add Package</h1>
        <div className="field">
          <label>Package Name:</label>
          <input
            type="text"
            className="top-input"
            {...register("packageName")}
          />
        </div>
        <div className="field">
          <label>Description:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            {...register("description")}
          ></textarea>
        </div>
        <div className="field">
          <label>Price:</label>
          <input type="number" className="top-input" {...register("price")} />
        </div>
        <div className="field">
          <label>Package Photo:</label>
          <div className="img-container">
            {packagePhoto ? (
              <div className="image">
                <img src={URL.createObjectURL(packagePhoto)} />
                <TiDeleteOutline
                  className="delete-icon"
                  // onClick={() => handleDeleteImage(image)}
                />
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
        </div>
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
          Add Package
        </Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fef9f0;
  padding-bottom: 3rem;
  .container {
    padding: 0 4rem;
    h1 {
      text-align: center;
      font-size: 1.5rem;
      color: #444;
      margin-top: 1rem;
      margin-bottom: 4rem;
    }
    .field {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      margin-bottom: 2rem;
    }
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
      /* margin-top: 5rem; */
    }
  }
`;

export default CreatePackage;
