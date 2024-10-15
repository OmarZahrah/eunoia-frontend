import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEditUser } from "./useEditUser";
import { device } from "../../assets/styles/breakpoints";

import ProfilePic from "../../components/userProfile/ProfilePic";
import Select from "../../components/Select";
import Button from "../../components/Button";

import { LuPencilLine } from "react-icons/lu";
import { governorates } from "../../data/data";
import filterEmptyFields from "../../utils/filterEmptyFields";

function EditForm({ user }) {
  const { editUser, isLoading: isEditing } = useEditUser();

  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      location: user.location,
    },
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    const filteredData = filterEmptyFields(data);
    const formData = new FormData();

    // Append all form fields to FormData, including file uploads
    Object.entries(filteredData).forEach(([key, value]) => {
      if (key === "avatar" && value && value.length > 0) {
        formData.append(key, value[0]); // Add the File object itself for the avatar
      } else {
        formData.append(key, value); // Add other fields as usual
      }
    });

    console.log(Object.fromEntries(formData));
    editUser(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <ProfilePic
          type="form"
          picture={user.avatar}
          name={user.name}
          register={register}
        />
        <Inputs>
          <h1>Edit Profile</h1>
          <div className="row">
            <label htmlFor="name">Name</label>
            <div className="input-row">
              <Input id="name" type="text" {...register("name")} />
              <LuPencilLine className="icon" />
            </div>
          </div>
          <div className="row">
            <label htmlFor="email">EMAIL</label>
            <div className="input-row">
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "this field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
              <LuPencilLine className="icon" />
            </div>
            {errors && <span className="error">{errors?.email?.message}</span>}
          </div>

          <Select
            label="Location"
            options={governorates}
            id="location"
            name="location"
            register={register}
          />
        </Inputs>
      </div>
      <Button
        type="submit"
        background="green"
        size="small"
        disabled={isEditing}
        className="submit"
      >
        {isEditing ? "Saving..." : "Save "}
      </Button>
    </Form>
  );
}

export default EditForm;

const Form = styled.form`
  min-height: 100vh;
  background: #fef9f0;
  padding-top: 2rem;
  padding-right: 7rem;
  .container {
    display: flex;
    margin-bottom: 2rem;

    .error {
      display: block;
      font-size: 14px;
      color: red;
    }
  }
  button {
    display: block;
    margin-left: auto;
  }

  @media ${device.tablet} {
    padding: 4rem;
    .container {
      flex-direction: column;
      gap: 2.5rem;
    }
  }
  @media ${device.mobile} {
    padding: 1rem;
  }
`;

const Inputs = styled.div`
  flex: 2;
  padding-left: 2rem;
  h1 {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.593);
    font-weight: bold;
    letter-spacing: 0.2cap;
    margin: 1.5rem 0 1.5rem 0;
  }

  @media ${device.tablet} {
    padding: 0;
    h1 {
      display: none;
    }
  }

  label {
    display: block;
    font-size: 23px;
    color: rgba(0, 0, 0, 0.593);
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
  .row {
    margin-bottom: 2rem;
  }
  .input-row {
    position: relative;
    display: flex;
    align-items: center;
  }
  .icon {
    position: absolute;
    right: 0;
    color: var(--color-grey-400);
  }
  select {
    background-color: transparent;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 30px;
  color: var(--color-black-mid);
  font-size: 17px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #f5b9a7;
    box-shadow: 0 7px 5px -8px #f5b9a7;
  }
`;
