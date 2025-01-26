import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser, getUserToken } from "@/constant/HelperAuth";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    if (currentUser && getUserToken()) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const currentUser = getUserToken();
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-white border-b px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Saylani Microfinance</h1>
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
      </div>
    </nav>
  );
};

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [tenure, setTenure] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const interestRate = 0.1; // 10% annual interest rate
    const monthlyInterestRate = interestRate / 12;
    const totalPayments = tenure * 12;

    const emi =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    setMonthlyPayment(emi.toFixed(2));
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Loan Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Loan Amount (₹)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tenure (Years, max 5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={tenure}
            onChange={(e) => setTenure(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <Button onClick={calculateLoan} className="w-full">
          Calculate
        </Button>
        {monthlyPayment > 0 && (
          <div className="mt-4">
            <p className="text-lg font-semibold">
              Monthly Payment: ₹{monthlyPayment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Saylani Microfinance</h1>
          <p className="text-lg text-gray-600">
            Empowering communities with accessible loans and financial solutions.
          </p>
        </div>

        {/* Loan Calculator Section */}
        <div className="max-w-md mx-auto">
          <LoanCalculator />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;