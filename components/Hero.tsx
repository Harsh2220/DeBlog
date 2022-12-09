import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
} from '@chakra-ui/react';
import WalletModal from './WalletModal';

export default function CallToActionWithIllustration() {
    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Meeting scheduling{' '}
                    <Text as={'span'} color={'orange.400'}>
                        made easy
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Never miss a meeting. Never be late for one too. Keep track of your
                    meetings and receive smart reminders in appropriate times. Read your
                    smart “Daily Agenda” every morning.
                </Text>
                <WalletModal />
            </Stack>
        </Container>
    );
}