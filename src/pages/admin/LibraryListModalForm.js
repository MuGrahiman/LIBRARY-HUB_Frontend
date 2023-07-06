import React, { useState } from "react";
import Modal from "../../Components/Modal";
import useThunk from "../../Hooks/use-Thunk";
import { addLibrary } from "../../store";
import { Input, Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

function LibraryListModalForm({ onFormChange, onClose, actionBar }) {
  const [runaddLibrary, isaddLibraryError, isaddLibraryLoading] =
    useThunk(addLibrary);
  const [formData, setFormData] = useState({
    LName: "",
    LPhoneNo: "",
    LEmail: "",
    LContry: "",
    LState: "",
    LCity: "",
    LArea: "",
    LLandMark: "",
    LPinNo: "",
    LLogo: null,
  });

  const handleFormSubmit = async (e) => {
    const data = new FormData();
    for (const field in formData) {
      data.append(field, formData[field]);
    }
    runaddLibrary(data).then((res) => {
      console.log(res);
      if (res?.success)
        Swal.fire("Saved!", "", "success").then(() => onClose());
      if (res?.failed) Swal.fire("Oops!", "", "error");
    });
  };

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    console.log(files);
    // if (type !== "file") {
    // setFormData({ ...formData, [name]: value });
    // } else {
    // const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    // setFormData({ ...formData, [name]: files[0] });
    // if (allowedExtensions.exec(file.name)) {

    // } else {
    //   allValid = false;

    // }
    // }
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
                value={formData.LName}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LName"
                label="Library Name"
              />
              <Input
                size="lg"
                required
                type="email"
                value={formData.LEmail}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LEmail"
                label="Email"
              />
              <Input
                size="lg"
                required
                type="number"
                value={formData.LPhoneNo}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LPhoneNo"
                label="Phone No"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LContry}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LContry"
                label="Contry"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LState}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LState"
                label="State"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LCity}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LCity"
                label="City/Town"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LArea}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LArea"
                label="Area"
              />
              <Input
                size="lg"
                required
                type="string"
                value={formData.LLandMark}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LLandMark"
                label="Land Mark"
              />
              <Input
                size="lg"
                required
                type="number"
                value={formData.LPinNo}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="LPinNo"
                label="Pin Number"
              />
              <Input
                required
                type="file"
                size="lg"
                onChange={(e) => {
                  handleChange(e);
                  console.log(e.target.files[0]);
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.files[0],
                  });
                }}
                name="LLogo"
                label="Library Logo"
              />
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default LibraryListModalForm;
