import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useUser } from "./useUser";
import styled from "styled-components";
import Loading from "../../components/Loading";

const Profile = () => {
  const { user, isLoading } = useUser();

  return (
    <Wrapper>{isLoading ? <Loading /> : <Outlet context={{ user }} />}</Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100%;
  background-color: #fef9f0;
`;

export default Profile;
