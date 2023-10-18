import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";
import { useProductStore } from "../../Utils/store";

ChartJS.register(ArcElement, Tooltip, Legend);

const legendOptions = {
  display: true, // Display the legend
  position: "right", // Display the legend on the right side
  labels: {
    usePointStyle: true, // Use point style for the legend labels
  },
};

const DoughnutChart = ({ flexStyle, textStyle }) => {
  const products = useProductStore((state) => state.products);
  console.log(products);
  const groceriesArr = products.filter((item) => item.category === "groceries");

  const data = {
    labels: groceriesArr.map((item) => item.title),
    datasets: [
      {
        label: "Ratings",
        data: groceriesArr.map((item) => item.rating),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box sx={flexStyle}>
      <Text sx={textStyle}>Groceries VS Rating</Text>
      <Doughnut
        data={data}
        options={{
          plugins: { legend: legendOptions },
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </Box>
  );
};

export default DoughnutChart;
