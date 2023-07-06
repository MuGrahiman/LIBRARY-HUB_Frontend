import { useState } from "react";
import Assets from "../../../Assets/new Library Logo.svg";
import { MdDashboardCustomize, MdEventNote, MdCategory } from "react-icons/md";
import { FaAddressBook, FaMoneyBillAlt, FaUsers } from "react-icons/fa";
import { ImBlocked, ImBooks, ImLibrary } from "react-icons/im";
import { GiVerticalBanner } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import SideBar from "../../../Components/SideBar";
import DoughnutChart from "../../../Components/DoughnutChart";
import BarChart from "../../../Components/BarChart";
import { TbPremiumRights } from "react-icons/tb";
import { Button } from "@material-tailwind/react";
import { Menus } from "../../data";
const DashBoardPage = () => {
  console.log('hi therre in the LDashBoardPage')
  const [open, setOpen] = useState(true);
  return (
    // <div className="flex w-full mx-0">
    //   <div className={` ${open ? "w-72" : " w-20"} bg-transparent flex-none`}>
       
    //   </div>
      <div className={` w-3/4 flex-col overflow-x-hidden  mx-auto`}>
        <div
          className={` w-4/5 grid sm:grid-cols-2  md:grid-cols-3 gap-5 mt-5 mx-auto`}
        >
          <div className=" w-full flex-col group rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400">
            <div className="w-4/5 mx-auto  flex">
              <p className=" text-[20px] mx-auto group-hover:text-white text-center ">
                Total Members
              </p>
            </div>
            <div className="w-4/5 mx-auto bg-black h-[2px] group-hover:bg-white  "></div>
            <div className="w-4/5 mx-auto flex h-[80px]  justify-center items-center">
              <p className="text-[30px]  group-hover:text-white font-sans ">
                500
              </p>
            </div>
          </div>
          <div className=" w-full flex-col group rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400">
            <div className="w-4/5 mx-auto  flex">
              <p className=" text-[20px] mx-auto group-hover:text-white text-center">
                Blocked Members
              </p>
            </div>
            <div className="w-4/5 mx-auto bg-black h-[2px] group-hover:bg-white  "></div>
            <div className="w-4/5 mx-auto flex h-[80px]  justify-center items-center">
              <p className="text-[30px]  group-hover:text-white font-sans ">
                500
              </p>
            </div>
          </div>
          <div className=" w-full flex-col group rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400">
            <div className="w-4/5 mx-auto  flex">
              <p className=" text-[20px] mx-auto group-hover:text-white text-center">
                premium Members
              </p>
            </div>
            <div className="w-4/5 mx-auto bg-black h-[2px] group-hover:bg-white  "></div>
            <div className="w-4/5 mx-auto flex h-[80px]  justify-center items-center">
              <p className="text-[30px]  group-hover:text-white font-sans ">
                500
              </p>
            </div>
          </div>
          <div className=" w-full flex-col group rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400">
            <div className="w-4/5 mx-auto  flex">
              <p className=" text-[20px] mx-auto group-hover:text-white text-center">
                Total Books
              </p>
            </div>
            <div className="w-4/5 mx-auto bg-black h-[2px] group-hover:bg-white  "></div>
            <div className="w-4/5 mx-auto flex h-[80px]  justify-center items-center">
              <p className="text-[30px]  group-hover:text-white font-sans ">
                500
              </p>
            </div>
          </div>
          <div className=" w-full flex-col group rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400">
            <div className="w-4/5 mx-auto  flex">
              <p className=" text-[20px] mx-auto group-hover:text-white text-center">
                Rented Books
              </p>
            </div>
            <div className="w-4/5 mx-auto bg-black h-[2px] group-hover:bg-white  "></div>
            <div className="w-4/5 mx-auto flex h-[80px]  justify-center items-center">
              <p className="text-[30px]  group-hover:text-white font-sans ">
                500
              </p>
            </div>
          </div>
          <div className=" w-full flex-col group rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400">
            <div className="w-4/5 mx-auto  flex">
              <p className=" text-[20px] mx-auto group-hover:text-white text-center">
                Sold Books
              </p>
            </div>
            <div className="w-4/5 mx-auto bg-black h-[2px] group-hover:bg-white  "></div>
            <div className="w-4/5 mx-auto flex h-[80px]  justify-center items-center">
              <p className=" text-[30px] group-hover:text-white font-sans ">
                500
              </p>
            </div>
          </div>
        </div>
        <div className={`w-4/5 mx-auto`}>
          <div className="w-4/5 mx-auto my-5">
            <DoughnutChart />
          </div>
          <div className="w-4/5 mx-auto my-5">
            <BarChart />
          </div>
        </div>
      </div>
  // </div> 
  )
};
export default DashBoardPage;
