import { Flex, Image, Box, Text, Input } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profileImg.svg";
import notification from "../../assets/notification.svg";
import { ChevronDownIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { SidebarContext } from "../Context";

const Navbar = () => {
  const { getButtonProps, getDisclosureProps, isOpen } =
    useContext(SidebarContext);
  return (
    <Flex
      maxW={"100vw"}
      alignItems={"center"}
      pt={"30px"}
      pb={"30px"}
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      fontFamily={"Montserrat"}
    >
      <Flex
        display={!isOpen ? "flex" : "hidden"}
        alignItems={"center"}
        height={"60px"}
        pl={"36px"}
        w={264}
      >
        <HamburgerIcon
          h="24px"
          w="24px"
          color={"#A6A6A6"}
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

      <Flex ml={"76px"} alignItems={"center"}>
        <Image src={profile} />
        <Box ml={"16px"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text m={0} fontSize={"20px"} fontWeight={"500"}>
              Good Day, Shifuku
            </Text>
            <ChevronDownIcon h="24px" w="24px" />
          </Flex>

          <Text
            mt={"6px"}
            fontSize={"14px"}
            fontWeight={"500"}
            color={"#A6A6A6"}
          >
            Driving License id : 2018956859399
          </Text>
        </Box>
      </Flex>

      <Flex
        gap={"24px"}
        w={"480px"}
        ml={"88px"}
        alignItems={"center"}
        background={"rgba(220, 219, 219, 0.25)"}
        borderRadius={"15px"}
        px={"24px"}
        py={"10px"}
      >
        <SearchIcon color="#9A9A9A" />
        <Input
          border={"none"}
          background={"none"}
          w={"inherit"}
          _focus={{ border: "none" }}
          placeholder="Search Something"
          _placeholder={{
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: "500",
            color: "#9A9A9A",
          }}
        />
      </Flex>

      <Flex
        ml={"48px"}
        border={"1px solid #929292"}
        h={"50px"}
        w={"50px"}
        borderRadius={"50%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={notification} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
