import { ChakraProvider, extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
    fonts: {
        heading: 'Tangerine, sans-serif',
        body: 'Tangerine, sans-serif',
    },
    colors: {
        brand: {
            50: '#f5f7ff',
            100: '#e6ecff',
            200: '#ccd3ff',
            300: '#b2baff',
            400: '#99a2ff',
            500: '#7f89ff',
            600: '#5f66cc',
            700: '#4a5199',
            800: '#343b66',
            900: '#1f2633',
        },
    },
});
function App() {
    return (
        <ChakraProvider theme={theme}>
            {/* Your app components */}
        </ChakraProvider>
    );
}