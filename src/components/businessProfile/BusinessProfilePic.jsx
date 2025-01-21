import { IoImageOutline } from "react-icons/io5";
import styled from "styled-components";

const BusinessProfilePic = ({ photo, defaultPhoto }) => {
  return (
    <Image className="image">
      {photo ? (
        <img className="profile-photo" src={photo} />
      ) : defaultPhoto ? (
        <img className="profile-photo" src={defaultPhoto} />
      ) : (
        <IoImageOutline className="image-icon" />
      )}
    </Image>
  );
};
const Image = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-grey-500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .profile-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default BusinessProfilePic;
