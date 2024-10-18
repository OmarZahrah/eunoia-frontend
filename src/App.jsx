import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/responsive";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Context
import { ServiceProvider } from "./context/ServiceContext";
import { PackageProvider } from "./context/PackageContext";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
// Pages
import SignUpUser from "./pages/SignUpUser";
import Login from "./pages/Login";
import ConfirmationCode from "./pages/ConfirmationCode";
import SetNewPass from "./pages/SetNewPass";
import AppLayout from "./pages/AppLayout";
import Welcome from "./pages/Welcome";
import VenueProfile from "./pages/VenueProfile";
import Error from "./pages/Error";

// Features
import SignUpBusiness from "./pages/SignUpBusiness";
import CreateAccount from "./features/Auth/CreatAccount";
import ForgotPass from "./features/Auth/ForgotPass";
import EditProfile from "./features/userProfile/EditProfile";
import CreateBussAcc from "./features/userProfile/CreateBussAcc";
import AddPackage from "./features/package/AddPackage";
import BuisnessProfile from "././features/serviceProfile/BuisnessProfile";
import Profile from "./pages/Profile";
import Categories from "./features/categories/Categories";
import CustomizePackage from "./features/package/CustomizePackage";
import Search from "./features/homepage/Search";
import Favorites from "./features/categories/Favorites";
import Photographers from "./features/categories/Photographers";
import EventPlanners from "./features/categories/EventPlanners";
import Djs from "./features/categories/Djs";
import MakeupArtist from "./features/categories/MakeupArtist";
import HairStylest from "./features/categories/HairStylest";
import OtherDetails from "./features/categories/OtherDetails";
import Food from "./features/categories/Food";
import Venues from "./features/categories/Venues";
import CreatePackage from "./features/package/CreatePackage";
import UpdatePackage from "./features/package/updatePackage";
import Requests from "./features/requests/Requests";
import ChatBot from "./features/Ai Chat/ChatBot";
import Home from "./features/homepage/Home";
import PrivateRoute from "./components/PrivateRoute";

// import theme from "./assets/styles/responsive";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 5 * 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* <ReactQueryDevtools /> */}
        <AuthProvider>
          <UserProvider>
            <ServiceProvider>
              <PackageProvider>
                <GlobalStyles />
                <BrowserRouter>
                  <Routes>
                    {/*
                  ===========================================
                                 Public Routes
                  ===========================================
                  */}
                    <Route path="role" element={<CreateAccount />} />
                    <Route path="signup" element={<SignUpUser />} />
                    <Route path="businessForm" element={<SignUpBusiness />} />
                    <Route path="login" element={<Login />} />
                    <Route path="forgotpassword" element={<ForgotPass />} />
                    <Route
                      path="confirmationcode"
                      element={<ConfirmationCode />}
                    />
                    <Route path="setnewpass" element={<SetNewPass />} />

                    <Route path="/" element={<AppLayout />}>
                      <Route index path="welcome" element={<Welcome />} />
                      <Route
                        index
                        element={<Navigate replace to="welcome" />}
                      />
                      <Route path="*" element={<Error />} />

                      <Route path="favorites" element={<Favorites />} />
                      <Route path="photographers" element={<Photographers />} />
                      <Route path="eventplanners" element={<EventPlanners />} />
                      <Route path="djs" element={<Djs />} />
                      <Route path="makeupartist" element={<MakeupArtist />} />
                      <Route path="food" element={<Food />} />
                      <Route path="hairstylest" element={<HairStylest />} />
                      <Route path="otherdetails" element={<OtherDetails />} />
                      <Route path="searchresult" element={<Search />} />

                      <Route path="home" element={<Home />} />
                      <Route path="search" element={<Search />} />

                      <Route path="categories" element={<Categories />} />
                      <Route path="venues" element={<Venues />} />
                      <Route path="photographers" element={<Photographers />} />
                      <Route path="eventplanners" element={<EventPlanners />} />
                      <Route path="djs" element={<Djs />} />
                      <Route path="makeupartist" element={<MakeupArtist />} />
                      <Route path="food" element={<Food />} />
                      <Route path="hairstylest" element={<HairStylest />} />
                      <Route path="otherdetails" element={<OtherDetails />} />

                      <Route
                        path="venueprofile/:venuId"
                        element={<VenueProfile />}
                      />
                      {/*
                  ===========================================
                                 Private Routes
                  ===========================================
                  */}

                      <Route
                        path="profile"
                        element={
                          <PrivateRoute>
                            <Profile />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="editprofile"
                        element={
                          <PrivateRoute>
                            <EditProfile />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="createBusiness"
                        element={
                          <PrivateRoute>
                            <CreateBussAcc />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="businessProfile/:userId"
                        element={
                          <PrivateRoute>
                            <BuisnessProfile />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="favorites"
                        element={
                          <PrivateRoute>
                            <Favorites />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="chat"
                        element={
                          <PrivateRoute>
                            <ChatBot />
                          </PrivateRoute>
                        }
                      />

                      <Route
                        path="addpackage"
                        element={
                          <PrivateRoute>
                            <AddPackage />
                          </PrivateRoute>
                        }
                      />

                      <Route
                        path="createPackage"
                        element={
                          <PrivateRoute>
                            <CreatePackage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="updatePackage/:packageId"
                        element={
                          <PrivateRoute>
                            <UpdatePackage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="package/:packageId"
                        element={
                          <PrivateRoute>
                            <CustomizePackage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="requests"
                        element={
                          <PrivateRoute>
                            <Requests />
                          </PrivateRoute>
                        }
                      />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </PackageProvider>
            </ServiceProvider>
          </UserProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
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
