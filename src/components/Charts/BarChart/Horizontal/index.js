import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import axios from "axios";
import { useProductStore } from "../../../Utils/store";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      title: {
        display: true,
        text: "Home Depot", // Custom label for the y-axis
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
        text: "Prices",
        font: {
          size: 12,
          family: "Montserrat",
        },
      },
    },
  },
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
      position: "right",
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const HorizontalBar = ({ flexStyle, textStyle }) => {
  const products = useProductStore((state) => state.products);
  const homeDepotArr = products.filter(
    (item) => item.category === "home-decoration"
  );

  const setProducts = useProductStore((state) => state.setProducts);
  const data = {
    labels: homeDepotArr.map((data) => data.title),
    datasets: [
      {
        label: "Home Depot",
        data: homeDepotArr.map((data) => data.price),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`https://dummyjson.com/products`, { cancelToken: source.token })
      .then((response) => {
        // console.log(response, "res");
        setProducts(response.data.products);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Successfully aborted");
        } else {
          console.log(err);
        }
      });
    return () => {
      // cancel the request before component unmounts
      source.cancel();
    };
  }, []);
  return (
    <Box sx={flexStyle}>
      <Text sx={textStyle}>Home-Depot VS Prices</Text>
      <Bar options={options} data={data} />
    </Box>
  );
};
export default HorizontalBar;
