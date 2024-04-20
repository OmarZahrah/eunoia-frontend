import styled from "styled-components";
import { CiEdit } from "react-icons/ci";

const PackagesComponent = ({ type, pack }) => {
  return (
    <Wrapper>
      {type == "add" ? (
        <span className="add-package">+ Add Package</span>
      ) : (
        <>
          <div className="edit-icon">
            <CiEdit className="icon" />
          </div>
          <h2 className="title"> {pack?.packageName}</h2>
          <p className="desc">{pack?.description}</p>
          <span className="price">{pack?.price} EGP</span>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-width: 25%; */
  min-height: 150px;
  width: 100%;
  background-color: #f5b9a735;
  border-radius: 10px;
  display: inline-block;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease;
  &:hover {
    scale: 1.05;
  }
  .add-package {
    margin: auto;
    font-weight: 500;
  }

  .edit-icon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -10px;
    right: -10px;
    background-color: #fef9f0;
    border-radius: 100px;
    padding: 20px;
    /* position: relative; */
  }

  .icon {
    width: 24px;
    height: 24px;
    color: #555;
    /* padding: 5px; */
    position: absolute;
  }

  .title {
    font-size: 1.25rem;
    color: #555;
  }
  .desc {
    font-size: 0.75rem;
    color: gray;
  }
  .price {
    display: block;
    background-color: var(--color-brand-green);
    width: fit-content;
    margin-left: auto;
    color: #fff;
    padding: 5px 10px;
    border-radius: 100px;
    font-size: 0.875rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 48%;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export default PackagesComponent;
