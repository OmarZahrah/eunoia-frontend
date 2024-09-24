import styled from "styled-components";
import image1 from "../../public/images/unsplash-ebv-cs-rypmx-m.png";
import image2 from "../../public/images/unsplash-fn-0-xxl-9-szc-u.png";
import image3 from "../../public/images/unsplash-azod-v-2-d-0-g-lc.png";
import NavBar from "../components/NavBar";

const Welcome = () => {
  return (
    <Wrapper>
      <div className="images">
        <img src={image1} />
        <img src={image2} className="mobile-img" />
        <img src={image3} />
      </div>

      <div className="text">
        <h1>Your Event, Perfected Here.</h1>
        <p>
          Empower your event dreams with our comprehensive platform, your
          ultimate guide to seamless and unforgettable gatherings.
        </p>
      </div>
    </Wrapper>
  );
};
export default Welcome;

const Wrapper = styled.div`
  height: 100% !important;
  background: linear-gradient(to top, #fef9f0 55%, #fff 45%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 30px; */

  .images {
    display: flex;
    gap: 30px;
    margin-top: 30px;
    img {
      width: 20rem;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h1 {
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
      font-size: 1.2rem;
      font-weight: 300;
      letter-spacing: 0.0625rem;
      width: 55%;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .images {
      width: 83%;
    }
    .images img {
      width: 28%;
      padding: 19px;
    }

    .container {
      gap: 10px;
    }

    .h {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .images {
      width: 75%;
    }
    .images img {
      width: 28%;
      padding: 19px;
    }

    p {
      font-size: 1rem;
      font-weight: 350;
      letter-spacing: 0.0625rem;
      padding-bottom: 1rem;
    }

    .container {
      gap: 15px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .h {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    background: linear-gradient(to top, #fef9f0 60%, #fff 40%);
    height: 100vh;
    display: flex;
    gap: 2rem;
    align-items: center;

    .images {
      width: 72%;
    }
    .images img {
      width: 39%;
      padding: 1px;
    }

    .h {
      font-size: 1.5rem !important ;
      font-weight: 510;
      font-style: italic;
      letter-spacing: 0.0625rem;
      width: 100%;
    }

    p {
      font-size: 1rem !important;
      font-weight: 350;
      letter-spacing: 0.0625rem;
      width: 60%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    background-color: var(--color-brand-beige);

    .images img {
      display: none;
    }
    .images .mobile-img {
      display: block;
      width: 90%;
    }
    p {
      width: 80%;
      font-size: 0.9rem;
    }
  }
`;
