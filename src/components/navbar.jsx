import {Link } from "react-router-dom";

export default function Home(){
    return(
        <nav className="z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b"> 
                <div className="flex items-center flex-1">
                    <h2 className="text-3xl font-bold text-green-500">Lifeline Devs</h2>
                </div>
                <div>
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link to='/Home'>
                        <li className="hover:text-red-600 transition border-b-2 border-white hover:border-red-600 cursor-pointer">Home</li>
                        </Link>
                        <Link to='/Map'>
                        <li className="hover:text-red-600 transition border-b-2 border-white hover:border-red-600 cursor-pointer">Map</li>
                        </Link>
                        <Link to='/Schedule'>
                        <li className="hover:text-red-600 transition border-b-2 border-white hover:border-red-600 cursor-pointer">Schedule</li>
                        </Link>
                        <Link to='/News'>
                        <li className="hover:text-red-600 transition border-b-2 border-white hover:border-red-600 cursor-pointer">News</li>
                        </Link>
                        <Link to='/Contact'>
                        <li className="hover:text-red-600 transition border-b-2 border-white hover:border-red-600 cursor-pointer">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );    
};