import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box display="grid" gridTemplateColumns="auto 1fr">
        <SideBar />
        <Box height="100vh" maxH="100vh" overflowY="auto">
          <Box
            py={6}
            px={10}
            pb={10}
            sx={{ "&::-webkit-scrollbar": { display: "none" } }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
