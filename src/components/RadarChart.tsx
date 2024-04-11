import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Leadership",
    "Travail d'équipe",
    "Communication",
    "Expert",
    "Architecture",
    "Créativité",
  ],
  datasets: [
    {
      label: "test",
      data: [3.5, 3.5, 3, 4, 3, 1.5],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      max: 5,
      min: 0,
      ticks: {
        stepSize: 1,
        display: false,
      },
    },
  },
};
const RadarChart = () => {
  return <Radar data={data} options={options} />;
};

export default RadarChart;
