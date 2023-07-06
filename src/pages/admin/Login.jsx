import React, { useState } from 'react'
import Login from '../../Components/Login'
import { useLogAdminMutation } from '../../store';
import { Input } from "@material-tailwind/react";
import Swal from 'sweetalert2'
import { Flip, ToastContainer, toast } from 'react-toastify';

import { Navigate, useNavigate } from 'react-router-dom';

function ALoginPage() {
  const [logAdmin, results] = useLogAdminMutation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = () =>
    logAdmin(formData)
      .unwrap()
      .then(res => {
        const {success} = res;
       toast.success("Login successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition:Flip
          })
          localStorage.setItem("admin", success);
          setTimeout(() => {
        console.log("toast")
        navigate('/admin/dashboard')
          }, 3000);

      }).catch(err => {
console.log(err)
        toast.error(err?.data?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition:Flip
          });
      })

  return localStorage.getItem("admin") ? <Navigate to={"/admin/dashboard"} /> : (
    <div className='h-screen flex justify-center items-center'>
      <ToastContainer /> {/* Render ToastContainer component */}

      <Login
        Email={<Input label="Email" name='Email' type="email" size="lg" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.Email} />}
        Password={<Input label="Password" name='Password' type="password" size="lg" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.Password} />}
        OnSubmit={handleSubmit}
      />
    </div>
  )
}

export default ALoginPage