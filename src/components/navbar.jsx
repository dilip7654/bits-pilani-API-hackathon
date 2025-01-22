import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { AuthContext } from "./AuthContext";
import { signOut } from "firebase/auth";


export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Set session persistence on component mount
  useEffect(() => {
    const setSessionPersistence = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (err) {
        console.error("Session Persistence Error:", err.message);
      }
    };

    setSessionPersistence();
  }, []);

  // Check authentication state on refresh
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [setIsAuthenticated]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout Error:", err.message);
    }
  };

  return (
    <div className="bg-[#03045e]/40 fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-transparent">
      <nav className="flex items-center justify-center h-16">
        <div className="flex items-center justify-between w-full max-w-7xl px-6 space-x-8">
          <button
            onClick={() => navigate("/")}
            className="text-white text-3xl font-bold transition-transform duration-300 transform hover:scale-110"
            style={{
              textShadow:
                "0 0 5px rgba(0, 180, 216, 1), 0 0 10px rgba(0, 180, 216, 0.8)",
            }}
            onMouseEnter={(e) => {
              e.target.style.textShadow =
                "0 0 10px rgba(0, 180, 216, 1), 0 0 20px rgba(0, 180, 216, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.target.style.textShadow = "0 0 5px rgba(0, 180, 216, 1)";
            }}
          >
            Lifeline Devs
          </button>
          <div className="flex space-x-8">
            <Link
              to="/Map"
              className="text-white/80 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 text-shadow-md"
            >
              Nearby Hospitals
            </Link>
            <Link
              to="/Schedule"
              className="text-white/80 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 text-shadow-md"
            >
              Schedule Appointment
            </Link>
            <Link
              to="/news"
              className="text-white/80 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 text-shadow-md"
            >
              News
            </Link>
            <Link
              to="/Aboutus"
              className="text-white/80 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 text-shadow-md"
            >
              About Us
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/Profile"
                  className="text-white/80 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 text-shadow-md"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white/80 border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#03045e] transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white/80 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 text-shadow-md"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white/80 border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#03045e] transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
