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
import { useEffect } from "react";
import Gradient from "../components/Gradient";

function About(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("about");
  });

  function pullUpState() {
    console.log('pull it up');
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
                      Pay
                    </button>
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
                      className="input-form-2"
                      required
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
                <div className="mt-4">0
                  <label className="form-text" htmlFor="firstName">
                    Twitter
                  </label>
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
