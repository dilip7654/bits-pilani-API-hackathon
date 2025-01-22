import React, { createContext, useContext, useState, useEffect } from 'react';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(() => {
    // Try to load appointments from localStorage
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });

  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem('notifications');
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [appointments, notifications]);

  const addAppointment = (appointmentData) => {
    const newAppointment = {
      id: Date.now(),
      ...appointmentData,
      status: 'upcoming',
      createdAt: new Date().toISOString()
    };

    console.log('Adding new appointment:', newAppointment);
    setAppointments(prev => [...prev, newAppointment]);
    
    const newNotification = {
      id: Date.now(),
      message: `New appointment scheduled with ${appointmentData.doctor} on ${appointmentData.date}`,
      timestamp: new Date().toISOString()
    };
    
    setNotifications(prev => [...prev, newNotification]);
  };

  const updateAppointment = (id, updatedData) => {
    console.log('Updating appointment:', id, updatedData);
    setAppointments(prev => 
      prev.map(apt => apt.id === id ? { ...apt, ...updatedData } : apt)
    );

    const newNotification = {
      id: Date.now(),
      message: `Appointment updated for ${updatedData.date}`,
      timestamp: new Date().toISOString()
    };
    setNotifications(prev => [...prev, newNotification]);
  };

  const removeNotification = (id) => {
    console.log('Removing notification:', id);
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const value = {
    appointments,
    notifications,
    addAppointment,
    updateAppointment,
    removeNotification
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
};