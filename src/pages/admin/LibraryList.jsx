import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Table from "../../Components/Tables/LibraryListTable";
import { TABLE_ROWS } from "../data";
import LibraryListModalForm from "./LibraryListModalForm";
import SearchBar from "../../Components/SearchBar";
import { useSelector } from "react-redux";
import { addLibrary, fetchLibrary } from "../../store";
import Skelton from "../../Components/Skelton";
import useThunk from "../../Hooks/use-Thunk";
import useWindowWidth from "../../Hooks/use-WW";
import { Button, Spinner, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function AListPage() {
  const { data } = useSelector((state) => state.library);
  console.log(data);
  const [search, setSearch] = useState("");
  const [formModal, setFormModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [runfetchLibrary, isfetchLibraryError, isfetchLibraryLoading] =
    useThunk(fetchLibrary);
  const [runaddLibrary, isaddLibraryError, isaddLibraryLoading] =
    useThunk(addLibrary);

  useEffect(() => {
    runfetchLibrary();
  }, [runfetchLibrary]);

  const TABLE_HEAD = ["Logo", "Name", "Email", "PhoneNO", "Status", "Details"];

  let content;
  if (isfetchLibraryLoading) {
    content = <Skelton times={6}></Skelton>;
  }

  if (isfetchLibraryError) {
    content = <div>there is an error </div>;
  }
  const [windowSize, getHeadings] = useWindowWidth();

  const getVisibleHeadings = () => {
    if (windowSize === "SM") {
      return getHeadings(["Name", "Details"], TABLE_HEAD);
    } else if (windowSize === "MD") {
      return getHeadings(["Name", "Logo", "PhoneNO", "Details"], TABLE_HEAD);
    } else {
      return TABLE_HEAD;
    }
  };
  const Visible_Headings = getVisibleHeadings();

  const handleRemove = () => {
    // dispatch( removeLibrary(formData))
  };

  if (data) {
    content = (
      <Table
        TABLE_HEAD={Visible_Headings}
        handleRemove={handleRemove}
        TABLE_ROWS={data}
      />
    );
  }

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
      size="md"
    >
      ADD
    </Button>
  );
  return (
    <div>
      <Nav />
      <SearchBar
        HEAD="Library List"
        INPUT={INPUT}
        ACTION={SearchActionBar}
      />

      {content}
      {formModal && (<LibraryListModalForm onClose={() => setFormModal(false)} />)}
      {/* {editModal && <APlanModalListPage  onClose={() => setEditModal(false)} />} */}
    </div>
  );
}

export default AListPage;
