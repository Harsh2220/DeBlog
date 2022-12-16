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
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineRead } from "react-icons/ai";
import useStore from "../../store/Store";
import readingTime from "../../utils/getReadingTime";
import ReactMarkdown from 'react-markdown'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";


const MDPreview = dynamic(
  () => import("@uiw/react-markdown-preview"),
  { ssr: false }
);

type blogPageProps = {
  title: string;
  author: string;
  banner: Blob;
  subTitle: string;
  content: string;
};

const BlogPage = ({ title, subTitle, banner, content }: blogPageProps) => {
  const state = useStore();
  const router = useRouter();
  const path = router.pathname;
  //@ts-ignore
  const blogs = state.blogs;
  const { id } = router.query;
  const currentBlog = blogs[id];
  const [first, setfirst] = useState('');
  
  // console.log(currentBlog);

  return (
    path == '/write'?(<HStack
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
              {title?title:'Add Title'}
            </Text>
            <Box w={["auto", "3xl"]} height={"sm"}>
              <Image
                src={banner?URL.createObjectURL(banner):'/blogImage.webp'}
                borderRadius={10}
                p={"2"}
                height={"100%"}
                width={"100%"}
              />
            </Box>
            {/* <MDEditor value={content} onChange={setfirst} preview="preview"/> */}
            <Box w={["auto", "3xl"]}>
              <MDPreview source={content} fullscreen={true} style={{ backgroundColor: '#ffffff', color: '#000000', padding:'10px' }}/>
            </Box>
            {/* <Text textAlign={"justify"}>{content?content:'Add Blog Content'}</Text> */}
          </VStack>
        </Box>
      </HStack>
    </HStack>):<HStack
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
              {currentBlog.authorName}
            </Text>
          </HStack>
          <Flex opacity={0.6}>
            <Text>cathalmacdonnacha.com</Text>
            <Text ml={4}>Dec 6, 2022</Text>
          </Flex>
        </Stack>
        <Flex mt={2} flexDirection={["column", "column", "column", "row"]}>
          <Stack pr={2} py={[1]}>
            <Flex alignItems={"center"}>
              <AiOutlineRead />{" "}
              <Text lineHeight={0.8} ml={4} fontWeight={"500"}>
                {readingTime(currentBlog.blogContent)} min read
              </Text>
            </Flex>
          </Stack>
        </Flex>
        <VStack>
          <Text fontSize={"4xl"} fontWeight={700}>
            {currentBlog.blogTitle}
          </Text>
          <Box w={["auto", "3xl"]} height={"sm"}>
            <Image
              src={currentBlog.coverImage}
              borderRadius={10}
              p={"2"}
              height={"100%"}
              width={"100%"}
            />
          </Box>
          <Box w={["auto", "3xl"]}>
              <MDPreview source={currentBlog.blogContent} fullscreen={true} style={{ backgroundColor: "transparent", color: useColorModeValue("black", "white"), padding:'10px' }}/>
            </Box>
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
          {currentBlog.authorName}
        </Text>
      </HStack>
      <Button bg={"blue.300"}>Send Tip <AiOutlineHeart/>  </Button>
    </Box>
  </HStack>
  );
};
export default BlogPage;