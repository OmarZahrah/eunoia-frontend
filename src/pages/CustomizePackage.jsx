import styled from "styled-components";
import NavBar from "../components/NavBar";
import CoverPhotoSlider from "../components/CoverPhotoSlider";
import TitleDesc from "../components/TitleDesc";
import CustomizeDetails from "../components/CustomizeDetails";
import Button from "../components/Button";
import { useGetPackage } from "../features/package/useGetPackage";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useState } from "react";

function CustomizePackage(id) {
  const { packageId } = useParams();
  const { packageData, isLoading } = useGetPackage(packageId);
  const navigate = useNavigate();
  if (packageData === null) navigate("/login", { replace: true });
  // console.log(packageData);

  const [selectedDate, setSelectedDate] = useState("");
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  return (
    <Wrapper>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="content">
            <CoverPhotoSlider
              businessName={packageData?.packageName}
              image={packageData.packagePhoto}
              // location={"Mercure Al-Forsan"}
              // rate={"4.5"}
            />
            <TitleDesc
              title={"Description"}
              description={packageData?.description}
            />
            {/* 
            <TitleDesc
            title={"Customize Package"}
            // description={"The venue only for 15,000 EGP"}
          /> */}
            {packageData?.customizePackage?.map((pack) => (
              <CustomizeDetails
                title={pack?.name}
                key={pack?._id}
                options={pack?.options}
              />
            ))}
            <label htmlFor="dateInput" className="titles">
              Select a Date:
            </label>
            <input
              className="date"
              type="date"
              id="dateInput"
              value={selectedDate}
              onChange={handleDateChange}
            />

            {/* <hr className="hr" /> */}

            <p className="titles">Add notes:</p>
            <textarea value={text} onChange={handleTextChange} />
            <hr className="hr" />
            {/* <CustomizeDetails title={"Capacity"} />
            <CustomizeDetails title={"Capacity"} /> */}
            <p className="total">
              Total: <span className="price">{packageData?.price} EGP</span>
            </p>
            <div className="button">
              <Button size="medium" type="submit" className="button">
                Request Reservation
              </Button>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default CustomizePackage;

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
  padding-bottom: 3rem;
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 4rem;
  }
  .titles {
    color: #00000099;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  .date {
    width: 30%;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.656);
    border-color: rgba(0, 0, 0, 0.2);
    padding: 7px;
    font-size: 16px;
    text-transform: uppercase;
    /* cursor: pointer; */
  }
  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
  textarea {
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.656);
    resize: none;
    font-size: 16px;
    width: 50%;
    height: 7rem;
    padding: 5px;
  }
  textarea:focus {
    outline: none;
  }

  .total {
    margin-bottom: 15px;
    font-size: 1.6rem;
    color: #00000099;
    font-weight: 600;
    text-align: center;
  }
  .price {
    font-size: 1.3rem;
    font-weight: 400;
  }
  .button {
    text-align: center;
    font-size: 20px;
  }
  .hr {
    width: 70%;
    border-color: rgba(0, 0, 0, 0.086);
    margin: 2rem auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .total {
      margin-bottom: 10px;
      font-size: 1.4rem;
    }
    .price {
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .total {
      margin-bottom: 8px;
      font-size: 1.3rem;
    }
    .price {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 52.5em) {
    .total {
      margin-bottom: 0px;
      font-size: 1.2rem;
    }
    .price {
      font-size: 1.1rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .content {
      gap: 0px;
      padding: 0 0.8rem;
    }
    .total {
      margin-bottom: 10px;
    }
    .button {
      width: 100%;
    }
    .titles {
      font-size: 1.2rem;
      margin: 10px 0;
    }
    textarea {
      width: 100%;
      height: 5rem;
      margin-bottom: 20px;
    }
    .date {
      width: 50%;
    }
  }
`;
