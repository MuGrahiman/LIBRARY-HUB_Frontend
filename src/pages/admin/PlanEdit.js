import React, { useEffect, useState } from "react";
import Modal from "../../Components/Modal";

import Swal from "sweetalert2";
import { Spinner } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFetchSinglePlansQuery, useRemovePlansMutation, useUpdateSinglePlansMutation } from "../../Store";

function APMEditPage({ onClose, plan }) {
  const { data, error, isLoading, isFetching, isSuccess } =
    useFetchSinglePlansQuery({Plan:plan,Role:'admin'});

  const [updatePlan, updateLResult] = useUpdateSinglePlansMutation();
  const [removePlan, removeResult] = useRemovePlansMutation();
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (data) {
      const InitialData = {
        Name: data?.result.Name,
        Duration: data?.result.Duration,
        Amount: data?.result.Amount,
      };
      setFormData(InitialData);
    }
  }, [data]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = () => {
    updatePlan({ Plan:plan, Data:formData,Role:'admin' })
    .unwrap()
    .then((res) => {
      if (res.success) toast.success("succefully updated",{onclose:onClose()});
      if (res.failed) Swal.fire("Oops!", "", "error");
    });
  };
  const handleRemove = async () => {
    Swal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        removePlan({Plan:plan,Role:'admin'})
          .unwrap()
          .then((res) => {
            if (res.success) toast.success("successfully deleted",{onclose:()=>onClose()});
            if (res.failed) Swal.fire("Oops!", "", "error");
          }).catch(err=>toast.error(err.message))
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
              value={formData.Name}
              onChange={handleFormChange}
              name="Name"
              label="Plan Name"
            />
            <Input
              size="lg"
              required
              type="string"
              value={formData.Duration}
              onChange={handleFormChange}
              name="Duration"
              label="Duration"
            />
            <Input
              size="lg"
              required
              type="number"
              value={formData.Amount}
              onChange={handleFormChange}
              name="Amount"
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
