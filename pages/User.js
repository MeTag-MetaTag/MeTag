import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import { useState } from "react";
import { ethers } from "ethers";


const User = () => {
  
  const providerOptions = {
    binancechainwallet: {
      package: true
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "fingers-crossed",
        infuraId: "92f495c06a4b48f0b0410e64561b8891"
      }
    },
    walletconnect: {
      package: WalletConnect,
      options: {
        infuraId: "92f495c06a4b48f0b0410e64561b8891"
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
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      console.log("provider", provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <button onClick={connectWallet}>Connect Wallet</button>
      <div>Connection Status: {!!account}</div>
      <div>Wallet Address: {account}</div>
    </div>
  );

}

export default User;

