import React, { useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
function SearchBar({ HEAD, CONTENT, ACTION, INPUT }) {
  const [searchVal, setSearchVal] = useState("");
  const searchRef = useRef(null);

  const handleChange = (e) => {
    const search = e.target.value;
    setSearchVal(search);
    console.log(searchVal);
  };

  return (
    <div className="w-4/5  mx-auto my-10">
      <Card className=" rounded-bl-none rounded-br-none">
        <CardHeader floated={false} shadow={false}>
          <div className="mb-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              {HEAD && (
                <Typography variant="h5" color="blue-gray">
                  {HEAD}
                </Typography>
              )}
              {CONTENT && (
                <Typography color="gray" className="mt-1 font-normal">
                  {CONTENT}
                </Typography>
              )}
            </div>
            <div className="lg:flex w-full shrink-0 gap-2 lg:w-max">
              <div className="w-full lg:w-72 my-2">{INPUT && INPUT}</div>
              <div className="w-full lg:w-fit flex justify-end">
                {ACTION && ACTION}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

export default SearchBar;
