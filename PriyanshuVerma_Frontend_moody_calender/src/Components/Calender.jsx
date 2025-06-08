import React from 'react';
import usePersistedState from '../hooks/usePersistedState';
import PieChat from './PieChat'; // Ensure this file/component is correctly named
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const moods = ["😐", "😊", "😢"," "];

const getDaysInMonth = (month, year) => {
  const days = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

function Calendar() {
  const today = new Date();
  const [month, setMonth] = React.useState(today.getMonth());
  const [year, setYear] = React.useState(today.getFullYear());
  const [moodMap, setMoodMap] = usePersistedState('moodMap', {});

  const days = getDaysInMonth(month, year);
  const offset = days[0]?.getDay() || 0;

  const handleDay = (key) => {
    setMoodMap((prev) => {
      const current = prev[key] || " ";
      const nextMood = moods[(moods.indexOf(current) + 1) % moods.length];
      return { ...prev, [key]: nextMood };
    });
  };

  const changeMonth = (next = true) => {
    setMonth((prevMonth) => {
      const newMonth = next ? (prevMonth + 1) % 12 : (prevMonth + 11) % 12;
      setYear((prevYear) => {
        if (next && prevMonth === 11) return prevYear + 1;
        if (!next && prevMonth === 0) return prevYear - 1;
        return prevYear;
      });
      return newMonth;
    });
  };

  return (
   <div className='grid grid-row-2'>
     <div className=" grid grid-cols-2">
      <div className="min-w-2xl mx-auto bg-black  rounded-lg shadow p-6">
        <div className="flex border-2 rounded-xl px-2 py-4 border-sky-500 justify-between items-center mb-4">
          <button onClick={() => changeMonth(false)} className="px-3 py-1 border border-sky-700 hover:bg-blue-200/20 rounded">
            ◀ Prev
          </button>
          <h2 className="text-xl font-semibold">
            {new Date(year, month).toLocaleString("default", { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={() => changeMonth(true)} className="px-3 py-1 border border-sky-700 hover:bg-blue-100/20 rounded">
            Next ▶️
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center font-medium text-white-500">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mt-2">
          {Array(offset).fill(null).map((_, i) => <div key={i} />)}
          {days.map((d) => {
            const key = d.toISOString().split('T')[0];
            return (
              <div
                key={key}
                onClick={() => handleDay(key)}
                className="border rounded-lg p-2 h-20 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition"
              >
                <div className="font-semibold">{d.getDate()}</div>
                <div className="text-2xl">{moodMap[key] || " "}</div>
              </div>
            );
          })}
        </div>

       
      </div>
      <PieChat moodMap={moodMap} month={month} year={year} />
    </div>
    <div className=' border-1 border-sky-600 bg-sky-600/30  grid grid-row-2'>
       <div className='grid grid-cols-3'>
      <DotLottieReact
      src="https://lottie.host/042228fe-9716-4f99-8240-5468b23feba7/JSJENTRLeu.lottie"
      loop
      autoplay
    />
    <DotLottieReact
      src="https://lottie.host/83eadc14-efa2-4fcb-b574-08bd27b4efea/mfZD9gtfGP.lottie"
      loop
      autoplay
    />
    <DotLottieReact
      src="https://lottie.host/d8f7665b-1533-496a-8f49-8bf88fc7d457/sIg1lce6cW.lottie"
      loop
      autoplay
    />
     </div>
       <div className=' text-white text-2xl mx-auto text-center py-4 '>
      <h1>PriyanshuVerma @ 2025</h1>
    </div>
    </div>
    
   </div>
  );
}

export default Calendar;
