import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  FaHome,
  FaHospitalAlt,
  FaCalendarAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

export default function Home() {
  return (
    <nav className="z-50 shadow-lg bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#03045e]">
      <div className="h-16 flex justify-between items-center px-8 md:px-20">
        <div className="flex items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#aff2ff] to-[#f8e16c] bg-clip-text text-transparent">
            Lifeline Devs
          </h2>
        </div>

        <ul className="flex gap-4 md:gap-6 text-sm md:text-base">
          <Link to="/Map">
            <li className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#f8e16c] to-[#fbb13c] text-[#03045e] font-semibold hover:from-[#fbb13c] hover:to-[#f8e16c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
              <FaHospitalAlt /> Nearby Hospitals
            </li>
          </Link>
          <Link to="/Schedule">
            <li className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#f8e16c] to-[#fbb13c] text-[#03045e] font-semibold hover:from-[#fbb13c] hover:to-[#f8e16c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
              <FaCalendarAlt /> Schedule Appointment
            </li>
          </Link>
          <Link to="/aboutus">
            <li className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#f8e16c] to-[#fbb13c] text-[#03045e] font-semibold hover:from-[#fbb13c] hover:to-[#f8e16c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
              <FaUserPlus /> About Us
            </li>
          </Link>
          <Link to="/login">
            <li className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#f8e16c] to-[#fbb13c] text-[#03045e] font-semibold hover:from-[#fbb13c] hover:to-[#f8e16c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
              <FaSignInAlt /> Login
            </li>
          </Link>
          <Link to="/signup">
            <li className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white font-semibold hover:from-[#0077b6] hover:to-[#00b4d8] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
              <FaUserPlus /> Sign Up
            </li>
          </Link>
=======
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className="z-50 bg-white">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-bold text-red-500">Lifeline Devs</h2>
        </div>

        <ul className="flex gap-6 text-base">
          <Link to="/UIF">
            <li className="flex items-center gap-2  font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              <FaHospitalAlt /> Nearby Hospitals
            </li>
          </Link>
          {/* <Link to="/Schedule">
            <li className="flex items-center gap-2  font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              <FaCalendarAlt /> Schedule Appointment
            </li>
          </Link> */}
          <Link to="/aboutus">
            <li className="flex items-center gap-2  font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              <FaUserPlus /> About Us
            </li>
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <li className="flex items-center gap-2  font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                  <FaUserCircle /> Profile
                </li>
              </Link>
              <li
                onClick={handleLogout}
                className="flex items-center gap-2  font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
              >
                <FaSignOutAlt /> Logout
              </li>
            </>
          ) : (
            <>
              <Link to="/login">
                <li className="flex items-center gap-2  font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                  <FaSignInAlt /> Login
                </li>
              </Link>
              <Link to="/signup">
                <li className="flex items-center gap-2 text-[#03045e] font-medium px-4 py-1.5 bg-[#f8e16c] rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
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
