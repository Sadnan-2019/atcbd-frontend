// LoginForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Users = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/users-login", formData);
// http://localhost:5000/
      if (res.data.token) {
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Login failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-xs mx-auto mt-10 space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
        className="input input-bordered w-full"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
        className="input input-bordered w-full"
        required
      />
      <button className="btn btn-primary w-full">Login</button>
    </form>
  );
};

export default Users;
