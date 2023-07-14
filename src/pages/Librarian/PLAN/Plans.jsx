import React, { useEffect, useState } from "react";
import Table from "../../../Components/Tables/Table";
import { Button, Input } from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Spinner } from "@material-tailwind/react";
import Nav from "../../../Components/Nav";
import { useFetchPlansQuery } from "../../../Store";
import SearchBar from "../../../Components/SearchBar";
import useWindowWidth from "../../../Hooks/use-WW";
import PlanAddModalPage from "./PlanAddModalPage";
import PlanEditModalPage from "./PlanEditModalPage";

function PlanPage() {
  const { data, error, isLoading } = useFetchPlansQuery({Role:'library'});
  const [sortData, setSortData] = useState([]);
  const [search, setSearch] = useState("");
  const [Plan, setPlan] = useState("");
  const [formModal, setFormModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  useEffect(() => {
    if (data) {
      console.log(data)
      setSortData(data.result);
    }
  }, [data]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
      sort: true,
    },
    {
      name: "Duration",
      selector: (row) => row.Duration,
      sort: true,
    },
    {
      name: "Cost",
      selector: (row) => row.Amount,
      sort: true,
    },

    {
      name: "Edit",
      cell: (row) => (
        <PencilSquareIcon className="h-5 w-5" onClick={() => HandleEdit(row)} />
      ),
    },
  ];
  const HandleEdit = (plan) => {
    setPlan(plan);
    setEditModal(true);
  };

  const [windowSize, getHeadings] = useWindowWidth();

  const getVisibleHeadings = () => {
    if (windowSize === "SM") {
      return getHeadings(["Name", "Edit"], columns);
    } else {
      return columns;
    }
  };
  const Visible_Headings = getVisibleHeadings();

  useEffect(() => {
    const filteredData = sortData?.filter(
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
      setSortData(data?.result);
    }
  }, [search]);

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
  const INPUT = (
    <Input
      onChange={(e) => setSearch(e.target.value)}
      label="Search"
      value={search}
      icon={<MagnifyingGlassIcon className="h-5 w-5" />}
    />
  );
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center  h-screen">
        <Spinner className="h-20 w-20" color="white" />
      </div>
    );
  }

  if (error) {
    content = <div className="text-center text-lg font-extrabold">There is an Error on Fetching Data !!!!!!!</div>;
  }
  if (sortData) {
    content = (
      <>
        {/* <SearchBar
          BTName="ADD"
          ACTION={SearchActionBar}
          INPUT={INPUT}
          HEAD={"Plans For Library"}
        /> */}
        <Table data={sortData} columns={Visible_Headings} />
      </>
    );
  }

  return (
<div className={` w-3/4 flex-col overflow-x-hidden mx-auto`}>
  {/* <Nav /> */}
      <SearchBar
        BTName="ADD"
        ACTION={SearchActionBar}
        INPUT={INPUT}
        HEAD={"Plans For Library"}
      />      
      {content}
      {formModal && <PlanAddModalPage onClose={() => setFormModal(false)} />}
      {editModal && <PlanEditModalPage plan={Plan} onClose={() => setEditModal(false)} />}
    </div>
  );
}

export default PlanPage;
