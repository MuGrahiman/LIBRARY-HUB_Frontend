import { FaCircleArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import logo from "../../Assets/WhatsApp Image 2023-07-28 at 3.09.04 PM.jpeg";
import { Books } from "../data";
import {  Input } from "@material-tailwind/react";
import Pagination from "../../Components/Pagination";
import { fetchSingleLibrary, useFetchBooksQuery } from "../../Store";
import { useNavigate, useParams } from "react-router-dom";
import useThunk from "../../Hooks/use-Thunk";

function CollectionPage({ onClose, Data }) {
  const { id } = useParams(); // Get the library ID from the URL
  const navigate = useNavigate();
  const { data:BookData, error, isLoading } = useFetchBooksQuery({ID:id,Role:'user'});
  const [runfetchLibrary, isfetchLibraryError, isfetchLibraryLoading] =
  useThunk(fetchSingleLibrary);
  const [LibraryData,setLibraryData] = useState({})
  const [sortedData, setSortedData] = useState([]);

  useEffect( ()=>{
    runfetchLibrary()
  .then((res)=>setLibraryData(res[0]));
    console.log(LibraryData)
  },[])
  useEffect(()=>{
    if(BookData)setSortedData(BookData?.result)
    console.log(BookData)
  },[BookData, sortedData])
  
  return (
    <div className="w-full h-full">
        <div
          className={`w-full sm:h-80 `}
          style={{
            backgroundImage: `url('${logo}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundColor: "transparent",
          }}
        >
          <div className="flex flex-col  items-center w-full h-full">
            <header className="text-white my-3 flex flex-col items-center justify-center">
              <p className="text-[1.5rem] md:text-[3.5rem] font-bold ">
                {LibraryData.Name}
              </p>
              <p className="text-lg font-extralight italic">
                Library quete something they need to provide
              </p>
            </header>
            <div className="w-3/5">
              <Input
                // onChange={(e) => setSearch(e.target.value)}
                label="Search"
                // value={search}
                color="white"
                className="bg-"
                icon={
                  <FaMagnifyingGlass className="  text-sm  hover:text-xl text-white drop-shadow-2xl  transition ease-in-out hover:-translate-x-1 hover:scale-125 duration-300 cursor-pointer " />
                }
              />
            </div>
            <footer className="mt-auto w-full  ">
              <div className="w-11/12 h-0.5 bg-white mx-auto my-2" />
              <div className="h-16 w-full  sm:flex justify-evenly items-center text-center text-white text-xl font-bold">
                <p>1,600 Journals</p>
                <p>1,000 Referece Work</p>
                <p>2,200 Books</p>
              </div>
            </footer>
          </div>
        </div>

        <div className="w-full ">
          <div className="w-4/5 mx-auto my-5 ">

            <p className="border-s-8 text-white text-3xl font-extrabold p-3 my-3">
              Search For Your Books :
            </p>

            <div className=" flex flex-wrap items-center justify-evenly gap-10 rounded-lg py-5  ">
              {sortedData.map((book) => (
                <div key={book._id} onClick={()=>navigate(`/user/${id}/single/${book._id}`)} className="max-w-[200px]  truncate text-ellipsis bg-white p-1 shadow-xl rounded-md cursor-pointer transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300">
                  <div
                    className={`w-48 h-60  rounded-t-md`}
                    style={{
                      backgroundImage: `url('${logo}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "50% 50%",
                      backgroundSize: "cover",
                      backgroundColor: "transparent",
                    }}
                  />
                  <div className="m-2 text-start">
                    <p className="text-md">{book.Title}</p>
                    <p className="text-sm italic">{book.Author}</p>
                    <p className="text-sm">$:{book.Cost}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-5">
            <Pagination className=" shadow rounded-md" Size={8} Data={sortedData} setData={(data)=>setSortedData(data)} />
            </div>
          </div>
        </div>
      </div>
  );
}
export default CollectionPage;
