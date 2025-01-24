import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; 
import { getCurrentUser, getUserToken } from "../constant/HelperAuth";

export default function Home() {
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
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-xl">MyBlog</span>
            </Link>
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <span className="font-semibold">Welcome User</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <span className="font-semibold">Please Login</span>
                  <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to MyBlog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <div key={post} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Blog Post {post}</h2>
              <p className="text-gray-600 mb-4">
                This is a short preview of blog post {post}...
              </p>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-md">
                Read More
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t py-4">
        <div className="container mx-auto px-4 text-center text-gray-500">
          © 2024 MyBlog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
