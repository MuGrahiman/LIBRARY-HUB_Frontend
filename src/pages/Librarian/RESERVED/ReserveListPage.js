import SideBar from '../../../Components/SideBar';
import SearchBar from '../../../Components/SearchBar';
import ReserveAddModalPage from './ReserveAddModalPage';
import Table from "../../../Components/Tables/Table";
import useWindowWidth from '../../../Hooks/use-WW';
import { Menus,reservedBooks } from '../../data' 
import React, { useEffect, useState } from 'react'
import Assets from "../../../Assets/new Library Logo.svg";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Button,Spinner, Input } from "@material-tailwind/react";
import { useFetchReservedDataQuery } from '../../../Store';


function ReserveListPage() {
const {data,error,isLoading} = useFetchReservedDataQuery()
const [sortData, setSortData] = useState([]);
  const [search, setSearch] = useState("");
  const [sBar, setSBar] = useState(true);
  const [formModal, setFormModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [ID, setID] = useState(false);
  // const { data, error, isLoading } = useState();
  useEffect(() => {
    console.log(data?.result)
    // if (Books) {
      setSortData(data?.result);
    // }
  }, [data]);
  const columns = [
   
    {
      name: "Book",
      selector: (row) => row?.BookId?.Title,
      sort: true,
    },
    {
      name: "Reserved By",
      selector: (row) => row?.UserId?.Name,
      sort: true,
    },
    {
      name: 'Reserved At',
      selector: (row) => row?.createdAt?.split("T")[0],
    },
    {
      name: "Return In",
      selector: (row) => `${row?.remainingDays} days`,
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
      return getHeadings(["Book", "Details"], columns);
    } else {
      return columns;
    }
  };
  const Visible_Headings = getVisibleHeadings();

  useEffect(() => {
    const filteredData = reservedBooks?.filter(
      (content) =>
        content.book?.toLowerCase().includes(
          search?.toString().toLowerCase()
        ) ||
        content.author?.toString()
          .toLowerCase()
          .includes(search?.toString().toLowerCase()) ||
        content.reservedBy?.toString().includes(
          search?.toString().toLowerCase()
        )
    );

    if (search !== "") {
      setSortData(filteredData);
    } else {
      setSortData(reservedBooks);
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
      Reserve
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
    {formModal && <ReserveAddModalPage onClose={() => setFormModal(false)} />}
    {/* {editModal && <LRMEditPage id={ID} onClose={() => setEditModal(false)} />} */}
      </div>

    // </div>
  )
}

export default ReserveListPage