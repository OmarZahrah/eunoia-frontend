import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const Example = ({ type, color }) => (
  <Wrapper>
    <ReactLoading
      type={type}
      color={color || "#74ab70"}
      height={500}
      width={200}
      // style={style}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Example;
