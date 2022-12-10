import { Box, Stack, Flex, Text, Image } from '@chakra-ui/react'
import {AiOutlineRead} from 'react-icons/ai'
import React from 'react'

type Props = {}

const BlogCard = ({title, author, image}) => {
  return (
    <Box w={'3xl'} bg={'white'} p={4} border={'0.1px solid'} borderColor={'gray'}>
        <Stack>
            <Text fontSize={'lg'} fontWeight={700} lineHeight={'0.8'}>{author}</Text>
            <Flex opacity={0.6}>
                <Text>cathalmacdonnacha.com</Text>
                <Text ml={4}>Dec 6, 2022</Text>
            </Flex>
        </Stack>
        <Flex mt={2} >
            <Stack pr={2}>
                <Text fontSize={'2xl'} fontWeight={700}>{title}</Text>
                <Flex alignItems={'center'}><AiOutlineRead /> <Text lineHeight={0.8} ml={2} fontWeight={'500'}>7 min read</Text></Flex>
                <Text>One of the less exciting things about being a Frontend Developer is having to handle error, empty and loading states. It may not be the most fun thing to do, but it's necessary in order to give your u…</Text>
            </Stack>
            <Box w={'3xl'} height={40} >
                <Image src={image} borderRadius={10} height={'100%'} width={'100%'} />
            </Box>
        </Flex>
    </Box>
  )
}

export default BlogCard