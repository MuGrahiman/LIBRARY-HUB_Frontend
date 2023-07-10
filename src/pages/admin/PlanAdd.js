import React, { useState } from "react";
import Modal from "../../Components/Modal";
import { useAddPlansMutation } from "../../Store";
import { Input, Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

function APlanModalFormPage({ onFormChange, onClose, actionBar }) {
  const [addLPlans, results] = useAddPlansMutation();

  const [formData, setFormData] = useState({
    LPName: "",
    LPDuration: "",
    LPCost: "",
  });

  const handleFormSubmit = () => {
    addLPlans(formData)
      .unwrap()
    .then((res) => {
      if (res.success) Swal.fire("Saved!", "", "success").then(()=>onClose());
      if (res.failed) Swal.fire("Oops!", "", "error");
    });
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
      </form>
    </div>
  );
}

export default APlanModalFormPage;
