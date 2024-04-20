import styled from "styled-components";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
const PackagesComponent = ({ packages }) => {
  return (
    <Wrapper>
      {packages.map((pack) => (
        // <Link to={`/updatePackage/${pack._id}`} className="card" key={pack._id}>
        <div className="card" key={pack._id}>
          <PackageCard pack={pack} />
        </div>
      ))}

      <Link to="/createPackage" className="card">
        <PackageCard type="add" to="createPackage" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  /* flex-wrap: wrap; */
  gap: 20px;
  align-items: center;
  /* justify-content: space-between; */
  flex-wrap: wrap;
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
