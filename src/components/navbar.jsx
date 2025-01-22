import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { AuthContext } from "./AuthContext";
import { CgProfile } from "react-icons/cg";
import { signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
import { FaHome, FaHospitalAlt, FaCalendarAlt, FaSignInAlt, FaUserPlus, FaInfoCircle, FaEnvelope } from "react-icons/fa";



export default function Navbar() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Set persistence to local storage
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                // Monitor authentication state
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        setIsAuthenticated(true);
                    } else {
                        setIsAuthenticated(false);
                    }
                });
            })
            .catch((error) => {
                console.error("Persistence Error:", error.message);
            });
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
          {/* Brand Name (Lifeline Devs) Button */}
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

          {/* Navigation Links */}
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
              to="/Contact"
              className="text-white/80 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 text-shadow-md"
            >
              Contact Us
            </Link>
            <Link
              to="/Aboutus"
              className="text-white/80 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 text-shadow-md"
            >
              About Us
            </Link>

            {isAuthenticated ? (
                        <>
                            <Link to="/Profile">
                                <li className="flex items-center gap-2 text-[#fcefef] font-medium px-1 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                                    <CgProfile /> Profile
                                </li>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-[#fcefef] font-medium px-1 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
                            >
                                <FaSignInAlt /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <li className="flex items-center gap-2 text-[#fcefef] font-medium px-1 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                                    <FaSignInAlt /> Login
                                </li>
                            </Link>
                            <Link to="/signup">
                                <li className="flex items-center gap-2 text-[#03045e] font-medium px-1 py-1.5 bg-[#f8e16c] rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                                    <FaUserPlus /> Sign Up
                                </li>
                            </Link>
               </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );

}
