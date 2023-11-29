import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { SignUpProvider } from "./context/SignUpContext";
import SignUpUser from "./features/signup/SignUpUser";
import SignUpBusiness from "./features/signup/SignUpBusiness";
import { CreateAccount } from "./features/signup/CreateAccount";

function App() {
  return (
    <>
      <GlobalStyles />
      <SignUpProvider>
        <BrowserRouter>
          <Routes>
            <Route path="welcome" element={<Welcome />} />
            <Route index element={<Navigate replace to="welcome" />} />
            <Route path="signup" element={<SignUp />}>
              <Route path="create" element={<CreateAccount />} />
              <Route path="user" element={<SignUpUser />} />
              <Route path="provider" element={<SignUpBusiness />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route element={<AppLayout />}>
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SignUpProvider>
    </>
  );
}
export default App;
