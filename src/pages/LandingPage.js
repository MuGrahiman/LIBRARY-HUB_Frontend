import React, { useEffect, useState, useMemo } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import Nav from "../Components/Nav";
import LocationMap from "../Components/LocationMap";
import { Marker } from "react-map-gl";
import logo from "../Assets/New Library Logo.png";
import Banner from "../Assets/WhatsApp Image 2023-07-28 at 3.09.04 PM.jpeg";
import { fetchLibrary } from "../Store";
import useThunk from "../Hooks/use-Thunk";
import { useSelector } from "react-redux";
import Pins from "../Components/Pins";
import POP from "../Components/PopUp";
import { NavLink, useLocation, useNavigate, Outlet } from "react-router-dom";

function LandingPage({ onClose, Data }) {
  const [locationsData, setlocationsData] = useState();
  const [lat, setLat] = useState(42.35);
  const [long, setLong] = useState(-70.9);
  const [zoom, setZoom] = useState(0);
  const [pop, setPop] = useState(false);
  const [popValue, setPopValue] = useState();
  const [runfetchLibrary, isfetchLibraryError, isfetchLibraryLoading] =
    useThunk(fetchLibrary);
  const { data } = useSelector((state) => state.library);
  console.log(data);
  useEffect(() => {
    runfetchLibrary();
    // .then((res)=>setData(res)).catch(err=>console.log(err));
  }, [runfetchLibrary]);

  const leftPart = (
    <>
      <NavLink to={`/user/login`} className="bg-white p-1 sm:px-4 sm:py-2 text-blue-400 sm:text-xl font-bold flex items-center justify-center rounded-md shadow-lg gap-1 sm:gap-3 transition ease-in-out hover:translate-y-1 hover:scale-75 duration-300 cursor-pointer">
        <FaUserLock /> Login
      </NavLink>
      {Data && (
        <div className="bg-white p-1 sm:px-4 sm:py-2 text-blue-400 sm:text-xl font-bold flex items-center justify-center rounded-md shadow-lg gap-1 sm:gap-3 transition ease-in-out hover:translate-y-1 hover:scale-75 duration-300 cursor-pointer">
          <FaUser /> Profile
        </div>
      )}
    </>
  );

  const marker = useMemo(
    () =>
      data.map((Library, index) => (
        <Marker
          key={`marker-${Library._id}`}
          longitude={Library.Longitude}
          latitude={Library.Latitude}
          anchor="bottom"
          onClick={(e) => {
            setPopValue(index);
            setPop(true);
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
          }}
        >
          <Pins />
        </Marker>
      )),
    [data]
  );

  return (
    <div
      className="w-full h-screen "
      style={{
        backgroundImage: `url('${Banner}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        // backgroundColor: "transparent",
      }}
    >
      <Nav LeftSide={leftPart} Href={"/"} />
      <div className="w-full">
        <div className="mx-auto container h-20 flex flex-col justify-center items-center">
          <p className="text-white text-xl font-semibold font-mono shadow">
            Accelerating research discovery to shape a better future
          </p>
          <p className="text-white text-2xl font-bold font-mono shadow">
            Today's research, tomorrow's innovation
          </p>
        </div>
        <div className="container grid grid-cols-3 mx-auto gap-1">
          <div className="col-span-2 w-full h-96 bg-white p-1 rounded shadow-md">
            <LocationMap
              Longitude={long}
              Latitude={lat}
              setLatitude={setLat}
              setLongitude={setLong}
              Zoom={zoom}
              setZoom={setZoom}
              Mrk={marker}
              POP={<POP Value={data} PopUp={popValue} setPop={setPop} />}
            />
          </div>
          <div className="flex flex-col w-full h-auto  bg-white  rounded ">
            <div className=" m-1 h-14   flex justify-center items-center border rounded-md">
              <header className=" text-center  text-[20px] font-bold font-serif   text-blue-500  cursor-pointer">
                Libraries
              </header>
            </div>
            <div className="flex-1  bg-white p-1  ">
              <div className="sm:overflow-y-auto sm:h-[313px] shadow-inner bg-blue-50">
                {data.map((library) => (
                  <NavLink key={library._id} to={`/user/${library._id}/home`}>
                    <div className="h-[100px] m-1 shadow-xl rounded-md bg-white cursor-pointer transition duration-150 ease-in-out hover:  hover:scale-95">
                      <div className="grid grid-cols-4 h-full w-full  rounded">
                        <div className="h-full w-full flex justify-center items-center rounded ">
                          <img
                            src={logo}
                            className="h-[95px]  object-cover"
                            alt="logo"
                          />
                        </div>
                        <div className="h-full col-span-3  items-center">
                          <header className="text-start text-lg text-black font-semibold ">
                            {library.Name}
                          </header>
                          <div className="text-start text-sm">
                            <p>{library.City}</p>
                            <p>{library.PhoneNo}</p>
                            <p>{library.Email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
