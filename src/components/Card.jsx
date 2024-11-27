import React from 'react';
// import { FaHospital } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="h-[155px] w-[155px] hover:scale-105 transition duration-200 ease-in-out flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-lg hover:shadow-xl border border-gray-200">
    <img src={props.image} alt={props.name} className="w-20 h-20 rounded-full mb-4" />
    <p className="text-lg font-semibold text-gray-800 mt-2">{props.name}</p>
  </div>
  
  );
};

export default Card;
{/* <FaHospital className='h-20 w-20'/> */}