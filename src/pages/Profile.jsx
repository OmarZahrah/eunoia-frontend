import styled from "styled-components";
import ProfilePic from "../components/userProfile/ProfilePic";
import List from "../features/userProfile/List";
import Spinner from "../components/Spinner";
import { useUser } from "../features/userProfile/useUser";
import { device } from "../assets/styles/breakpoints";

const Profile = () => {
  const { user, isLoading } = useUser();

  return (
    <Wrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePic picture={user.avatar} name={user?.name} />
          <List user={user} />
        </>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-brand-beige);
  display: flex;
  padding-top: 2rem;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export default Profile;
