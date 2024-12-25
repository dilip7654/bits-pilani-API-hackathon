import React from 'react'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 
 import { BsHeartPulseFill } from "react-icons/bs";
 import { SlCalender } from "react-icons/sl";
 import { MdFeedback } from "react-icons/md";

 
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand '>
           <BsHeartPulseFill  className='h-10 w-40'/> <h3 className='text-2xl'>Lifeline Devs</h3>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/pdata">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Schedule">
                    <BsFillArchiveFill className='icon'/> Book Appointment
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <SlCalender /> Calender
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BsMenuButtonWideFill className='icon'/>Report
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="">
                <MdFeedback /> Feedback
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar