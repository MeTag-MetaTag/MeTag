import React from 'react';
import Home from './Home';
// import { ChakraProvider } from '@chakra-ui/react';
import { Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { ethers } from "ethers";
import { Web3ReactProvider } from '@web3-react/core';

const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
}

const App = () => {

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Home />
        </Web3ReactProvider>
    );
}

export default App;