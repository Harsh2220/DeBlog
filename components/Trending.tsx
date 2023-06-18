import {
  Container,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Divider,
  Stack,
  Avatar,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <Container bgGradient={'linear(to-l, green.300, blue.500, purple.600)'} p={0.5} h={'fit-content'} mt={8} borderRadius={'lg'} w={'sm'} mr={4}>
      <Container display={["none", "block"]} bg={useColorModeValue("white", "gray.800")} borderRadius={'lg'}>
      
      <Box paddingBlock={4}>
        <Heading size={"md"}>Trending Profiles</Heading>
        <Divider mt={2} borderBottomWidth={"2px"} bgGradient="linear(to-l, #7928CA, #FF0080)"/>
        <Box mt={4}>
          <Flex justifyContent={"flex-start"} alignItems={"center"}>
            <Avatar
              size={"md"}
              name={"Umang Patel"}
              src="https://i.pravatar.cc/300"
              mr={2}
            />
            <Stack justifyContent={"center"} lineHeight={0.8}>
              <Text fontSize={"lg"} fontWeight={700}>
                Umang Patel
              </Text>
              <Text>Exploring and building</Text>
            </Stack>
          </Flex>
        </Box>
        <Box mt={8}>
          <Flex justifyContent={"flex-start"} alignItems={"center"}>
            <Avatar
              size={"md"}
              name={"Umang Patel"}
              src="https://i.pravatar.cc/300"
              mr={2}
            />
            <Stack justifyContent={"center"} lineHeight={0.8}>
              <Text fontSize={"lg"} fontWeight={700}>
                Harsh Sachaniya
              </Text>
              <Text>Full Stack Web3.0 dev</Text>
            </Stack>
          </Flex>
        </Box>
        <Box mt={8}>
          <Flex justifyContent={"flex-start"} alignItems={"center"}>
            <Avatar
              size={"md"}
              name={"Umang Patel"}
              src="https://i.pravatar.cc/300"
              mr={2}
            />
            <Stack justifyContent={"center"} lineHeight={0.9}>
              <Text fontSize={"lg"} fontWeight={700}>
                Vivek Suthar
              </Text>
              <Text>Building DeBlog</Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
  </Container>
    </Container>
  );
};

export default Trending;
