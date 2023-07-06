import React, {  useState } from 'react'
import Modal from "../../../Components/Modal";
import { Input,Button } from "@material-tailwind/react";

function ReserveAddModalPage({onClose, id}) {

  const [formData, setFormData] = useState({
    LRBID: "",
    LRID: "",
    LRDueDate: "",
    
  });

  const handleFormSubmit = () => {
    onClose()
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
                  value={formData.LRBID}
                  onChange={handleFormChange}
                  name="LRBID"
                  label="Book ID"
                />
                <Input
                  size="lg"
                  required
                  type="string"
                  value={formData.LRID}
                  onChange={handleFormChange}
                  name="LRID"
                  label="Reserver ID"
                />
                <Input
                  size="lg"
                  required
                  type="date"
                  value={formData.LRDueDate}
                  onChange={handleFormChange}
                  name="LRDueDate"
                  label="Due Date"
                />
                  
              </div>
            </div>
          </Modal>
        </form>
    </div>
  )
}

export default ReserveAddModalPage