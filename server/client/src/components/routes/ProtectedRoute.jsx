import { useEffect, useState } from "react";
import { useAuth } from "../../Context/auth.jsx";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner.jsx";

export const ProtectedRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `${window.location.origin}/api/auth/user-auth`
      );
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
};
