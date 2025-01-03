// import React from 'react';
// import { Card } from '@/components/ui/alert';
// import { Clock, User, FileText, Activity, Calendar } from 'lucide-react';

// const PatientDashboard = () => {
//   // Sample patient data
//   const patient = {
//     name: "Sarah Johnson",
//     age: 42,
//     id: "PT-2024-001",
//     medicalHistory: [
//       { date: "2023-12-15", condition: "Hypertension", notes: "Started medication" },
//       { date: "2023-10-03", condition: "Type 2 Diabetes", notes: "Diet control" },
//       { date: "2023-08-22", condition: "Arthritis", notes: "Physical therapy recommended" }
//     ],
//     upcomingAppointments: [
//       { date: "2024-12-23", time: "10:30 AM", doctor: "Dr. Smith", type: "Follow-up" },
//       { date: "2025-01-05", time: "2:15 PM", doctor: "Dr. Johnson", type: "Annual Check-up" }
//     ],
//     vitals: {
//       bloodPressure: "120/80",
//       heartRate: "72",
//       temperature: "98.6°F",
//       weight: "145 lbs"
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-gray-900">Patient Dashboard</h1>
//           <div className="flex items-center space-x-2">
//             <Clock className="w-5 h-5 text-gray-500" />
//             <span className="text-gray-600">{new Date().toLocaleDateString()}</span>
//           </div>
//         </div>

//         {/* Patient Info Card */}
//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center space-x-2 mb-4">
//             <User className="w-5 h-5" />
//             <h2 className="text-xl font-semibold">Patient Information</h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p className="text-sm text-gray-500">Name</p>
//               <p className="font-medium">{patient.name}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Patient ID</p>
//               <p className="font-medium">{patient.id}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Age</p>
//               <p className="font-medium">{patient.age} years</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Medical History Card */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center space-x-2 mb-4">
//               <FileText className="w-5 h-5" />
//               <h2 className="text-xl font-semibold">Medical History</h2>
//             </div>
//             <div className="space-y-4">
//               {patient.medicalHistory.map((record, index) => (
//                 <div key={index} className="border-b pb-2 last:border-0">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="font-medium">{record.condition}</p>
//                       <p className="text-sm text-gray-500">{record.notes}</p>
//                     </div>
//                     <span className="text-sm text-gray-500">{record.date}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Upcoming Appointments Card */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center space-x-2 mb-4">
//               <Calendar className="w-5 h-5" />
//               <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
//             </div>
//             <div className="space-y-4">
//               {patient.upcomingAppointments.map((appointment, index) => (
//                 <div key={index} className="border-b pb-2 last:border-0">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="font-medium">{appointment.type}</p>
//                       <p className="text-sm text-gray-500">with {appointment.doctor}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-medium">{appointment.date}</p>
//                       <p className="text-sm text-gray-500">{appointment.time}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Vitals Card */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center space-x-2 mb-4">
//               <Activity className="w-5 h-5" />
//               <h2 className="text-xl font-semibold">Current Vitals</h2>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-500">Blood Pressure</p>
//                 <p className="font-medium">{patient.vitals.bloodPressure}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Heart Rate</p>
//                 <p className="font-medium">{patient.vitals.heartRate} bpm</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Temperature</p>
//                 <p className="font-medium">{patient.vitals.temperature}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Weight</p>
//                 <p className="font-medium">{patient.vitals.weight}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;
import React from 'react'

const PatientData = () => {
  return (
    <div>
      
    </div>
  )
}

export default PatientData
