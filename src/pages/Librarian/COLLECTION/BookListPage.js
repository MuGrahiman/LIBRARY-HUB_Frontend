import React, { useEffect, useState } from 'react'
import Assets from "../../../Assets/new Library Logo.svg";
import { Menus,Books } from '../../data' 
import Table from "../../../Components/Tables/Table";
import SideBar from '../../../Components/SideBar';
import SearchBar from '../../../Components/SearchBar';
import BookEditModalPage from './BookEditModalPage'
import BookAddModalPage from './BookAddModalPage'
import useWindowWidth from '../../../Hooks/use-WW';
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Button,Spinner, Input } from "@material-tailwind/react";

function BookListPage() {
const [sortData, setSortData] = useState([]);
  const [search, setSearch] = useState("");
  const [sBar, setSBar] = useState(true);
  const [formModal, setFormModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [ID, setID] = useState(false);
  const { data, error, isLoading } = useState();

  useEffect(() => {
    // if (Books) {
      setSortData(Books);
    // }
  }, []);
  const columns = [
   
    {
      name: 'Image',
      selector: (row) => <img src={row.coverImage} alt={row.coverImage} className="h-10 w-10" />,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sort: true,
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sort: true,
    },
    {
      name: "Cost",
      selector: (row) => row.amount,
      sort: true,
    },

    {
      name: "Edit",
      cell: (row) => (
        <PencilSquareIcon className="h-5 w-5" onClick={() => HandleEdit(row)} />
      ),
    },
  ];

  const [windowSize, getHeadings] = useWindowWidth();

  const getVisibleHeadings = () => {
    if (windowSize === "SM") {
      return getHeadings(["Title", "Edit"], columns);
    } else {
      return columns;
    }
  };
  const Visible_Headings = getVisibleHeadings();

  useEffect(() => {
    const filteredData = Books?.filter(
      (country) =>
        country.LPName?.toLowerCase().includes(
          search?.toString().toLowerCase()
        ) ||
        country.LPCost?.toString()
          .toLowerCase()
          .includes(search?.toString().toLowerCase()) ||
        country.LPDuration?.toString().includes(
          search?.toString().toLowerCase()
        )
    );

    if (search !== "") {
      setSortData(filteredData);
    } else {
      setSortData(Books);
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
      ADD
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
           <Table data={ sortData } columns={Visible_Headings} />

      </>
    );
  }
  return (
    // <div className="flex w-full mx-0">
    //    <div className={` ${sBar ? "w-72" : " w-20"} bg-transparent flex-none`}>
    //     <SideBar
    //       Menus={Menus}
    //       Logo={Assets}
    //       onClose={() => setSBar(!sBar)}
    //       onOpen={sBar}
    //       Title={"Lunar Library"}
    //     />
    //   </div>
      <div className={` w-3/4 flex-col overflow-x-hidden mx-auto`}>
      <SearchBar
          BTName="ADD"
          ACTION={SearchActionBar}
          INPUT={INPUT}
          HEAD={"Plans For Library"}
        />

    {content}
    {formModal && <BookAddModalPage onClose={() => setFormModal(false)} />}
    {editModal && <BookEditModalPage id={ID} onClose={() => setEditModal(false)} />}
      </div>

    // </div>
  )
}

export default BookListPage