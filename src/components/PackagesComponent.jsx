import { FaPlus, FaTrashAlt } from "react-icons/fa"; 
import { useState } from "react";
import styled from "styled-components";

function PackagesComponent() {
  const [packages, setPackages] = useState([]);
  const [newPackageTitle, setNewPackageTitle] = useState("");
  const [newPackageDescription, setNewPackageDescription] = useState("");
  const [newPackagePrice, setNewPackagePrice] = useState("");

  const handleAddPackage = () => {
    if (newPackageTitle && newPackagePrice) {
      setPackages([...packages, { title: newPackageTitle, description: newPackageDescription, price: newPackagePrice }]);
      setNewPackageTitle("");
      setNewPackageDescription("");
      setNewPackagePrice("");
    }
  };

  const handleDeletePackage = (index) => {
    const updatedPackages = [...packages];
    updatedPackages.splice(index, 1);
    setPackages(updatedPackages);
  };

  return (
    <PackagesWrapper>
      <PackageCard className="card">
        <AddPackageForm>
          <TitleInput
            type="text"
            placeholder="Package title"
            value={newPackageTitle}
            onChange={(e) => setNewPackageTitle(e.target.value)}
          />
          <DescriptionInput
            type="text"
            placeholder="Package description"
            value={newPackageDescription}
            onChange={(e) => setNewPackageDescription(e.target.value)}
          />
          <PriceInput
            type="text"
            placeholder="Package price"
            value={newPackagePrice}
            onChange={(e) => setNewPackagePrice(e.target.value)}
          />
          <AddPackageButton onClick={handleAddPackage}> 
            <FaPlus style={{ marginRight: "5px" }} /> 
            Add package
          </AddPackageButton>
        </AddPackageForm>
      </PackageCard>
      {packages.map((packageItem, index) => (
        <PackageCard key={index}>
          <PackageTitle>{packageItem.title}</PackageTitle>
          <PackageDescription>{packageItem.description}</PackageDescription>
          <PackagePrice>{packageItem.price}</PackagePrice>
          <DeleteButton onClick={() => handleDeletePackage(index)}>
            <FaTrashAlt style={{ marginRight: "5px" }} /> Delete
          </DeleteButton>
        </PackageCard>
      ))}
    </PackagesWrapper>
  );
}

const PackagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  background-color: #fef9f0;
  padding-left: 5rem;
  padding-right: 5em;

`;

const PackageCard = styled.div`
  padding: 1.25rem;
  padding-top: 1.875rem;
  background-color: #f5b9a72c;
  box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  width: calc(40% - 40px);
  height: 200px;
  border-radius: 3.125rem;
  margin-bottom: 1.25rem;
  position: relative; 

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
  width: calc(100% - 20px);
  height: 210px;
 
    
}

@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
  width: calc(100% - 30px);
  height: 210px;
}
@media only screen and (max-width: ${({ theme }) => theme.semi}) {
  width: calc(100% - 10px);
  height: 210px;
  }
`;

const PackageTitle = styled.h2`
font-size: 1.3rem;
  margin-bottom: 0.125rem;
  color: #00000099;
  justify-self: start;

`;

const PackageDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.125rem;
  color: #00000099;
  justify-self: start;
`;

const PackagePrice = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.125rem;
  color: #00000099;
  justify-self: start;
`;

const AddPackageForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddPackageButton = styled.button`
  background-color: transparent;
  border: none;
  color: #00000099;
  font-size: 1rem;
  cursor: pointer;
  outline: none; 
`;

const DeleteButton = styled.button`
  position: absolute;
  bottom: 0.625rem;
  right: 5rem; 
  background-color: transparent; 
  border: none;
  color: #00000099; 
  font-size: 1rem;
  cursor: pointer;
  outline: none;
`;

const TitleInput = styled.input`
   margin-bottom: 0.625rem;
  padding: 0.313rem;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  outline: none;
`;

const DescriptionInput = styled.input`
  margin-bottom: 0.625rem;
  padding: 0.313rem;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  outline: none;
`;

const PriceInput = styled.input`
  margin-bottom: 0.625rem;
  padding: 0.313rem;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  outline: none;
`;


export default PackagesComponent;
