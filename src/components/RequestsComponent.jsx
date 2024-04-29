import styled from "styled-components";
import Button from "../components/Button";
import { useState } from "react";

function RequestsComponent({
  dateNumber,
  dateMonth,
  day,
  time,
  Notes,
  role,
  status,
}) {
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setDeclined(false); // Reset declined state if it was previously set
  };

  const handleDecline = () => {
    setDeclined(true);
    setAccepted(false); // Reset accepted state if it was previously set
  };

  return (
    <RequestWrapper>
      <div className="white-div">
        <div className="rose-div">
          <div className="text">
            <p className="date-number">{dateNumber}</p>
            <p className="date-month">{dateMonth}</p>
            <p className="day">{day}</p>
          </div>
        </div>
        <div className="white-dev-text">
          <p className="time">{time}</p>
          <p className="note">
            Notes : <span>{Notes}</span>
          </p>
        </div>
        {role !== "user" ? (
          <>
            {accepted ? (
              <p className="accepted">Accepted</p>
            ) : declined ? (
              <p className="declined">Declined</p>
            ) : (
              <>
                <Button
                  className="accept"
                  onClick={handleAccept}
                  size="small"
                  color="white"
                  background="rgba(116, 171, 112, 1)"
                >
                  Accept
                </Button>
                <Button
                  className="decline"
                  onClick={handleDecline}
                  size="medium"
                  color="rgba(116, 171, 112, 1)"
                  background="transparent"
                >
                  Decline
                </Button>
              </>
            )}
          </>
        ) : (
          <p
            className={`${
              status === "accepted"
                ? "accepted"
                : status === "declined"
                ? "declined"
                : "pending"
            } status`}
          >
            {status}
          </p>
        )}
      </div>
    </RequestWrapper>
  );
}

const RequestWrapper = styled.div`
  position: relative;
  min-width: 25%;
  .status {
    text-transform: capitalize;
    position: absolute;
    top: 75%;
    left: 70%;
    font-size: 20px;
    font-family: Literata;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
  }
  .white-div {
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
  }

  .rose-div {
    width: 120px;
    height: 248px;
    background-color: rgba(245, 185, 167, 0.24);
    position: absolute;
    top: 50%;
    left: 10.3%;
    transform: translate(-50%, -50%);
  }

  .date-number {
    padding-top: 2.4rem;
    font-family: Literata;
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

  .time {
    font-family: Literata;
    font-size: 26px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 23%;
  }

  .note {
    font-family: Literata;
    font-size: 26px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 23%;
    top: 30%;
  }

  .note span {
    font-family: Literata;
    font-size: 22px;
    font-weight: 300;
    line-height: 44.55px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
  }
  .decline {
    position: absolute;
    top: 70%;
    font-size: 25px;
  }
  .accept {
    position: absolute;
    top: 75%;
    left: 70%;
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
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    /* padding-left: 3rem; */
    .white-div {
      width: 560px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .white-div {
      width: 520px;
      height: 235px;
    }
    .rose-div {
      width: 100px;
      height: 220px;
      top: 50%;
      left: 9.7%;
    }
    .date-number {
      font-size: 40px;
    }
    .date-month {
      font-size: 21px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    padding: 1rem 1rem;

    .white-div {
      width: 570px;
    }
    .rose-div {
      height: 217px;
      left: 8.9%;
    }

    .accepted {
      font-size: 28px;
    }

    .declined {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.avg}) {
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .white-div {
      /* width: 570px; */
      width: 100%;
    }
    .rose-div {
      height: 217px;
      left: 8.9%;
    }

    .accepted {
      font-size: 28px;
    }

    .declined {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .white-div {
      /* width: 350px; */
      height: 200px;
      padding-left: 0;
    }
    .rose-div {
      height: 90%;
      width: 56px;
      left: 0;
      transform: translatey(-50%);
    }
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

    .time {
      font-size: 20px;
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
      right: 5%;
      font-size: 20px;
    }
    .accept {
      left: 65%;
      font-size: 18px;
      width: 100px;
      height: 37px;
    }

    .accepted {
      font-size: 20px;
    }

    .declined {
      font-size: 20px;
    }
  }
`;

export default RequestsComponent;
