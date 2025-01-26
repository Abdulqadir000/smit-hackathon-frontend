import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.token && response.data.user) {
        sessionStorage.setItem("jwtToken", response.data.token);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login", error);
      toast.error(
        error.response?.data?.message || "An error occurred during login"
      );
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center h-screen w-full">
      <div className="loginForm bg-white border border-gray-300 rounded-xl p-5">
        <h1 className="flex justify-center font-semibold text-4xl py-5">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-5 mt-8">
            <input
              type="email"
              className="text-gray-900 border border-gray-300 rounded-lg w-full p-2.5 focus:border-gray-400 focus:outline-none placeholder:font-semibold"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5 mt-7">
            <input
              type="password"
              className="text-gray-900 border border-gray-300 rounded-lg w-full p-2.5 focus:border-gray-400 focus:outline-none placeholder:font-semibold"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pb-5">
            <button
              type="submit"
              className="loginBtn bg-blue-600 hover:bg-blue-400 mt-5 p-2.5 text-white font-bold text-lg rounded-lg"
            >
              Login
            </button>
            <p className="flex justify-center gap-1 mt-3 font-medium text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
