import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Registered necessary components for the bar chart
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ActivityCard = () => {
  const [chartData, setChartData] = useState({
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 7000, 6000, 8000, 9000, 12000, 11000, 13000, 15000, 12000, 14000],
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
        borderWidth: 1,
        borderRadius: 15, // Adjust this value for rounded corners
        
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card">
      
      <div className="card-body">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ActivityCard;
