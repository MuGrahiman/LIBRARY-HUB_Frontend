import React, { useState } from "react";
import Modal from "../../../Components/Modal";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useAddReservedDataMutation } from "../../../Store";
import { toast } from "react-toastify";
import { BsExclamationCircle } from "react-icons/bs";

function ReserveAddModalPage({ onClose, id }) {
  const [addReserveData, reservedResult] = useAddReservedDataMutation();
  const [formData, setFormData] = useState({
    UserId: "",
    BookId: undefined,
  });
  const [validatorError, setValidatorError] = useState({});
  const handleFormSubmit = () => {
    const propertyNames = Object.entries(formData)
      .filter(([key, value]) => value === "")
      .map(([key, value]) => key);

    console.log(propertyNames);
    if (propertyNames.length === 0) {
      setValidatorError({})
      addReserveData(formData)
        .unwrap()
        .then((res) => {
          console.log(res);
          toast.success(" Successfully added", {
            onClose: onClose(),
          });
        })
        .catch((err) => {
          console.log(err)
          toast.error(err?.data?.message || err?.message || 'Internal Error');
        });
    } else {
      setValidatorError({})
      propertyNames.forEach((res) =>{
        setValidatorError((previos)=>({
          ...previos,
          [res]: { message: `${res} is required` },
        }))
      });
    } 
  };
  // const handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const modalActionBar = (
    <div>
      <Button
        className="flex items-center gap-3 my-2 mx-auto"
        type="submit"
        onClick={handleFormSubmit}
        size="md"
      >
        Submit
      </Button>
    </div>
  );

  return (
    <div>
      <form className="mt-8 mb-2 w-80% max-w-screen-lg sm:w-96">
        <Modal onClose={() => onClose()} actionBar={modalActionBar}>
          <div className="flex justify-center items-center">
            <div className="mb-4 flex flex-col gap-6">
              <div className="w-[32rem]">
                <Input
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.UserId}
                  value={formData.UserId}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="UserId"
                  label="Reserver ID"
                />
                {validatorError?.UserId && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.UserId.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  size="lg"
                  required
                  type="number"
                  error={!!validatorError?.BookId}
                  value={formData.BookId}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="BookId"
                  label="Book Id"
                />{" "}
                {validatorError?.BookId && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.BookId.message}
                  </Typography>
                )}
              </div>
              {/* <Input
                  size="lg"
                  required
                  type="date"
                  value={formData.LRDueDate}
                  onChange={handleFormChange}
                  name="LRDueDate"
                  label="Due Date"
                />
                   */}
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default ReserveAddModalPage;
