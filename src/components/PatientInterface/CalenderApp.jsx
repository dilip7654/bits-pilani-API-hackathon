import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
// import { createEventsServicePlugin } from '@schedule-x/events-service'
// import { useEffect , useState } from 'react'
 
import '@schedule-x/theme-default/dist/index.css'
 
function CalendarApp() {
  // const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: 1,
        title: 'Event 1',
        start: '2024-01-26',
        end: '2024-01-27',
      }, 
    ],
    // plugins: [eventsService],
    selectedDate : "2025-01-16"
  })
 
  // useEffect(() => {
  //   // get all events
  //   eventsService.getAll()
  // }, [])

  console.log(calendar)
 
  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default CalendarApp