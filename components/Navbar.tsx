import React from "react";
import {
  IconButton,
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Text,
  FlexProps,
  useColorMode,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import {
    FiMenu,
    FiBell,
  } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import {HiPencilAlt} from "react-icons/hi"
import { useRouter } from "next/router";

interface MobileProps extends FlexProps {
    onOpen: () => void;
  }

export default function Navbar({ onOpen, ...rest }: MobileProps) {
    const router = useRouter();
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        pos={"sticky"}
        top={0}
        zIndex={2}
        {...rest}
      >
        <HStack spacing={4} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu />}
          />
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            DeBlog
          </Text>
        </HStack>
        <Flex w="full" justifyContent="center" display={["none", "none", "flex"]}>
          <Box>
            <InputGroup>
              <Input
                placeholder="Search"
                bg={useColorModeValue("gray.100", "gray.800")}
                maxW="sm"
              />
              <InputRightElement children={<BiSearch fontSize={"24px"} />} />
            </InputGroup>
          </Box>
        </Flex>
        <Button
              onClick={()=>router.push('write')}
              w={'fit-content'}
              paddingInline={8}
              fontSize={'lg'}
              // fontWeight={'normal'}
              leftIcon={<HiPencilAlt />}
            >
              Write
            </Button>
  
        <HStack spacing={{ base: 0, md: 4 }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<BiSearch />}
            display={["flex", "flex", "none"]}
          />
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <IconButton
            onClick={toggleColorMode}
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={colorMode === "light" ? <BiMoon /> : <BsSun />}
          />
        </HStack>
      </Flex>
    );
  };