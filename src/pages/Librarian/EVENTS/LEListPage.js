import React, { useEffect, useState } from "react";
import SearchBar from "../../../Components/SearchBar"; 
import SideBar from "../../../Components/SideBar";
import Versatile from "../../../Components/Versatile";
import LEMAddPage from "./LEMAddpage";
import Assets from "../../../Assets/new Library Logo.svg";
import { Menus, eventData, userData } from "../../data";
import { Button, Spinner } from "@material-tailwind/react";

function LEListPage() {
  const [sortData, setSortData] = useState([]);
  const [sBar, setSBar] = useState(true);
  const [formModal, setFormModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [ID, setID] = useState(false);
  const { data, error, isLoading } = useState();

  useEffect(() => {
    // if (Books) {
    setSortData(userData);
    // }
  }, []);


 


  const HandleEdit = (id) => {
    setID(id);
    setEditModal(true);
  };

 
  const SearchActionBar = (
    <Button
      onClick={() => setFormModal(true)}
      className="flex items-center  my-2 mx-auto"
      color="blue"
      size="md"
    >
      Add Event
    </Button>
  );

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-20 w-20" color="white" />
      </div>
    );
  }

  if (error) {
    content = <div>there is an error </div>;
  }
  if (sortData) {
    content = eventData.map((i) => (
      <div className="w-4/5 h-80 mx-auto mb-3">
        <Versatile Data={eventData} />
      </div>
    ));
  }
  return (
    <div className="flex w-full mx-0">
      <div className={` ${sBar ? "w-72" : " w-20"} bg-transparent flex-none`}>
        <SideBar
          Menus={Menus}
          Logo={Assets}
          onClose={() => setSBar(!sBar)}
          onOpen={sBar}
          Title={"Lunar Library"}
        />
      </div>
      <div className={` w-3/4 flex-col overflow-x-hidden mx-auto`}>
        <SearchBar
          BTName="ADD"
          ACTION={SearchActionBar}
          HEAD={"Add Events"}
        />

        {content}
        {formModal && <LEMAddPage onClose={() => setFormModal(false)} />}
        {/* {editModal && <LRMListPage id={ID} onClose={() => setEditModal(false)} />} */}
      </div>
    </div>
  );
}

export default LEListPage;
