import styled from "styled-components";
import NavBar from "../components/NavBar";
import Category from "../components/Category";
import { useGetServices } from "../features/categories/useGetServices";
import Loading from "../components/Loading";
import { FaRegHeart } from "react-icons/fa6";

function Photographers() {
  const { allServices, isLoading } = useGetServices([
    { category: "photographers" },
  ]);
  return (
    <Wrapper>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <Category data={allServices} title="Photographers" />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
`;

export default Photographers;
