import { useState } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import ChatSection from "../components/ChatSection";
import ChatMessage from "../components/ChatMessage";
import botPic from "../images/botPic.png";
import man from "../images/man.png";
import Choice from "../components/Choice";
// import { FiSend } from "react-icons/fi";
import { LuSendHorizonal } from "react-icons/lu";

function ChatBot() {
  const initialMessages = [
    {
      img: botPic,
      role: "bot",
      text: (
        <>
          Hello, Islam. <br />
          I’m Eunoia and I’m here to help you!
        </>
      ),
    },
    {
      img: botPic,
      role: "bot",
      text: (
        <>
          Which category do you want me to help you with? <br />
        </>
      ),
      choices: [
        "Venues",
        "Photographers",
        "Food",
        "Hair Stylists",
        "MakeUp Artists",
        "DJs",
        "Other Details",
        "Events Planners",
      ],
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleChoiceClick = (choice) => {
    const userMessage = {
      img: man,
      role: "user",
      text: choice,
    };

    const botResponse = {
      img: botPic,
      role: "bot",
      text: `You selected ${choice}. How can I assist you further with ${choice}?`,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botResponse]);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      const userMessage = {
        img: man,
        role: "user",
        text: inputValue,
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <Wrapper>
      <div className="nav">
        <NavBar />
      </div>
      <div className="left-right">
        <div className="left-section">
          <ChatSection />
        </div>
        <div className="right-section">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              img={message.img}
              role={message.role}
              text={message.text}
            >
              {message.choices &&
                message.choices.map((choice, idx) => (
                  <Choice
                    key={idx}
                    text={choice}
                    onClick={() => handleChoiceClick(choice)}
                  />
                ))}
            </ChatMessage>
          ))}
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
    /* z-index: 1000;  */
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
    z-index: 1000;
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
