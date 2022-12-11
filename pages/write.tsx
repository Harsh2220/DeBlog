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
  Button
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ImageUpload from "../components/ImageUpload";
import remarkGfm from 'remark-gfm'
import Navbar from "../components/Navbar";

type Props = {};

const write = (props: Props) => {
  const [markdown, setMarkdown] = useState<string>("");
  return (
    // <Container w={'100%'}>
      <Container maxW={"container.md"}>
        <HStack w={'full'} justifyContent={'space-between'} p={8}>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            DeBlog
          </Text>
          <Button>
            Publish
          </Button>
        </HStack>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBlock={8}
      >
        <Stack w={"sm"}>
          <Box w={"full"} marginBlock={4}>
            <Input htmlSize={4} width="full" placeholder="Title" size={"lg"} />
          </Box>
          <Box w={"full"} marginBlock={4}>
            <Input
              htmlSize={4}
              width="full"
              placeholder="SubTitle"
              size={"lg"}
            />
          </Box>
        </Stack>
        <ImageUpload />
      </Flex>
      <Divider height={"full"} borderBottomWidth={"3px"} />
      <Box mt={8}>
        <Textarea
          rows={5}
          border={"none"}
          _focusVisible={{ borderColor: "transparent" }}
          resize={"none"}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
          placeholder="Write something"
          fontSize={"1.3rem"}
        />
      </Box>
      <ReactMarkdown remarkPlugins={[remarkGfm]} >{markdown}</ReactMarkdown>
    </Container>
    // </Container>
  );
};

export default write;
