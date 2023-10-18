import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { SidebarContext } from "../Context";
const Provider = ({ children }) => {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  return (
    <BrowserRouter>
      <ChakraProvider>
        <SidebarContext.Provider
          value={{ getButtonProps, getDisclosureProps, isOpen }}
        >
          {children}
        </SidebarContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default Provider;
