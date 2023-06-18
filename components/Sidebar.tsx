import React, { ReactNode, useState } from "react";
import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  useColorMode,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Divider,
  color,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiPencilAlt } from "react-icons/hi";
import connectWallet from "../utils/connectWallet";
import BlogCard from "./BlogCard";
import BlogSkleton from "./BlogSkleton";
import shortenAddress from "../utils/shortenAddress";
import formatBalance from "../utils/formatBalance";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Trending from "./Trending";
import useStore from "../store/Store";
import Notification from "./notification";

interface LinkItemProps {
  name: string;
  icon: IconType;
  onClick: () => void;
}

export default function Sidebar({ blogs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { notifications } = useStore();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "flex" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Navbar />
      <Flex>
        {!notifications ? (
          <Box ml={{ base: 0, md: 60 }} p={[0, null, 4]} w="fit-content">
            {blogs ? (
              blogs.map((blog, index) => {
                return (
                  <>
                    <BlogCard
                      key={index}
                      author={blog.author}
                      title={blog.title}
                      image={blog.cover}
                      index={index}
                      content={blog.metadata}
                    />
                    {/* <Divider /> */}
                  </>
                );
              })
            ) : (
              <>
                {/* <Notification /> */}
                <BlogSkleton />
                <BlogSkleton />
                <BlogSkleton />
                <BlogSkleton />
                <BlogSkleton />
                <BlogSkleton />
                <BlogSkleton />
                <BlogSkleton />
              </>
            )}
          </Box>
        ) : (
          <Box ml={{ base: 0, md: 60 }} p={[0, null, 4]} w="fit-content">
            <Notification />
          </Box>
        )}
        <Trending />
      </Flex>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { setNotification } = useStore();
  const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome, onClick: () => setNotification(false) },
    {
      name: "Trending",
      icon: FiTrendingUp,
      onClick: () => setNotification(false),
    },
    { name: "Explore", icon: FiCompass, onClick: () => setNotification(false) },
    { name: "Favourites", icon: FiStar, onClick: () => setNotification(false) },
    {
      name: "Settings",
      icon: FiSettings,
      onClick: () => setNotification(false),
    },
  ];
  const [address, setAddress] = useState<string | undefined>("");
  const [balance, setBalance] = useState<number | undefined>(0);
  return (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      flexDirection={"column"}
      justifyContent="space-between"
      {...rest}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        bgGradient={"linear(to-b, green.300, blue.500, purple.600)"}
        pr={0.5}
        h={"full"}
      >
        <Box bg={useColorModeValue("white", "gray.900")} h={"3xl"}>
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              DeBlog
            </Text>
            <CloseButton
              display={{ base: "flex", md: "none" }}
              onClick={onClose}
            />
          </Flex>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              onClick={link.onClick}
              _hover={{ bg: "#4c4c4c" }}
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
        <Box p={4} bg={useColorModeValue("white", "gray.900")}>
          {address?.length > 0 ? (
            <Box bg={useColorModeValue("white", "gray.700")} p={4}>
              <Box w={"full"}>{shortenAddress(address)}</Box>
              <Box w={"full"}>{formatBalance(balance)}</Box>
            </Box>
          ) : (
            <Box
              bgGradient={"linear(to-r, green.300, blue.500, purple.600)"}
              p={0.5}
              borderRadius={"md"}
            >
              <Button
                bg={"gray.700"}
                onClick={async () => {
                  const data = await connectWallet();
                  setAddress(data?.address);
                  setBalance(data?.balance);
                }}
                w="full"
                color={"white"}
              >
                Connect Wallet
              </Button>
            </Box>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.100",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
