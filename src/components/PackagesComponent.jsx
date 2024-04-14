import styled from "styled-components";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
const PackagesComponent = () => {
  return (
    <Wrapper>
      <Link className="card">
        <PackageCard />
      </Link>
      <Link className="card">
        <PackageCard />
      </Link>
      <Link className="card">
        <PackageCard />
      </Link>
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
`;

export default PackagesComponent;
