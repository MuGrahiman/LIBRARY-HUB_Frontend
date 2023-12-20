import { FaUserLock, FaMagnifyingGlass } from "react-icons/fa6";
// import Nav from "../Components/Nav";
// import LocationMap from "../Components/LocationMap";
import { useState } from "react";
import logo from "../../Assets/WhatsApp Image 2023-07-28 at 3.09.04 PM.jpeg";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Button, Spinner, Input } from "@material-tailwind/react";
function SingleBookPage({ onClose, Data }) {

 
  return (
    // <div className="w-full h-screen">
    //   <Nav LeftSide={leftPart} Href={"/"} />
      <div className="w-full h-full my-3">
        <div className="container mx-auto flex my-3">
          <div className="w-1/2 mt-4">
            <div
              className={`w-64 h-96 mx-auto rounded-md shadow-2xl hover:scale-110 hover:translate-x-1  duration-700`}
              style={{
                backgroundImage: `url('${logo}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                // backgroundColor: "transparent",
              }}
            />
          </div>
          
          <div className="w-1/2 mt-4 text-white">
            <header className="text-5xl font-bold font-serif my-3 drop-shadow-xl">
              The Pariah
            </header>
            <p className="text-2xl italic">Anthony Ryan</p>
            <p className="text-md my-1">8,585 ratings.871 reviews</p>
            <p className="text-lg my-2">
              Born into the troubled kingdom of Albermaine, Alwyn Scribe is
              raised as an outlaw. Quick of wit and deft with a blade, Alwyn is
              content with the freedom of the woods and the comradeship of his
              fellow thieves. But an act of betrayal sets him on a new path -
              one of blood and vengeance, which eventually leads him to a
              soldier's life in the king's army. Fighting under the command of
              Lady Evadine Courlain, a noblewoman beset by visions of a demonic
              apocalypse, Alwyn must survive war and the deadly intrigues of the
              nobility if he hopes to claim his vengeance. But as dark forces,
              both human and arcane, gather to oppose Evadine's rise, Alwyn
              faces a choice: can he be a warrior, or will he always be an
              outlaw?
            </p>
            <p>Genres:Animation</p>
            <p>Publisher:Kindle Edition</p>
            <p>published: August 24, 2021</p>
            <p>Pages:100</p>
            <span className="text-md flex">
              Price:<p className="font-bold">$10.5</p>
            </span>
          </div>
        </div>
        <div className="w-11/12 h-0.5 bg-white mx-auto my-2 " />

        <div className="w-4/5 text-white mx-auto my-3">
          <p className="text-2xl font-semibold font-serif border-s-4 p-1 my-2">
            About the Author :
          </p>
          <p>
            Anthony Ryan was born in Scotland in 1970 but spent much of his
            adult life living and working in London. After a long career in the
            British Civil Service he took up writing full time after the success
            of his first novel Blood Song, Book One of the Raven’s Shadow
            trilogy. He has a degree in history, and his interests include art,
            science and the unending quest for the perfect pint of real ale.
          </p>
        </div>
        <div className="w-11/12 h-0.5 bg-white mx-auto my-2 " />

        <div className="container mx-auto my-5 flex">
          <div className="w-1/3 mx-auto ">
            <p className="text-2xl text-white mx-auto font-semibold font-serif border-s-4 p-1 my-2">
              Reviews :
            </p>
            <div className="text-white">
              <p className="italic text-xl">Reviewer</p>
              <p className=" ">Rating</p>
              <p>Created Date</p>
              <p>
                I now have a Booktube channel! Find me at: The Obsessive
                Bookseller Pariah was my most-anticipated fantasy release of
                2021. I was so excited… and I wished I’d liked it more. A couple
                of things sort of sapped my enjoyment of this book. Things that
                may not bother others as much as they did me. For starters, the
                plot felt like it reset itself a couple of times throughout.
                Just as I was getting settled in with the characters and the
                situation, it would flip on its head and I’d have to start over
                again. Momentum in books is a huge component for me, and I
                didn’t feel as though this one carried any. It kept me feeling
                distant from the characters and apathetic about the plot. After
                all, what’s the point in ge
              </p>
            </div>
          </div>

          <div className="w-1/2 mx-auto">
            <p className="text-2xl text-white font-semibold font-serif border-s-4 p-1 my-2">
              Similar Books :
            </p>

            <div className="flex flex-col w-10/12 h-auto mx-auto   rounded-xl ">
              <div className="flex-1   p-1  rounded ">
                <div className="scrollbar-hide overflow-y-auto max-h-96 shadow-inner gap-4">
                
                 
                  {Array.from({ length: 10 } ,(_, idx) => (
                     <div key={idx} className="h-[100px] m-1 mb-2 shadow-xl rounded-md bg-white cursor-pointer transition duration-150 ease-in-out hover:  hover:scale-95">
                     <div className="grid grid-cols-4 h-full w-full  rounded">
                       <div
                         className="h-[90%] w-7/12 rounded-full m-auto "
                         style={{
                           backgroundImage: `url('${logo}')`,
                           backgroundRepeat: "no-repeat",
                           backgroundPosition: "50% 50%",
                           backgroundSize: "cover",
                           // backgroundColor: "transparent",
                         }}
                       />
                       <div className="h-full col-span-3  flex flex-col justify-center">
                         <header className="text-start text-lg text-black font-semibold ">
                           Book Name
                         </header>
                         <div className="text-start text-sm">
                           <p>Author Name</p>
                           <p>Price</p>
                           <p>Ratings</p>
                         </div>
                       </div>
                     </div>
                   </div>
                  ))}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
export default SingleBookPage;
