import styled from "styled-components";
import PackageCard from "./PackageCard";
const PackagesComponent = () => {
  return (
    <Wrapper>
      <PackageCard />
      <PackageCard />
      <PackageCard />
      <PackageCard type="add" />
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
`;

export default PackagesComponent;
