import styled from "styled-components";
import bot from "../images/bot.png";

function ChatBot() {
  return (
    <Wrapper>
      <p className="chat-title">Chat Bot</p>
      <img src={bot} className="chat-img" alt="Chat Bot" />
    </Wrapper>
  );
}

export default ChatBot;

const Wrapper = styled.div`
  /* height: 100vh;  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .chat-title {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.593);
    font-weight: bold;
    letter-spacing: 0.1cap;
    margin: 20px 0;
  }
  .chat-img {
    width: 49%;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .chat-img {
      width: 55%;
    }
  } 
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .chat-img {
      width: 60%;
    }
  } 
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .chat-img {
      width: 70%;
    }
  }
  @media only screen and (max-width: 52.5em) {
    .chat-img {
      width: 80%;
    }
  }
  /* @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  } */
`;
