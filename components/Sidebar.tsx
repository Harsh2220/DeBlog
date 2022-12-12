import React, { ReactNode, useState } from "react";
import {
  IconButton,
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
import { HiPencilAlt } from "react-icons/hi"
import connectWallet from "../utils/connectWallet";
import BlogCard from "./BlogCard";
import BlogSkleton from "./BlogSkleton";
import shortenAddress from "../utils/shortenAddress";
import formatBalance from "../utils/formatBalance";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function Sidebar({ blogs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      {/* mobilenav */}
      {/* <MobileNav onOpen={onOpen} /> */}
      <Box ml={{ base: 0, md: 60 }} p={[0, null, 4]} w="fit-content">
        {blogs ? (
          blogs.map((blog, index) => {
            return (
              <>
                <BlogCard
                  key={index}
                  author={blog.authorName}
                  title={blog.blogTitle}
                  image={blog.coverImage}
                  index={index}
                />
                <Divider />
              </>
            );
          })
        ) : (
          <>
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
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
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
      <Box>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            DeBlog
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
      <Box p={4}>
        {address?.length > 0 ? (
          <Box bg={useColorModeValue("white", "gray.700")} p={4}>
            <Box w={"full"}>{shortenAddress(address)}</Box>
            <Box w={"full"}>{formatBalance(balance)}</Box>
          </Box>
        ) : (
          <Button
            onClick={async () => {
              const data = await connectWallet();
              setAddress(data?.address);
              setBalance(data?.balance);
            }}
            w="full"
          >
            Connect Wallet
          </Button>
        )}
      </Box>
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
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};




