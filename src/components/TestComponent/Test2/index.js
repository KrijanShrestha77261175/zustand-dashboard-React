import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import HorizontalBar from "../../Charts/BarChart/Horizontal";
import VerticalBar from "../../Charts/BarChart/Vertical";
import Doughnut from "../../Charts/Doughnut";
import MixChart from "../../Charts/MixChart";

const Test2 = () => {
  const flexStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    w: "470px",
    h: "320px",
    borderRadius: "15px",
    border: "1px solid rgba(166, 166, 166, 0.25)",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    p: "20px",
  };
  const textStyle = {
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Montserrat",
  };
  return (
    <VStack>
      <Grid templateColumns={"repeat(2, 1fr)"} columnGap={"70px"} gap={"30px"}>
        <GridItem>
          <HorizontalBar textStyle={textStyle} flexStyle={flexStyle} />
        </GridItem>
        <GridItem>
          <VerticalBar textStyle={textStyle} flexStyle={flexStyle} />
        </GridItem>

        <GridItem>
          <Doughnut textStyle={textStyle} flexStyle={flexStyle} />
        </GridItem>

        <GridItem>
          <MixChart textStyle={textStyle} flexStyle={flexStyle} />
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default Test2;
