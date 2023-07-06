import React from "react";
import DataTable from "react-data-table-component";

// const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#ffffff",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "bold",
      color: "black",
    },
  },

  cells: {
    className:"hover-cell",
    class:"hover-cell",
    style: {
      fontSize: "16px",
      color: "#222222",
    },
  },
 

  pagination: {
    style: {
      backgroundColor: "white",
      color: "#0398fc",
      borderRadius: "0 0 10px 10px",
    },
  },
  header: {
    style: {
      backgroundColor: "white",
      color: "black",
      borderRadius: "10px 10px 0 0",
    },
  },
  subHeader: {
    style: {
      backgroundColor: "white",
      color: "#0398fc",
    },
  },
};
// const tableHeaderActionBar = (
//   <div className="sm:flex w-full shrink-0 gap-2 md:w-max items-center">
//     <div className="w-full md:w-72 ">
//       <Input
//         onChange={(e) => setSearch(e.target.value)}
//         label="Search"
//         value={search}
//         icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//       />
//     </div>
//     <Button
//       onClick={() => setModal(true)}
//       className="flex items-center gap-3 my-2 mx-auto"
//       color="blue"
//       size="md"
//     >
//       ADD
//     </Button>
//   </div>
// );
function NewTable(prop) {
  return (
    <div className="w-4/5  mx-auto my-10">
      <DataTable
        highlightOnHover 
        pagination
        // subHeader
        // actions={<div>button</div>}
        // fixedHeader
        // subHeaderWrap
        // subHeaderAlign="right"
        // subHeaderComponent={tableHeaderActionBar}
        // selectableRowsComponentProps={selectProps}
        // title="countries list"
        fixedHeaderScrollHeight="470px"
        selectableRowsHighlight
        {...prop}
        customStyles={customStyles}
      />
    </div>
  );
}

export default NewTable;
