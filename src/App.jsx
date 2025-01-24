import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Home/Home";

function App() {
  // let currentUser = getCurrentUser();
  // console.log("current user", currentUser);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Teacher />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />

        {/* <Route
            path="/"
            element={
              currentUser?.role === "admin" ? (
                <Admin />
              ) : currentUser?.role === "teacher" ? (
                <Teacher />
              ) : currentUser?.role === "student" ? (
                <Student />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
