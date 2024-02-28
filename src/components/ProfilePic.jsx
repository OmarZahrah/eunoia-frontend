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
`;
