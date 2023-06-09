import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import json from './assets/images/data.json'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    scales: {
      x: {
        grid: {
          display: false,
          lineWidth: 0,
        }
      },
      y: {
        grid: {
          display: false,
          lineWidth: 0,
        }
      },
    },
  },
};

const labels = json.map(j => j.day);

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: json.map(j => j.amount),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


function Graph() {
  console.log(labels, data);
  return (
    <>
      <Bar 
        data= {data}
        height={400}
        width={600}
        options={options}
      />
    </>
  )
}

export default Graph;