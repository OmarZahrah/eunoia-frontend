import styled from "styled-components";
import DetailsCard from "./DetailsCard";

function ChatMessage({ img, text, role, packages = [] }) {
  return (
    <Wrapper role={role}>
      <div className="message">
        <img className="pic" src={img} alt="Profile" />
        <span className="text">{text}</span>
      </div>
      <div className="packages">
        {packages.map((pack, i) => (
          <div className="card" key={i}>
            <DetailsCard
              className="card"
              price={pack?.price}
              title={pack?.name}
              image={pack?.photo}
              link={"venueprofile"}
              id={pack?._id}
              rate={pack?.rating}
              location={pack?.location}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default ChatMessage;

const Wrapper = styled.div`
  display: flex;

  flex-direction: ${({ role }) => (role === "user" ? "row-reverse" : "column")};
  gap: 3rem;
  margin: 30px !important;
  padding: 0;
  .message {
    padding: 0;
    text-align: ${({ role }) => (role === "user" ? "right" : "left")};
    display: flex;
    gap: 20px;
    align-items: center;
    min-width: 30%;
    max-width: 60%;
    flex-direction: ${({ role }) => (role === "user" ? "row-reverse" : "row")};
    background-color: ${({ role }) =>
      role === "user" ? "rgb(116,171,112)" : "white"};
    color: ${({ role }) =>
      role === "user" ? "white" : "rgba(0, 0, 0, 0.593)"};
    border-radius: ${({ role }) => (role === "user" ? "50" : "15")}px;
    padding: 5px 15px;
    box-shadow: -1px 5px 4px #00000039;
  }
  .text {
    padding: 0;
  }
  .pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .packages {
    display: ${({ role }) => (role === "user" ? "none" : "flex")};
    flex-wrap: wrap;
    /* flex-basis: 50%; */
    width: 100%;
    gap: 5px;
  }
  .card {
    width: 45%;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    margin: 20px 15px !important;
    .message {
      max-width: 90%;
    }

    .card {
      width: 100%;
    }
  }
`;
