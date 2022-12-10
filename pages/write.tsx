import { Container,Input, Stack, Box , Flex, Divider, Textarea} from '@chakra-ui/react'
import React from 'react'
import ImageUpload from '../components/ImageUpload'

type Props = {}

const write = (props: Props) => {
  return (
    <Container maxW={'container.md'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} paddingBlock={8}>
        <Stack w={'sm'}>
            <Box w={'full'} marginBlock={4}>
                <Input htmlSize={4} width='full' placeholder='Title' size={'lg'}/>
            </Box>
            <Box w={'full'} marginBlock={4}>
                <Input htmlSize={4} width='full' placeholder='SubTitle' size={'lg'}/>
            </Box>
        </Stack>
        <ImageUpload />
        </Flex>
       <Divider height={'full'} borderBottomWidth={'3px'}/>
       <Box mt={8}>
        <Textarea border={'none'} _focusVisible={{borderColor: 'transparent'}} resize={'none'} placeholder='Write something' fontSize={'1.3rem'}/>
       </Box>
    </Container>
  )
}

export default write