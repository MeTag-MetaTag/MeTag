import Image from "next/image";
import { motion } from "framer-motion";
// import { useScroll } from "../useScroll";
import InfoBox2 from "../../components/landing/infoBox2";
import exploration from "../../public/img/landing/exploration.svg";
import research from "../../public/img/landing/research.svg";
import action from "../../public/img/landing/action.svg";
import hologram from "../../public/img/landing/hologram.svg";
import earth from "../../public/img/emoji/earth.svg";
import books from "../../public/img/emoji/books.svg";
import aim from "../../public/img/emoji/aim.svg";
import {
  videoAnimation,
  reasonsAnimation,
} from "../Animations";

export default function Card1() {
  // const [element,  ] = useScroll();
  return (
    <div
      // ref={element}
      className="relative flex flex-col items-center justify-center mt-56
                      laptop:flex-row"
    >
      <div className="laptop:mr-5">
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          variants={videoAnimation}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <Image src={hologram} alt="image" />
        </motion.div>
      </div>
      <motion.div
        variants={reasonsAnimation}
        transition={{ type: "tween", duration: 0.5 }}
        className="laptop:w-1/2"
      >
        <h2 className="mb-6 laptop:mb-8 font-inter font-bold laptop:text-[28px] text-[20px] capitalize">
          turn <span className="text-yellow-300">Sharing</span> into a&nbsp;
          <span className="text-orange-300">Fun game</span>
        </h2>
        <InfoBox2
          icon={exploration}
          title="Searching:"
          emoji={earth}
          desc="Having all the public keys in a single place will help MeTag users save time searching for different keys alongside."
        />
        <InfoBox2
          icon={research}
          title="Control:"
          emoji={books}
          desc="MeTag serves you with total control of your data and privacy, you can change the visibility of your address anytime you want and can edit them anytime you need."
        />
        <InfoBox2
          icon={action}
          title="Action:"
          emoji={aim}
          desc="Now is the time to take action with CodeAsia, with diverse opportunities in store for you. "
        />
      </motion.div>
    </div>
  );
}
