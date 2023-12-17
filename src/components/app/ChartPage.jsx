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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export function ChartPage({labelS}) {
  
const options = {
  maintainAspectRatio:false,
indexAxis: 'y',
elements: {
  bar: {
    borderWidth: 2,
  },
},
responsive: true,
plugins: {
  legend: {
    position: 'top' ,
  },
  title: {
    display: true,
    text: 'Statistiques des consommations',
  },
},
};
const allLabel = [
  ['2021','2022','2023'],
  ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','samedi','dimanche'],
  ['13h','14h','15h','16h','17h','18h','19h']
]
const labels = allLabel[labelS];

const data = {
labels,
datasets: [
  {
    label: 'Prise 1',
    data: labels.map(() => (Math.random()*100)),
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
  {
    label: 'Prise 2',
    data: labels.map(() => (Math.random()*100)),
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
],
};
  return (
  
      <Bar style={{height:"90%",flex:"1"}} options={options} data={data} />

  )
}
