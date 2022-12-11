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
  const [preview, setPreview] = useState<boolean>(false);
  return (
    // <Container w={'100%'}>
    <Box>
      <HStack w={'full'} justifyContent={'space-between'} paddingInline={16} paddingBlock={8}>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            DeBlog
          </Text>
          <Flex w={52} justifyContent={'space-between'}>
          <Button onClick={()=>setPreview(prev=>!prev)}>
            Preview
          </Button>
          <Button colorScheme={'blue'}>
            Publish
          </Button>
          </Flex>
        </HStack>
      <Container maxW={"container.md"}>
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
        {
          preview?(<ReactMarkdown remarkPlugins={[remarkGfm]} >{markdown}</ReactMarkdown>):(<Textarea
          rows={5}
          border={"none"}
          _focusVisible={{ borderColor: "transparent" }}
          resize={"none"}
          // height={400}
          minH={'100vh'}
          maxLength={200}
          // maxHeight={100}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
          placeholder="Write something"
          fontSize={"1.3rem"}
          value={markdown}
        />)
        }
      </Box>
    </Container>
    </Box>
    // </Container>
  );
};

export default write;
