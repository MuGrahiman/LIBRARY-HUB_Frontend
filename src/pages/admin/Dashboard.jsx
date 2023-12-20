import Nav from "../../Components/Nav";
import { ImLibrary } from "react-icons/im";
import { TbPremiumRights } from "react-icons/tb";
import { ImBlocked } from "react-icons/im";
import { FaMoneyBillAlt } from "react-icons/fa";
import BarChart from "../../Components/BarChart";
import DoughnutChart from "../../Components/DoughnutChart";
import { Button } from "@material-tailwind/react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function ADashboardPage() {
  const navigate = useNavigate()
  return (
    <div>
      {/* <Nav Href={"/admin/dashboard"}/> */}
      <div className="container mx-auto ">
        {/* <div className="w-full md:flex justify-between  my-5 items-center ">
          <div className="w-1/3 m-5">
            <Button
              className="rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400"
              variant="gradient"
              size="lg"
              onClick={() => navigate('/admin/library') }
              color="white"
              fullWidth
            >
              Library
            </Button>
          </div>
          <div className="w-1/3 m-5">
            <Button
              className="rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400"
              variant="gradient"
              size="lg"
              onClick={() => navigate('/admin/plan') }
              color="white"
              fullWidth
            >
              Plans
            </Button>
          </div>
          <div className="w-1/3 m-5">
            <Button
              className="rounded-lg  bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400"
              variant="gradient"
              size="lg"
              color="white"
              onClick={() => { 
                localStorage.removeItem('admin')
                 navigate('/admin/login') }}
              fullWidth
            >
              Log-Out
            </Button>
          </div>
        </div> */}
        <div className=" lg:flex w-full justify-evenly items-center my-5 gap-9">
          <div className="md:flex w-full justify-evenly items-center my-4 gap-9">
            <div
              href="?"
              className="w-full md:w-1/2 my-4 flex flex-col  mx-auto items-center justify-center group rounded-lg p-6 bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400"
            >
              <div className="mt-9 w-full">
                <ImLibrary className="text-[50px] group-hover:text-white mx-auto my-2" />
                <div className="w-full bg-black h-[2px] group-hover:bg-white  "></div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className=" text-[30px] group-hover:text-white ">
                  Total Library
                </p>
                <p className=" text-[30px] group-hover:text-white font-sans">
                  500
                </p>
              </div>
            </div>

            <div
              href="?"
              className="w-full md:w-1/2  my-4 flex flex-col items-center justify-center group mx-auto  rounded-lg p-6 bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400"
            >
              <div className="mt-9 w-full">
                <TbPremiumRights className="text-[50px] group-hover:text-white mx-auto my-2" />
                <div className="w-full bg-black h-[2px] group-hover:bg-white  "></div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className=" text-[25px] group-hover:text-white ">
                  premium Library
                </p>
                <p className=" text-[30px] group-hover:text-white font-sans">
                  500
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex w-full justify-evenly items-center my-4 gap-9">
            <div
              href="?"
              className="w-full my-4 md:w-1/2 flex flex-col items-center justify-center group mx-auto  rounded-lg p-6 bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400"
            >
              <div className="mt-9 w-full">
                <ImBlocked className="text-[50px] group-hover:text-white mx-auto my-2" />
                <div className="w-full bg-black h-[2px] group-hover:bg-white  "></div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className=" text-[25px] group-hover:text-white ">
                  Blocked Library
                </p>
                <p className=" text-[30px] group-hover:text-white font-sans">
                  500
                </p>
              </div>
            </div>

            <div
              href="?"
              className="w-full md:w-1/2 my-4 flex flex-col items-center justify-center group mx-auto  rounded-lg p-6 bg-white shadow-xl hover:drop-shadow-lg  hover:bg-blue-400"
            >
              <div className="mt-9 w-full">
                <FaMoneyBillAlt className="text-[50px] group-hover:text-white mx-auto my-2" />
                <div className="w-full bg-black h-[2px] group-hover:bg-white  "></div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className=" text-[25px] group-hover:text-white ">
                  Total Revenue
                </p>
                <p className=" text-[30px] group-hover:text-white font-sans">
                  500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex justify-center  my-5 items-center ">
          <DoughnutChart />

          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default ADashboardPage;
