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

function About(props) {

  const [binanceAccount, setBinanceAccount] = useState('');
  const [coinbaseAccount, setCoinBaseAccount] = useState('');
  const [metaMaskAccount, setMetaMaskAccount] = useState('');
  const [library, setLibrary] = useState('');
  const [twitter, setTwitter] = useState('');
  const [discord, setDiscord] = useState('');
  const [ig, setIg] = useState('');

  useEffect(() => {
    document.querySelector("body").classList.add("about");
  });

  async function pullUpState(account, library) {
    const wallet = library.connection.url;
    console.log('wallet', wallet);
    setLibrary(library);
    if (wallet == 'metamask') {
      setMetaMaskAccount(account);
    }
    if (wallet == 'eip-1193:') {
      setBinanceAccount(account);
      console.log(library.connection.url);
      console.log('binanceAccount', binanceAccount);
    }
    if (wallet.includes('coinbase')) {
      console.log('working***');
      setCoinBaseAccount(account);
    }
  }

  const pay = async (event) => {
    let accountToUse;
    console.log('event.tareget.name', event.target.name);
    if (event.target.name == 'metamask') {
      accountToUse = metaMaskAccount;
    }
    else if (event.target.name == 'binance') {
      accountToUse = binanceAccount;
    }
    else if (event.target.name == 'coinbase') {

    }
    const signer = await library.getSigner();
    console.log('accountToUse', accountToUse);
    signer.sendTransaction({
      to: accountToUse,
      value: ethers.utils.parseEther(".00001")
    });
  }

  const handleSocialMedia = (event) => {
    console.log('event.target.name', event.target.name);
    console.log('hey is this working?');
  }

  return (
    <>
      <Gradient />
      <Navbar pullUpState={pullUpState}/>
      <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
        <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
          <div className="flex flex-col">
            <div className="flex flex-row">
            <div className="all-cap">Hey<Image src={wave} width={35} height={35} /></div></div>
            <div className="all-cap">This Account Is Linked With</div>
            <div className="all-cap mt-3">$USERNAME$</div>
            <div className="px-4 mb-7 mt-12 h-px w-full">
              <Image src={Line} layout="responsive" alt="image" />
            </div>
            <form >
              <div className="flex flex-col justify-center items-center">
                <div className="all-cap">Crypto Accounts<Image src={bag} width={35} height={35}/></div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    MetaMask
                  </label>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder="0x78..."
                      className="input-form-2"
                      value={metaMaskAccount}
                    />
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Copy
                    </button>
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                      onClick={pay}
                      name="metamask"
                    >
                      Pay
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    CoinBase
                  </label>
                  <div className="flex flex-row">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="K3Yz..."
                      className="input-form-2"
                      required
                      value={coinbaseAccount}
                    />
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Copy
                    </button>
                    <button
                      type="button"
                      name="coinbase"
                      onClick={pay}
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Pay
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
                      className="input-form-2"
                      required
                      value={binanceAccount}
                    />
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Copy
                    </button>
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                      onClick={pay}
                      name="binance"
                    >
                      Pay
                    </button>
                  </div>
                </div>
                <div className="all-cap">Pay - Later<Image src={alarm} width={35} height={35}/></div>
                <div className="mt-4 mb-11">
                  <label className="form-text" htmlFor="firstName"></label>
                  <div className="flex flex-row">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2"
                      required
                    />
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Pay
                    </button>
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Hours
                    </button>
                  </div>
                </div>
                <div className="all-cap">Social Accounts<Image src={chain} width={35} height={35}/></div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    Twitter
                  </label>
                  <div className="flex flex-row">
                    <input
                      id="firstName"
                      name="twitter"
                      type="text"
                      className="input-form-2"
                      placeholder="enter your twitter username"
                      value={twitter}
                      onChange={e => setTwitter(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Pay
                    </button>
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                      onClick={handleSocialMedia}
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="firstName">
                    Discord
                  </label>
                  <div className="flex flex-row">
                    <input
                      id="firstName"
                      name="discord"
                      type="text"
                      className="input-form-2"
                      required
                      placeholder="enter your discord username"
                      value={discord}
                      onChange={e => setDiscord(e.target.value)}
                    />
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Copy
                    </button>
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="mt-4 mb-16">
                  <label className="form-text" htmlFor="firstName">
                    Instagram
                  </label>
                  <div className="flex flex-row">
                    <input
                      id="firstName"
                      name="ig"
                      type="text"
                      className="input-form-2"
                      placeholder="enter your instagram username"
                      requiredx
                      value={ig}
                      onChange={e => setIg(e.target.value)}
                    />
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Copy
                    </button>
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="all-cap">ENS<Image src={victory} width={35} height={35}/></div>
                <div className="mt-4 mb-32">
                  <label className="form-text" htmlFor="firstName"></label>
                  <div className="flex flex-row">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input-form-2"
                      required
                    />
                    <button
                      type="button"
                      className="w-[71.17px] h-[38.96px] bg-[#FF8D4D] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px]"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="px-4 mb-28 h-px w-full">
                  <Image src={Line} layout="responsive" alt="image" />
                </div>
                <div className="all-cap mb-11">Get Your MeTag At<Image src={shop} width={35} height={35}/></div>
                <button
                  type="button"
                  className="w-[71.17px] h-[38.96px] bg-[#77D672] sub-heading-2 py-1 px-4 rounded-[6px]  mr-[18px] mb-20"
                >
                  Buy <Image src={design} width={45} height={45}/>
                  
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
