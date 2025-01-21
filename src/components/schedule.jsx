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
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-[#0077b6]">Your Health Journey Begins Here</h1>
        <p className="text-lg text-center text-[#03045e] mt-2 mb-3">Let's find the perfect time for your appointment</p>

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={step} />

        {/* Step 1: Select Specialization */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#0077b6]">Select Specialization</h2>
            <select
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg"
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
                className="bg-[#0077b6] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Doctor */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#0077b6]">Choose Your Healer</h2>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {(doctorsBySpecialization[selectedSpecialization] || []).map((doctor) => (
                <button
                  key={doctor}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`p-4 border rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg ${
                    selectedDoctor === doctor ? 'bg-[#00b4d8] text-white' : 'border-gray-300'
                  }`}
                >
                  {doctor}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="bg-[#fbb13c] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedDoctor}
                className="bg-[#0077b6] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Select Date and Time */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#0077b6]">Select Date and Time</h2>
            <input
              type="date"
              name="date"
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
              className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <h3 className="text-lg mt-4">Available Time Slots</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleTimeSlotSelect(slot)}
                  className={`px-4 py-2 border rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg ${
                    appointmentDetails.timeSlot === slot ? 'bg-[#00b4d8] text-white' : 'border-gray-300'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="bg-[#fbb13c] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!appointmentDetails.date || !appointmentDetails.timeSlot}
                className="bg-[#0077b6] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Enter Details */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#0077b6]">Tell Us More</h2>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <textarea
                name="reason"
                placeholder="Reason for Visit"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </form>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="bg-[#fbb13c] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-[#0077b6] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Confirm Appointment */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#0077b6]">Confirm Your Appointment</h2>
            <div className="bg-[#fcefef] p-4 rounded-lg mt-4">
              <p><strong>Specialization:</strong> {selectedSpecialization}</p>
              <p><strong>Doctor:</strong> {selectedDoctor}</p>
              <p><strong>Date:</strong> {appointmentDetails.date}</p>
              <p><strong>Time:</strong> {appointmentDetails.timeSlot}</p>
              <p><strong>Name:</strong> {appointmentDetails.name}</p>
              <p><strong>Email:</strong> {appointmentDetails.email}</p>
              <p><strong>Phone:</strong> {appointmentDetails.phone}</p>
              <p><strong>Reason:</strong> {appointmentDetails.reason}</p>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="bg-[#fbb13c] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={confirmAppointment}
                className="bg-[#0077b6] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
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
