import React from 'react'
import {Card, CardContent, CardHeader  } from '@mui/material';
const Appointment = () => {
  const appointments = [
    { date: "2023-06-15", time: "10:00 AM", doctor: "Dr. Smith", department: "Cardiology" },
    { date: "2023-07-02", time: "2:30 PM", doctor: "Dr. Johnson", department: "Endocrinology" },
  ]

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Upcoming Appointments</CardTitle> */}
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {appointments.map((appointment, index) => (
            <li key={index} className="border-b pb-2 last:border-b-0">
              <p className="font-semibold">{appointment.date} at {appointment.time}</p>
              <p>{appointment.doctor} - {appointment.department}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Appointment
