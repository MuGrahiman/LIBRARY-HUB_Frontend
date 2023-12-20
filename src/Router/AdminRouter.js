import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Plan from "../pages/admin/Plans";
import Login from "../pages/admin/Login";
import AListPage from "../pages/admin/LibraryList";
import RouterProtector from "../Utils/RouterProtector";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Logout from "../Utils/Log-Out";
function AdminRouter() {
  const [Act, setAct] = useState("");

  const location = useLocation();

  useEffect(() => {
    setAct(location.pathname.split("/").pop());
  }, [location.pathname]);

  const adminRoutes = [
    {
      path: `dashboard`,
      component: <Dashboard />,
    },
    {
      path: `plan`,
      component: <Plan />,
    },
    {
      path: `library`,
      component: <AListPage />,
    },{
      path: `logout`,
      component: <Logout item='admin' />,
    },
  ];
  const Menus = [
    { title: "Dashboard", to: "dashboard" },
    { title: "Library", to: "library" },
    // { title: "About us", to: "about" },
    { title: "Plan", to: "plan" },
    { title: "Log-out", to: "logout" },
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
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<RouterProtector protect={"admin"} />}>
        <Route path="/" element={<Nav LeftSide={leftPart} Href={"/admin/dashboard"} />}>
        <Route path="/" element={<Footer />}>

          {adminRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
        </Route>
      </Route>

      {/* <Route path='/' element={<RouterProtector protect={'admin'}/>}>
         <Route path='dashboard' element={<Dashboard/>} />
         <Route path='plan' element={<Plan/>} />
         <Route path='library' element={<AListPage/>} />
         </Route> */}
    </Routes>
  );
}

export default AdminRouter;
