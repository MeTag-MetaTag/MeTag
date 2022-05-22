import axios from 'axios';
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
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
} from "@chakra-ui/react";
import { BiCopy } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FcPlus } from "react-icons/fc";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

function About(props) {
  // const [flowrate, setflowRate] = useState("");
  //const [reciever, setreciever] = useState("");
  const [metamaskAccount, setMetamaskAccount] = useState("");
  const [binanceAccount, setBinanceAccount] = useState("");
  const [coinbaseAccount, setCoinbaseAccount] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [instagram, setInstagram] = useState("");
  const [library, setLibrary] = useState("");

  const [ens, setEns] = useState("");
  const [supertoken, setSupertoken] = useState("");
  async function createNewFlow(recipient, flowRate) {
    const SuperTokenx = "supper token address probably stored in a state";
    const sf = await Framework.create({
      networkName: "kovan",
      provider: "ethersprovider",
    });
    try {
      const createFlowOperation = sf.cfaV1.createFlow({
        flowRate: flowRate,
        receiver: recipient,
        superToken: supertoken,
        // userData?: string
      });

      console.log("Creating your stream...");

      const result = await createFlowOperation.exec("ethers signer");
      console.log(result);

      console.log(
        `Congrats - you've just created a money stream!
      View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
      Network: Kovan
      Super Token: ${supertoken}
      Sender: ${"signer address"}
      Receiver: ${recipient},
      FlowRate: ${flowRate}
      `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }
  async function updateExistingFlow(recipient, flowRate) {
    const sf = await Framework.create({
      networkName: "kovan",
      provider: "ethers provider",
    });

    try {
      const updateFlowOperation = sf.cfaV1.updateFlow({
        flowRate: flowRate,
        receiver: recipient,
        superToken: supertoken,
        // userData?: string
      });

      console.log("Updating your stream...");

      const result = await updateFlowOperation.exec("ethers signer");
      console.log(result);

      console.log(
        `Congrats - you've just updated a money stream!
      View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
      Network: Kovan
      Super Token: DAIx
      Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
      Receiver: ${recipient},
      New FlowRate: ${flowRate}
      `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }
  async function deleteFlow(recipient) {
    const sf = await Framework.create({
      networkName: "kovan",
      provider: "ethers provider",
    });

    const signer = "ethers signer";

    try {
      const deleteFlowOperation = sf.cfaV1.deleteFlow({
        sender: "web3 account connected",
        receiver: recipient,
        superToken: supertoken,
        // userData?: string
      });

      console.log("Deleting your stream...");

      await deleteFlowOperation.exec(signer);

      console.log(
        `Congrats - you've just deleted your money stream!
         Network: Kovan
         Super Token: DAIx
         Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
         Receiver: ${recipient}
      `
      );
    } catch (error) {
      console.error(error);
    }
  }

  function calculateFlowRate(amount) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amount) === "number") {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = ethers.BigNumber.from(amount);
      const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
      const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }
  useEffect(() => {
    document.querySelector("body").classList.add("about");
  });

  async function handleClick() {
    try {
      let result = await axios.get('https://api-meta-tag-2.herokuapp.com/api/member/get/1');
      console.log('result', result.data);
    }
    catch (error) {
      console.error(error);
    }
  }
  
  const handleSave = async (event) => {
    const apiObj = {
        "username" : "userame",
        "email" : "email",
        "metamask_id" : metamaskAccount,
        "coinbase_id" : coinbaseAccount,
        "binance_id" : binanceAccount,
        "twitter" : twitter,
        "instagram" : instagram,
        "discord" : discord
    }
   const response = await axios.post(
     'https://api-meta-tag-2.herokuapp.com/api/member/create ', {
      "username" : "userame",
      "email" : "email",
      "metamask_id" : metamaskAccount,
      "coinbase_id" : coinbaseAccount,
      "binance_id" : binanceAccount,
      "twitter" : twitter,
      "instagram" : instagram,
      "discord" : discord
    }
  );
    console.log('apiObj', apiObj);
    console.log('response', response);
  }

  async function pullUpState(account, library) {
    const wallet = library.connection.url;
    setLibrary(library);
    if (wallet == 'metamask') {
      setMetamaskAccount(account);
    }
    if (wallet == 'eip-1193:') {
      setBinanceAccount(account);
    }

    else if (library.provider == 'walletlink') {
      setCoinbaseAccount(account);
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
                      value={metamaskAccount}
                      onChange={(e) => setMetamaskAccount(e.target.value)}
                    />
                    <CopyToClipboard text={metamaskAccount}>
                      <button
                        type="button"
                        className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      >
                        <BiCopy />
                        &nbsp;Copy
                      </button>
                    </CopyToClipboard>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar />
                      &nbsp;Pay
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
                      value={coinbaseAccount}
                      onChange={(e) => setCoinbaseAccount(e.target.value)}
                    />
                    <CopyToClipboard text={coinbaseAccount}>
                      <button
                        type="button"
                        className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      >
                        <BiCopy />
                        &nbsp;Copy
                      </button>
                    </CopyToClipboard>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar />
                      &nbsp;Pay
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
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="0x4d..."
                      className="input-form-2 mr-6"
                      value={binanceAccount}
                      onChange={(e) => setBinanceAccount(e.target.value)}
                    />
                    <CopyToClipboard text={binanceAccount}>
                      <button
                        type="button"
                        className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      >
                        <BiCopy />
                        &nbsp;Copy
                      </button>
                    </CopyToClipboard>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar />
                      &nbsp;Pay
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="all-cap">
                  Pay - Later&nbsp;
                  <Image src={alarm} width={30} height={30} alt="imageicon" />
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
                      <Select
                        color="black"
                        placeholder="Hours"
                        variant="unstyled"
                      >
                        <option value="option1">1 Hour</option>
                        <option value="option2">2 Hour</option>
                        <option value="option3">3 Hour</option>
                      </Select>
                    </button>
                    <button
                      type="button"
                      className="w-[124px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                    >
                      <HiOutlineCurrencyDollar />
                      &nbsp;Pay
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
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
                      <Select
                        color="black"
                        placeholder="Select Token"
                        variant="unstyled"
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </button>
                    <Switch colorScheme="green" id="email-alerts" />
                  </div>
                </div>
                <div className="all-cap flex flex-row justify-center items-center space-x-1">
                  Social Accounts&nbsp;
                  <span>
                    <Image src={chain} width={30} height={30} alt="imageicon" />
                  </span>
                  <FcPlus />
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
                    <CopyToClipboard text={twitter}>
                      <button
                        type="button"
                        className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      >
                        <BiCopy />
                        &nbsp;Copy
                      </button>
                    </CopyToClipboard>
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
                      placeholder="enter your discord username"
                      value={discord}
                      onChange={(e) => setDiscord(e.target.value)}
                    />
                    <CopyToClipboard text={discord}>
                      <button
                        type="button"
                        className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      >
                        <BiCopy />
                        &nbsp;Copy
                      </button>
                    </CopyToClipboard>
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
                      placeholder="enter your instagram username"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                    <CopyToClipboard text={instagram}>
                      <button
                        type="button"
                        className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      >
                        <BiCopy />
                        &nbsp;Copy
                      </button>
                    </CopyToClipboard>
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
                    <Image
                      src={victory}
                      width={30}
                      height={30}
                      alt="imageicon"
                    />
                  </span>
                  <FcPlus />
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
                      value={ens}
                      onChange={(e) => setEns(e.target.value)}
                    />
                    <CopyToClipboard text={ens}>
                      <button
                        type="button"
                        className="w-[108px] h-[44px] bg-[#FF8D4D] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px]"
                      >
                        <BiCopy />
                        &nbsp;Copy
                      </button>
                    </CopyToClipboard>
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

