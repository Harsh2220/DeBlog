import {
  Box,
  Stack,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineRead } from "react-icons/ai";
import React from "react";
import { useRouter } from "next/router";
import readingTime from "../utils/getReadingTime";

type BlogCardProps = {
  title: string;
  author: string;
  image: string;
  index: number;
  content: string;
};

const BlogCard = ({ title, author, image, index, content }: BlogCardProps) => {
  const router = useRouter();
  return (
    <Box
      maxW={["96", "3xl"]}
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      borderColor={"gray"}
      onClick={() => {
        router.push(`/blog/${index}`);
      }}
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
            {author}
          </Text>
        </HStack>
        <Flex opacity={0.6}>
          <Text>cathalmacdonnacha.com</Text>
          <Text ml={4}>Dec 6, 2022</Text>
        </Flex>
      </Stack>
      <Flex mt={2} flexDirection={["column", "column", "column", "row"]}>
        <Stack pr={2} py={[1]}>
          <Text fontSize={"2xl"} fontWeight={700}>
            {title}
          </Text>
          <Flex alignItems={"center"}>
            <AiOutlineRead />{" "}
            <Text lineHeight={0.8} ml={2} fontWeight={"500"}>
              {readingTime(content)} min read
            </Text>
          </Flex>
          <Text textAlign={"justify"}>
            One of the less exciting things about being a Frontend Developer is
            having to handle error, empty and loading states. It may not be the
            most fun thing to do, but it's necessary in order to give your u…
          </Text>
        </Stack>
        <Box w={["auto", "3xl"]} height={"44"}>
          <Image src={image} borderRadius={10} height={"100%"} width={"100%"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogCard;
