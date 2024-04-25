import styled from "styled-components";
import FormInput from "../../components/FormInput";
import { IoImageOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import Input from "../../components/Input";

const Step2 = () => {
  const {
    profilePhoto,
    profilePhotoFile,
    setProfilePhoto,
    setProfilePhotoFile,
  } = useAuthContext();
  const { register } = useAuthContext();

  // const [profilePhoto, setProfilePhoto] = useState("");
  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    setProfilePhotoFile(selectedFiles[0]);
    const photo = URL.createObjectURL(...selectedFiles);
    setProfilePhoto(photo);
  };
  return (
    <Wrapper>
      <div className="image-box">
        <div className="image">
          <label className="image-uploader">
            {!profilePhoto && <IoImageOutline className="image-icon" />}
            {profilePhoto && (
              <img className="profile-photo" src={profilePhoto} />
            )}
            <input
              {...register("avatar")}
              className="image-input"
              type="file"
              onChange={onSelectFile}
            />
            <MdAdd className="add-icon" />
          </label>
        </div>
        <div className="image-text">
          <h3>Upload Your Profile Picture</h3>
          <p>Preferably Your Personal Photo</p>
        </div>
      </div>

      <FormInput label="Mobile Number">
        <Input
          type="text"
          id="mobile"
          placeholder="+20 1234567890"
          {...register("phoneNumber")}
        />
      </FormInput>
      <div className="about-box">
        <label htmlFor="">About</label>
        <textarea
          {...register("about")}
          // value="test test test"
          placeholder="Describe Your Business"
        ></textarea>
      </div>
    </Wrapper>
  );
};
export default Step2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem;
  .image-box {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .image-uploader {
    width: 7rem;
    height: 7rem;
    border: 1px solid var(--color-grey-500);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
  .profile-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .image-input {
    display: none;
  }
  .image-icon {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
  }
  .add-icon {
    position: absolute;
    bottom: 0;
    left: 60%;
    color: #fff;
    border-radius: 50%;
    background-color: var(--color-brand-pink);
    transform: translate(50%, 50%);
    width: 24px;
    height: 24px;
    transform: translateX(50%);
  }
  .image-text {
    color: var(--color-black-light);
  }
  .about-box {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  textarea {
    border: none;
    width: 60%;
    height: 5rem;
    box-shadow: 0px 2px 11px -5px rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    font-size: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    textarea {
      width: 100%;
      height: 8rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
