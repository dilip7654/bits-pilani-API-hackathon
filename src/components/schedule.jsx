import React, { useState } from 'react';
import ProgressIndicator from './ProgressIndicator'; // Ensure the path is correct

function ScheduleAppointment() {
  const [step, setStep] = useState(1);
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

  const doctors = ['Dr. Anushka Bendle', 'Dr. Shubham Tohoke', 'Dr. Piyusha Mahajan', 'Dr. Samarth Lad', 'Dr. Shashwati Meshram'];
  const availableSlots = ['09:00 AM', '01:00 PM', '02:00 PM', '04:00 PM'];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleTimeSlotSelect = (slot) => {
    setAppointmentDetails({ ...appointmentDetails, timeSlot: slot });
  };

  const confirmAppointment = () => {
    alert('Appointment Confirmed! Details have been sent to your email.');
  };

  const isDoctorAvailable = (doctor) => doctor !== 'Dr. Shashwati Meshram';
  const isSlotAvailable = (slot) => slot !== '04:00 PM';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#90e0ef] to-[#fcefef] flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-[#0077b6]">Your Health Journey Begins Here</h1>
        <p className="text-lg text-center text-[#03045e] mt-2 mb-3">Let's find the perfect time for your appointment</p>
        
        {/* Progress Indicator */}
        <ProgressIndicator currentStep={step} steps={4} />
        
        {/* Step Content */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#0077b6]">Choose Your Healer</h2>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {doctors.map((doctor) => (
                <button
                  key={doctor}
                  onClick={() => handleDoctorSelect(doctor)}
                  className={`p-4 border rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg ${
                    selectedDoctor === doctor ? 'bg-[#00b4d8] text-white' : 'border-gray-300'
                  } ${!isDoctorAvailable(doctor) ? 'text-gray-500 cursor-not-allowed' : ''}`}
                  disabled={!isDoctorAvailable(doctor)}
                >
                  {doctor}
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={handleNext}
                className="bg-[#0077b6] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Date and Time */}
        {step === 2 && (
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
                  } ${!isSlotAvailable(slot) ? 'text-gray-500 cursor-not-allowed' : ''}`}
                  disabled={!isSlotAvailable(slot)}
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
                className="bg-[#0077b6] text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Enter Details */}
        {step === 3 && (
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

        {/* Step 4: Confirm Appointment */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#0077b6]">Confirm Your Appointment</h2>
            <div className="bg-[#fcefef] p-4 rounded-lg mt-4">
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