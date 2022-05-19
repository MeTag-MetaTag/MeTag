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
  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();

  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      providerOptions
    });
    // web3Modal.clearCachedProvider();
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
      setChainId(network.chainId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const handleInput = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }]
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]]
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  return (
    <div className="App">
      <button onClick={connectWallet}>Connect Wallet</button>
      <button onClick={switchNetwork} isDisabled={!network}>Switch Network</button>
      {/* <div>Connection Status: {!!account}</div>
      <div>Wallet Address: {account}</div> */}
    </div>
  );

}

export default User;

