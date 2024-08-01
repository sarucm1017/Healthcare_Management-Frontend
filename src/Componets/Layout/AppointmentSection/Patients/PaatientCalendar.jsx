import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextMonth, prevMonth } from '../../../../Redux/Slices/CalendarSlice';
import { format, startOfWeek, addDays } from 'date-fns';

const Calendar = () => {
  const dispatch = useDispatch();
  const currentMonth = useSelector((state) => state.calendar.currentMonth);

  const renderHeader = () => {
    return (
      <div className="header">
        <div><h5>{format(currentMonth, 'MMMM yyyy')}</h5></div>
       <div className='clanderBtn'>
       <button onClick={() => dispatch(prevMonth())}>&lt;</button>
        
        <button onClick={() => dispatch(nextMonth())}>&gt;</button>
       </div>
      </div>
    );
  };

  const renderDays = () => {
    const startDate = startOfWeek(currentMonth);
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
    const startDate = startOfWeek(currentMonth);
    const days = [];
    for (let i = 0; i < 35; i++) {
      days.push(
        <div className="cell" key={i}>
          {format(addDays(startDate, i), 'd')}
        </div>
      );
    }
    return <div className="cells">{days}</div>;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
