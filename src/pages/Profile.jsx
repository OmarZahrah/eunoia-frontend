import { Outlet, useOutletContext, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useUser } from "../features/signup/useUser";
import styled from "styled-components";
import { useService } from "../features/signup/useService";
import Loading from "../components/Loading";
const Profile = () => {
  const { user, isLoading } = useUser();
  const { id } = useParams();
  // const { service, isLoading: serviceLoading } = useService(id);
  return (
    <Wrapper>
      <NavBar />
      {isLoading ? <Loading /> : <Outlet context={{ user }} />}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fef9f0;
`;

export default Profile;
