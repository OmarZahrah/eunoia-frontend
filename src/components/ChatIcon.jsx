import { TbMessageChatbot } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";

const chatIcon = () => {
  return (
    <Link to={"/chat"}>
      <Wrapper>
        <TbMessageChatbot className="chatIcon" />
      </Wrapper>
    </Link>
  );
};
const Wrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 60px;
  height: 60px;
  z-index: 1000;
  background-color: var(--color-brand-pink);
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .chatIcon {
    width: 50px;
    height: 50px;
    color: var(--color-brand-green);
  }
`;
export default chatIcon;
