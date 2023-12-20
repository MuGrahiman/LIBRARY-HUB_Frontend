import { ClassNames } from "@emotion/react";
import { useEffect, useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { usePagination } from "../Hooks/use-Pagination";

export default function Pagination({
  className ,
  Data,
  setData,
  Size = 10,
  siblingCount = 1,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRange = usePagination({
    currentPage,
    totalCount: Data.length,
    siblingCount,
    pageSize: Size,
  });

  const PageSize = Size;

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const currentTableData = Data.slice(firstPageIndex, lastPageIndex);
    setData(currentTableData);
  }, [Data, PageSize, currentPage]);

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  const currentStyle = "ring font-bold px-2  rounded  cursor-pointer";
  const baseStyle = "flex items-center justify-evenly truncate";
  return (
    <ul className={baseStyle.concat(className)}>
      {/* Left navigation arrow */}
      <li
        className={` p-1 border-2 ring-gray-600 rounded cursor-pointer `}
        onClick={() => currentPage !== 1 && onPrevious()}
      >
        <FaAngleLeft className="arrow-left" />
      </li>

      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "DOTS") {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            onClick={() => setCurrentPage(pageNumber)}
            className={
              currentPage === pageNumber
                ? currentStyle
                : `px-2 border-2 rounded  cursor-pointer`
            }
          >
            {pageNumber}
          </li>
        );
      })}

      {/*  Right Navigation arrow */}
      <li
        className={` p-1 border-2  rounded  cursor-pointer `}
        onClick={() => currentPage !== lastPage && onNext()}
      >
        <FaAngleRight className="arrow right" />
      </li>
    </ul>
  );
}
