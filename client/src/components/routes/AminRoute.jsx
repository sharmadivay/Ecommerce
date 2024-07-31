import { useEffect, useState } from "react";
import { useAuth } from "../../Context/auth.jsx";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner.jsx";

export const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, seAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:8080/api/auth/admin-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
};
