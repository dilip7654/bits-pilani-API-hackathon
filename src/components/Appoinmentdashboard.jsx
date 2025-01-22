import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Edit2, Calendar, X } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';
import { useAppointments } from './AppointmentContext';

const AppointmentDashboard = () => {
  const { 
    appointments, 
    notifications, 
    updateAppointment, 
    removeNotification 
  } = useAppointments();

  console.log('Current appointments:', appointments);
  console.log('Current notifications:', notifications);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAppointments = appointments.filter(appointment => {
    const searchStr = searchQuery.toLowerCase();
    return (
      appointment.doctor.toLowerCase().includes(searchStr) ||
      appointment.specialization.toLowerCase().includes(searchStr) ||
      appointment.date.includes(searchStr) ||
      appointment.name.toLowerCase().includes(searchStr)
    );
  });

  const handleUpdateAppointment = (updatedData) => {
    updateAppointment(selectedAppointment.id, {
      ...selectedAppointment,
      ...updatedData
    });
    setShowUpdateModal(false);
    setSelectedAppointment(null);
  };

  if (appointments.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#0077b6] mb-4">My Appointments</h1>
          <p className="text-gray-600">No appointments scheduled yet. Book your first appointment!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#0077b6]">My Appointments</h1>
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <div className="relative" ref={notificationRef}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative focus:outline-none"
              >
                <Bell className="w-6 h-6 text-[#0077b6] cursor-pointer" />
                {notifications.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {notifications.length}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && notifications.length > 0 && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#0077b6] mb-2">Notifications</h3>
                    <div className="space-y-2">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className="flex items-start justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <p className="text-sm text-gray-700">{notification.message}</p>
                          <button 
                            onClick={() => removeNotification(notification.id)}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search appointments by doctor, specialization, date or name..."
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Appointments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-[#e0f7fa] flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[#0077b6]">{appointment.doctor}</h3>
                  <p className="text-sm text-gray-600">{appointment.specialization}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedAppointment(appointment);
                    setShowUpdateModal(true);
                  }}
                  className="p-2 hover:bg-[#0077b6] hover:text-white rounded-full transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#0077b6]" />
                    <span>{appointment.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{appointment.name}</p>
                  <p className="text-sm text-gray-600">{appointment.email}</p>
                  <p className="text-sm text-gray-600">{appointment.phone}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    appointment.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Update Modal */}
        {showUpdateModal && selectedAppointment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#0077b6]">Update Appointment</h2>
                <button onClick={() => setShowUpdateModal(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="date"
                  defaultValue={selectedAppointment.date}
                  className="w-full px-4 py-2 border rounded-lg"
                  onChange={(e) => {
                    handleUpdateAppointment({ date: e.target.value });
                  }}
                />
                <button
                  onClick={() => setShowUpdateModal(false)}
                  className="w-full bg-[#0077b6] text-white py-2 rounded-lg hover:bg-[#023e8a] transition-colors"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentDashboard;