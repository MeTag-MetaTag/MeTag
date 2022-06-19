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
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import { ethers } from 'ethers';

function About(props) {

  const router = useRouter();
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [instagram, setInstagram] = useState("");
  const [library, setLibrary] = useState("");
  const [provider, setProvider] = useState("");
  const [account, setAccount] = useState("");
  const [account1, setAccount1] = useState("");
  const [account2, setAccount2] = useState("");
  const [account3, setAccount3] = useState("");
  const [accountsArray, addToAccountsArray] = useState([]);

  const handleSave = async (event) => {
    const apiObj = {
        "username" : "John Smith",
        "email" : "fakemail@gmail.com",
        "metamask_id" : metamaskAccount,
        "coinbase_id" : coinbaseAccount,
        "binance_id" : binanceAccount,
        "twitter" : twitter,
        "instagram" : instagram,
        "discord" : discord
    }

   const response = await axios.post('https://api-meta-tag-2.herokuapp.com/api/member/create ', apiObj);

  //  router.push(`/qrcode/${metamaskAccount}`);
   router.push(`qrcode/new`);
   console.log('response', response);
  }

  async function pullUpState(account, library, provider) {
    console.log('library*', library);
    console.log('provider*', provider);
    console.log('account', account);
    const wallet = library.connection.url;
    setLibrary(library);
    setProvider(provider);
    setAccount(account);
  }

  function setProfileWalletAccounts(event) {
    if (account1 == account || account2 == account || account3 == account) {
      alert('account has already been added. Please choose another account...')
    }
    else {
      if (event.target.name == 'account1') {
        setAccount1(account);
      }
      if (event.target.name == 'account2') {
        setAccount2(account);
      }
      if (event.target.name == 'account3') {
        setAccount3(account);
      }
   }
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
                      value={account1}
                    />
                      <button
                        type="button"
                        className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                        name="account1"
                        onClick={setProfileWalletAccounts}
                      >
                        &nbsp;Add Account to Profile
                      </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    CoinBase
                  </label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      type="text"
                      placeholder="K3Yz..."
                      className="input-form-2 mr-6"
                      value={account2}
                    />
                    <button
                      type="button"
                      className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      name="account2"
                      onClick={setProfileWalletAccounts}
                    >
                      &nbsp;Add Account to Profile
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="mt-4 mb-11">
                  <label className="form-text" htmlFor="firstName">
                    Binance
                  </label>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder="0x4d..."
                      className="input-form-2 mr-6"
                      value={account3}
                    />
                      <button
                        type="button"
                        className="w-[224px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                        name="account3"
                        onClick={setProfileWalletAccounts}
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