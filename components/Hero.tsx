import '@fontsource/inter/900.css'
import '@fontsource/inter/500.css'

import { Box, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    } from '@chakra-ui/react'
// import logo from "../../public/DeBlog-logos_black.png";

const Hero = ({ connectWallet }) => {

    return (
        <Container minW={'full'} minH={'100%'}>
            {/* <Box> */}
            <Flex id="nav" justifyContent={'space-between'} position={'sticky'} top={0} p={5} >
                <Box>
                    <Box position={'absolute'} top={[-12, -20]} left={0} w={[1 / 2, 1 / 6]}  >
                        <img src={'./Logo.png'} alt="logo" />
                    </Box>
                </Box>
                <Flex justifyContent={'end'} textAlign={'right'} marginTop={[1, 0]} fontSize={['lg', '2xl']} >
                    <Text marginInline={12} marginBlock={2} fontWeight={'semibold'} cursor={'pointer'} >Home</Text>
                    <Text marginInline={12} marginBlock={2} fontWeight={'semibold'} cursor={'pointer'} >About Us</Text>
                </Flex>
            </Flex>
            <Flex mt={36} flexDir={'column'} alignItems={'center'} justifyContent={'center'} overflow={'hidden'} rounded={'lg'} className="mt-36 bg-gradient-to-b flex flex-col items-center justify-center overflow-hidden rounded-lg">
                <Heading fontSize={['5xl', '8xl']} w={['full', 2 / 3]} textAlign={'center'} fontWeight={'extrabold'}>Your blogs go <Text bgGradient='linear(to-l, green.400, blue.500, purple.600)' bgClip='text'>Decentralised</Text></Heading>
                <Text fontSize={'2xl'} fontWeight='normal' textAlign={'center'} w={['full', '60%']} my={[10, 4]}>DeBlog helps you create blogs and store them on a decentralised blockchain within a span of seconds.</Text>
                <Popover>
                    <PopoverTrigger>
                        <Button mt={10} bgGradient='linear(to-l, blue.600, purple.600)' _hover={{ transform: 'scale(0.94)' }} rounded={'2xl'} fontSize={'2xl'} px={6} py={8} textColor={'white'}>Connect Wallet </Button>
                    </PopoverTrigger>
                    <PopoverContent p={4} w={'lg'}>
                        <PopoverArrow />
                        <PopoverHeader><Heading fontSize={'3xl'}>Select a wallet</Heading></PopoverHeader>
                        <PopoverBody>
                            <Box>
                                <Box marginBlock={4} textAlign={'center'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#f1f4f4'} borderRadius={20} paddingBlock={2} paddingInline={4} h={'fit-content'} onClick={connectWallet}>
                                    <Box w={16} h={16} border={'1px'} borderColor={'gray.300'} borderRadius={20} bgColor={'#fee7d2'} marginInline={'auto'}>
                                        <img src='./metamask.png'/>
                                    </Box>
                                    <Box marginInline={2} paddingBlock={2} borderRadius={20}>
                                        <Text fontSize={'3xl'} fontWeight={'medium'} fontFamily='Inter'>Metamask</Text>
                                    </Box>
                                </Box>
                                <Box marginBlock={4} textAlign={'center'} backgroundColor={'#f1f4f4'} borderRadius={20} paddingBlock={2} paddingInline={4} h={'fit-content'} >
                                    <Box w={16} h={16} alignItems={'center'} my={'auto'} border={'1px'} borderColor={'gray.300'} borderRadius={20} marginInline={'auto'}>
                                        <Box marginTop={3}>
                                         <img src='./walletconnect.png'/>
                                        </Box>
                                    </Box>
                                    <Text fontSize={'3xl'} fontWeight={'medium'} marginInline={2} paddingBlock={1}>Wallet Connect</Text>
                                </Box>
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                </Flex>
        </Container>
    )
}
export default Hero;