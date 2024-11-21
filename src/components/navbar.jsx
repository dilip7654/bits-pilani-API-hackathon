import { Link } from "react-router-dom";
import { FaHome, FaHospitalAlt, FaCalendarAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function Home(){
    return(
        <nav className="z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
                <div className="flex items-center flex-1">
                    <h2 className="text-3xl font-bold text-red-500">Lifeline Devs</h2>
                </div>
                
                {/* Navigation Links with Icons and Hover Animation */}
                <ul className="flex gap-6 text-base">
                    
                    <Link to="/Map">
                        <li className="flex items-center gap-2 text-[#fcefef] font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaHospitalAlt /> Nearby Hospitals
                        </li>
                    </Link>
                    <Link to="/Schedule">
                        <li className="flex items-center gap-2 text-[#fcefef] font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaCalendarAlt /> Schedule Appointment
                        </li>
                    </Link>
                    <Link to="/login">
                        <li className="flex items-center gap-2 text-[#fcefef] font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaSignInAlt /> Login
                        </li>
                    </Link>
                    <Link to="/signup">
                        <li className="flex items-center gap-2 text-[#03045e] font-medium px-4 py-1.5 bg-[#f8e16c] rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaUserPlus /> Sign Up
                        </li>
                    </Link>
                    <Link to="/aboutus">
                        <li className="flex items-center gap-2 text-[#fcefef] font-medium px-4 py-1.5 rounded-lg hover:bg-[#fbb13c] hover:text-[#03045e] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                            <FaUserPlus /> About Us
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}