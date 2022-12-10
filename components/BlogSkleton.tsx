import {
  Box,
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function BlogSkleton() {
  return (
    <Box
          padding="6"
          my={1}
      w={["96", "3xl"]}
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.800")}
      >
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
}

export default BlogSkleton;
