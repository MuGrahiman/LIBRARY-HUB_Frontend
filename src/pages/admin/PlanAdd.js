import React, { useState } from "react";
import Modal from "../../Components/Modal";
import { useAddPlansMutation } from "../../Store";
import { Input, Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function APlanModalFormPage({ onFormChange, onClose, actionBar }) {
  const [addLPlans, results] = useAddPlansMutation();
// let addLPlans, results
  const [formData, setFormData] = useState({
    Name: "",
    Duration: "",
    Amount: "",
  });

  const handleFormSubmit = () => {
    console.log(formData)
    addLPlans({Role:'admin',Data:formData})
      .unwrap()
    .then((res) => {
      if (res.success) Swal.fire("Saved!", "", "success").then(()=>onClose());
      if (res.failed) Swal.fire("Oops!", "", "error");
    }).catch(err=>toast.error(err.data.message));
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
      </form>
    </div>
  );
}

export default APlanModalFormPage;
