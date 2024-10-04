import { Box, Text, Button } from '@chakra-ui/react';
function Home() {
    return (
        <Box bg="brand.50" p={5}>
            <Text fontSize="xl" color="brand.800">Добро пожаловать в мое первое React-приложение!</Text>
            <Button mt={4} colorScheme="brand">Нажми меня</Button>
        </Box>
    );
}
export default Home;