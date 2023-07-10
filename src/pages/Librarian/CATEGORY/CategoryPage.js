import React, { useEffect, useState } from "react";
import Assets from "../../../Assets/new Library Logo.svg";
import { Menus, eventData, userData, Books } from "../../data";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Spinner, Input } from "@material-tailwind/react";
import useWindowWidth from "../../../Hooks/use-WW";
import SearchBar from "../../../Components/SearchBar";
import SideBar from "../../../Components/SideBar";
import Table from "../../../Components/Tables/Table";
import LCATAddPage from "./LCATAddPage";
import Swal from "sweetalert2";
import {
  useAddCategoryMutation,
  useFetchCategoriesQuery,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../Store";
import { toast } from "react-toastify";

function CategoryPage() {
  const { data, error, isLoading } = useFetchCategoriesQuery();
  const [postCategory, postResult] = useAddCategoryMutation();
  const [updateCategory, updateResult] = useUpdateCategoryMutation();
  const [removeCategory, removeResult] = useRemoveCategoryMutation();

  const [sortData, setSortData] = useState([]);
  const [search, setSearch] = useState("");
  const [sBar, setSBar] = useState(true);
  const [formModal, setFormModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [ID, setID] = useState(false);
  // const { data, error, isLoading } = useState();

  useEffect(() => {
    // if (Books) {
      console.log(data?.result) 
    setSortData(data?.result);
 }, [data]);

  const addCategory = async () => {
    await Swal.fire({
      title: "Category",
      input: "text",
      inputPlaceholder: "Enter the category",
      showCancelButton: true,
    }).then((res) => {
      console.log(res);
      if (res.isConfirmed && res.value !== "") {
        postCategory({ Name: res.value }) 
          .then((res) => {
            console.log(res)
            if (res?.data?.result) toast.success("Successfuly Added");
            else toast.error(`error in the ${res?.error?.data?.message}`);
          })
          .catch((err) => toast.error(err?.data?.message));
      } else {
        toast.error("not valid value");
      }
    });
  };

  const HandleEdit = (id) => {
    Swal.fire({
      title: "Category",
      input: "text",
      inputPlaceholder: "Enter the category",
      inputValue: id.Name,
      showCancelButton: true,
      showConfirmButton: true,
    }).then((res) => {
      console.log(res);
      if (res.isConfirmed && res.value !== "" && res.value !== id.Name) {
        updateCategory({Data:{Name:res.value},ID:id._id})
        .then((res) => {
          console.log(res)
          if (res?.data?.result) toast.success("Successfuly Added");
          else toast.error(`error in the ${res?.error?.data?.message}`);
        })
          .catch((err) => console.log(err));
      } else if(res.isDismissed){ 
        return
      }else {
        toast.error("not valid value");
      }
    });
  };

  const HandleRemove = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "yes",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCategory(id)
          .unwrap()
          .then((res) => {
            if (res.success) toast.success("success!");
            if (res.error) toast.error(`error in the ${res?.error?.data?.message}`);
          })
          .catch((err) => {
            console.log(err);
            toast.error("Oops!!! something went wrong");
          });
      }
    });
  };
  const columns = [
    {
      name: "Title",
      selector: (row) => row.Name,
      sort: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <PencilSquareIcon className="h-5 w-5" onClick={() => HandleEdit(row)} />
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <TrashIcon className="h-5 w-5" onClick={() => HandleRemove(row)} />
      ),
    },
  ];

  const [windowSize, getHeadings] = useWindowWidth();

  const getVisibleHeadings = () => {
    if (windowSize === "MD" || "SM") {
      return getHeadings(["Title", "Edit"], columns);
    } else if (windowSize === "LG") {
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
      onClick={() => addCategory()}
      className="flex items-center  my-2 "
      color="blue"
      size="sm"
    >
      ADD
    </Button>
  );

  let content;
 

  if (error) {
    content = <div>there is an error </div>;
  }
  if (sortData) {
    content = (
      <>
        <Table data={sortData} columns={columns} />
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
          HEAD={"Category"}
        />

        {content}
        {/* {formModal && <LCATAddPage onClose={() => setFormModal(false)} />} */}
        {/* {editModal && <LBMEditpage id={ID} onClose={() => setEditModal(false)} />} */}
      </div>
    </div>
  );
}

export default CategoryPage;
