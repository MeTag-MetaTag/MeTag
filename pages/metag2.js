import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Line from "../public/Vector 37.svg";
import design from "../public/icons/Vector.svg";
import alarm from "../public/img/alarm-clock.png";
import bag from "../public/img/money-bag.png";
import rocket from "../public/img/rocket.png";
import victory from "../public/img/victory-hand.png";
import chain from "../public/img/link.png";
import wave from "../public/img/waving-hand.png";
import shop from "../public/img/shopping-bags.png";
import bell from "../public/img/bell.png";
import { useState, useEffect } from "react";
import { SearchIcon, LinkIcon, WarningIcon } from "@chakra-ui/icons";
import Gradient from "../components/Gradient";
import {
  Switch,
  FormControl,
  FormLabel,
  ChakraProvider,
  Icon,
} from "@chakra-ui/react";
import { BiCopy } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FcPlus } from "react-icons/fc";

const [metamaskAccount, setMetamaskAccount] = useState('');
const [binanceAccount, setBinanceAccount] = useState('');
const [coinbaseAccount, setCoinbaseAccount] = useState('');

function About(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("about");
  });

  return (
    <>
      <Gradient />
      <Navbar />
      <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
          <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center">
              <div className="all-cap">
                Hey $USERNAME$ <Image src={wave} width={30} height={30} />
              </div>
            </div>
            <div className="all-cap">
              Welcome To MeTag <Image src={rocket} width={30} height={30} />
            </div>

            <div className="px-4 mb-7 mt-12 h-px w-full">
              <Image src={Line} layout="responsive" alt="image" />
            </div>
            <form>
              <div className="flex flex-col justify-center items-center">
                <div className="all-cap flex flex-row justify-center items-center space-x-1">
                  Crypto Accounts&nbsp;<span>

                  <Image src={bag} width={30} height={30} />
                  </span><FcPlus/>
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
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <BiCopy />
                      &nbsp;Copy
                    </button>

                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar/>&nbsp;Pay
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
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="K3Yz..."
                      className="input-form-2 mr-6"
                      required
                    />
                    <button
                      type="button"
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <BiCopy />
                      &nbsp;Copy
                    </button>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar/>&nbsp;Pay
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="mt-4 mb-11">
                  <label className="form-text" htmlFor="firstName">
                    WalletConnect
                  </label>
                  <div className="flex flex-row">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="0x4d..."
                      className="input-form-2 mr-6"
                      required
                    />
                    <button
                      type="button"
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <BiCopy />
                      &nbsp;Copy
                    </button>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar/>&nbsp;Pay
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="all-cap">
                  Pay - Later&nbsp;
                  <Image src={alarm} width={30} height={30} />
                </div>
                <div className="mt-4 mb-11">
                  <label className="form-text" htmlFor="firstName"></label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2 mr-6"
                      required
                    />
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar/>&nbsp;Pay
                    </button>
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      Hours
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="all-cap flex flex-row justify-center items-center space-x-1">
                  Social Accounts&nbsp;
                 <span>
                 <Image src={chain} width={30} height={30} /></span><FcPlus/> 
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
                      required
                    />
                    <button
                      type="button"
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <BiCopy />
                      &nbsp;Copy
                    </button>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <LinkIcon />
                      &nbsp;Connect
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
                      required
                    />
                    <button
                      type="button"
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <BiCopy />
                      &nbsp;Copy
                    </button>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <LinkIcon />
                      &nbsp;Connect
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
                      required
                    />
                    <button
                      type="button"
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <BiCopy />
                      &nbsp;Copy
                    </button>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <LinkIcon />
                      &nbsp;Connect
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="all-cap flex flex-row justify-center items-center space-x-1">
                  ENS&nbsp;
                  <span>
                  <Image src={victory} width={30} height={30} />
                  </span>
                  <FcPlus/>
                </div>
                <div className="mt-4 mb-32">
                  <label className="form-text" htmlFor="firstName"></label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2 mr-6"
                      required
                    />
                    <button
                      type="button"
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <BiCopy />
                      &nbsp;Copy
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="px-4 mb-28 h-px w-full">
                  <Image src={Line} layout="responsive" alt="image" />
                </div>
                <div className="all-cap mb-11">
                  Get Your MeTag At
                  <Image src={shop} width={30} height={30} />
                </div>
                <button
                  type="button"
                  className="w-[71.17px] h-[38.96px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
                >
                  Buy&nbsp; <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
