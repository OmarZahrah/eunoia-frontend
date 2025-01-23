import styled from "styled-components";
import { FaStar, FaMapPin } from "react-icons/fa";
import defaultPackageImage from "/images/outdoor.jpeg";
import { useParams } from "react-router";
import { useService } from "../features/serviceProfile/useService";
import Loading from "../components/Loading";
import Slider from "../components/Slider";
import defaultCoverImage from "/images/Rectangle 9.svg";
import DetailsCard from "../components/DetailsCard";
import table from "../images/table.png";
import Reviews from "../components/Reviews";
import ScrollSection from "../components/ScrollSection";
import { useEffect, useState } from "react";
import WriteReview from "../components/WriteReview";
import { FaHeart } from "react-icons/fa6";
import { useAddToFavorite } from "../features/favourites/useAddtoFavorite";
import { useUser } from "../features/userProfile/useUser";
import { useDeleteFromFavorites } from "../features/favourites/useDeleteFromFavorites";
import Map from "../components/Map";
import defaultProfile from "../../public/images/defaultProfile.jpg";

function ServiceProfile() {
  const { serviceId } = useParams();
  const { service, isLoading } = useService(serviceId);
  const { user, isLoading: loadingUser } = useUser();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { addToFavorites, isSuccess: successAdd } = useAddToFavorite();
  // console.log("service", service);
  const { deleteFromFavorites, isSuccess: successDelete } =
    useDeleteFromFavorites();

  useEffect(
    function () {
      let exist;
      if (!isLoading && !loadingUser) {
        exist = user?.wishlist?.includes(service._id) || false;
      }

      if (exist) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    },
    [user, isFavorite, setIsFavorite, service, isLoading, loadingUser]
  );
  const handleFavorite = () => {
    if (isFavorite) {
      deleteFromFavorites(service._id);
      successDelete && setIsFavorite(false);
    } else {
      addToFavorites(service._id);
      successAdd && setIsFavorite(true);
    }
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="main">
          <div className="first-section">
            <div className="images">
              <FaHeart
                className={`heart ${isFavorite ? "favorite" : ""}`}
                onClick={handleFavorite}
              />
              <Slider
                photos={service?.images}
                cover={service?.imageCover || defaultCoverImage}
              />
              <img className="profile" src={service?.avatar} alt="profile" />
            </div>

            <div className="text">
              <p className="name-venue">{service?.businessName}</p>
              <p className="rate">
                <FaStar style={{ color: "#FFF279" }} />
                {service?.ratingsAverage}
              </p>
            </div>
            <p className="pin">
              <FaMapPin /> {service?.location}
            </p>
            <p className="pin">{service?.phoneNumber}</p>
            <div className="about">{service?.about}</div>
          </div>
          <div className="second-section">
            <p className="location">Location</p>
            <Map
              newPosition={[
                service?.latitude || 30.033333,
                service?.longitude || 31.233334,
              ]}
            />
          </div>
          <div className="third-section">
            {Boolean(service?.packages?.length) && (
              <ScrollSection title="Packages">
                {service?.packages?.map((pack) => (
                  <DetailsCard
                    key={pack._id}
                    id={pack._id}
                    link="package"
                    image={pack.packagePhoto || defaultPackageImage}
                    price={pack.price}
                    title={pack.packageName}
                    width={330}
                    height={180}
                  />
                ))}
              </ScrollSection>
            )}

            <ScrollSection title="Similar">
              {service?.similar?.map((similarService) => (
                <DetailsCard
                  key={similarService?._id}
                  image={similarService?.imageCover || table}
                  title={similarService?.businessName}
                  description={similarService?.businessCategory}
                  width={330}
                  height={180}
                />
              ))}
            </ScrollSection>

            <ScrollSection title={"Reviews"}>
              <span className="add-review" onClick={() => setIsOpenModal(true)}>
                Add Review
              </span>
              {service?.reviews?.map((review) => (
                <Reviews
                  key={review._id}
                  id={review._id}
                  profilePic={review?.user?.avatar || defaultProfile}
                  name={review?.user?.name}
                  rate={review?.ratings}
                  review={review?.title}
                />
              ))}
            </ScrollSection>
          </div>
          {isOpenModal && (
            <div className="bottom">
              {isOpenModal && (
                <WriteReview
                  serviceId={service._id}
                  openModal={setIsOpenModal}
                  setOpenModal={setIsOpenModal}
                />
              )}
              {isOpenModal && (
                <div
                  className="overlay"
                  onClick={() => setIsOpenModal(false)}
                ></div>
              )}
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
  padding-bottom: 2rem;
  position: relative;
  overflow: hidden;
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* top: 0; */
    width: 100vw;
    height: 100vh;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #0000002f;
  }
  .main {
    margin: 0 auto;
    width: 90%;
  }
  .first-section {
    position: relative;
    padding-bottom: 1.5rem;
    margin-bottom: 4rem;
  }

  .first-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 0.013rem;
    background-color: #ccc; /* Border color */
  }

  .image-container {
    position: relative;
  }

  .img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .images {
    position: relative;
    margin-bottom: 2rem;
  }
  .heart {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 6;
    width: 30px;
    height: 30px;
    color: #fffcfcdf;
    cursor: pointer;
  }
  .heart:hover {
    color: #c50c0c;
  }
  .favorite {
    color: #c50c0c;
  }
  .profile {
    position: absolute;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 50%);
  }

  .like {
    position: absolute;
    top: 5%;
    right: 7%;
  }

  .text {
    display: flex;
    justify-content: space-between;
  }

  .name-venue {
    font-family: Literata;
    color: #00000099;
    font-size: 2.1rem;
    font-weight: 600;
  }

  .rate {
    font-family: Literata;
    color: #00000099;
    font-size: 1.8rem;
    font-weight: 350;
  }

  .pin {
    font-family: Literata;
    color: #00000099;
    font-weight: 300;
    font-size: 1.3rem;
    margin-top: 5px;
  }
  .about {
    color: #06050599;
    margin-top: 1rem;
    width: 60%;
  }
  .location {
    font-family: Literata;
    color: #00000099;
    font-size: 2.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .imgloc {
    width: 90%;
    display: block;
    margin: 0 auto;
  }

  .second-section {
    position: relative;
    /* width: 100%; */
  }
  .second-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 0.013rem;
    background-color: #ccc; /* Border color */
  }

  .packages-container {
    display: flex;
    gap: 1.2rem;
    overflow-x: auto;

    height: 14rem;
  }
  .packages-container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
  }
  .packages-container::-webkit-scrollbar {
    height: 0.5rem;
  }
  .third-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
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
  }
  .reviews-container::-webkit-scrollbar {
    height: 0.5rem;
  }

  .reviews-container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
  }
  .add-review {
    position: absolute;
    right: 0;
    top: 0;
    color: #74ab70;
    cursor: pointer;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .name-venue {
      font-size: 1.5rem;
    }
    .rate {
      font-size: 1.5rem;
    }
    .pin {
      font-size: 1rem;
    }
    .location {
      font-size: 1.7rem;
    }
    .google-maps-link {
      font-size: 1rem;
    }
    .images {
      margin-bottom: 3rem;
    }
    .profile {
      width: 8rem;
      height: 8rem;
      z-index: 6;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .name-venue {
      font-size: 1.2rem;
    }
    .rate {
      font-size: 1.2rem;
    }
    .location {
      font-size: 1.7rem;
    }
    .google-maps-link {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .profile {
      width: 7rem;
      height: 7rem;
    }
    .images {
      margin-bottom: 4rem;
    }
    .about {
      width: 100%;
    }
  }
`;

export default ServiceProfile;
