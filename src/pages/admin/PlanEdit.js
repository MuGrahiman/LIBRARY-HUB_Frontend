import React, { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import {
  useFetchSinglePlansQuery,
  useRemovePlansMutation,
  useUpdateSinglePlansMutation,
} from "../../store";
import Swal from "sweetalert2";
import { Spinner } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function APMEditPage({ onClose, plan }) {
  const { data, error, isLoading, isFetching, isSuccess } =
    useFetchSinglePlansQuery(plan);

  const [updateLPlan, updateLResult] = useUpdateSinglePlansMutation();
  const [removePlan, removeResult] = useRemovePlansMutation();

  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (data) {
      const InitialData = {
        LPName: data?.result.LPName,
        LPDuration: data?.result.LPDuration,
        LPCost: data?.result.LPCost,
      };
      setFormData(InitialData);
    }
  }, [data]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = () => {
    updateLPlan({ plan, formData })
    .unwrap()
    .then((res) => {
      if (res.success) Swal.fire("success!", "", "success").then(()=>onClose());
      if (res.failed) Swal.fire("Oops!", "", "error");
    });
  };
  const handleRemove = async () => {
    Swal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Submit",
    }).then((result) => {
      if (result.isConfirmed) {
        removePlan(plan)
          .unwrap()
          .then((res) => {
            if (res.success) Swal.fire("success!", "", "success").then(()=>onClose());
            if (res.failed) Swal.fire("Oops!", "", "error");
          });
      }
    });
  };

  const modalActionBar = (
    <div className="w-full sm:flex justify-between gap-3 items-center">
      <div className="w-1/2 my-2 ">
        <Button
          disabled={removeResult.isLoading}
          fullWidth
          color="red"
          type="submit"
          onClick={handleRemove}
          size="sm"
        >
          Delete
        </Button>
      </div>
      <div className="w-1/2 my-2 ">
        <Button
          fullWidth
          type="submit"
          disabled={updateLResult.isLoading}
          onClick={handleFormSubmit}
          size="sm"
        >
          Edit
        </Button>
      </div>
    </div>
  );

  let content;
  if (isLoading) {
    content = (
      <>
        <div className="fixed inset-0 bg-gray-400 opacity-80"></div>
        <div className="fixed inset-0 flex justify-center items-center h-screen">
          <Spinner className="h-20 w-20" color="blue" />
        </div>
      </>
    );
  }

  if (error) {
    content = <div>there is an error </div>;
  }
  if (data) {
    content = (
      <Modal onClose={() => onClose()} actionBar={modalActionBar}>
        <div className="flex justify-center items-center">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              required
              type="string"
              value={formData.LPName}
              onChange={handleFormChange}
              name="LPName"
              label="Plan Name"
            />
            <Input
              size="lg"
              required
              type="string"
              value={formData.LPDuration}
              onChange={handleFormChange}
              name="LPDuration"
              label="Duration"
            />
            <Input
              size="lg"
              required
              type="number"
              value={formData.LPCost}
              onChange={handleFormChange}
              name="LPCost"
              label="Amount"
            />
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <div>
      <form className="mt-8 mb-2 w-80% max-w-screen-lg sm:w-96">{content}</form>
    </div>
  );
}

export default APMEditPage;
