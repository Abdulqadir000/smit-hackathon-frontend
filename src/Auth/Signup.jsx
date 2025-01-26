import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      if (response.data.token && response.data.user) {
        sessionStorage.setItem("jwtToken", response.data.token);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
      } else {
        console.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center h-screen w-full">
      <div className="signupForm bg-white border border-gray-300 rounded-xl p-5">
        <h1 className="flex justify-center pb-10 font-semibold text-4xl py-3">
          Signup
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-8">
            <input
              type="text"
              className="text-gray-900 border border-gray-300 rounded-lg w-full p-2.5 focus:border-gray-400 focus:outline-none placeholder:font-semibold"
              placeholder="Username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4 mt-5">
            <input
              type="email"
              className="text-gray-900 border border-gray-300 rounded-lg w-full p-2.5 focus:border-gray-400 focus:outline-none placeholder:font-semibold"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5 mt-5">
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
              className="signupBtn bg-blue-600 hover:bg-blue-400 mt-5 py-2.5 text-white font-bold text-lg rounded-lg"
            >
              Signup
            </button>
            <p className="flex justify-center gap-1 mt-3 font-medium text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
