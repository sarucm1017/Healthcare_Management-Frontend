import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextMonth, prevMonth } from '../../../../Redux/Slices/CalendarSlice';
import { format, startOfWeek, addDays, isToday } from 'date-fns';

const Calendar = () => {
  const dispatch = useDispatch();
  const currentMonth = useSelector((state) => state.calendar.currentMonth);
  const today = new Date(); // Today's date
  const startDate = startOfWeek(today, { weekStartsOn: 0 }); // Start of the current week

  const renderHeader = () => {
    return (
      <div className="header">
        <div><h5>{format(currentMonth, 'MMMM yyyy')}</h5></div>
        {/* <div className='calendarBtn'>
          <button onClick={() => dispatch(prevMonth())}>&lt;</button>
          <button onClick={() => dispatch(nextMonth())}>&gt;</button>
        </div> */}
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="day" key={i}>
          {format(addDays(startDate, i), 'eee')}
        </div>
      );
    }
    return <div className="days">{days}</div>;
  };

  const renderCells = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      const isTodayDate = isToday(day);
      days.push(
        <div
          className={`cell ${isTodayDate ? 'today' : ''}`} // Apply class if it's today
          key={i}
        >
          {format(day, 'd')}
        </div>
      );
    }
    return <div className="cells">{days}</div>;
  };

  return (
    <div className="calendar dashbord_calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className='coming_appointment'>
        <div></div>
        <div>
           <h5>Dr.John</h5> 
           <p>Cardiologist</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
