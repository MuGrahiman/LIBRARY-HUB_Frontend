import React, { useState } from "react";
import Login from "../../../Components/Login";
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Flip, ToastContainer, toast } from "react-toastify";

import { Navigate, useNavigate } from "react-router-dom";
import { useLogLibraryMutation, useLoginMutation } from "../../../Store";
import useCript from "../../../Hooks/use-Cript";

function LoginPage() {
  const [encryptTheData, decryptTheData] = useCript();
  const [logLibrary, results] = useLoginMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = () =>
    logLibrary({ Data: formData, Role: "library" })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success("Email Validate successfully", {
          onClose: navigate(`/library/otp/${res?.id}`),
        });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err?.data?.message);
      });

  return (
    <div className="h-screen flex justify-center items-center">
      {/* <ToastContainer /> Render ToastContainer component */}
      <Login
        // signIn={"/library/signup"}
        isLoading={results.isLoading}
        InputContent={
          <Input
            label="Email"
            name="Email"
            type="email"
            size="lg"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData.Email}
          />
        }
        // Password={<Input label="Password" name='Password' type="password" size="lg" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.Password} />}
        OnSubmit={handleSubmit}
      />
    </div>
  );
}

export default LoginPage;
