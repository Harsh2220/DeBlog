import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { randomUUID } from "crypto";
import React, { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import ImageUpload from "../components/ImageUpload";
import uploadNewBlog from "../utils/uploadBlog";
import BlogPage from "./blog/[id]";
import storeFiles from "../utils/imageUpload";
import uploadMetadata from "../utils/uploadMetadata";
import { v4 as uuidv4, v4 } from "uuid";

type Props = {};

const Write: React.FC<Props> = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [preview, setPreview] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>(null);
  const [subTitle, setSubTitle] = useState<String | null>(null);
  const [authorName, setAuthorName] = useState<String | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast();
  const uploadBlog = async () => {
    console.log("uploading file");
    if (!title || !subTitle) {
      toast({
        title: "Please fill all the  details",
        status: "error",
      });
      return;
    }
    if (!markdown) {
      toast({
        title: "You need to write something in the blog..",
        status: "error",
      });
      return;
    }
    toast({
      title: "Uploading blog..",
      description: "We've created your account for you.",
      status: "loading",
      duration: 5000,
      isClosable: true,
    });
    const coverImage = await storeFiles(image);
    console.log(coverImage);
    const blogMetadata = {
      id: v4(),
      title: title,
      subTitle: subTitle,
      author: authorName,
      cover: coverImage,
      content: markdown,
      timestamp: Date.now(),
    };
    const metadataUri = await uploadMetadata(JSON.stringify(blogMetadata));

    console.log(metadataUri);

    const addToChain = await uploadNewBlog(title!, metadataUri, coverImage);
    if (addToChain) {
      toast({
        title: "Blog uploaded",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };
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
          <Button minW={"91px"} onClick={() => setPreview((prev) => !prev)}>
            {preview ? "Write" : "Preview"}
          </Button>
          <Button colorScheme={"blue"} onClick={uploadBlog}>
            Publish
          </Button>
          <IconButton
            onClick={toggleColorMode}
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={colorMode === "light" ? <BiMoon /> : <BsSun />}
          />
        </Flex>
      </HStack>
      {preview ? (
        <BlogPage
          title={title}
          subTitle={subTitle}
          banner={image}
          content={markdown}
          author={authorName}
        />
      ) : (
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
                  onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value);
                  }}
                />
              </Box>
              <Box w={"full"} marginBlock={4}>
                <Input
                  htmlSize={4}
                  width="full"
                  value={subTitle}
                  placeholder="SubTitle"
                  size={"lg"}
                  onChange={(e) => {
                    e.preventDefault();
                    setSubTitle(e.target.value);
                  }}
                />
              </Box>
              <Box w={"full"} marginBlock={4}>
                <Input
                  htmlSize={4}
                  width="full"
                  value={authorName}
                  placeholder="Author"
                  size={"lg"}
                  onChange={(e) => {
                    e.preventDefault();
                    setAuthorName(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <ImageUpload image={image} setImage={setImage} />
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
        </Container>
      )}
    </Box>
    // </Container>
  );
};

export default Write;
