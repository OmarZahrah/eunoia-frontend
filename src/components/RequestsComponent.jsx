import styled from "styled-components";
import Button from "../components/Button";
import { useState } from "react";
import { months } from "../data/data";
import { useHandleRequest } from "../features/requests/useHandleRequest";

function RequestsComponent({ id, price, Notes, role, status, date }) {
  const { handleRequest, isLoading } = useHandleRequest();
  const handleDecision = (decision) => {
    console.log(decision);
    handleRequest({ id: id, decision: decision });
  };
  return (
    <RequestWrapper>
      {/* <div className="white-div"> */}
      <div className="rose-div">
        <div className="text">
          <p className="date-number">{date?.split("-")[2]}</p>
          <p className="date-month">{months[date?.split("-")[1]]}</p>
          <p className="day">{date?.split("-")[0]}</p>
        </div>
      </div>
      <div className="white-dev-text">
        <div className="top">
          <p className="price">{price} EGP</p>
          <p className="sent-received">
            {role == "user" ? "Sent" : "Received"}
          </p>
        </div>
        <p className="note">
          Notes : <span>{Notes || "There is no notes."}</span>
        </p>
        <div className="buttons">
          {role == "provider" && status == "Pending" ? (
            <>
              <Button
                className="button decline"
                size="medium"
                color=" rgba(215, 80, 80, 1)"
                background="transparent"
                onClick={() => handleDecision("decline-request")}
              >
                {isLoading ? "Loading..." : "Decline"}
              </Button>
              <Button
                className="button accept"
                size="small"
                color="white"
                background="rgba(116, 171, 112, 1)"
                onClick={() => handleDecision("accept-request")}
              >
                {isLoading ? "Loading..." : "Accept"}
              </Button>
            </>
          ) : (
            <p
              className={`${
                status === "Accepted"
                  ? "accepted"
                  : status === "Declined"
                  ? "declined"
                  : "pending"
              } status`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
      {/* </div> */}
    </RequestWrapper>
  );
}

const RequestWrapper = styled.div`
  min-width: 25%;
  width: 45%;
  height: 265px;
  position: relative;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  /* justify-content: space-between; */
  align-items: center;
  box-shadow: -5px 2px 10px 0px #0000001a;
  .status {
    text-transform: capitalize;
    /* position: absolute; */
    top: 75%;
    left: 70%;
    font-size: 20px;
    font-family: Literata;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
  }
  /* .white-div {
    width: 100%;
    position: relative;
    background-color: #ffffff;
    padding-left: 0.625rem;
    padding-bottom: 0.5rem;
    justify-content: space-between;
    align-items: center;
    width: 580px;
    height: 265px;
    padding-top: 30px;
    z-index: 1;
    box-shadow: -5px 2px 10px 0px #0000001a;
    position: relative;
  } */

  .rose-div {
    width: 120px;
    height: 90%;
    background-color: rgba(245, 185, 167, 0.24);
    margin: auto 0;
    padding: 2rem 1rem;
    /* position: absolute; */
    /* top: 50%;
    left: 10.3%; */
    /* transform: translate(-50%, -50%); */
  }
  .white-dev-text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
  }

  .date-number {
    font-family: "Literata";
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
    color: rgba(0, 0, 0, 0.79);
  }

  .date-month {
    font-family: Literata;
    font-size: 23px;
    font-weight: 200;
    letter-spacing: -0.008em;
    text-align: center;
    color: rgba(75, 75, 75, 1);
  }
  .day {
    font-family: Literata;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: -0.008em;
    text-align: center;
    color: rgba(75, 75, 75, 1);
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price {
    font-family: Literata;
    font-size: 26px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
    /* position: absolute; */
    left: 23%;
  }
  .sent-received {
    font-family: Literata;
    font-size: 24px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
    /* position: absolute; */
    right: 5px;
  }

  .note {
    font-family: Literata;
    font-size: 26px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 2rem;
  }

  .note span {
    font-family: Literata;
    font-size: 22px;
    font-weight: 300;
    line-height: 44.55px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-top: auto;
    margin-left: auto;
  }
  .decline {
    /* position: absolute; */
    /* top: 70%; */
    font-size: 25px;
  }
  .accept {
    /* position: absolute; */
    /* top: 75%;
    left: 70%; */
    font-size: 21px;
  }

  .accepted {
    color: rgba(63, 164, 55, 1);
  }

  .declined {
    color: rgba(215, 80, 80, 1);
  }
  .pending {
    color: rgba(0, 0, 0, 0.621);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    /* padding-left: 3rem; */
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .date-number {
      font-size: 40px;
    }
    .date-month {
      font-size: 21px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .accepted {
      font-size: 28px;
    }

    .declined {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.avg}) {
    width: 80%;
    margin: 0 auto !important;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: 13.75rem;
    width: 100%;
    .accepted {
      font-size: 28px;
    }

    .declined {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0;
    width: 100%;
    gap: 0;
    .date-number {
      padding-top: 1rem;
      font-size: 25px;
    }

    .date-month {
      font-size: 18px;
    }
    .day {
      font-size: 20px;
    }

    .price {
      font-size: 16px;
      left: 20%;
    }

    .note {
      font-size: 20px;
      left: 20%;
    }

    .note span {
      font-size: 18px;
      line-height: 38.55px;
    }
    .decline {
      font-size: 20px;
    }
    .accept {
      font-size: 18px;
    }

    .accepted {
      font-size: 20px;
    }

    .declined {
      font-size: 20px;
    }
    .sent-received {
      font-size: 18px;
    }
    .buttons {
      justify-content: space-between;
    }
  }
`;

export default RequestsComponent;
