import styled from "styled-components";
import NavBar from "../components/NavBar";
import Category from "../components/Category";
import { useGetServices } from "../features/categories/useGetServices";
import Loading from "../components/Loading";
function Search() {
  const { allServices, isLoading } = useGetServices([
    { category: "photographers" },
  ]);
  console.log(allServices);
  return (
    <Wrapper>
      <NavBar />
      {isLoading ? <Loading /> : <Category data={allServices} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
`;

export default Photographers;
