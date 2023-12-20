
import React, { useEffect, useState } from "react";
import Assets from "../../../Assets/new Library Logo.svg";
import { Menus, userData } from "../../data";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Button, Spinner, Input } from "@material-tailwind/react";
import useWindowWidth from "../../../Hooks/use-WW";
import SearchBar from "../../../Components/SearchBar";
import SideBar from "../../../Components/SideBar";
import Table from "../../../Components/Tables/Table";
import UserAddModalPage from "./UserAddModalPage";
import { useFetchUsersQuery } from "../../../Store";
import { toast } from "react-toastify";
import UserEditModalPage from "./UserEditModalPage";

function UserListPage() {
  const [sortData, setSortData] = useState([]);
  const [search, setSearch] = useState("");
  const [sBar, setSBar] = useState(true);
  const [formModal, setFormModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [ID, setID] = useState(false);
  const { data, error, isLoading } = useFetchUsersQuery();

  useEffect(() => {
    console.log(data,error)
    if(data)setSortData(data?.result,)
    if(error)toast.error(error?.data?.message||error?.message)
  }, [data, error]);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.LibraryCode,
      sort: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      sort: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
    },
    {
      name: "Contact No",
      selector: (row) => row.PhoneNo,
      sort: true,
    },

    {
      name: "Details",
      cell: (row) => (
        <PencilSquareIcon className="h-5 w-5" onClick={() => HandleEdit(row)} />
      ),
    },
  ];

  const [windowSize, getHeadings] = useWindowWidth();

  const getVisibleHeadings = () => {
    if (windowSize === "SM") {
      return getHeadings(["Name", "Details"], columns);
    } else {
      return columns;
    }
  };
  const Visible_Headings = getVisibleHeadings();

  useEffect(() => {
    const filteredData = data?.filter(
      (content) =>
        content.Name
          ?.toLowerCase()
          .includes(search?.toString().toLowerCase()) ||
        content.LibraryCode
          ?.toString()
          .toLowerCase()
          .includes(search?.toString().toLowerCase()) ||
        content.Email
          ?.toString()
          .includes(search?.toString().toLowerCase())
    );

    if (search !== "") {
      setSortData(filteredData);
    } else {
      setSortData(userData);
    }
  }, [search]);

  const HandleEdit = (id) => {
    setID(id);
    setEditModal(true);
  };

  const INPUT = (
    <Input
      onChange={(e) => setSearch(e.target.value)}
      label="Search"
      value={search}
      icon={<MagnifyingGlassIcon className="h-5 w-5" />}
    />
  );
  const SearchActionBar = (
    <Button
      onClick={() => setFormModal(true)}
      className="flex items-center  my-2 "
      color="blue"
      size="sm"
    >
      Add User
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
    content = (
      <>
        <Table data={sortData} columns={Visible_Headings} />
      </>
    );
  }
  return (
    <div className="flex w-full mx-0">
      {/* <div className={` ${sBar ? "w-72" : " w-20"} bg-transparent flex-none`}>
        <SideBar
          Menus={Menus}
          Logo={Assets}
          onClose={() => setSBar(!sBar)}
          onOpen={sBar}
          Title={"Lunar Library"}
        />
      </div> */}
      <div className={` w-3/4 flex-col overflow-x-hidden mx-auto`}>
        <SearchBar
          BTName="ADD"
          ACTION={SearchActionBar}
          INPUT={INPUT}
          HEAD={"Plans For Library"}
        />

        {content}
        {formModal && <UserAddModalPage onClose={() => setFormModal(false)} />}
        {editModal && <UserEditModalPage id={ID} setId={setID} onClose={() => setEditModal(false)} />}
      </div>
    </div>
  );
}

export default UserListPage;
