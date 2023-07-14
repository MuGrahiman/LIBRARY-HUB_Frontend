import React, { useState } from "react";
import Modal from "../../Components/Modal";
import useThunk from "../../Hooks/use-Thunk";
import { addLibrary } from "../../Store";
import { Input, Button, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import LibraryValidationSchema, {
  LibrarySchema,
} from "../../Schema/LibrarySchema";
import useValidator from "../../Hooks/use-Validator";
import { BsExclamationCircle } from "react-icons/bs";
import { toast } from "react-toastify";

function LibraryListModalForm({ Refresh, onClose, actionBar }) {
  const [runaddLibrary, isaddLibraryError, isaddLibraryLoading] =
    useThunk(addLibrary);
  const [formData, setFormData] = useState(LibrarySchema);
  const [runValidator, validatorError] = useValidator(LibraryValidationSchema);

  const handleFormSubmit = async (e) => {
   
    runValidator(formData)
      .then((res) => {
        
        runaddLibrary(formData)
          .then((res) => {
            console.log(res);
            if (res?.success)
              Swal.fire("Saved!", "", "success").then(() => onClose(),Refresh());
          })
          .catch((err) => {
         
            console.log(err)
            toast.error(err?.response?.data?.message || err.message )
        });

      }).catch((err) => console.log(err));
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
              <div className="w-[32rem]">
                <Input
                  label="Library Name"
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
                  label="Email"
                  name="Email"  
                  size="lg"
                  required
                  type="email"
                  error={!!validatorError?.Email}
                  value={formData.Email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Email && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Email.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Phone No"
                  name="PhoneNo"
                  size="lg"
                  required
                  type="number"
                  error={!!validatorError?.PhoneNo}
                  value={formData.PhoneNo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.PhoneNo && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.PhoneNo.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Contry"
                  name="Contry"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Contry}
                  value={formData.Contry}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Contry && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Contry.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="State"
                  name="State"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.State}
                  value={formData.State}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.State && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.State.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="District"
                  name="District"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.District}
                  value={formData.District}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.District && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.State.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="City/Town"
                  name="City"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.City}
                  value={formData.City}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.City && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.City.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Area"
                  name="Area"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Area}
                  value={formData.Area}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Area && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Area.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Land Mark"
                  name="LandMark"
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.LandMark}
                  value={formData.LandMark}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.LandMark && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.LandMark.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Pin Number"
                  name="PinNo"
                  size="lg"
                  required
                  type="number"
                  error={!!validatorError?.PinNo}
                  value={formData.PinNo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.PinNo && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.PinNo.message}
                  </Typography>
                )}
              </div>
              {/* <div className="w-[32rem]">
              <Input
                label="Library Logo"
                name="LLogo"
                required
                type="file"
                size="lg"
                  error={!!validatorError?.PinNo}
                  onChange={(e) => {
                  console.log(e.target.files[0]);
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.files[0],
                  });
                }}
              />
              {validatorError?.PinNo && (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center gap-1 font-normal mt-2"
                >
                  <BsExclamationCircle className="w-4 h-4 -mt-px" />
                  {validatorError?.PinNo.message}
                </Typography>
              )}
            </div> */}
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default LibraryListModalForm;
