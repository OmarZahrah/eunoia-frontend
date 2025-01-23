import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDeletePackage } from "../../features/package/useDeletePackage";
const PackagesComponent = ({ type, pack }) => {
  const { deletePackage } = useDeletePackage();
  return (
    <Wrapper>
      {type == "add" ? (
        <span className="add-package">+ Add Package</span>
      ) : (
        <>
          <div className="edit-icon">
            <RiDeleteBinLine
              className="icon"
              onClick={(e) => {
                e.stopPropagation();
                deletePackage(pack._id);
              }}
            />
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
    width: 20px;
    height: 20px;
    color: #555;
    /* padding: 5px; */
    position: absolute;
  }
  .options {
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
    position: absolute;
    right: 0;
    top: 30px;
    width: 7rem;
  }
  .option {
    padding: 10px 10px;
    font-weight: 500;
    background-color: #ded8cbe8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }
  .option:hover {
    background-color: #c1b8a4;
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
    margin-top: auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 48%;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export default PackagesComponent;
