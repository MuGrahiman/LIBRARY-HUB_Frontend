import { FaCircleArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import logo from "../../Assets/WhatsApp Image 2023-07-28 at 3.09.04 PM.jpeg";
import { Input,Spinner } from "@material-tailwind/react";
import { fetchSingleLibrary, useFetchBooksQuery } from "../../Store";
import { useNavigate, useParams } from "react-router-dom";
import useThunk from "../../Hooks/use-Thunk";
import { useSelector } from "react-redux";
function LandingPage({ onClose, Data }) {
  const { id } = useParams(); // Get the library ID from the URL
  const navigate = useNavigate();
  const { LData } = useSelector((state) => state.library);
  const { data:BookData, error, isLoading } = useFetchBooksQuery({ID:id,Role:'user'});
  const [runfetchLibrary, isfetchLibraryError, isfetchLibraryLoading] =
  useThunk(fetchSingleLibrary);
  const [sortedData,setSortedData] = useState([])
  const [LibraryData,setLibraryData] = useState({})

  useEffect(()=>{
    if(BookData)setSortedData(BookData?.result)
    console.log(BookData)
  },[BookData, sortedData])
  useEffect( ()=>{
    runfetchLibrary()
  .then((res)=>setLibraryData(res[0]));
    console.log(LibraryData)
  },[])
  console.log(BookData)
  console.log(LibraryData)

  let content;
  if (isLoading || isfetchLibraryLoading) {
    content = (
      <div className="flex justify-center items-center  h-screen">
        <Spinner className="h-20 w-20 " color="white" />
      </div>
    );
  }
  if (error || isfetchLibraryError)content = (<div className="mx-auto">there is an error </div>);
  
  if (sortedData)content = (
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
             {LibraryData?.Name}
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
        <div>
          <header className="text-white text-5xl  font-extrabold flex justify-evenly items-center  gap-1 p-1 my-3">
            {/* <div className="w-full h-0.5 bg-white  " /> */}
            <p className="drop-shadow-lg">Books</p>
            {/* <div className="w-full h-0.5 bg-white  " /> */}
          </header>
          <div className="w-4/5 mx-auto scrollbar-hide flex items-center justify-between gap-12 snap-x overflow-x-auto   py-14  rounded-lg ">
            
            {sortedData.map((value, idx) => (
              <div key={idx}  onClick={()=>navigate(`/user/${id}/single/${value._id}`)} className="no-underline text-blue-gray-400 bg-white p-1 shadow-xl rounded-md  snap-start scroll-ml-6 shrink-0 relative  cursor-pointer transition ease-in-out hover:translate-y-1 hover:scale-125 duration-700">
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
                <div className="my-2">
                  <p className="text-md">{value.Title}</p>
                  <p className="text-sm italic">{value.Author}</p>
                </div>
              </div>
            ))}
           
          </div>

          <div className="text-white text-xl  font-extrabold flex justify- gap-5 items-center  p-1 mb-8">
            <div className="w-full h-0.5 bg-white  " />
            <div onClick={()=>navigate(`/user/${id}/collection`)}  className="w-full shadow-inner transition ease-in-out hover:translate-y-0 hover:scale-110 duration-500 rounded-full cursor-pointer  flex justify-center gap-3 items-center">
              <p className="">Go To The Shelves</p>
              <FaCircleArrowRight className="" />
            </div>
            <div className="w-full h-0.5 bg-white  " />
          </div>
          <header className="text-white text-5xl  font-extrabold flex justify-evenly items-center  gap-1 p-1 my-3">
            {/* <div className="w-full h-0.5 bg-white  " /> */}
            <p className="drop-shadow-lg">Help Line</p>
            {/* <div className="w-full h-0.5 bg-white  " /> */}
          </header>
          <div className="w-4/5 mx-auto flex my-3">
            <div className="sm:w-1/2 text-white">
              <p className="border-s-8 text-white text-3xl font-extrabold p-3 my-3">
                Contact Us :
              </p>

              <p className="text-lg my-2">
                If you have any questions or need assistance, feel free to reach
                out to us. We are here to serve you!
              </p>
              <p>Email: {LibraryData.Email}</p>
              <p>Phone: {LibraryData.PhoneNo}</p>
              <p>Follow us on social media: @libraryhub</p>
            </div>
          </div>
          
          {/* <div className="m-8">something</div> */}
        </div>
      </div>
    </div>
  );
  return content;
}
export default LandingPage;
