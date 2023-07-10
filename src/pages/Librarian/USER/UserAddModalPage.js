import React, { useState } from "react";
import Modal from "../../../Components/Modal";
import {
  Input,
  Typography,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { Bounce, Flip, toast } from "react-toastify";
import { BsExclamationCircle } from "react-icons/bs";
import useValidator from "../../../Hooks/use-Validator";
import UserSchema, { schema } from "../../../Schema/UserSchema";
import { useAddUserMutation } from "../../../Store";

function UserAddModalPage({ onClose, id }) {
  const [addUser, result] = useAddUserMutation();
  const [runValidator, validatorError] = useValidator(UserSchema);
  const [formData, setFormData] = useState(schema);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    console.log(formData);
    runValidator(formData)
      .then((res) => {
        addUser(formData)
          .unwrap()
          .then(() => {
            console.log("sime");
            toast.success(" Successfully added", {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              onClose: () => onClose(),
            });
          })
          .catch((err) => {
            toast.error(err?.data?.message, {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Flip,
            });
          });
      })
      .catch((err) => {
        return;
      });
  };

  const modalActionBar = (
    <div>
      <Button
        className="flex items-center gap-3 my-2 mx-auto"
        type="submit"
        size="md"
        disabled={result.isLoading}
        onClick={handleFormSubmit}
      >
        Add User
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
                  label=" Name"
                  name="Name"
                  size="lg"
                  type="string"
                  value={formData.Name}
                  error={!!validatorError?.Name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
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
                  label=" Email"
                  name="Email"
                  size="lg"
                  type="email"
                  required
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
                  label=" Phone No"
                  name="PhoneNo"
                  size="lg"
                  type="number"
                  error={!!validatorError?.PhoneNo}
                  value={formData.PhoneNo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
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
                  label=" Date Of Birth"
                  name="DOB"
                  size="lg"
                  type="date"
                  error={!!validatorError?.DOB}
                  value={formData.DOB}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                {validatorError?.DOB && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.DOB.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Select
                  label="Choose Your Gender"
                  name="Gender"
                  error={!!validatorError?.Gender}
                  value={formData.Gender}
                  onChange={(value) =>
                    handleFormChange({ target: { name: "Gender", value } })
                  }
                  required
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Trans Gender">Trans Gender</Option>
                </Select>
                {validatorError?.Gender && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Gender.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Contry"
                  name="Contry"
                  size="lg"
                  type="string"
                  error={!!validatorError?.Contry}
                  value={formData.Contry}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
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
                  type="string"
                  size="lg"
                  required
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
                    {validatorError?.District.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
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
                  name="City"
                  label="City/Town"
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
                  type="string"
                  size="lg"
                  required
                  value={formData.Area}
                  error={!!validatorError?.Area}
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
                  type="string"
                  size="lg"
                  required
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
                  label="House Name"
                  name="House"
                  type="string"
                  size="lg"
                  required
                  error={!!validatorError?.House}
                  value={formData.House}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.House && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.House.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  label="Post"
                  name="Post"
                  type="string"
                  size="lg"
                  required
                  error={!!validatorError?.Post}
                  value={formData.Post}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {validatorError?.Post && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Post.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
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
                  name="PinNo"
                  label="Pin Number"
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
              <div className="w-[32rem]">
                <Input
                  label="Occupation"
                  name="Occupation"
                  size="lg"
                  type="string"
                  error={!!validatorError?.Occupation}
                  value={formData.Occupation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                {validatorError?.Occupation && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Occupation.message}
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

export default UserAddModalPage;
