import styled from "styled-components";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import CreatePackage from "./CreatePackage";
import UpdatePackage from "./updatePackage";
const PackagesComponent = ({ packages }) => {
  return (
    <Wrapper>
      <Modal>
        {packages.map((pack) => (
          <Modal.Open opens="updatePackage" id={pack._id} key={pack._id}>
            <div className="card">
              <PackageCard pack={pack} />
            </div>
          </Modal.Open>
        ))}
        <Modal.Open opens="createPackage">
          <div className="card">
            <PackageCard type="add" to="createPackage" />
          </div>
        </Modal.Open>
        <Modal.Window name="updatePackage">{<UpdatePackage />}</Modal.Window>
        <Modal.Window name="createPackage">{<CreatePackage />}</Modal.Window>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 2rem;

  .card {
    min-width: 25%;
    width: 30%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .card {
      width: 100%;
    }
  }
`;

export default PackagesComponent;
