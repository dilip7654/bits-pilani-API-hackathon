import React, { useState } from 'react'

import Info from '../PatientInterface/Info.jsx'
import History from '../PatientInterface/History.jsx'
import Appointment from '../PatientInterface/Appointment.jsx'
import TestRes from '../PatientInterface/Result.jsx'


const Personal_info = () => {

  const [activeComponent , setActiveComponent ] = useState(null)
  const renderComp = ()=>{
      switch (activeComponent){
        case 'info':
          return <Info/>
        
        case 'history':
           return  <History/>
            
        case 'App':
             return  <Appointment/>
              
        case 'res':
                return <TestRes/>
      }
  };
  return (
    <div>
      <div className="additional-info w-4/5 mx-auto flex justify-between mt-4 bg-white shadow-lg rounded-lg p-4">
        <div className="info bg-gray-600 text-white flex-1 text-center py-3 mx-2 rounded-md cursor-pointer hover:opacity-90 grid w-full grid-cols-4"
        onClick={() => setActiveComponent('info')}>
           Info 
        </div>
        
        <div className="history bg-green-600 text-white flex-1 text-center py-3 mx-2 rounded-md cursor-pointer hover:opacity-90"  onClick={() => setActiveComponent('history')}>
            <button
           >History</button>
        </div>
        
        <div className="App-mts bg-amber-500 text-black flex-1 text-center py-3 mx-2 rounded-md cursor-pointer hover:opacity-90  "
         onClick={()=>setActiveComponent('App')}>
            <button
           >Appointments</button>
        </div>
   
        <div className="Test_res bg-red-600 text-white flex-1 text-center py-3 mx-2 rounded-md cursor-pointer hover:opacity-90 " onClick={()=> setActiveComponent('res')}>
            <button
            >Test Result</button>
        </div>
        
      </div>
      <div className='w-full max-w-[75rem] mx-auto mt-2'>
        {renderComp()}
      </div>
    </div>
  )
}

export default Personal_info
