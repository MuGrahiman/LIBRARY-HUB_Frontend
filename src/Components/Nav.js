import { Outlet } from "react-router-dom";
import logo from "../Assets/New Library Logo.png";

export default function Nav({ LeftSide,Href }) {
  return (
    <>
    {/* <div className="w-full h-screen"> */}

    <header className="w-full h-[60px] bg-blue-400 sticky  sm:p-9 ">
      <div className=" h-full flex justify-between items-center mx-auto">
        <div className="h-full items-center">
          <a
            href={Href}
            className=" h-full flex items-center justify-evenly text-white text-center text-lg no-underline my-auto"
          >
            <img
              className="h-[50px]"
              //   width="25%"
              src={logo}
              alt="logo of library"
            />
            <p className=" font-bold"> LIBRARY HUB</p>
          </a>
        </div>
        {LeftSide}
      </div>
    </header>
    <Outlet />
     {/* </div> */}
    </>
  );
} 
