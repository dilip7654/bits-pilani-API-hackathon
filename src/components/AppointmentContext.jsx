import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, Edit, X } from 'lucide-react';

const AppointmentDashboard = () => {
  // In a real app, this would likely come from an API or database
  const [appointments, setAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    date: '',
    timeSlot: '',
    reason: ''
  });

  const availableSlots = ['09:00 AM', '01:00 PM', '02:00 PM', '04:00 PM'];

  const handleEdit = (appointment) => {
    setEditingId(appointment.id);
    setEditForm({
      date: appointment.date,
      timeSlot: appointment.timeSlot,
      reason: appointment.reason
    });
  };

  const handleUpdate = (id) => {
    setAppointments(appointments.map(app => 
      app.id === id 
        ? { ...app, ...editForm }
        : app
    ));
    setEditingId(null);
  };

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      setAppointments(appointments.filter(app => app.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#90e0ef] to-[#fcefef] p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#0077b6]">My Appointments</h2>
        </div>
        <div className="p-6">
          {appointments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No appointments scheduled yet.
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                  {editingId === appointment.id ? (
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <input
                          type="date"
                          value={editForm.date}
                          onChange={(e) => setEditForm({...editForm, date: e.target.value})}
                          className="flex-1 px-3 py-2 border rounded"
                        />
                        <select
                          value={editForm.timeSlot}
                          onChange={(e) => setEditForm({...editForm, timeSlot: e.target.value})}
                          className="flex-1 px-3 py-2 border rounded"
                        >
                          {availableSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                      <textarea
                        value={editForm.reason}
                        onChange={(e) => setEditForm({...editForm, reason: e.target.value})}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Reason for visit"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleUpdate(appointment.id)}
                          className="px-4 py-2 bg-[#0077b6] text-white rounded hover:bg-[#005f92]"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <User className="text-[#0077b6]" />
                          <span className="font-semibold">{appointment.doctor}</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(appointment)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleCancel(appointment.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="text-gray-500" size={16} />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="text-gray-500" size={16} />
                          <span>{appointment.timeSlot}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="text-gray-500" size={16} />
                          <span>{appointment.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="text-gray-500" size={16} />
                          <span>{appointment.phone}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 mt-2">
                        <FileText className="text-gray-500 mt-1" size={16} />
                        <p className="text-gray-600">{appointment.reason}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentDashboard;
