import { Outlet } from "react-router-dom";
import StepsForm from "../features/signup/SignUpBusiness";
import Form from "../features/signup/SignUpBusiness";

const SignUp = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default SignUp;
