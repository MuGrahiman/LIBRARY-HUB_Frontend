import React from "react";

import { EyeIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

export default function libraryPlansTable({
  TABLE_ROWS,
  TABLE_HEAD,
  handleRemove,
}) {
  return (
    <div className="w-4/5 flex justify-center items-center mx-auto my-10">
      <Card className="h-full w-full ">
        <CardBody className="px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((data, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={data._id}>
                    <td className={`${classes}`}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {data?.LPName}
                        </Typography>
                      </div>
                    </td>
                    <td className={`${classes}`}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {data?.LPDuration}
                        </Typography>
                      </div>
                    </td>
                    <td className={`${classes} hidden sm:table-cell`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.LPCost}
                      </Typography>
                    </td>

                    <td className={`${classes}`}>
                      <Tooltip content="Edit User">
                        <IconButton
                          variant="text"
                          onClick={handleRemove}
                          color="blue-gray"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      
      </Card>
    </div>
  );
}
