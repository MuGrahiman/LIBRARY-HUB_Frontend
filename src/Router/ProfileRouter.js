import React, { useEffect, useState } from "react";
import {
  NavLink,
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CollectionPage from "../pages/User/CollectionPage";
import Nav from "../Components/Nav";
import LandingPage from "../pages/User/LandingPage";
import SingleBookPage from "../pages/User/SingleBookPage";
import Logout from "../Utils/Log-Out";
import NewPage from "../pages/NewPage";
import AboutPage from "../pages/User/AboutPage";
import Footer from "../Components/Footer";
import ProfilePage from "../pages/User/profile/Profilepage";
import SideBar from "../Components/SideBar";
import UserProfilePage from "../pages/User/profile/userProfilePage";
import HistoryPage from "../pages/User/profile/HistoryPage";
import WhishListPage from "../pages/User/profile/whishListPage";
import ReservedPage from "../pages/User/profile/ReservedPage";

function ProfileRouter() {
  const navigate = useNavigate();
  const [Act, setAct] = useState("");
  const [open, setOpen] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setAct(location.pathname.split("/").pop());
  }, [location.pathname]);

  const Menus = [
    { title: "Me", to: "me" },
    { title: "Reserved", to: "reserved" },
    { title: "whish List", to: "wishlist" },
    { title: "History", to: "history" },
    { title: "Log-out", to: "logout" },
  ];

  return (
    <Routes>
      {/* <Route path='/' element={<RouterProtector protect={'user'}/>}> */}
      <Route index element={<ProfilePage />} />

      <Route
        path="/"
        element={
          <SideBar
            Menus={Menus}
            // Logo={Assets}
            // onClose={() => setOpen(!open)}/
            onOpen={open}
            Title={"Profile"}
          />
        }
      >
        <Route path="me" element={<UserProfilePage />} />
        <Route path="reserved" element={<ReservedPage />} />
        <Route path="wishlist" element={<WhishListPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="logout" element={<Logout item="user" />} />
      </Route>
      {/* //   </Route> */}
    </Routes>
  );
}

export default ProfileRouter;
