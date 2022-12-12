import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { AiOutlineRead } from "react-icons/ai";
  
  type blogPageProps = {
    title: string;
    author: string;
    image: string;
  };
  
  const Preview = ({ title, subTitle, content }: blogPageProps) => {
  
    return (
      <HStack
        mt={"2%"}
        // border={"2px solid"}
        justifyContent={"center"}
        position={"relative"}
        alignItems={"flex-start"}
        paddingTop={"10"}
        gap={10}
      >
        <HStack
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          position={"relative"}
        >
          <Box
            maxW={["96", "3xl"]}
            // border={"2px solid"}
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            borderColor={"gray"}
          >
            <Stack>
              <HStack border={"1px solid linear(to-r, green.200, pink.500)"}>
                <Avatar
                  size={"sm"}
                  src="https://i.pravatar.cc/300"
                  outline={"2px solid pink"}
                  outlineColor={useColorModeValue("purple", "pink")}
                  outlineOffset={"2px"}
                />
                <Text fontSize={"lg"} fontWeight={700} lineHeight={"0.8"}>
                  Umang Patel
                </Text>
              </HStack>
              <Flex opacity={0.6}>
                <Text>cathalmacdonnacha.com</Text>
                <Text ml={4}>Dec 6, 2022</Text>
              </Flex>
            </Stack>
            <VStack>
              <Text fontSize={"4xl"} fontWeight={700}>
                {title}
              </Text>
              <Box w={["auto", "3xl"]} height={"sm"}>
                <Image
                  src={'/blogImage.webp'}
                  borderRadius={10}
                  p={"2"}
                  height={"100%"}
                  width={"100%"}
                />
              </Box>
              <Text textAlign={"justify"}>{content}</Text>
            </VStack>
          </Box>
        </HStack>
        <Box
          // height={"30vh"}
          border={"2px solid"}
          w={"20%"}
          position={"sticky"}
          top={"10"}
          display={"flex"}
          flexDirection={"column"}
          p={"4"}
          gap={"4"}
          justifyContent={"center"}
        >
          <HStack>
            <Avatar
              size={"sm"}
              src="https://i.pravatar.cc/300"
              outline={"2px solid pink"}
              outlineColor={useColorModeValue("purple", "pink")}
              outlineOffset={"2px"}
            />
            <Text fontSize={"lg"} fontWeight={700} lineHeight={"0.8"}>
                Umang Patel
            </Text>
          </HStack>
          <Button bg={"blue.300"}>FOLLOW</Button>
        </Box>
      </HStack>
    );
  };
  export default Preview;
  