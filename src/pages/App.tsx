import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { FiKey, FiTerminal } from 'react-icons/fi';
import FadeIn from './components/FadeIn';
import Navbar from './components/Navbar';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import MentionedIn from './components/MentionedIn';
import GitHubStars from './components/GitHubStars';
import Features from './components/Features';
import { DatabaseStats, GitHubStats, Word } from '../types';

const App = ({
  searchWord,
  words,
  databaseStats,
  gitHubStats = { contributors: [], stars: 0 },
}: {
  searchWord: string,
  words: Word[],
  databaseStats: DatabaseStats,
  gitHubStats: GitHubStats,
}) => {
  const router = useRouter();
  return (
    <Box className="overflow-x-hidden flex flex-col items-center" id="homepage-container">
      <Navbar />
      <Box className="flex flex-col items-center space-y-44">
        <Box
          className="relative flex flex-col justify-center items-center 
          w-full xl:w-6/12 mt-32 md:mt-64 lg:my-32 space-y-4"
          zIndex={-1}
        >
          <FadeIn>
            <Heading
              as="h1"
              className="text-center lg:mt-24 z-1"
              width="full"
              fontSize={['5xl', '6xl']}
            >
              The First African Language API
            </Heading>
          </FadeIn>
          <Box className="text-xl md:text-xl w-full mb-4 mt-8 leading-10">
            <FadeIn>
              <Box className="w-full flex flex-col items-center">
                <Text className="text-center text-gray-500 w-10/12">
                  Access thousands of Igbo words, audio pronunciations, and example sentences to
                  power the future of Igbo technology.
                </Text>
              </Box>
              <br />
              <Box className="w-full flex flex-row justify-center items-center space-x-4">
                <Button
                  className="transition-all duration-200"
                  backgroundColor="blue.500"
                  _hover={{
                    backgroundColor: 'blue.400',
                  }}
                  color="white"
                  transitionDuration="200ms"
                  size="lg"
                  px="6"
                  onClick={() => {
                    router.push('/#try-it-out');
                    window.scrollBy({ top: -100, behavior: 'smooth' });
                  }}
                  leftIcon={<FiTerminal />}
                >
                  Try it Out
                </Button>
                <GitHubStars stars={gitHubStats.stars} />
              </Box>
            </FadeIn>
          </Box>
        </Box>
        <MentionedIn />
        <Features />
        <Demo searchWord={searchWord} words={words} />
        <Statistics {...databaseStats} {...gitHubStats} />
        <Box className="flex flex-col justify-center items-center" pb="44">
          <Heading
            as="h2"
            className="text-2xl text-center items-center p-5"
            fontSize={{ base: '5xl', lg: '6xl' }}
          >
            Start Building Today
          </Heading>
          <Button
            type="button"
            className="mt-4 rounded-full bg-blue-500 text-white border-2 py-2 px-4 transition-all duration-200"
            backgroundColor="blue.500"
            borderWidth="0"
            borderRadius="full"
            _hover={{
              backgroundColor: 'blue.400',
              color: 'white',
            }}
            color="white"
            onClick={() => router.push('/signup')}
            rightIcon={<FiKey />}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
