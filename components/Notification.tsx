import { Avatar, Box, Flex, HStack, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { AiOutlineRead } from 'react-icons/ai';
import readingTime from '../utils/getReadingTime';
import optInUser from '../utils/optInUser';

type Props = {
  title:any,
  author:any,
}

const Notification = ({title,author, ...rest}: Props) => {
  console.log('fvf',author);
  useEffect(()=>{
    optInUser();
  },[]);
  
  return (
<Box
      borderRadius={"lg"}
      bgGradient={"linear(to-r, green.300, blue.500, purple.600)"}
      p={0.5}
      marginBlock={4}
    >
      <Box>
        <Text fontSize={"xs"} fontWeight={700}>

        </Text>
      </Box>
    </Box>
  )
}

export default Notification