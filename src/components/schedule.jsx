import React, { useState } from 'react';
import ProgressIndicator from './ProgressIndicator';

function ScheduleAppointment() {
  const [step, setStep] = useState(1);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    type: '',
    name: '',
    email: '',
    phone: '',
    reason: '',
    timeSlot: '',
    date: '',
  });

  const specializations = [
    'Dentist',
    'Cardiologist',
    'Dermatologist',
    'Neurologist',
    'Orthopedic Surgeon',
    'Gynecologist',
    'Oncologist',
    'Psychiatrist',
    'Radiologist',
    'ENT Specialist',
  ];

  const doctorsBySpecialization = {
    Dentist: ['Dr. Arjun Mehta', 'Dr. Priya Sharma', 'Dr. Rohan Deshmukh'],
    Cardiologist: ['Dr. Akshay Menon', 'Dr. Vikram Singh', 'Dr. Sanjay Pillai'],
    Dermatologist: ['Dr. Meera Kapoor', 'Dr. Neha Kulkarni', 'Dr. Riya Desai'],
    Neurologist: ['Dr. Shantanu Joshi', 'Dr. Anjali Nair', 'Dr. Rahul Sharma'],
    'Orthopedic Surgeon': ['Dr. Karan Verma', 'Dr. Tina Paul', 'Dr. Mohan Iyer'],
    Gynecologist: ['Dr. Sneha Pandit', 'Dr. Alok Shah', 'Dr. Pooja Rao'],
    Oncologist: ['Dr. Vineet Kulkarni', 'Dr. Kavita Gupta', 'Dr. Tarun Patel'],
    Psychiatrist: ['Dr. Natasha Dutta', 'Dr. Aman Thakkar', 'Dr. Reshma Bhat'],
    Radiologist: ['Dr. Rajiv Kumar', 'Dr. Swati Bansal', 'Dr. Anupama Rao'],
    'ENT Specialist': ['Dr. Rakesh Iyer', 'Dr. Pallavi Deshmukh', 'Dr. Suresh Menon'],
  };

  const availableSlots = ['09:00 AM', '01:00 PM', '02:00 PM', '04:00 PM'];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleTimeSlotSelect = (slot) => {
    setAppointmentDetails({ ...appointmentDetails, timeSlot: slot });
  };

  const confirmAppointment = () => {
    alert('Appointment Confirmed! Details have been sent to your email.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#03045e]/90 to-[#0077b6]/80 flex flex-col items-center justify-center py-8 px-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-10">

        {/* Header */}
        <h1 className="text-4xl font-semibold text-center text-[#0077b6]">Your Health Journey Begins Here</h1>
        <p className="text-lg text-center text-[#03045e] mt-2 mb-6">Let's find the perfect time for your appointment</p>

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={step} />

        {/* Step 1: Select Specialization */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-[#0077b6]">Select Specialization</h2>
            <select
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="w-full mt-6 px-4 py-2 border-2 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            >
              <option value="">Select Specialization</option>
              {specializations.map((specialization) => (
                <option key={specialization} value={specialization}>
                  {specialization}
                </option>
              ))}
            </select>
            <div className="flex justify-end mt-8">
              <button
                onClick={handleNext}
                disabled={!selectedSpecialization}
                className="bg-[#0077b6] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Doctor */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-[#0077b6]">Choose Your Healer</h2>
            <div className="grid grid-cols-2 gap-6 mt-6">
              {(doctorsBySpecialization[selectedSpecialization] || []).map((doctor) => (
                <button
                  key={doctor}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`p-6 border-2 rounded-xl transition-transform duration-200 hover:scale-105 hover:shadow-xl ${
                    selectedDoctor === doctor ? 'bg-[#00b4d8] text-white' : 'bg-white border-[#0077b6]'
                  }`}
                >
                  {doctor}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="bg-[#f8e16c] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedDoctor}
                className="bg-[#0077b6] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Select Date and Time */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-[#0077b6]">Select Date and Time</h2>
            <input
              type="date"
              name="date"
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
              className="mt-6 w-full px-6 py-3 border-2 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
            <h3 className="text-lg mt-6">Available Time Slots</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleTimeSlotSelect(slot)}
                  className={`px-6 py-3 border-2 rounded-xl transition-transform duration-200 hover:scale-105 hover:shadow-xl ${
                    appointmentDetails.timeSlot === slot ? 'bg-[#00b4d8] text-white' : 'bg-white border-[#0077b6]'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="bg-[#f8e16c] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!appointmentDetails.date || !appointmentDetails.timeSlot}
                className="bg-[#0077b6] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Enter Details */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-[#0077b6]">Tell Us More</h2>
            <form className="mt-6 space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleInputChange}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleInputChange}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
              <textarea
                name="reason"
                placeholder="Reason for Visit"
                onChange={handleInputChange}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </form>
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="bg-[#f8e16c] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-[#0077b6] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Confirm Appointment */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-[#0077b6]">Confirm Your Appointment</h2>
            <div className="bg-[#fcefef] p-6 rounded-xl mt-6 shadow-xl">
              <p><strong>Specialization:</strong> {selectedSpecialization}</p>
              <p><strong>Doctor:</strong> {selectedDoctor}</p>
              <p><strong>Date:</strong> {appointmentDetails.date}</p>
              <p><strong>Time:</strong> {appointmentDetails.timeSlot}</p>
              <p><strong>Name:</strong> {appointmentDetails.name}</p>
              <p><strong>Email:</strong> {appointmentDetails.email}</p>
              <p><strong>Phone:</strong> {appointmentDetails.phone}</p>
              <p><strong>Reason:</strong> {appointmentDetails.reason}</p>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="bg-[#f8e16c] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={confirmAppointment}
                className="bg-[#0077b6] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScheduleAppointment;
