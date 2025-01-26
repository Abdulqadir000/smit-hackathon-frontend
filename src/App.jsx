import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import User from "./users/User";
import Admin from "./admin/admin";

import Dashboards from "./admin/adminComponent/Dashboards";
import RequestManager from "./admin/adminComponent/RequestManager";
import LoanAppointment from "./admin/adminComponent/LoanAppointment";
import LandingPage from "./LandingPage";
import WeddingLoans from "./users/userComponents/weddingLoans";
import ConstructionLoans from "./users/userComponents/ConstructionLoans";
import BussinessLoans from "./users/userComponents/BussinessLoans";
import EducationalLoans from "./users/userComponents/EducationalLoans";

function App() {
  // let currentUser = getCurrentUser();
  // console.log("current user", currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/weddingloans" element={<WeddingLoans />}></Route>
        <Route
          path="/constructionloans"
          element={<ConstructionLoans />}
        ></Route>
        <Route path="/bussinessloans" element={<BussinessLoans />}></Route>
        <Route path="/educationloans" element={<EducationalLoans />}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loans/personal" element={<PersonalLoans />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admindashboards" element={<Dashboards />} />
        <Route
          path="/admindashboard/requestmanager"
          element={<RequestManager />}
        />
        <Route path="/loanappointment" element={<LoanAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
