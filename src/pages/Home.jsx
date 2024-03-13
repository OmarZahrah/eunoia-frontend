import { useUser } from "../features/signup/useUser";
import { useService } from "../features/signup/useService";
import { useUserContext } from "../context/UserContext";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
const Home = () => {
  const { user, isLoading } = useUser();
  return (
    <Wrapper>
      <NavBar userId={user?._id} />
      {isLoading ? <Loading /> : <></>}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fef9f0;
`;
export default Home;
