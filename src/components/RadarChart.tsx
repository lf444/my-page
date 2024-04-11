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
      backgroundColor: "rgba(134,187,216, 0.2)",
      borderColor: "rgb(134,187,216)",
      pointBackgroundColor: "rgb(134,187,216)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(134,187,216)",
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
      pointLabels: {
        font: {
          size: 14,
        },
      },
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
