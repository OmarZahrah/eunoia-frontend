import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#74ab70",
};
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes
const Example = ({ color = "#74ab70" }) => (
  <Wrapper>
    {/* <ReactLoading
      // type={"spin"}
      type={"spokes"}
      color={color || "#74ab70"}
      height={500}
      width={200}
      // style={style}
    /> */}
    <ClipLoader
      color={color}
      loading={true}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Example;
