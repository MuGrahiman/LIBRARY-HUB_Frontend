import React, { useState } from 'react'
import Login from '../../Components/Login'
import { useLogAdminMutation } from '../../Store';
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
  const handleSubmit = () =>{
  if(/\S+@\S+\.\S+/.test(formData.Email) && formData.Password !== '')
    logAdmin(formData)
      .unwrap()
      .then(res => {
        const { success } = res;
        localStorage.setItem("admin", success);
        toast.success("Login successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
          onClose:navigate('/admin/dashboard')
        })

      }).catch(err => {
        console.log(err)
        toast.error(err?.data?.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip
        });
      })
    else toast.error('Not Valid Data')
    }

  return localStorage.getItem("admin") ? <Navigate to={"/admin/dashboard"} /> : (
    <div className='h-screen flex justify-center items-center'>
      {/* <ToastContainer /> */}

      <Login
        InputContent={
          <>
            <Input
              label="Email"
              name='Email'
              type="email"
              size="lg"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })}
              value={formData.Email} />
            <Input
              label="Password"
              name='Password'
              type="password"
              size="lg"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })}
              value={formData.Password} />
          </>
        }
        isLoading={results.isLoading}
        OnSubmit={handleSubmit}
      />
    </div>
  )
}

export default ALoginPage