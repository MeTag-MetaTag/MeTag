import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, Container } from "semantic-ui-react";
import { Magic } from "magic-sdk";
import { Contract, providers, utils, ethers } from "ethers";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";

const User = () => {
  const providerOptionsObj = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID // required
      }
    },
      binancechainwallet: {
        package: true
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "MeTag", // Required
          infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID, // Required
          chainId: 1, // Optional. It defaults to 1 if not provided
          darkMode: true // Optional. Use dark theme, defaults to false
        }
      },
    };

    const [chainId, setChainId] = useState(1);
    const [address, setAddress] = useState("");
    const [provider, setProvider] = useState();

    // function reset() {
    //   console.log("reset");
    //   setAddress("");
    //   setProvider(undefined);
    //   web3Modal.clearCachedProvider();
    // }

    async function handleClick() {  
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        providerOptions: providerOptionsObj
    }); 
        await web3Modal.clearCachedProvider();
        const instance = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        // setAddress();
        // setChainId();
        // setProvider();
    }


  return (
    <div>
      <div>Welcome User</div>
      <Button onClick={handleClick}>Connect</Button>
    </div>
  );
};

export default User;
