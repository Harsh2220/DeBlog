import {
  Box,
  Stack,
  Flex,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineRead } from "react-icons/ai";
import React from "react";

type BlogCardProps = {
  title: string;
  author: string;
  image: string;
};

const BlogCard = ({ title, author, image }: BlogCardProps) => {
  return (
    <Box
      w={"4xl"}
      bg={useColorModeValue("gray.100", "gray.800")}
      p={4}
      borderColor={"gray"}
    >
      <Stack>
        <Text fontSize={"lg"} fontWeight={700} lineHeight={"0.8"}>
          {author}
        </Text>
        <Flex opacity={0.6}>
          <Text>cathalmacdonnacha.com</Text>
          <Text ml={4}>Dec 6, 2022</Text>
        </Flex>
      </Stack>
      <Flex mt={2}>
        <Stack pr={2}>
          <Text fontSize={"2xl"} fontWeight={700}>
            {title}
          </Text>
          <Flex alignItems={"center"}>
            <AiOutlineRead />{" "}
            <Text lineHeight={0.8} ml={2} fontWeight={"500"}>
              7 min read
            </Text>
          </Flex>
          <Text>
            One of the less exciting things about being a Frontend Developer is
            having to handle error, empty and loading states. It may not be the
            most fun thing to do, but it's necessary in order to give your u…
          </Text>
        </Stack>
        <Box w={"3xl"} height={40}>
          <Image src={image} borderRadius={10} height={"100%"} width={"100%"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogCard;
