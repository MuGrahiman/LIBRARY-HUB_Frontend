import React, { useState } from "react";
import Modal from "../../../Components/Modal";
import { Input, Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

function UserAddModalPage({ onClose, id }) {
  const [formData, setFormData] = useState({
    LUName: "",
    LUEmail: "",
    LUPhone: "",
    LUDOB: "",
    LUGender: "",
    LUContry: "",
    LUState: "",
    LUCity: "",
    LUArea: "",
    LULandMark: "",
    LUOccupation: "",
    LUPinNo: "",
  });

  const handleFormSubmit = () => {
    onClose();
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
              <Input
                size="lg"
                required
                type="string"
                value={formData.LUName}
                onChange={handleFormChange}
                name="LUName"
                label="User Name"
              />
              <Input
                size="lg"
                required
                type="email"
                value={formData.LUEmail}
                onChange={handleFormChange}
                name="LUEmail"
                label="User Email"
              />
              <Input
                size="lg"
                required
                type="number"
                value={formData.LUPhone}
                onChange={handleFormChange}
                name="LUPhone"
                label="User Phone No"
              />
              <Input
                size="lg"
                required
                type="date"
                value={formData.LUDOB}
                onChange={handleFormChange}
                name="LUDOB"
                label="User Date Of Birth"
              />

              <Select
                label="Choose Your Gender"
                required
                value={formData.LUGender}
                name="LUGender"
                onChange={(value) => handleFormChange({ target: { name: "LUGender", value } })}
                >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Trans Gender">Trans Gender</Option>
              </Select>

              <Input
                size="lg"
                required
                type="string"
                value={formData.LUContry}
                onChange={handleFormChange}
                name="LUContry"
                label="Contry"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LUState}
                onChange={handleFormChange}
                name="LUState"
                label="State"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LUCity}
                onChange={handleFormChange}
                name="LUCity"
                label="City/Town"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LUArea}
                onChange={handleFormChange}
                name="LUArea"
                label="Area"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LULandMark}
                onChange={handleFormChange}
                name="LULandMark"
                label="Land Mark"
              />
                <Input
                size="lg"
                required
                type="string"
                value={formData.LUOccupation}
                onChange={handleFormChange}
                name="LUOccupation"
                label="Occupation"
              />
              <Input
                size="lg"
                required
                type="number"
                value={formData.LUPinNo}
                onChange={handleFormChange}
                name="LUPinNo"
                label="Pin Number"
              />
            
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default UserAddModalPage;
