import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";
import { useProductStore } from "../../Utils/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      // grid: {
      //   display: false,
      // },
      title: {
        display: true,
        text: "Ratings",
        font: {
          size: 12,
          family: "Montserrat",
        },
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
    x: {
      // grid: {
      //   display: false,
      // },
      title: {
        display: true,
        text: "Months",
        font: {
          size: 12,
          family: "Montserrat",
        },
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May"];

const MixChart = ({ flexStyle, textStyle }) => {
  const products = useProductStore((state) => state.products);
  const reducedObj = Object.values(
    products.reduce((acc, curr) => {
      acc[curr.category] = [...(acc[curr.category] || []), curr];
      return acc;
    }, {})
  );

  const dataColorScheme = {
    smartphones: "rgb(255, 99, 132)",
    laptops: "rgb(25, 56, 32)",
    fragrances: "rgb(25, 129, 232)",
    skincare: "rgb(55, 129, 202)",
    groceries: "rgb(2, 129, 12)",
    homedecoration: "rgb(0, 0, 0)",
  };
  const data = {
    labels,
    datasets: reducedObj.map((data, index) => {
      return {
        label: data[0].category,
        data: data.map((item) => item.rating),
        borderColor:
          dataColorScheme[
            data[0].category === "home-decoration"
              ? "homedecoration"
              : data[0].category
            //make this enum
          ],
        backgroundColor:
          dataColorScheme[
            data[0].category === "home-decoration"
              ? "homedecoration"
              : data[0].category
          ],
        yAxisID: "y",
      };
    }),
  };
  return (
    <Box sx={flexStyle}>
      <Text sx={textStyle}>Mix Chart</Text>
      <Line options={options} data={data} />
    </Box>
  );
};

export default MixChart;
