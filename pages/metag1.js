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
import { useEffect, useState } from "react";
import Gradient from "../components/Gradient";
import { ethers } from 'ethers';
import { BiCopy } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import {
  Switch,
  FormControl,
  FormLabel,
  ChakraProvider,
  Icon,
  Select,
} from "@chakra-ui/react";
import {
  SearchIcon,
  LinkIcon,
  CheckIcon,
  SettingsIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import axios from "axios";


function About(props) {

  const [metamaskAccount, setMetamaskAccount] = useState("");
  const [binanceAccount, setBinanceAccount] = useState("");
  const [coinbaseAccount, setCoinbaseAccount] = useState("");
  const [apiResponse, setApiResponse] = useState({});
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [instagram, setInstagram] = useState("");
  const [library, setLibrary] = useState("");

  useEffect(() => {
    document.querySelector("body").classList.add("about");
    const fetchData = async () => {
      const response = await axios.get('https://api-meta-tag-2.herokuapp.com/api/member/get/1');
      setMetamaskAccount(response.data.unique_id.metamask)
      setBinanceAccount(response.data.unique_id.binance)
      setCoinbaseAccount(response.data.unique_id.coinbase)
      setTwitter(response.data.unique_id.socials.twitter)
      setDiscord(response.data.unique_id.socials.discord)
      setInstagram(response.data.unique_id.socials.instagram)
    }
    fetchData();
  }, [metamaskAccount]);

  const pay = async (event) => {
    let accountToUse;
    console.log('event.target.name', event.target.name);
    if (event.target.name == 'metamask') {
      accountToUse = metamaskAccount;
    }
    else if (event.target.name == 'binance') {
      accountToUse = binanceAccount;
    }
    else if (event.target.name == 'coinbase') {
      accountToUse = coinbaseAccount;
    }
    console.log('library', library);
    const signer = await library.getSigner();
    console.log('accountToUse', accountToUse);
    signer.sendTransaction({
      to: accountToUse,
      value: ethers.utils.parseEther(".00001")
    });
}

  async function pullUpState(account, library) {
    const wallet = library.connection.url;
    console.log('wallet', wallet);
    console.log('account', account)
    console.log('library', library);
    setLibrary(library);
  }


  return (
    <div className=' bg-[#040D21]'>
      <Gradient />
      <Navbar pullUpState={pullUpState} />
      <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="all-cap">
                Hey
                <Image src={wave} width={35} height={35} />
              </div>
            </div>
            <div className="all-cap">This Account Is Linked With</div>
            <div className="all-cap mt-3">$USERNAME$</div>
            <div className="px-4 mb-7 mt-12 h-px w-full">
              <Image src={Line} layout="responsive" alt="image" />
            </div>
            <form>
              <div className="flex flex-col justify-center items-center">
                <div className="all-cap flex flex-row justify-center items-center space-x-1">
                  Crypto Accounts&nbsp;
                  <span>
                    <Image src={bag} width={30} height={30} />
                  </span>
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
                      onClick={pay}
                      name="metamask"
                    >
                      <HiOutlineCurrencyDollar />
                      &nbsp;Pay
                    </button>
                   
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
                      value={coinbaseAccount}
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
                      name="coinbase"
                      onClick={pay}
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar />
                      &nbsp;Pay
                    </button>
                  
                  </div>
                </div>
                <div className="mt-4 mb-11">
                  <label className="form-text" htmlFor="firstName">
                    Binance
                  </label>
                  <div className="flex flex-row">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="0x4d..."
                      className="input-form-2 mr-6"
                      required
                      value={binanceAccount}
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
                      onClick={pay}
                      name="binance"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar />
                      &nbsp;Pay
                    </button>
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
                      placeholder="3KYz..."
                      required
                    />

                    <button
                      type="button"
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 behind py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <Select placeholder="Hours" variant="unstyled">
                        <option value="option1"></option>
                        <option value="option2"></option>
                        <option value="option3"></option>
                      </Select>
                    </button>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar />
                      &nbsp;Pay
                    </button>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2 mr-6"
                      placeholder="Amount"
                      required
                    />

                    <button
                      type="button"
                      className="w-[242px] h-[44px] bg-[#FF8D4D] sub-heading-2 behind py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <Select placeholder="Select Token" variant="unstyled">
                        <option value="option1"></option>
                        <option value="option2"></option>
                        <option value="option3"></option>
                      </Select>
                    </button>
                  </div>
                </div>
                <div className="all-cap flex flex-row justify-center items-center space-x-1">
                  Social Accounts&nbsp;
                  <span>
                    <Image src={chain} width={30} height={30} />
                  </span>
                </div>
                <div className="all-cap">Social Accounts<Image src={chain} width={35} height={35}/></div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    Twitter
                  </label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="twitter"
                      type="text"
                      className="input-form-2 mr-6"
                      required
                      value={twitter}
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
                  </div>
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    Discord
                  </label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="discord"
                      type="text"
                      className="input-form-2 mr-6"
                      required
                      value={discord}
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
                  </div>
                </div>
                <div className="mt-4 mb-16">
                  <label className="form-text" htmlFor="firstName">
                    Instagram
                  </label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="ig"
                      type="text"
                      className="input-form-2 mr-6"
                      required
                      value={instagram}
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
                  </div>
                </div>
                <div className="all-cap flex flex-row justify-center items-center space-x-1">
                  ENS&nbsp;
                  <span>
                    <Image src={victory} width={30} height={30} />
                  </span>
                </div>
                <div className="mt-4 mb-32">
                  <label className="form-text" htmlFor="firstName"></label>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2 mr-6"
                      placeholder="vitalik.eth"
                      required
                    />
                    <button
                      type="button"
                      className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <BiCopy />
                      &nbsp;Copy
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <button
                    type="button"
                    className="w-[124px] h-[44px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
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
                  <Image src={shop} width={30} height={30} />
                </div>
                <button
                  type="button"
                  className="w-[124px] h-[44px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
                >
                  Buy&nbsp; <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default About;
