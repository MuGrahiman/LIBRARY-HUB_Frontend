import { useEffect, useState } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import {axiosInstance as axios} from "../Store/Axios/axiosInstance";

function RouterProtector({ protect }) {
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem(protect);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/verify-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { role: protect },
      })
      .then((res) => {
        if (res.data.status) {
          console.log(res);
          setAuth(true);
        } else {
        navigate(`/${protect}/login`)
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        // localStorage.removeItem(protect)
        navigate(`/${protect}/login`)
      });
  }, [navigate, protect, token]);
  console.log(`err.response.data.message`);

  if (auth === null) return null;

  return auth ? <Outlet /> : <Navigate to={`/${protect}/login`} />;
}
export default RouterProtector;
