import React, { useState } from "react";
import Modal from "../../../Components/Modal";
import { useAddPlansMutation } from "../../../Store";
import { Input, Button, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import PlanValidationSchema, { PlanSchema } from "../../../Schema/PlanSchema";
import useValidator from "../../../Hooks/use-Validator";
import { BsExclamationCircle } from "react-icons/bs";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";

function PlanAddModalPage({ onFormChange, onClose, actionBar }) {
  const [addLPlans, results] = useAddPlansMutation();
  const [runValidator, validatorError] = useValidator(PlanValidationSchema);

  const [formData, setFormData] = useState(PlanSchema);

  const handleFormSubmit = () => {
    runValidator(formData).then((res)=>{
    
    addLPlans({ Data: formData, Role: "library" })
      .unwrap()
      .then((res) => {
        console.log(res)
        toast.success(" Successfully added", {
          onClose: onClose(),
        });
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      }); 
    }).catch((err)=>console.log(err))
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
        disabled={results.isLoading}
      >
        Submit
      </Button>
    </div>
  );

  return (
    <div>
      {/* <ToastContainer/> */}
      <form className="mt-8 mb-2 w-80% max-w-screen-lg sm:w-96">
        <Modal onClose={() => onClose()} actionBar={modalActionBar}>
          <div className="flex justify-center items-center">
            <div className="mb-4 flex flex-col gap-6">
              <div className="w-[32rem]">
                <Input
                  label="Plan Name"
                  name="Name"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Name}
                  value={formData.Name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Name && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Name.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Duration"
                  name="Duration"
                  size="lg"
                  required
                  type="string"
                  value={formData.Duration}
                  error={!!validatorError?.Duration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Duration && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Duration.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Amount"
                  name="Amount"
                  size="lg"
                  required
                  type="number"
                  error={!!validatorError?.Amount}
                  value={formData.Amount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Amount && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Amount.message}
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default PlanAddModalPage;
