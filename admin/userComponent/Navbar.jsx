import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, getUserToken } from "@/constant/HelperAuth";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    if (currentUser && getUserToken) {
      setIsLoggedIn(true);
    }
  }, []);
  console.log("Checking if user is logged in:", user);

  const handleLogin = () => {
    const currentUser = getUserToken();
    console.log("Checking if user is logged in:", currentUser);
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
  };

  return (
    <nav className="bg-white border-b px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Loan Management System</h1>
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

export default Navbar;
