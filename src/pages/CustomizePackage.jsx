import styled from "styled-components";
import NavBar from "../components/NavBar";
import CoverPhotoSlider from "../components/CoverPhotoSlider";
import TitleDesc from "../components/TitleDesc";
import CustomizeDetails from "../components/CustomizeDetails";
import Button from "../components/Button";
import { LuPencilLine } from "react-icons/lu";
import Reviews from "../components/Reviews";
import man from "../images/man.png";
import { useGetPackage } from "../features/package/useGetPackage";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useState } from "react";
import DatePicker from "react-datepicker";
function CustomizePackage(id) {
  const { packageId } = useParams();
  const { packageData, isLoading } = useGetPackage(packageId);
  const navigate = useNavigate();
  if (packageData === null) navigate("/login", { replace: true });
  // console.log(packageData);

  const [selectedDate, setSelectedDate] = useState('');
  const[text, setText]= useState('');

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

<div>
      <label htmlFor="dateInput">Select a Date:</label>
      <input 
        type="date" 
        id="dateInput" 
        value={selectedDate} 
        onChange={handleDateChange} 
      />
      <p>Selected Date: {selectedDate}</p>
    </div>

    <p>Add notes:</p>
        <textarea value={text} onChange={handleTextChange}/>
        <p>You typed: {text}</p>
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
  .date {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
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
    border-color: rgba(0, 0, 0, 0.2);
    margin: 2rem auto;
  }
  .reviews {
    color: #00000099;
    font-size: 1.6rem;
    font-weight: 600;
  }
  .icon {
    color: #00000078;
    width: 1.7rem;
    height: 1.4rem;
    margin-left: 5px;
  }
  .reviews-container {
    display: flex;
    overflow-x: auto;
    /* width: 200rem; */
  }
  .reviews-container::-webkit-scrollbar {
    height: 0.5rem;
  }

  .reviews-container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
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
  }
`;
