import {
  Container,
  Input,
  Stack,
  Box,
  Flex,
  Divider,
  Textarea,
  HStack,
  Text,
  IconButton,
  Button,
  useColorMode
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ImageUpload from "../components/ImageUpload";
import remarkGfm from "remark-gfm";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";
import BlogPage from "./blog/[id]";
import storeFiles from "../utils/imageUpload";
import uploadNewBlog from "../utils/uploadBlog";
import { title } from "process";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";



type Props = {};

const write = (props: Props) => {
  const [markdown, setMarkdown] = useState<string>("");
  const [preview, setPreview] = useState<boolean>(false);
  const [title, setTitle] = useState<String | null>(null);
  const [subTitle, setSubTitle] = useState<String | null>(null);
  const [authorName, setAuthorName] = useState<String | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const { colorMode, toggleColorMode } = useColorMode();
  // const [uri, setUri] = useState<String | null>(null);

  // const uploadFilecoin = async () => {
  //   const cid = await storeFiles(image);
  //   setUri(cid);
  //   console.log(uri);
  // }

  const uploadBlog = async () => {
    console.log('uploading file');
    const upload = await uploadNewBlog(title, subTitle, authorName, markdown, image);
    console.log(upload);
    console.log('blog uploaded');
  }
  // const [content, setContent] = useState<String | null>(null);
  return (
    // <Container w={'100%'}>
    <Box>
    <HStack
      w={"full"}
      justifyContent={"space-between"}
      paddingInline={16}
      paddingBlock={8}
    >
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        DeBlog
      </Text>
      <Flex w={72} justifyContent={"space-between"}>
        <Button minW={'91px'} onClick={() => setPreview((prev) => !prev)}>{preview?'Write':'Preview'}</Button>
        <Button colorScheme={"blue"} onClick={uploadBlog}>Publish</Button>
        <IconButton
            onClick={toggleColorMode}
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={colorMode === "light" ? <BiMoon /> : <BsSun />}
          />
      </Flex>
    </HStack>
    {preview?(<BlogPage title={title} subTitle={subTitle} banner={image} content={markdown} author={authorName}/> ): 
    <Container maxW={"container.md"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBlock={8}
      >
        <Box w={"sm"}>
          <Box w={"full"} marginBlock={4}>
            <Input
              htmlSize={4}
              width="full"
              placeholder="Title"
              value={title}
              size={"lg"}
              onChange={(e)=>{
                e.preventDefault();
                setTitle(e.target.value)
              }
              }
            />
          </Box>
          <Box w={"full"} marginBlock={4}>
            <Input
              htmlSize={4}
              width="full"
              value={subTitle}
              placeholder="SubTitle"
              size={"lg"}
              onChange={(e)=>{
                e.preventDefault();
                setSubTitle(e.target.value)
              }
              }
            />
          </Box>
          <Box w={"full"} marginBlock={4}>
          <Input
              htmlSize={4}
              width="full"
              value={authorName}
              placeholder="Author"
              size={"lg"} 
              onChange={(e)=>{
                e.preventDefault();
                setAuthorName(e.target.value)
              }
              }
            />
          </Box>
        </Box>
        <ImageUpload image={image} setImage={setImage}/>
      </Flex>
      <Divider height={"full"} borderBottomWidth={"3px"} />
      <Box mt={8}>
          <Textarea
            rows={5}
            border={"none"}
            _focusVisible={{ borderColor: "transparent" }}
            resize={"none"}
            // height={400}
            minH={"100vh"}
            // maxHeight={100}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
            placeholder="Write something"
            fontSize={"1.3rem"}
            value={markdown}
          />
      </Box>
    </Container>}
  </Box>
    // </Container>
  );
};

export default write;
