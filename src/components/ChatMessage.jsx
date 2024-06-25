import styled from "styled-components";

function ChatMessage({ img, text, role, children }) {
  return (
    <Wrapper role={role}>
      <img className="pic" src={img} alt="Profile" />
      <div className="message">
        {text}
        {children}
      </div>
    </Wrapper>
  );
}

export default ChatMessage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ role }) => (role === "user" ? "row-reverse" : "row")};
  margin: 30px !important;
  gap: 20px;

  .pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .message {
    background-color: ${({ role }) =>
      role === "user" ? "rgb(116,171,112)" : "white"};
    color: ${({ role }) =>
      role === "user" ? "white" : "rgba(0, 0, 0, 0.593)"};
    border-radius: ${({ role }) => (role === "user" ? "50" : "15")}px;
    padding: 15px;
    box-shadow: -1px 5px 4px #00000039;
    max-width: 60%;
    min-width: 75px;
    word-wrap: break-word;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    margin: 20px 15px !important;
  }
`;
