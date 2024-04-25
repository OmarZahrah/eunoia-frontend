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
function CustomizePackage(id) {
  const { packageId } = useParams();
  const { packageData, isLoading } = useGetPackage(packageId);
  const navigate = useNavigate();
  if (packageData === null) navigate("/login", { replace: true });
  console.log(packageData);
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
              // location={"Mercure Al-Forsan"}
              // rate={"4.5"}
            />
            <TitleDesc
              title={"Description"}
              description={packageData?.description}
            />

            <TitleDesc
              title={"Customize Package"}
              // description={"The venue only for 15,000 EGP"}
            />
            {packageData?.customizePackage?.map((pack) => (
              <CustomizeDetails
                title={pack?.name}
                key={pack?._id}
                options={pack?.options}
              />
            ))}
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

  .total {
    color: #00000099;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 15px;
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
`;
