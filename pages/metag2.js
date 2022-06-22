import axios from 'axios';
import { useRouter } from 'next/router'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Line from "../public/Vector 37.svg";

import bag from "../public/img/money-bag.png";
import rocket from "../public/img/rocket.png";

import wave from "../public/img/waving-hand.png";
import shop from "../public/img/shopping-bags.png";
import bell from "../public/img/bell.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  SearchIcon,
  LinkIcon,
  CheckIcon,
  SettingsIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import Gradient from "../components/Gradient";
import {
  Switch,
  FormControl,
  FormLabel,
  ChakraProvider,
  Icon,
  Select,
  StylesProvider,
} from "@chakra-ui/react";

import { FcPlus } from "react-icons/fc";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import { ethers } from 'ethers';
import { useAuth0 } from "@auth0/auth0-react";

function About(props) {

  const router = useRouter();
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [instagram, setInstagram] = useState("");
  const [account, setAccount] = useState("");
  const [metamaskAccount, setMetamaskAccount] = useState("");
  const [binanceAccount, setBinanceAccount] = useState("");
  const [portisAccount, setPortisAccount] = useState("");
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();


  const handleSave = async (event) => {
  //   const apiObj = {
  //       "username" : "John Smith",
  //       "email" : "fakemail@gmail.com",
  //       "metamask_id" : metamaskAccount,
  //       "coinbase_id" : coinbaseAccount,
  //       "binance_id" : binanceAccount,
  //       "twitter" : twitter,
  //       "instagram" : instagram,
  //       "discord" : discord
  //   }

  //  const response = await axios.post('https://api-meta-tag-2.herokuapp.com/api/member/create ', apiObj);

  // //  router.push(`/qrcode/${metamaskAccount}`);
  //  router.push(`qrcode/new`);
  //  console.log('response', response);
  }

  async function pullUpState(account, library, provider) {
    const wallet = library.connection.url;
    setLibrary(library);
    setProvider(provider);
    setAccount(account);
  }

  const setWalletsRegistration = async (event) => {
    let web3Modal;
    let providerOptions = {
      /* Metamask default */
    };

    if (event.target.name == 'metamask') {
      web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        disableInjectedProvider: false,
        providerOptions
      });
    }
    if (event.target.name == 'binance') {
      providerOptions = {
        binancechainwallet: {
          package: true
        }
      };
      web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        disableInjectedProvider: true,
        providerOptions
      });
    }
    if (event.target.name == 'portis') {
      providerOptions = {
        portis: {
          package: Portis, // required
          registerPageByDefault: false,
          options: {
            id: "7642c4c6-daed-4473-956f-121098aa4ace" // required
          }
        }
      };
      web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        disableInjectedProvider: true,
        providerOptions
      });
    }

    await web3Modal.clearCachedProvider();
    try {
      console.log('waiting for provider');
      const provider = await web3Modal.connect();

      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      if (accounts) setAccount(accounts[0]);
      if (event.target.name == 'metamask') {
        console.log('inside metamask*');
        setMetamaskAccount(accounts[0]);
       }
       if (event.target.name == 'binance') {
        console.log('inside binance*');
        setBinanceAccount(accounts[0]);
       }
       if (event.target.name == 'portis') {
        console.log('inside portis*');
        setPortisAccount(accounts[0]);
       }
      const network = await library.getNetwork();
      provider.on("accountsChanged", (accounts) => {
        console.log('account*', accounts[0]);
        if (accounts) setAccount(accounts[0]);
        if (event.target.name == 'metamask') {
          console.log('inside metamask**');
          setMetamaskAccount(accounts[0]);
         }
         if (event.target.name == 'binance') {
          console.log('inside binance**');
          setBinanceAccount(accounts[0]);
         }
         if (event.target.name == 'portis') {
          console.log('inside portis*');
          setPortisAccount(accounts[0]);
         }
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleTwitter = async (event) => {
    const { loginWithRedirect } = useAuth0();
  
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  }

  return (
    <div className=" bg-[#040D21]">
      <Gradient />
      <Navbar pullUpState={pullUpState} />
      <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="all-cap">
                Hey $USERNAME${" "}
                <Image src={wave} width={30} height={30} alt="imageicon" />
              </div>
            </div>
            <div className=" flex flex-row">
              <div className="all-cap">
                Welcome To MeTag{" "}
                <Image src={rocket} width={30} height={30} alt="imageicon" />
              </div>
            </div>

            <div className="px-4 mb-7 mt-12 h-px w-full">
              <Image src={Line} layout="responsive" alt="image" />
            </div>
            <form>
              <div className="flex flex-col justify-center items-center">
                <div className="all-cap flex flex-row justify-center items-center space-x-1">
                  Crypto Accounts&nbsp;
                  <span>
                    <Image src={bag} width={30} height={30} alt="imageicon" />
                  </span>
                  <FcPlus />
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    MetaMask
                  </label>
                  <div className="flex flex-row justify-center items-center ">
                    <input
                      type="text"
                      placeholder="0x78..."
                      className="input-form-2 mr-6"
                      value={metamaskAccount}
                    />
                      <button
                        type="button"
                        className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                        name="metamask"
                        onClick={setWalletsRegistration}
                      >
                        &nbsp;Add Account to Profile
                      </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    Binance
                  </label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      type="text"
                      placeholder="K3Yz..."
                      className="input-form-2 mr-6"
                      value={binanceAccount}
                    />
                    <button
                      type="button"
                      className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      name="binance"
                      onClick={setWalletsRegistration}
                    >
                      &nbsp;Add Account to Profile
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="mt-4 mb-11">
                  <label className="form-text" htmlFor="firstName">
                    Portis
                  </label>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder="0x4d..."
                      className="input-form-2 mr-6"
                      value={portisAccount}
                    />
                      <button
                        type="button"
                        className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                        name="portis"
                        onClick={setWalletsRegistration}
                      >
                        &nbsp;Add Account to Profile
                      </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    Twitter
                  </label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2 mr-6"
                      placeholder="enter your twitter username"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                    />
                    <button
                      type="button"
                      className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      onClick={handleTwitter}
                    >
                      &nbsp;Add Username to Profile
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    Discord
                  </label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2 mr-6"
                      placeholder="enter your discord username"
                      value={discord}
                      onChange={(e) => setDiscord(e.target.value)}
                    />
                    <button
                      type="button"
                      className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      &nbsp;Add Username to Profile
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="mt-4 mb-16">
                  <label className="form-text" htmlFor="firstName">
                    Instagram
                  </label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2 mr-6"
                      placeholder="enter your instagram username"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                    <button
                      type="button"
                      className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      &nbsp;Add Username to Profile
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="all-cap flex flex-row justify-center items-center space-x-1 mb-14">
                  Notifications&nbsp;
                  <span>
                    <Image src={bell} width={30} height={30} alt="imageicon" />
                  </span>
                  <Switch colorScheme="green" id="email-alerts" />
                </div>
                <div className="flex flex-row justify-center items-center">
                  <button
                    type="button"
                    className="w-[124px] h-[44px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
                    onClick={handleSave}
                  >
                    Save&nbsp; <CheckIcon />
                  </button>
                  <button
                    type="button"
                    className="w-[124px] h-[44px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
                  >
                    Edit&nbsp; <SettingsIcon />
                  </button>
                </div>
                <div className="px-4 mb-28 h-px w-full">
                  <Image src={Line} layout="responsive" alt="image" />
                </div>
                <div className="all-cap mb-11">
                  Get Your MeTag At
                  <Image src={shop} width={30} height={30} alt="imageicon" />
                </div>
                <Link href="/marketplace">
                  <button
                    type="button"
                    className="w-[124px] h-[44px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
                  >
                    Buy&nbsp; <SearchIcon />
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;