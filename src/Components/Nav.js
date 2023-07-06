export default function Nav() {
  return (
    <div className="bg-blue-400 pt-1 sticky mb-3 flex px-9">
    <div className="container py-1 flex items-center justify-center md:justify-start mx-auto">
      <a href="/" className=" md:w-1/3 lg:w-1/5 flex items-center justify-evenly text-white no-underline ">
        <img
          className="w-1/4"
        //   width="25%"
          src="New Library Logo.png"
          alt="logo of library"
        />
        <h1 className=" font-bold"> LIBRARY HUB</h1>
      </a>
    </div>
    </div>
  );
} 
