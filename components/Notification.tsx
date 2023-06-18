import { Box, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Notification = (props: Props) => {
  return (
    <Box
      borderRadius={"lg"}
      bgColor={"linear(to-r, green.300, blue.500, purple.600)"}
      p={0.5}
      marginBlock={4}
    >
      <Box>
        <Box
          maxW={["full", "3xl"]}
          borderRadius={"lg"}
          w={["full", "3xl"]}
          bg={useColorModeValue("white", "gray.800")}
          p={4}
          borderColor={"gray"}
        >
          <Stack>
              <HStack flex={1} flexDirection={"row"}>
                <Text
                  fontSize={"lg"}
                  fontWeight={700}
                  color={["black", "white"]}
                >
                  Sahillll
                </Text>
                <Text
                  fontSize={"lg"}
                  fontWeight={500}
                  color={["black", "white"]}
                >
                  uploaded a new blog onnnnnn
                </Text>
                <Text
                  fontSize={"lg"}
                  fontWeight={700}
                  color={["black", "white"]}
                >
                  creator economy.
                </Text>
              </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Notification;
