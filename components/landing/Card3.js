import Image from "next/image";
import { motion } from "framer-motion";
// import { useScroll } from "../useScroll";
import handshake from "../../public/img/emoji/handshake.svg";
import notes from "../../public/img/landing/notes.svg";
import { videoAnimation, reasonsAnimation } from "../Animations";


export default function Card3() {
  // const [element,  ] = useScroll();
  return (
    <div
      // ref={element}
      className="relative flex flex-col items-center justify-center mt-24 mb-36
                      laptop:flex-row"
    >
      <div className="-ml-28 laptop:mr-10 right-12">
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          variants={videoAnimation}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <Image src={notes} alt="image" />
        </motion.div>
      </div>
      <motion.div
        variants={reasonsAnimation}
        transition={{ type: "tween", duration: 0.5 }}
        className="laptop:w-1/3"
      >
        <h2>
          make <span className="text-blue-300">partners</span> & boost
        </h2>
        <h2 className="flex flex-row mb-5 font-inter font-bold laptop:text-[28px] text-[20px] capitalize">
          your work efficiency
          <p className="w-8 h-8 mt-2">
            <Image src={handshake} alt="image" />
          </p>
        </h2>
        <p className="small-text">
          A <span className="text-yellow-100">collaborative</span> environment
          is what we&apos;;re made up of, as we believe in providing equal
          opportunities to everyone.
        </p>
        <p className="small-text">
          You belong in a huge{" "}
          <span className="text-purple-200">community</span> of like minded
          people with the same end goals — and with us, that’s exactly where you
          will be.
        </p>
      </motion.div>
    </div>
  );
}

