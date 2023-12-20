
import logo from "../../Assets/WhatsApp Image 2023-07-28 at 3.09.04 PM.jpeg";

function AboutPage({ onClose, Data }) {

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
              Library Name
            </p>
            <p className="text-lg font-extralight italic">
              Library quete something they need to provide
            </p>
          </header>
          <div className="w-3/5 my-3 text-white text-3xl text-center font-extrabold ">
            <p>About Us ....</p>
         
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

          <div className="container mx-auto flex my-3">
            <div className="sm:w-1/2 mt-4 text-white">
              <p className="border-s-8 text-white text-3xl font-extrabold p-3 my-3">
                About Our Library :
              </p>
              <p className="text-lg my-2">
                Welcome to the Library Name! We are a community-focused library
                dedicated to providing valuable resources and fostering a love
                for reading and learning. Since our establishment in 1990, we
                have been committed to serving the needs of our diverse
                community. Our mission is to promote literacy, provide access to
                knowledge, and empower individuals through learning
                opportunities. We believe in cultivating a curious and informed
                society for a brighter future.
              </p>
            </div>
          </div>

          <div className="w-11/12 h-0.5 bg-white mx-auto my-2 " />

          <div className="container mx-auto flex my-3">
            <div className="sm:w-1/2 ms-auto text-white">
              <p className="border-s-8 text-white text-3xl font-extrabold p-3 my-3">
                Meet Our Team :
              </p>
              <p className="text-lg my-2">
                Our dedicated team of librarians and support staff is passionate
                about serving the community. They are always ready to assist you
                in finding the perfect book or providing the resources you need
                for your research and learning. We actively collaborate with
                local schools, organizations, and community groups to host
                educational and cultural events. Our library is a hub for social
                gatherings, book clubs, and workshops that encourage creativity
                and personal growth.
              </p>
            </div>
          </div>

          <div className="w-11/12 h-0.5 bg-white mx-auto my-2 " />
          
          <div className="container mx-auto flex my-3">
            <div className="sm:w-1/2 text-white">
              <p className="border-s-8 text-white text-3xl font-extrabold p-3 my-3">
                Contact Us :
              </p>

              <p className="text-lg my-2">
                If you have any questions or need assistance, feel free to reach
                out to us. We are here to serve you!
              </p>
              <p>Email: info@libraryhub.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Follow us on social media: @libraryhub</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
