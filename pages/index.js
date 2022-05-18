import React from "react";
import Home from "./Home";
// import { ChakraProvider } from '@chakra-ui/react';
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider);
};

const App = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500&family=Indie+Flower&family=Inter:wght@300;400&family=Poppins:ital,wght@0,300;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Home />
      </Web3ReactProvider>
    </>
  );
};

export default App;
