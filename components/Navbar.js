import { useEffect, useState } from "react";
import Link from "next/link";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import { ethers } from 'ethers';

function Navbar(props) {
  const [hideNav, setHideNav] = useState(true);
  const [screenWidth, setScreenWidth] = useState();
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();
  const [web3Modal, setWeb3Modal] = useState();

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
  
function installMetamask() {
if (!(window.web3 || window.ethereum)) {
  if ($('#installMetaMask').length < 1)
    $('.web3modal-modal-card').prepend('<div id="installMetaMask" class="cjAFRf web3modal-provider-wrapper"><a href="https://metamask.io/" target="_blank" class="cjAFRf web3modal-provider-container"><div class="jMhaxE web3modal-provider-icon"><img src="./assets/img/metamask.svg" alt="MetaMask"></div><div class="bktcUM sc-web3modal-provider-name mt-0">Install MetaMask</div><div class="eFHlqH web3modal-provider-description">Connect using browser wallet</div></a></div>')
}
}

  const openNav = () => {
    setHideNav(!hideNav);
  };

  useEffect(() => {
    if (window) {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", (e) => {
        setScreenWidth(e.target.innerWidth);
      });
    }
    const navContainer = document.querySelector("header");
    const navHeight = navContainer.clientHeight;
    window.addEventListener("scroll", () => {
      window.pageYOffset > navHeight
        ? (navContainer.style.background = "rgba(0, 0, 0, .3)")
        : (navContainer.style.background = "transparent");
    });
  }, []);

  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      disableInjectedProvider: false,
      providerOptions,
    });
    installMetamask()
    await web3Modal.clearCachedProvider();
    // if (provider) {
    //   await provider.disconnect();
    // }
    try {
      console.log('waiting for provider');
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setWeb3Modal(web3Modal); 
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
      setChainId(network.chainId);
      props.pullUpState(accounts[0], library, provider);
      provider.on("accountsChanged", (accounts) => {
        console.log('accounts***', accounts);
        props.pullUpState(accounts[0], library, provider);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    await provider.disconnect();
  }



  return (
    <header className="flex flex-wrap justify-center items-center sticky top-0 bg-transparent backdrop-blur-lg z-[99] transition duration-200 py-0.5 px-16">
      <div className="flex mr-auto py-2 pl-6">
        <Link href="/">
          <a className="flex mr-auto hover:bg-[#dbd5d533] ease-in transition duration-700 px-2 py-1 border-0 rounded-xl">
            <div className="font-inter font-semibold text-[26px] text-white">
              MeTag
            </div>
          </a>
        </Link>
      </div>

      <div className="absolute space-x-8">
        {/* <div className=" left-auto flex items-center"> */}
        <Link href="/about">
          <a className="nav-link">About Us</a>
        </Link>
        <Link href="/marketplace">
          <a className="nav-link">Shop</a>
        </Link>
        <Link href="/contact">
          <a className="nav-link">Contact Us</a>
        </Link>
        <Link href="/team">
          <a className="nav-link">Team</a>
        </Link>
      </div>
      <div className="items-end flex flex-row space-x-3">
        <button className="tetiary-1 text-white" onClick={connectWallet}>Connect Wallet</button>
        <button className="tetiary-1 text-white" onClick={disconnectWallet}>Disconnect Wallet</button>
      </div>
    </header>
  );
}

export default Navbar;
