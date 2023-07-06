import React, { useState } from "react";
import Modal from "../../../Components/Modal";
import { Input, Button, Textarea } from "@material-tailwind/react";
import { addLibrary, useAddBookMutation } from "../../../store";
import { FormDataFunction } from "../../../Utils/formDataFunction";
import useThunk from "../../../Hooks/use-Thunk";
function BookAddModalPage({ onClose, id }) {
  const [addBook, result] = useAddBookMutation();
  const [formData, setFormData] = useState({
    Title: "",
    Author: "",
    Cost: "",
    Description: "",
    Genres: "",
    Publisher: "",
    publishDate: "",
    CoverBook: null,
  });

  const handleFormSubmit = async() => {
    const data = new FormData();
    for (const field in formData) {
      data.append(field, formData[field]);
    }
    for (const element of data.entries()) {
      console.log(element)
    }
    
    // runaddLibrary(data)
    addBook(data)
      .unwrap()
      .then(() => console.log("sime"));
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
                value={formData.Title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                name="Title"
                label="Book Title"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.Author}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                name="Author"
                label="Author"
              />
              <Input
                size="lg"
                required
                type="number"
                value={formData.Cost}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                name="Cost"
                label="Cost"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.Publisher}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                name="Publisher"
                label="Publisher"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.publishDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                name="publishDate"
                label="Published Date"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.Genres}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                name="Genres"
                label="Genres"
              />
              <Input
                size="lg"
                required
                type="file"
                multiple={true}
                
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.files[0],
                  })
                }
                name="CoverBook"
                label="Cover Image"
              />
              <Textarea
                size="lg"
                required
                type="string"
                value={formData.Description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                name="Description"
                label="Description"
              />
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default BookAddModalPage;
