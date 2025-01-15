import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaHospitalAlt, FaCalendarAlt, FaSignInAlt, FaUserPlus, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { AuthContext } from "./AuthContext";
import React, { useContext } from "react";

export default function Navbar() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

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
        <nav className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] shadow-lg">
            <div className="container mx-auto flex items-center justify-between h-16 px-6 lg:px-12">
                {/* Brand Name with Animation */}
                <Link to="/">
                <div className="text-[#f8e16c] text-2xl font-bold tracking-widest hover:scale-110 transition-transform duration-300 ease-out">
                    Lifeline Devs
                </div>
                </Link>

                {/* Navigation Links with Icons and Hover Animation */}
                <ul className="flex gap-6 text-base">
                    <Link to="/Map">
                        <li className="flex items-center gap-2 text-[#fcefef] font-medium px-1 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaHospitalAlt /> Nearby Hospitals
                        </li>
                    </Link>
                    <Link to="/Schedule">
                        <li className="flex items-center gap-2 text-[#fcefef] font-medium px-1 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaCalendarAlt /> Schedule Appointment
                        </li>
                    </Link>
                    <Link to="/Contact">
                        <li className="flex items-center gap-2 text-[#fcefef] font-medium px-1 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaEnvelope /> Contact Us
                        </li>
                    </Link>
                    <Link to="/Aboutus">
                        <li className="flex items-center gap-2 text-[#fcefef] font-medium px-1 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaInfoCircle /> About Us
                        </li>
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
              <FaSignInAlt />Logout
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
                </ul>
            </div>
        </nav>
    );

}
