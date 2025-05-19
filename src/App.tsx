import { ChakraProvider, Box, VStack, Container } from '@chakra-ui/react';
import { Header } from './components/Header';
import { NavigationButtons } from './components/NavigationButtons';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, brand.primary, black)"
        overflow="hidden"
      >
        {/* Multiple star layers */}
        {[1, 2, 3].map((layer) => (
          <Box
            key={layer}
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            sx={{
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(1px 1px at 50% 50%, #fff, rgba(0, 0, 0, 0))',
                backgroundSize: `${300 - layer * 50}px ${300 - layer * 50}px`,
                animation: `falling${layer} ${25 - layer * 5}s linear infinite`,
                opacity: 0.5,
              },
              '@keyframes falling1': {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(1000px)' }
              },
              '@keyframes falling2': {
                '0%': { transform: 'translateY(-200px)' },
                '100%': { transform: 'translateY(1000px)' }
              },
              '@keyframes falling3': {
                '0%': { transform: 'translateY(-400px)' },
                '100%': { transform: 'translateY(1000px)' }
              }
            }}
          />
        ))}

        {/* Gradient overlays for depth */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="radial(circle at 50% 50%, transparent 0%, rgba(21,30,44,0.8) 100%)"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-t, rgba(21,30,44,0.7) 0%, transparent 50%, rgba(21,30,44,0.7) 100%)"
        />

        {/* Content */}
        <Container
          maxW="container.md"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          zIndex="1"
        >
          <VStack
            spacing={8}
            align="center"
            w="100%"
            px={4}
          >
            <Header />
            <NavigationButtons />
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
