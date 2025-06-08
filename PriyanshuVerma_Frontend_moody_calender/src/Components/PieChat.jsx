import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { mood } from '../utils/mood';

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = {
  happy: 'rgba(75, 192, 192, 0.7)',
  sad: 'rgba(255, 99, 132, 0.7)',
  neutral: 'rgba(255, 205, 86, 0.7)',
};

export default function PieChat({ moodMap = {}, month, year }) {
  const weeks = mood(moodMap, month, year);

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {weeks.map((counts, idx) => {
        const data = {
          labels: ['Happy', 'Sad', 'Neutral'],
          datasets: [{
            data: [counts.happy, counts.sad, counts.neutral],
            backgroundColor: [COLORS.happy, COLORS.sad, COLORS.neutral],
            hoverOffset: 4
          }]
        };
        return (
          <div key={idx} className="m-4 w-[250px]">
            <h4 className="text-center font-semibold mb-2">Week {idx + 1}</h4>
            <Pie data={data} />
          </div>
        );
      })}
    </div>
  );
}
