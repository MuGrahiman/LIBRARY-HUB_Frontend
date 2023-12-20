import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate, Outlet } from "react-router-dom";
import { AiOutlineRightCircle } from "react-icons/ai";

function SideBar({ Menus, Logo, Title, onOpen, onClose }) {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const [Act, setAct] = useState("");

  const location = useLocation();

  useEffect(() => {
    setAct(location.pathname.split("/").pop());
  }, [location.pathname]);
  return (
    <div className="flex w-full mx-0">
      <div className="sticky">
        <div
          className={` ${
            onOpen ? "w-[260px]" : " w-[80px]"
          } bg-blue-500 h-full p-5  pt-8  relative duration-300 shadow-black`}
        >
         {onClose && <AiOutlineRightCircle
            className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-white border-white
           border-2 rounded-full  ${!onOpen && "rotate-180"}`}
            onClick={() => onClose()}
          />}

          <div className="flex gap-x-4 items-center justify-center">
            {Logo && (
              <img
                src={Logo}
                alt="somer"
                className={`cursor-pointer w-10 h-10 duration-500 ${
                  onOpen && "rotate-[360deg]"
                }`}
              />
            )}
            {Title && (
              <h1
                className={`text-white origin-left font-semibold text-xl duration-200 ${
                  !onOpen && "scale-0"
                }`}
              >
                {Title}
              </h1>
            )}
          </div>
          <ul className="pt-6 flex-col h-full ">
            {Menus.map((Menu, index) => (
              <NavLink to={Menu.to} key={index}>
                <li
                  className={`flex m-auto rounded-md p-2 cursor-pointer font-semibold hover:bg-light-white text-gray-300  items-center gap-x-4 
              ${Act === Menu.to && "bg-light-white shadow-sm"} `}
                >
                  <span className="w-5 h-5 text-2xl">{Menu.icon}</span>
                  <span
                    className={`${
                      !onOpen && "hidden"
                    } text-2xl  origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideBar;
