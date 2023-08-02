import { Outlet } from "react-router-dom";
import logo from "../Assets/New Library Logo.png";

export default function Nav({ LeftSide,Href }) {
  return (
    // <div className="bg-blue-400 pt-1 sticky mb-3 flex px-9">
    // <div className="container py-1 flex items-center justify-center md:justify-start mx-auto">
    //   <a href="/admin/dashboard" className=" md:w-1/3 lg:w-1/5 flex items-center justify-evenly text-white no-underline ">
    //     <img
    //       className="w-1/4"
    //     //   width="25%"
    //       src="New Library Logo.png"
    //       alt="logo of library"
    //     />
    //     <h1 className=" font-bold"> LIBRARY HUB</h1>
    //   </a>
    // </div>
    // </div>
    <div className="w-full h-screen">

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
    </div>
  );
}
