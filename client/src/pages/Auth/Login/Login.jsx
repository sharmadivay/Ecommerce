import { useState } from "react";
import Layout from "../../../components/Layouts/Layout.jsx";
import "./Login.css";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../../Context/auth.jsx";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${window.location.origin}/api/auth/login`, {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };
  return (
    <Layout>
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="mt-1">
            <Link
              to="/forgot-password"
              type="button"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
