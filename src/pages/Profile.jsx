import { Outlet, useOutletContext, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useUser } from "../features/signup/useUser";
import styled from "styled-components";
import { useService } from "../features/signup/useService";
import Loading from "react-loading";
const Profile = () => {
  const { user, isLoading } = useUser();
  const { id } = useParams();
  const { service } = useService(id);
  return (
    <Wrapper>
      <NavBar />
      <Outlet context={{ user, isLoading, service }} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fef9f0;
`;

export default Profile;
