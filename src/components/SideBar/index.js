import {
  ListItem,
  Flex,
  Image,
  Box,
  List,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { SidebarContext } from "../Context";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import { NAVIGATION_ROUTES_COMPONENT } from "../routes/routes.constant";
import { sidebarContent } from "./SideBarContent";

const SideBar = () => {
  const { getButtonProps, getDisclosureProps, isOpen } =
    useContext(SidebarContext);

  const [selectedComponent, setSelectedComponent] = useState("Dashboard");
  const location = useLocation();
  const [hidden, setHidden] = useState(!isOpen);
  useEffect(() => {
    const { pathname } = location;
    setSelectedComponent(NAVIGATION_ROUTES_COMPONENT[pathname]);
  }, []);
  return (
    <Box width={!hidden ? "300px" : "0px"} fontFamily={"Montserrat"}>
      <motion.div
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? 300 : 0 }}
        style={{
          background: "#EEFFFD",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
          left: "0",
          height: "100vh",
          top: "0",
          padding: "30px 30px 36px 0",
          borderTopRightRadius: "50px",
        }}
      >
        <Flex
          alignItems={"center"}
          background={"#EEFFFD"}
          pt={"30px"}
          pb={"30px"}
          height={"60px"}
          pl={"36px"}
          borderTopRightRadius={"40px"}
        >
          <HamburgerIcon
            h="24px"
            w="24px"
            color="gray"
            mr={"20px"}
            {...getButtonProps()}
            cursor={"pointer"}
            transition={"all 0.3s ease;"}
            _active={{
              transform: "scale(0.5)",
            }}
          />
          <Image src={logo} height="50px" w={"auto"} />
        </Flex>

        <List
          pt={"40px"}
          pl={"36px"}
          listStyleType={"none"}
          m={"0"}
          fontWeight={"600"}
        >
          {sidebarContent.map((obj, index) => {
            return (
              <ListItem
                cursor={"pointer"}
                pt={"16px"}
                pb={"16px"}
                onClick={() => setSelectedComponent(obj.name)}
                key={index}
              >
                <Link as={RouterLink} to={obj.to}>
                  <HStack justifyContent={"flex-start"}>
                    {obj.icon}
                    <Text>{obj.name}</Text>
                  </HStack>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </motion.div>
    </Box>
  );
};

export default SideBar;
