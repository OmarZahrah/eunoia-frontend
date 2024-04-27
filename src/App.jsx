import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import GlobalStyles from "./assets/styles/GlobalStyles";
import SignUpUser from "./features/signup/SignUpUser";
import SignUpBusiness from "./features/signup/SignUpBusiness";
import CreateAccount from "./features/signup/CreatAccount";
import ForgotPass from "./pages/ForgotPass";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/responsive";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import MainProfile from "./features/userProfile/MainProfile";
import EditProfile from "./features/userProfile/EditProfile";
import CreateBussAcc from "./features/userProfile/CreateBussAcc";
import AddPackage from "./pages/AddPackage";
import BuisnessProfile from "././features/serviceProfile/BuisnessProfile";
import { UserProvider } from "./context/UserContext";
import Profile from "./pages/Profile";
import { ServiceProvider } from "./context/ServiceContext";
import VenueProfile from "./pages/VenueProfile";
import Categories from "./pages/Categories";
import Error from "./pages/Error";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Photographers from "./pages/Photographers";
import EventPlanners from "./pages/EventPlanners";
import Djs from "./pages/Djs";
import MakeupArtist from "./pages/MakeupArtist";
import HairStylest from "./pages/HairStylest";
import OtherDetails from "./pages/OtherDetails";
import Food from "./pages/Food";
import SearchHistory from "./pages/SearchHistory";
import Requests from "./pages/Requests";

// import theme from "./assets/styles/responsive";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ReactQueryDevtools />
        <AuthProvider>
          <UserProvider>
            <ServiceProvider>
              <GlobalStyles />
              <BrowserRouter>
                <Routes>
                  {/* <Route element={<AppLayout />}> */}
                  <Route path="welcome" element={<Welcome />} />
                  <Route index element={<Navigate replace to="welcome" />} />
                  <Route path="signup" element={<SignUp />}>
                    <Route path="create" element={<CreateAccount />} />
                    <Route path="user" element={<SignUpUser />} />
                    <Route path="provider" element={<SignUpBusiness />} />
                  </Route>
                  <Route path="error" element={<Error />} />
                  {/* </Route> */}
                  <Route path="login" element={<Login />} />
                  <Route path="forgotpassword" element={<ForgotPass />} />
                  {/* <Route element={<AppLayout />}> */}
                  <Route path="home" element={<Home />} />
                  <Route path="profile" element={<Profile />}>
                    <Route index element={<MainProfile />} />
                    <Route path="editprofile" element={<EditProfile />} />
                    <Route
                      path=":userId/businessProfile"
                      element={<BuisnessProfile />}
                    />
                    <Route path="createBusiness" element={<CreateBussAcc />} />
                  </Route>
                  <Route path="categories" element={<Categories />} >
                  <Route path="photographers" element={<Photographers />} />

                    </Route>
                  <Route path="search" element={<SearchHistory/>} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="photographers" element={<Photographers />} />
                  <Route path="eventplanners" element={<EventPlanners />} />
                  <Route path="djs" element={<Djs />} />
                  <Route path="makeupartist" element={<MakeupArtist />} />
                  <Route path="food" element={<Food />} />
                  <Route path="hairstylest" element={<HairStylest />} />
                  <Route path="otherdetails" element={<OtherDetails />} />
                  <Route path="searchresult" element={<Search />} />
                  <Route path="requests" element={<Requests/>} />

                 
                  <Route path="addpackage" element={<AddPackage />} />
                  <Route
                    path="venueprofile/:venuId"
                    element={<VenueProfile />}
                  />
                    

                </Routes>
              </BrowserRouter>
            </ServiceProvider>
          </UserProvider>
        </AuthProvider>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#222",
            },
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
