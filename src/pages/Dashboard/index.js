import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const marketingData = {
  labels: ['Marketing A', 'Marketing B', 'Marketing C'],
  datasets: [
    {
      label: 'Jobs',
      data: [12, 19, 7],
      backgroundColor: 'rgba(22, 184, 0, 0.2)', 
      borderColor: 'rgba(22, 184, 0, 0.2)',
      borderWidth: 1,
    },
  ],
};

const profitData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Gross Profit',
      data: [3000, 2500, 4000, 3500, 5000, 4500, 6000],
      backgroundColor: '#FF6384',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      fill: true,
    },
  ],
};

export default function Home() {
  return (
    <div className="container mx-auto px-[20vw] py-[20vh]">
      <h1 className="text-2xl font-bold mb-4">Marketing Job and Profit Charts</h1>
      <div className="mb-8">
        <h2 className="text-xl mb-2">Marketing Jobs</h2>
        <Bar data={marketingData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Jobs per Marketing' } } }} />
      </div>
      <div>
        <h2 className="text-xl mb-2">Monthly Gross Profit</h2>
        <Line data={profitData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Gross Profit (Monthly)' } } }} />
      </div>
    </div>
  );
}
