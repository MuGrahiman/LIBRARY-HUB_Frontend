import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Versatile({ Data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  const handlePrev = () => {
    setActiveIndex(1);
    // setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setActiveIndex((prevIndex) => (prevIndex === 0 ? Data.length - 1 : prevIndex - 1));
  };
 
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === Data.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="relative w-full h-80  ">
      {Data.map((item, index) => (
        <>
          <div
            className={` w-full h-full rounded-xl shadow-md bg-pink-300 absolute inset-0 flex items-center justify-center transition-all ease-in-out duration-1000 transform ${
              activeIndex === index
                ? "translate-x-0"
                : "translate-x-full hidden"
            }`}
          >
            <img
              src={item.imageUrl}
              alt={`index ${index}`}
              className={` object-cover w-full h-full  rounded-xl `}
            />
          <div className="flex flex-col items-center text-xl font-semibold w-4/5 mx-auto bg-clip-text absolute inset-0 text-white">
            <header className="mt-8">
              <h1>{item?.title}</h1>
            </header>
            <div className="my-3">
              <h3>{item?.subTitle}</h3>
            </div>
            <p>
             Date  :{item?.date}
            </p>
            <p>
              Time :{item?.Time}
            </p>
            <p>
             Location :{item?.location}
            </p>
            <h3>Ticket Prize :{item?.ticketPrice}</h3>
            <p>
             {item?.description}
            </p>
          </div>
          </div>
        </>
      ))}
      {Data.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
            onClick={handlePrev}
          >
            Prev
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
            onClick={handleNext}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}
