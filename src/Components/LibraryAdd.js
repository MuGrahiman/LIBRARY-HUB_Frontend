import React, { useState } from "react";
import { Input } from "@material-tailwind/react";

function LibraryAdd({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type !== "file") {
      setFormData({ ...formData, [name]: value });
    } else {
      // const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
      setFormData({ ...formData, [name]: files[0] });
      // if (allowedExtensions.exec(file.name)) {

      // } else {
      //   allValid = false;

      // }
    }
  };

  //   <form className="mt-8 mb-2 w-80% max-w-screen-lg sm:w-96">
  //   <Modal onClose={handleModalClose} actionBar={actionBar}>
  //     <div className="flex justify-center items-center">
  //       <LibraryAdd formData={formData} setFormData={setFormData} />
  //     </div>
  //   </Modal>
  // </form>

  return (
    <div className="mb-4 flex flex-col gap-6">
      <Input
        size="lg"
        required
        type="string"
        value={formData.LName}
        onChange={handleChange}
        name="LName"
        label="Library Name"
      />
      <Input
        size="lg"
        required
        type="email"
        value={formData.LEmail}
        onChange={handleChange}
        name="LEmail"
        label="Email"
      />
      <Input
        size="lg"
        required
        type="number"
        value={formData.LPhoneNo}
        onChange={handleChange}
        name="LPhoneNo"
        label="Phone No"
      />
      <Input
        size="lg"
        required
        type="string"
        value={formData.LContry}
        onChange={handleChange}
        name="LContry"
        label="Contry"
      />
      <Input
        size="lg"
        required
        type="string"
        value={formData.LState}
        onChange={handleChange}
        name="LState"
        label="State"
      />
      <Input
        size="lg"
        required
        type="string"
        value={formData.LCity}
        onChange={handleChange}
        name="LCity"
        label="City/Town"
      />
      <Input
        size="lg"
        required
        type="string"
        value={formData.LArea}
        onChange={handleChange}
        name="LArea"
        label="Area"
      />
      <Input
        size="lg"
        required
        type="string"
        value={formData.LLandMark}
        onChange={handleChange}
        name="LLandMark"
        label="Land Mark"
      />
      <Input
        size="lg"
        required
        type="number"
        value={formData.LPinNo}
        onChange={handleChange}
        name="LPinNo"
        label="Pin Number"
      />
      <Input
        required
        type="file"
        size="lg"
        onChange={handleChange}
        name="LLogo"
        label="Library Logo"
      />
    </div>
  );
}

export default LibraryAdd;
