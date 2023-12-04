import logo from "../../public/images/png-wordmark-1.png";
import styled from "styled-components";
import Button from "../components/Button";
import image1 from "../../public/images/unsplash-ebv-cs-rypmx-m.png";
import image2 from "../../public/images/unsplash-fn-0-xxl-9-szc-u.png";
import image3 from "../../public/images/unsplash-azod-v-2-d-0-g-lc.png";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <Wrapper>
      {/* <div className="container"> */}
      <nav>
        <img className="Hlogo" src={logo} />
        <div className="buttons">
          <Link to="/login">
            <Button
              className="logbutton"
              color="pink"
              background="transparent"
              size="small"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup/user">
            <Button
              className="regbutton"
              color="white"
              background="pink"
              size="small"
            >
              Register
            </Button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="images">
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
        </div>

        <div className="text">
          <p className="h">Your Event, Perfected Here.</p>

          <p>
            Empower your event dreams with our comprehensive platform, your
            ultimate guide to seamless and unforgettable gatherings.
          </p>
        </div>
        {/* </div> */}
      </div>
    </Wrapper>
  );
};
export default Welcome;

const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to top, #fef9f0 55%, #fff 45%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding-top: 1rem;
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .Hlogo {
    width: 9.3rem;
    height: 2.2rem;
    flex-shrink: 0;
  }

  .logbutton {
    font-size: 1.5rem;
  }

  .regbutton {
    font-size: 1.3rem;
    letter-spacing: 0.0625rem;
    text-indent: -0.25rem;
    width: 9.375rem;
    height: 3.125rem;
    flex-shrink: 0;
  }
  .images {
    display: flex;
    width: 80%;
    margin: 0 auto;
    gap: 1rem;
    justify-content: center;
  }
  .images img {
    width: 32%;
    padding: 17px;
  }

  .h {
    color: var(--text, rgba(0, 0, 0, 0.6));
    font-size: 2.5rem;
    font-family: "literata", serif;
    font-weight: 510;
    font-style: italic;
    letter-spacing: 0.0625rem;
    width: 50%;
  }

  p {
    color: var(--text, rgba(0, 0, 0, 0.6));
    text-align: center;
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 0.0625rem;
    width: 55%;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    nav {
      width: 85%;
      padding-top: 2rem;
    }
    .Hlogo {
      width: 8.7rem;
      height: 2rem;
      flex-shrink: 0;
    }
    .logbutton {
      font-size: 1.5rem;
    }

    .regbutton {
      font-size: 1.2rem;
      letter-spacing: 0.0625rem;
      text-indent: -0.2rem;
      width: 9rem;
      height: 2.8rem;
      flex-shrink: 0;
    }

    .images {
      width: 83%;
    }
    .images img {
      width: 34%;
      padding: 19px;
    }

    p {
      font-size: 1.7rem;
      font-weight: 300;
      letter-spacing: 0.0625rem;
      width: 64%;
    }

    .container {
      gap: 10px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    nav {
      width: 79%;
      padding-top: 2rem;
    }

    .logbutton {
      font-size: 1.3rem;
    }
    .regbutton {
      font-size: 1.1rem;
      width: 8rem;
      height: 2.6rem;
    }

    .images {
      width: 75%;
    }
    .images img {
      width: 35%;
      padding: 19px;
    }

    p {
      font-size: 1.5rem;
      font-weight: 350;
      letter-spacing: 0.0625rem;
      padding-bottom: 1rem;
    }

    .container {
      gap: 15px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    background: linear-gradient(to top, #fef9f0 60%, #fff 40%);
    height: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;

    nav {
      padding-top: 2rem;
      flex-direction: column;
      gap: 2rem;
    }
    .Hlogo {
      width: 7.6rem;
      height: 2.1rem;
    }

    .images {
      width: 72%;
    }
    .images img {
      width: 39%;
      padding: 1px;
    }

    .logbutton {
      font-size: 1.8rem;
      margin-right: 10rem;
    }

    .regbutton {
      font-size: 1.3rem;
      width: 8rem;
      height: 2.9rem;
    }

    .h {
      font-size: 1.5rem !important ;
      font-weight: 510;
      font-style: italic;
      letter-spacing: 0.0625rem;
      width: 50%;
    }

    p {
      font-size: 1.2rem !important;
      font-weight: 350;
      letter-spacing: 0.0625rem;
      width: 80%;
    }
    .container {
      gap: 6rem;
    }
    .text {
      gap: 1rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: 100%;
    background: linear-gradient(to top, #fef9f0 60%, #fff 40%);
    display: flex;
    gap: 3rem;
    align-items: center;
    nav {
      padding-top: 3.5rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .h {
      font-size: 1.9rem;
    }
    p {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 527px) {
    heigh: 100%;
    gap: 1.9rem;

    .logbutton {
      font-size: 1rem;
      margin-right: 10rem;
    }

    nav {
      padding-top: 1rem;
    }

    .regbutton {
      font-size: 1.1rem;
      width: 7.9rem;
      height: 2.4rem;
    }
    .h{
      font-size: 2rem !important ;
      width:72%;
    }
    p{
      font-size: 1.3rem !important ;
      width:85%;
    }
  }
  
  /* @media only screen and (max-width: 570px) {
    heigh: 100%;
    gap: 1.9rem;

    .logbutton {
      font-size: 1.4rem;
      margin-right: 10rem;
    }

    nav {
      padding-top: 1rem;
    }

    .regbutton {
      font-size: 1.1rem;
      width: 7.9rem;
      height: 2.4rem;
    }
    .h{
      font-size: 2rem !important ;
      width:72%;
    }
    p{
      font-size: 1.3rem !important ;
      width:85%;
    }
  } */
`;
