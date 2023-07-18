function LandingPage({ onClose, Data }) {
  return (
    <div className="w-full h-screen">
      <header className="w-full h-[60px] bg-blue-400 sticky  sm:p-9">
        <div className=" h-full flex justify-between items-center mx-auto">
          <div className="h-full items-center">
            <a
              href="/admin/dashboard"
              className=" h-full flex items-center justify-evenly text-white text-center text-lg no-underline my-auto"
            >
              <img
                className="h-[50px]"
                //   width="25%"
                src="New Library Logo.png"
                alt="logo of library"
              />
              <p className=" font-bold"> LIBRARY HUB</p>
            </a>
          </div>
          <div className="flex text-white">
            <button className="w-full bg-black">Log-In</button>
          </div>
        </div>
      </header>
    </div>
  );
}
export default LandingPage;
