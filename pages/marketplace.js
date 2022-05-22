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
import { SearchIcon} from "@chakra-ui/icons";
import { DiReact } from "react-icons/di";
import basic from "../public/img/Basic.png";
import standard from "../public/img/Standard.png";
import premium from "../public/img/Premium.png";

function About(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("about");
  });

  return (
    <div className=" bg-[#040D21]">
      <Navbar />
      <div className="flex flex-row justify-center items-center">
        <div className="all-cap">Shop The Future Of Tag&apos;s</div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4">
        <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
          <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
            <div className="flex flex-col justify-center items-center">
              <div className="all-cap">MeTag Basics</div>
              <Image src={basic} alt="image" />
              <div className="px-4 mb-7 mt-12 h-px w-full">
                <Image src={Line} layout="responsive" alt="image" />
              </div>
              <button
                type="button"
                className="w-[124px] h-[44px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
              >
                Buy&nbsp; <DiReact />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
          <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
            <div className="flex flex-col justify-center items-center">
              <div className="all-cap">MeTag Standard</div>
              <Image src={standard} alt="image" />
              <div className="px-4 mb-7 mt-12 h-px w-full">
                <Image src={Line} layout="responsive" alt="image" />
              </div>
              <button
                type="button"
                className="w-[124px] h-[44px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
              >
                Buy&nbsp; <DiReact />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center  mt-[69px] mb-[273px]">
          <div className="box-border border-solid border-gradient-1 border-2 rounded-[20px] px-10 pt-12">
            <div className="flex flex-col justify-center items-center py-9">
              <div className="all-cap -mt-10">MeTag Premium</div>
              <Image src={premium} alt="image" />
              <div className="px-4 -mb-16 mt-12 h-px w-full">
                <Image src={Line} layout="responsive" alt="image" />
              </div>
              <button
                type="button"
                className="w-[124px] h-[44px] bg-[#77D672] sub-heading-2 py-1 px-1 rounded-[6px]  mr-[18px] mb-20"
              >
                Buy&nbsp; <DiReact />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
