// import SideBar from '../../Components/SideBar';
// import SearchBar from '../../Components/SearchBar';
// import LBMListPage from './LBMListpage'
// import LBMAddPage from './LBMAddPage';
// import useWindowWidth from '';
// import Table from "../../Components/Tables/Table";
// import { Menus,Books,reservedBooks,userData } from '../data'
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

function UserListPage() {
  const [sortData, setSortData] = useState([]);
  const [search, setSearch] = useState("");
  const [sBar, setSBar] = useState(true);
  const [formModal, setFormModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [ID, setID] = useState(false);
  const { data, error, isLoading } = useFetchUsersQuery();

  useEffect(() => {
    if(data)setSortData(data?.result,);
  }, [data]);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.libraryID,
      sort: true,
    },
    {
      name: "Name",
      selector: (row) => row.username,
      sort: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Contact No",
      selector: (row) => row.contactno,
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
    const filteredData = userData?.filter(
      (content) =>
        content.book
          ?.toLowerCase()
          .includes(search?.toString().toLowerCase()) ||
        content.author
          ?.toString()
          .toLowerCase()
          .includes(search?.toString().toLowerCase()) ||
        content.reservedBy
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
          INPUT={INPUT}
          HEAD={"Plans For Library"}
        />

        {content}
        {formModal && <UserAddModalPage onClose={() => setFormModal(false)} />}
        {/* {editModal && <LRMEditPage id={ID} onClose={() => setEditModal(false)} />} */}
      </div>
    </div>
  );
}

export default UserListPage;
