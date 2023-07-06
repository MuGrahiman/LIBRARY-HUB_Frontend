import React, {  useState } from 'react'
import Modal from "../../../Components/Modal";
import { Input,Button } from "@material-tailwind/react";

function BookEditModalPage({onFormChange,onClose,actionBar}) {

  const [formData, setFormData] = useState({
    LBName: "",
    LBAuthor: "",
    LPCost: "",
    LBDescription:"",
    LBCopy:"",
    LBGenres:"",
    LBpublishDate:"",
    LBImage:null,
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
        Edit
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
                  value={formData.LBName}
                  onChange={handleFormChange}
                  name="LBName"
                  label="Book Title"
                />
                <Input
                  size="lg"
                  required
                  type="string"
                  value={formData.LBAuthor}
                  onChange={handleFormChange}
                  name="LBAuthor"
                  label="Author"
                />
                <Input
                  size="lg"
                  required
                  type="number"
                  value={formData.LBCost}
                  onChange={handleFormChange}
                  name="LBCost"
                  label="Cost"
                />
                   <Input
                  size="lg"
                  required
                  type="string"
                  value={formData.LBPublisher}
                  onChange={handleFormChange}
                  name="LBPublisher"
                  label="Publisher"
                />
                  <Input
                  size="lg"
                  required
                  type="string"
                  value={formData.LBpublishDate}
                  onChange={handleFormChange}
                  name="LBpublishDate"
                  label="Published Date"
                />
                <Input
                  size="lg"
                  required
                  type="string"
                  value={formData.LBGenres}
                  onChange={handleFormChange}
                  name="LBGenres"
                  label="Genres"
                />
                <Input
                  size="lg"
                  required
                  type="string"
                  value={formData.LBDescription}
                  onChange={handleFormChange}
                  name="LBDescription"
                  label="Description"
                />
                <Input
                  size="lg"
                  required
                  type="string"
                  value={formData.LBCopy}
                  onChange={handleFormChange}
                  name="LBCopy"
                  label="Copies"
                />
                 <Input
                  size="lg"
                  required
                  type="file"
                  value={formData.LBImage}
                  onChange={handleFormChange}
                  name="LBImage"
                  label="Cover Image"
                />
              </div>
            </div>
          </Modal>
        </form>
    </div>
  )
}

export default BookEditModalPage