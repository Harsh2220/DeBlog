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
  console.log(image)
  return (
    <Box borderRadius={'lg'} bgGradient={'linear(to-r, green.300, blue.500, purple.600)'} p={0.5} marginBlock={4}>
      <Box
      
    >
      <Box
        maxW={["full", "3xl"]}
        borderRadius={'lg'}
        w={["full", "3xl"]}
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        borderColor={"gray"}
        onClick={() => {
          router.push(`/blog/${index}`);
        }}
      >
        <Stack>
          <HStack border={"1px solid linear(to-r, green.200, pink.500)"}>
            <Box w={"40px"}>
              <Avatar
                size={"full"}
                name={author}
                src="https://i.pravatar.cc/300"
                mr={2}
              />
            </Box>
            <Stack lineHeight={0.8}>
              <Text fontSize={"lg"} fontWeight={700} lineHeight={"0.8"}>
                {author}
              </Text>
              <Text ml={4}>Posted on Dec 6, 2022</Text>
            </Stack>
          </HStack>
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
            <Text opacity={0.8} textAlign="justify" noOfLines="3" maxW={"2xl"}>
              {content}
            </Text>
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push(`/blog/${index}`);
              }}
            >
              Read more
            </Text>
          </Stack>
          <Box height={"36"} maxW={["xs"]} minW={[64]} mt={[4, 0]}>
            <Image
              src={image}
              borderRadius={15}
              height={"100%"}
              width={"100%"}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
    </Box>
  );
};

export default BlogCard;
