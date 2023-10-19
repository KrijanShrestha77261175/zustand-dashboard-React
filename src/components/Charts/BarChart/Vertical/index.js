import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";
import { useProductStore } from "../../../Utils/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      title: {
        display: true,
        text: "Stocks", // Custom label for the y-axis
        font: {
          size: 12,
          family: "Montserrat",
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      title: {
        display: true,
        text: "Month",
        font: {
          size: 12,
          family: "Montserrat",
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May"];

const VerticalBar = ({ flexStyle, textStyle }) => {
  const products = useProductStore((state) => state.products);
  const testCategory = products.map((item) => item.category);
  // console.log(testCategory);
  const fragranceArr = products.filter(
    (item) => item.category === "fragrances"
  );
  const skincareArr = products.filter((item) => item.category === "skincare");
  const data = {
    labels,
    datasets: [
      {
        label: "Fragrances",
        data: fragranceArr.map((item) => item.stock),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Skin Care",
        data: skincareArr.map((item) => item.stock),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Box sx={flexStyle}>
      <Text sx={textStyle}>Fragrance VS Skincare</Text>
      <Bar options={options} data={data} />
    </Box>
  );
};

export default VerticalBar;
