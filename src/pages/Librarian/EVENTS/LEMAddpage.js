import React, { useState } from "react";
import Modal from "../../../Components/Modal";
import { Input, Button, Textarea } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

function LEMAddPage({ onClose, id }) {
  const [formData, setFormData] = useState({
    LETitle: "",
    LETime: "",
    LEDate: "",
    LELocation: "",
    LEDescription:"",
    LEImage: null,
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
        Add Event
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
                type="file"
                value={formData.LEImage}
                onChange={handleFormChange}
                name="LEImage"
                label="Image"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LETitle}
                onChange={handleFormChange}
                name="LETitle"
                label="Title"
              />
              <Input
                size="lg"
                required
                type="time"
                value={formData.LETime}
                onChange={handleFormChange}
                name="LETime"
                label="Time"
              />
              <Input
                size="lg"
                required
                type="date"
                value={formData.LEDate}
                onChange={handleFormChange}
                name="LEDate"
                label="Date"
              />
           
              <Input
                size="lg"
                required
                type="string"
                value={formData.LELocation}
                onChange={handleFormChange}
                name="LELocation"
                label="Location"
              />
              <Textarea
                size="lg"
                required
                type="string"
                value={formData.LEDescription}
                onChange={handleFormChange}
                name="LEDescription"
                label="State"
              />
              
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default LEMAddPage;
