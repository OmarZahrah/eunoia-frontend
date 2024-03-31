import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fef9f0;
  padding-bottom: 2rem;
  /* padding-bottom: auto; */
  /* height: 100vh; */

  .section {
    /* background-color: #fef9f0; */
    width: 90%;
    /* height: 100vh; */
    margin: 0 auto;
  }
  .section1 {
    position: relative;
    /* width: 90%; */
    /* margin-bottom: 3rem; */
    margin: 0 auto 7rem auto;
  }
  .cover-containerP .cover-photo {
    width: 100%;
    height: 100%;
  }
  .add-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    border-radius: 50%;
    background-color: var(--color-brand-pink);
    transform: translate(50%, 50%);
    width: 24px;
    height: 24px;
  }
  .image-input {
    display: none;
  }
  .image-icon {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-500);
  }

  .cover {
    max-width: 100%;
    /* max-height: 20rem; */
    display: block;
    margin: 0 auto;
  }
  .profile {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 1;
    width: 15%;
    border-radius: 50%;
    /* height: 200px; */
  }
  .change {
    position: absolute;
    width: 3rem;
    height: 3rem;
    bottom: 5%;
    right: 5%;
    /* transform: translate(-100%); */
    cursor: pointer;
  }

  .name {
    font-family: Literata;
    font-size: 2rem;
    font-weight: 400;
    line-height: 5rem;
    letter-spacing: 0.0625rem;
    text-align: center;
    color: #00000099;
    /* border-bottom: 0.2px solid #ccc; */
  }
  .section2 {
    width: 100%;
    margin: 0 auto;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 370;
    border-bottom: 0.2px solid #ccc;
    border-top: 0.2px solid #ccc;
    /* width: 90%; */
    margin: 0 auto 1rem auto;
    padding: 2px;
  }

  button:hover {
    transform: scale(1.1);
    font-weight: 450;
    transition: transform 0.6s ease;
  }

  .active {
    text-decoration: underline;
    font-weight: 450;
  }

  .button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    padding: 0;
    color: rgba(0, 0, 0, 0.5);
  }
  /* @media only screen and (max-width: ${({ theme }) => theme.mid}) {
  }

  */
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    .section1 {
      margin-bottom: 5rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    /* height: 100vh; */
    .name {
      font-size: 2.1875rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    /* .profile {
      top: 32%;
      width: 150px;
      height: 150px;
    } */
    .section {
      width: 100%;
    }
    .section1 {
      /* width: 100%; */
      margin-bottom: 2rem;
    }
    .profile {
      width: 20%;
    }
    .name {
      font-size: 2.1rem;
    }
    .section2 {
      width: 95%;
    }
    .list {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    /* .profile {
      top: 27%;
      width: 120px;
      height: 120px;
    } */

    .name {
      font-size: 1.8rem;
    }

    .list {
      font-size: 1.24rem;
    }
  }
`;
