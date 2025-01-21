import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS

function MyApp() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h1>React Calendar</h1>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}

export default MyApp;
