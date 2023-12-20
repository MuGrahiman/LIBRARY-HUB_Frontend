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
import ProfileRouter from "./ProfileRouter";

function UserRouter() {
  const navigate = useNavigate();
  const [Act, setAct] = useState("");

  const location = useLocation();

  useEffect(() => {
    setAct(location.pathname.split("/").pop());
  }, [location.pathname]);

  const Menus = [
    { title: "Home", to: "home" },
    { title: "Collection", to: "collection" },
    { title: "About us", to: "about" },
    { title: "Profile", to: "profile/me" },
    // { title: "Log-out", to: "logout" },
  ];

  const leftPart = (
    <div className="flex items-center justify-evenly gap-8">
      {Menus.map((Menu, index) => (
        <NavLink to={Menu.to} key={index} className={"no-underline"}>
          <p
            key={index}
            className={`${
              Menu.to === Act
                ? " scale-125 drop-shadow-xl "
                : " drop-shadow-md "
            }  text-white text-xl font-bold font-serif transition ease-in-out hover:translate-x-0 hover:scale-125 duration-100 cursor-pointer`}
          >
            {Menu.title}
          </p>
        </NavLink>
      ))}
    </div>
  );
  return (
    <Routes>
      {/* <Route path='/' element={<RouterProtector protect={'user'}/>}> */}

      <Route path="/" element={<Nav LeftSide={leftPart} Href={"/"} />}>
        <Route path="/" element={<Footer />}>
          <Route path="home" element={<LandingPage />} />
          <Route path="newPage" element={<NewPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="single/:id" element={<SingleBookPage />} />
          <Route path="profile/*" element={<ProfileRouter />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default UserRouter;
