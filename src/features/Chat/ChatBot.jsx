import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import ChatSection from "../../components/ChatSection";
import ChatMessage from "../../components/ChatMessage";
import botPic from "../../images/botPic.png";
import man from "../../images/man.png";
import { LuSendHorizonal } from "react-icons/lu";
import { useChat } from "./useChat";

function ChatBot() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const { sendMessage, isLoading, response } = useChat();

  useEffect(() => {
    const chat = JSON.parse(localStorage.getItem("chat"));
    setMessages(chat || []);
    if (!isLoading && response) {
      const newMessage = [
        ...messages,
        {
          text: response?.message,
          role: "chat",
          img: botPic,
          packages: response?.packages || [],
        },
      ];
      localStorage.setItem("chat", JSON.stringify(newMessage));
      setMessages(newMessage);
    }
  }, [isLoading, response, setMessages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSendClick = () => {
    const newMessage = [
      ...messages,
      { text: inputValue, role: "user", img: man },
    ];
    // setMessages([...messages, { text: inputValue, role: "user", img: man }]);
    setMessages(newMessage);
    localStorage.setItem("chat", JSON.stringify(newMessage));
    sendMessage(inputValue);
    setInputValue("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <Wrapper>
      <div className="nav"></div>
      <div className="left-right">
        <div className="left-section">
          <ChatSection />
        </div>
        <div className="right-section">
          <ChatMessage
            img={botPic}
            role={"chat"}
            text={"Hello Omar ! it's Euonia AI how can i help you ? "}
          />
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              img={message.img}
              role={message.role}
              text={message.text}
              packages={message.packages}
            />
          ))}
          {isLoading && (
            <ChatMessage img={botPic} role={"chat"} text={"..."}></ChatMessage>
          )}
          <div className="input-container">
            <input
              type="text"
              className="message-input"
              placeholder="Type your message here...."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendClick} className="send-button">
              <LuSendHorizonal />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ChatBot;

const Wrapper = styled.div`
  background-color: #fef9f0;
  .nav {
    position: fixed;
    background-color: #fef9f0;
    width: 100%;
    /* margin-bottom: 65px; */
    /* top: 0;  */
    z-index: 1000;
  }

  .left-right {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
  }
  .left-section {
    width: 40%;
    margin-top: 70px;
    position: fixed;
  }
  .right-section {
    border-left: 1px solid #ccc;
    width: 60%;
    margin-top: 65px;
    margin-left: 40%;
    padding-bottom: 60px;
  }
  .input-container {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 15px;
    left: 70%;
    transform: translateX(-50%);
    width: 50%;
    z-index: 10;
  }
  .message-input {
    flex: 1;
    /* height: 6%; */
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 15px;
    color: #4a4a4a;
    font-size: 14px;
  }
  .message-input:focus {
    outline: none;
    box-shadow: 0px 2px 5px #f5b9a7;
  }
  .send-button {
    background-color: transparent;
    color: rgb(116, 171, 112);
    border: none;
    font-size: 25px;
    margin-left: 7px;
    margin-top: 10px;
    /* background-color: #fef9f0; */
  }

  /* .send-button:hover {
    font-size: 27px;
  } */

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .left-section {
      display: none;
    }
    .right-section {
      border-left: none;
      width: 100%;
      margin: 90px 0 0 0;
    }
    .input-container {
      bottom: 15px;
      left: 50%;
      width: 90%;
    }
  }
`;
