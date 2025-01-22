import React, { useState } from 'react';
import { useAppointments } from './AppointmentContext';
import ProgressIndicator from './ProgressIndicator';

function Schedule() {
  const { addAppointment } = useAppointments();
  
  
  // Add all required state variables
  const [step, setStep] = useState(1);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    email: '',
    phone: '',
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

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleSubmit = () => {
    const appointmentData = {
      specialization: selectedSpecialization,
      doctor: selectedDoctor,
      date: appointmentDetails.date,
      name: appointmentDetails.name,
      email: appointmentDetails.email,
      phone: appointmentDetails.phone
    };
    
    addAppointment(appointmentData);
    alert('Appointment Confirmed! You can view it in your dashboard.');
    
    // Reset form
    setStep(1);
    setSelectedSpecialization('');
    setSelectedDoctor('');
    setAppointmentDetails({
      name: '',
      email: '',
      phone: '',
      date: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#e0f7fa] flex flex-col items-center justify-center py-8 px-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-[#0077b6]">Your Health Journey Begins Here</h1>
        <p className="text-lg text-center text-[#0077b6] mt-2 mb-3">Let's find the perfect time for your appointment</p>

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={step} />

        {/* Step 1: Select Specialization */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-[#0077b6]">Select Specialization</h2>
            <select
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              value={selectedSpecialization}
              className="w-full mt-4 px-4 py-2 border border-[#0077b6] rounded-lg text-gray-700 font-medium"
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
                className="bg-[#0077b6] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
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
            <div className="grid grid-cols-2 gap-4 mt-6">
              {(doctorsBySpecialization[selectedSpecialization] || []).map((doctor) => (
                <button
                  key={doctor}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`p-4 border rounded-lg text-gray-700 font-medium transition-transform duration-200 hover:scale-105 hover:shadow-lg ${
                    selectedDoctor === doctor ? 'bg-[#00b4d8] text-white' : 'border-[#0077b6]'
                  }`}
                >
                  {doctor}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="bg-[#023e8a] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedDoctor}
                className="bg-[#0077b6] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Select Date */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-[#0077b6]">Choose a Date</h2>
            <div className="mt-6">
              <input
                type="date"
                name="date"
                value={appointmentDetails.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#0077b6] rounded-lg text-gray-700 font-medium"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="bg-[#023e8a] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!appointmentDetails.date}
                className="bg-[#0077b6] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Enter Details */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold text-center text-[#0077b6]">Fill in Your Details</h2>
            <div className="grid grid-cols-1 gap-4 mt-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={appointmentDetails.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#0077b6] rounded-lg text-gray-700 font-medium"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={appointmentDetails.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#0077b6] rounded-lg text-gray-700 font-medium"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={appointmentDetails.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#0077b6] rounded-lg text-gray-700 font-medium"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="bg-[#023e8a] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!appointmentDetails.name || !appointmentDetails.email || !appointmentDetails.phone}
                className="bg-[#0077b6] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
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
            <div className="mt-6 p-4 bg-[#e0f7fa] rounded-lg shadow-md">
              <p className="text-gray-700 font-medium">
                <strong>Specialization:</strong> {selectedSpecialization}
              </p>
              <p className="text-gray-700 font-medium">
                <strong>Doctor:</strong> {selectedDoctor}
              </p>
              <p className="text-gray-700 font-medium">
                <strong>Date:</strong> {appointmentDetails.date}
              </p>
              <p className="text-gray-700 font-medium">
                <strong>Name:</strong> {appointmentDetails.name}
              </p>
              <p className="text-gray-700 font-medium">
                <strong>Email:</strong> {appointmentDetails.email}
              </p>
              <p className="text-gray-700 font-medium">
                <strong>Phone:</strong> {appointmentDetails.phone}
              </p>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="bg-[#023e8a] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#0077b6] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Schedule;