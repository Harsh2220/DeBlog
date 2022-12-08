import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Text,
} from '@chakra-ui/react';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box bg={useColorModeValue('white', 'gray.800')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>Logo</Box>
                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'}
                                />
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                                <Center>
                                    <Avatar
                                        size={'2xl'}
                                        src={'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'}
                                    />
                                </Center>
                                <Center my={3}>
                                    <Text fontSize={'xl'} fontWeight='semibold'>Harsh</Text>
                                </Center>
                                <MenuDivider />
                                <MenuItem>Account</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <BiMoon /> : <BsSun />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}