import {
  Container,
  Input,
  Stack,
  Box,
  Flex,
  Divider,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ImageUpload from "../components/ImageUpload";

type Props = {};

const write = (props: Props) => {
  const [markdown, setMarkdown] = useState<string>("");
  return (
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
      <ReactMarkdown children={markdown} />
    </Container>
  );
};

export default write;
