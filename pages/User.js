import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import { useState } from "react";
import { ethers } from "ethers";
import { Button } from '@chakra-ui/react';

const User = () => {
  
  const providerOptions = {
    binancechainwallet: {
      package: true
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "fingers-crossed",
        infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID
      }
    },
    walletconnect: {
      package: WalletConnect,
      options: {
        infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID
      }
    }
  };

  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();

  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      providerOptions
    });
    web3Modal.clearCachedProvider();
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      // const accounts = await library.listAccounts();
      // const network = await library.getNetwork();
      console.log('library', library.provider);
      setProvider(provider);
      setLibrary(library);
      // if (accounts) setAccount(accounts[0]);
      setNetwork(network);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Button onClick={connectWallet}>Connect Wallet</Button>
      {/* <div>Connection Status: {!!account}</div>
      <div>Wallet Address: {account}</div> */}
    </div>
  );

}

export default User;

