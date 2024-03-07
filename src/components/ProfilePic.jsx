import styled from "styled-components";

function ProfilePic() {
  return (
    <Wrapper>
      <div>
        <input type="file" id="fileInput" name="ProfileImage" />
        <span>Your Name</span>
      </div>
    </Wrapper>
  );
}

export default ProfilePic;

const Wrapper = styled.div`
  width: 30%;
  text-align: center;
  height: 80vh;
  border-right: 1px solid rgba(0, 0, 0, 0.347);
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.593);
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding-top: 20px;
  }
  span {
    margin-top: 20px;
    font-size: 30px;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.347);
    width: 15rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    height: 75vh;
    /* width: 25%; */
  }
  @media only screen and (max-width: 52.5em) {
    width: 50%;

    span {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    border-right: none;
    height: 8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.347);
    span {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.347);
    height: 10rem;
    span {
      font-size: 26px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    span {
      /* font-size: 30px; */
    }
  }
`;
