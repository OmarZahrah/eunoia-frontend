import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Category from "../../components/Category";
import { useGetServices } from "./useGetServices";
import Loading from "../../components/Loading";

function MakeupArtist() {
  const { allServices, isLoading } = useGetServices([{ category: "Food" }]);
  return (
    <Wrapper>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <Category data={allServices} title=" Food" />
      )}{" "}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
`;

export default MakeupArtist;
