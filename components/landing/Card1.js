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
        <h2 className="mb-6 laptop:mb-8">
          turn the <span className="text-yellow-300">career</span> of your{" "}
          <span className="text-orange-300">dreams</span> into reality
        </h2>
        <InfoBox2
          icon={exploration}
          title="Exploration:"
          emoji={earth}
          desc="Get a clear idea of where you are headed in your career with us. Look at this as your opportunity to open yourself up to possibilities."
        />
        <InfoBox2
          icon={research}
          title="Research:"
          emoji={books}
          desc="Once you start to get a sense of what you want, begin to research the state of your current reality and approach to achieving your ideal next career move all with just !"
        />
        <InfoBox2
          icon={action}
          title="Action:"
          emoji={aim}
          desc="Now is the time to take action with, with diverse opportunities in store for you. "
        />
      </motion.div>
    </div>
  );
}
