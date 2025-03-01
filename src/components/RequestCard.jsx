import styled from "styled-components";
import { months } from "../data/data";
import { useHandleRequest } from "../features/requests/useHandleRequest";
import { usePayment } from "../features/payment/usePayment";
import Button from "./Button";
import { device } from "../assets/styles/breakpoints";

const RequestCard = ({ data, role }) => {
  const {
    _id: id,
    bookingDate: date,
    totalPriceAfterDiscount: price,
    Notes: notes,
    status,
  } = data;

  const { payment, isLoading: loadingPayment } = usePayment();
  const { handleRequest, isLoading } = useHandleRequest();

  const handleDecision = (decision) => {
    handleRequest({ id: id, decision: decision });
  };

  function completePayment(id) {
    payment(id);
  }

  return (
    <Wrapper>
      <Date>
        <div className="text">
          <p className="date-number">{date?.split("-")[2]}</p>
          <p className="date-month">{months[date?.split("-")[1]]}</p>
          <p className="day">{date?.split("-")[0]}</p>
        </div>
      </Date>
      <Content>
        <div className="top">
          <p className="price">{price} EGP</p>

          <span
            className={`${
              status === "Accepted"
                ? "accepted"
                : status === "Declined"
                ? "declined"
                : "pending"
            } status`}
          >
            {status}
          </span>
        </div>
        <p className="package">
          <span>Package: </span>
          {data?.package?.packageName}
        </p>
        <p className="notes">
          <span>Notes:</span> {notes || "There is no notes."}
        </p>
        <Buttons>
          {role == "provider" && status == "Pending" && (
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
          )}
          {role == "user" && status == "Accepted" && (
            <>
              <Button
                className="button accept"
                size="small"
                color="white"
                background="rgba(116, 171, 112, 1)"
                // onClick={() => setPaymentRequest(id)}
                onClick={() => completePayment(id)}
              >
                {loadingPayment ? "Loading..." : "Complete Payment"}
              </Button>
            </>
          )}
        </Buttons>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
  min-height: 15rem;
  background-color: #fff;
  display: flex;
  gap: 1rem;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const Date = styled.div`
  background-color: rgba(245, 185, 167, 0.24);
  width: 120px;
  height: 90%;
  margin: auto 0;
  padding: 2rem 1rem;

  .rose-div {
    width: 120px;
    height: 90%;
    margin: auto 0;
    padding: 2rem 1rem;
  }

  .date-number {
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    color: var(--color-black-dark);
  }

  .date-month {
    font-size: 1.4rem;
    font-weight: 200;
    text-align: center;
    color: var(--color-black-mid);
  }
  .day {
    font-size: 20px;
    font-weight: 200;
    text-align: center;
    color: var(--color-black-mid);
  }
`;

const Content = styled.div`
  flex: 2;
  padding: 1rem 1rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .top {
    display: flex;
    justify-content: space-between;

    .price {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--color-black-mid);
    }
    .sent-received {
      color: var(--color-black-mid);
      font-size: 1.5rem;
      font-weight: 400;
    }

    .status {
      font-size: 1.2rem;
    }
    .decline {
      font-size: 25px;
    }
    .accept {
      font-size: 21px;
    }

    .accepted {
      color: rgba(63, 164, 55, 1);
    }

    .declined {
      color: rgba(215, 80, 80, 1);
    }
    .pending {
      color: var(--color-black-mid);
    }
  }
  .package,
  .notes {
    font-size: 1.3rem;
    color: var(--color-black-mid);
  }
  span {
    color: var(--color-black-mid);
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const Buttons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto !important;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }
`;

export default RequestCard;
