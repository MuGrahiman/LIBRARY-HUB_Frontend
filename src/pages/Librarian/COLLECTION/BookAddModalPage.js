import Modal from "../../../Components/Modal";
import { useAddBookMutation } from "../../../Store";
import { FormDataAppend } from "../../../Utils/formDataFunction";
import useThunk from "../../../Hooks/use-Thunk";
import React, { useState } from "react";
import {
  Input,
  Button,
  Textarea,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import BooksSchema, { schema } from "../../../Schema/BookSchema";
import useValidator from "../../../Hooks/use-Validator";
import { BsExclamationCircle } from "react-icons/bs";

function BookAddModalPage({ onClose, id }) {
  const [addBook, result] = useAddBookMutation();
  const [runValidator, validatorError] = useValidator(BooksSchema);
  const [formData, setFormData] = useState(schema);
// const 
  const handleFormSubmit = async () => {
    runValidator(formData)
      .then((res) => {
        const data = FormDataAppend(formData);
        addBook({Data:formData,Role:'library'})
          .unwrap()
          .then(() => {
            console.log("sime");
            toast.success(" Successfully added", {
              autoClose: 1000,
              onClose: onClose(),
            });
          })
          .catch((err) => {
            toast.error(err?.data?.message);
          });
      })
      .catch((err) => {
        return;
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
      {/* <ToastContainer /> */}
      <form className="mt-8 mb-2 w-80% max-w-screen-lg sm:w-96">
        <Modal onClose={() => onClose()} actionBar={modalActionBar}>
          <div className="flex justify-center items-center">
            <div className="mb-4 flex flex-col gap-6">
              <div className="w-[32rem]">
                <Input
                  // success
                  error={!!validatorError?.Title}
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
                {validatorError?.Title && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Title.message}
                  </Typography>
                )}
              </div>

              <div className="w-[32rem]">
                <Input
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Author}
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
                {validatorError?.Author && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Author.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  error={!!validatorError?.Cost}
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
                {validatorError?.Cost && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Cost.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  error={!!validatorError?.ISBN}
                  size="lg"
                  required
                  type="number"
                  value={formData.ISBN}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="ISBN"
                  label="ISBN"
                />
                {validatorError?.ISBN && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.ISBN.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  error={!!validatorError?.Pages}
                  size="lg"
                  required
                  type="number"
                  value={formData.Pages}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="Pages"
                  label="Pages"
                />
                {validatorError?.Pages && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Pages.message}
                  </Typography>
                )}
              </div>
              <div className="w-[32rem]">
                <Input
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Publisher}
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
                {validatorError?.Publisher && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Publisher.message}
                  </Typography>
                )}
              </div>

              <div className="w-[32rem]">
                <Input
                  size="lg"
                  required
                  type="date"
                  error={!!validatorError?.publishDate}
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
                {validatorError?.publishDate && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.publishDate.message}
                  </Typography>
                )}
              </div>

              <div className="w-[32rem]">
                <Input
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Genres}
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
                {validatorError?.Genres && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Genres.message}
                  </Typography>
                )}
              </div>

              <div className="w-[32rem]">
                <Input
                  label="Cover Image"
                  name="CoverBook"
                  size="lg"
                  required
                  type="file"
                  error={!!validatorError?.CoverBook}
                  multiple={true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.files[0],
                    })
                  }
                />
                {validatorError?.CoverBook && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.CoverBook.message}
                  </Typography>
                )}
              </div>
              {/* <div className="w-[32rem]">
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
              </div> */}
              <div className="w-[32rem]">
                <Textarea
                  size="lg"
                  required
                  type="string"
                  error={!!validatorError?.Description}
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
                {validatorError?.Description && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                  >
                    <BsExclamationCircle className="w-4 h-4 -mt-px" />
                    {validatorError?.Description.message}
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

export default BookAddModalPage;
