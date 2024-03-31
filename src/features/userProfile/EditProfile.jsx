import styled from "styled-components";
import ProfilePic from "../../components/ProfilePic";
import EditName from "../../components/EditName";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useUserContext } from "../../context/UserContext";
import { useEditUser } from "./useEditUser";
import { useState } from "react";
function EditProfile() {
  const [change, setchange] = useState(false);
  const { register, handleSubmit } = useForm();
  const { avatar } = useUserContext();
  const { editUser, isLoading } = useEditUser();
  const onSubmit = (formData) => {
    const data = { ...formData, avatar: avatar };
    // console.log(data);
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        (el) =>
          el[1] !== "" &&
          el[1] !== null &&
          el[1] !== undefined &&
          el[0] !== "images"
      )
    );
    let finalData = new FormData();
    Object.keys(filteredData).forEach((key) =>
      finalData.append(key, filteredData[key])
    );
    editUser(finalData);
    setchange(false);
  };

  return (
    <Wrapper>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setchange(true)}
      >
        <div className="container">
          <ProfilePic form={true} register={register} />
          <EditName register={register} />
        </div>
        {change && (
          <Button
            type="submit"
            background="green"
            size="small"
            disabled={isLoading}
            className="submit"
          >
            {isLoading ? "Saving..." : "Save "}
          </Button>
        )}
      </form>
    </Wrapper>
  );
}

export default EditProfile;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #fef9f0;
  .container {
    display: flex;
    margin-top: 20px;
    /* padding: 20px; */
  }
  .submit {
    display: block;
    margin-left: auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;

    /*height: 60rem; */
    /* width: 30rem; */

    .container {
      display: flex;
      flex-direction: column;
      /* width: 10rem; */
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    /* height: auto; */
    .container {
      display: flex;
      flex-direction: column;
      margin-top: 0px;
    }
  }
`;
