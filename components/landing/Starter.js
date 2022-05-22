// import { useScroll } from "../components/useScroll";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useScroll } from "../useScroll";
import communityMsg from "../../public/img/landing/community-msg.svg";
import rocket from "../../public/img/emoji/rocket.png";
import party from "../../public/img/emoji/party-popper.png";
import { headerAnimation, imageAnimation } from "../Animations";

export default function Starter() {
  // const [element,  ] = useScroll();
  return (
    <div
      // ref={element}
      className="relative flex flex-col pt-24
                      laptop:grid laptop:grid-cols-2"
    >
      <div
        className="relative flex flex-col mb-6 justify-center
                        laptop:order-2 laptop:mb-0"
      >
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          variants={headerAnimation}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Image src={communityMsg} alt="image" />
        </motion.div>
      </div>

      <div
        className="relative flex flex-col items-center
                        laptop:block laptop:order-1"
      >
        <div
          className="relative flex flex-col items-center
                          laptop:items-start "
        >
          <h5 className="font-cabin font-bold laptop:text-[20px] text-[18px] capitalize">
            Sharing Public Address
          </h5>
          <h4 className="mb-1 font-inter font-bold laptop:text-[24px] text-[14px] capitalize">
            Not An Hassle Anymore
          </h4>
          <h1 className="mb-1 font-inter font-bold text-gradient-1 block laptop:text-[34px] text-[20px] capitalize">
            Building The Future Of Tags
          </h1>
          <h4 className="relative flex flex-row mb-3 font-inter font-bold laptop:text-[24px] text-[14px] capitalize">
            Join Us In The Journey 🚀
            <p className="h-8 w-8 ml-2">
              <Image src={rocket} alt="image" />
            </p>
          </h4>
        </div>
        <motion.button whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
          <button
            className="primary flex flex-row justify-center items-center rounded-xl
    font-inter font-bold capitalize text-white tetiary-1 px-[30px] border-gradient-1  text-[14px] h-[45px] laptop:text-[16px] laptop:h-[45px] bg-transparent"
          >
            Join community&nbsp;
            <Image width={20} height={20} src={party} alt="image" />
          </button>
        </motion.button>
      </div>
    </div>
  );
}
