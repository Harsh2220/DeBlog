import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router';

export default function WalletModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    const connectWallet = async () => {
        try {
            console.log('connect')
            const { ethereum }: any = window;
            if (!ethereum) {
                alert("Please Install Metamask");
            }
            else {
                const getAccount = await ethereum.request({
                    method: 'eth_requestAccounts'
                });
                console.log(getAccount[0]);
                router.push('dashboard');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Button onClick={onOpen} w='full'>Connect Wallet</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Connect your wallet</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box marginBlock={4} textAlign={'center'} justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('gray.100', 'gray.800')} borderRadius={20} paddingBlock={2} paddingInline={4} h={'fit-content'} cursor='pointer' onClick={connectWallet}>
                            <Box w={16} h={16} borderRadius={20} marginInline={'auto'}>
                                <Image src='./metamask.png' alt='' />
                            </Box>
                            <Box marginInline={2} paddingBlock={2} borderRadius={20}>
                                <Text fontSize={'3xl'} fontWeight={'medium'} fontFamily='Inter'>Metamask</Text>
                            </Box>
                        </Box>
                        <Box marginBlock={4} textAlign={'center'} bg={useColorModeValue('gray.100', 'gray.800')} borderRadius={20} paddingBlock={2} paddingInline={4} h={'fit-content'} cursor='pointer'>
                            <Box w={16} h={16} alignItems={'center'} my={'auto'} borderRadius={20} marginInline={'auto'}>
                                <Box marginTop={3}>
                                    <Image src='./walletconnect.png' alt='' />
                                </Box>
                            </Box>
                            <Text fontSize={'3xl'} fontWeight={'medium'} marginInline={2} paddingBlock={1}>Wallet Connect</Text>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}