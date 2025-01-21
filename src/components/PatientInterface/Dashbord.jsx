import React, { useState } from 'react';
import { 
  LayoutGrid, 
  CalendarDays, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Settings, 
  Heart 
} from 'lucide-react';
import ScheduleAppointment from '../schedule';
import MyApp from './MyApp';
import Name from './Name';
import Personal_info from './Personal_info';
import FeedbackForm from './FeedbackForm';


const Dashboard = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4"><Name/></h2>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2"><Personal_info/></h3>
        
      </div>
      {/* <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2">Health Statistics</h3>
        <p>Your health data will appear here</p>
      </div> */}
    {/* </div> */}
  </div>
);

const BookAppointment = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4"><ScheduleAppointment/></h2>
    
  </div>
);

const Calendar = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4"><MyApp/></h2>
    
  </div>
);

const Report = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Reports</h2>
    <div className="bg-white p-4 rounded-lg shadow">
      <p>Your medical reports will appear here</p>
    </div>
  </div>
);

const Feedback = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4"><FeedbackForm/></h2>
    
  </div>
);

// const Setting = () => (
//   <div className="p-6">
//     <h2 className="text-2xl font-bold mb-4">Settings</h2>
//     <div className="bg-white p-4 rounded-lg shadow">
//       <p>Manage your account settings here</p>
//     </div>
//   </div>
// );

const SidebarLayout = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const sidebarItems = [
    { id: 'Dashboard', icon: <LayoutGrid size={20} />, text: 'Dashboard', component: Dashboard },
    { id: 'BookAppointment', icon: <BookOpen size={20} />, text: 'Book Appointment', component: BookAppointment },
    { id: 'Calendar', icon: <CalendarDays size={20} />, text: 'Calendar', component: Calendar },
    { id: 'Report', icon: <FileText size={20} />, text: 'Report', component: Report },
    { id: 'Feedback', icon: <MessageSquare size={20} />, text: 'Feedback', component: Feedback },
    // { id: 'Setting', icon: <Settings size={20} />, text: 'Setting', component: Setting }
  ];

  const ActiveComponent = sidebarItems.find(item => item.id === activeTab)?.component || Dashboard;

  return (
    <div className="flex h-screen bg-gray-100 mt-14">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <Heart size={24} className="text-red-500" />
            <span className="text-xl font-semibold text-gray-800">Lifeline Devs</span>
          </div>
        </div>

        {/* Sidebar Items */}
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-200 ${
                activeTab === item.id ? 'bg-gray-100 border-r-4 border-[#03045e]' : ''
              }`}
            >
              <span className={activeTab === item.id ? 'text-blue-500' : ''}>{item.icon}</span>
              <span className={`${activeTab === item.id ? 'font-medium text-yellow-500' : ''}`}>
                {item.text}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default SidebarLayout;